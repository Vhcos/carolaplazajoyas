// app/api/admin/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllProducts, getDynamicProducts } from "@/lib/products-store";
import { PRODUCTS as STATIC_PRODUCTS, type Product } from "@/data/products";

const PRODUCTS_BLOB_PATH = "data/products.json";

async function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN ?? "";
}

function normalizeId(id: string): string {
  return id.trim().toLowerCase();
}

function revalidateCatalog(productId?: string) {
  revalidatePath("/");
  revalidatePath("/producto");
  revalidatePath("/admin");
  if (productId) {
    revalidatePath(`/producto/${productId}`);
  }
}

async function saveDynamicProducts(products: Product[], token: string) {
  await put(PRODUCTS_BLOB_PATH, JSON.stringify(products, null, 2), {
    access: "public",
    contentType: "application/json",
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const [products, dynamicProducts] = await Promise.all([getAllProducts(), getDynamicProducts()]);
  const dynamicIds = new Set(dynamicProducts.map((product) => normalizeId(product.id)));
  const staticIds = new Set(STATIC_PRODUCTS.map((product) => normalizeId(product.id)));
  return NextResponse.json(products.map((product) => ({
    ...product,
    isDynamic: dynamicIds.has(normalizeId(product.id)),
    isBaseProduct: staticIds.has(normalizeId(product.id)),
  })));
}

export async function POST(req: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const token = await getBlobToken();
  if (!token) return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN no configurado" }, { status: 500 });

  const newProduct: Product = await req.json();
  delete (newProduct as Product & { isDynamic?: boolean; isBaseProduct?: boolean }).isDynamic;
  delete (newProduct as Product & { isDynamic?: boolean; isBaseProduct?: boolean }).isBaseProduct;

  // Validación básica
  if (!newProduct.id || !newProduct.nombre || !Number.isFinite(newProduct.precio) || newProduct.precio < 1) {
    return NextResponse.json({ error: "Faltan campos requeridos: id, nombre, precio" }, { status: 400 });
  }

  const current = await getDynamicProducts();

  // Evitar duplicados de ID
  const normalizedNewId = normalizeId(newProduct.id);
  const idx = current.findIndex((p) => normalizeId(p.id) === normalizedNewId);
  let updated: Product[];
  if (idx >= 0) {
    updated = [...current];
    updated[idx] = { ...newProduct, id: current[idx].id };
  } else {
    updated = [newProduct, ...current];
  }

  try {
    await saveDynamicProducts(updated, token);
  } catch (error) {
    console.error("[admin/products] Error guardando catálogo dinámico en Blob.", error);
    return NextResponse.json({ error: "No se pudo guardar en Blob" }, { status: 500 });
  }

  revalidateCatalog(newProduct.id);

  // Guardar la URL en env (se necesita hacer esto manualmente la primera vez)
  return NextResponse.json({ ok: true, total: updated.length });
}

export async function PATCH(req: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const token = await getBlobToken();
  if (!token) return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN no configurado" }, { status: 500 });

  const body: unknown = await req.json();
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { id, precio, vendido, oculto } = body as Record<string, unknown>;
  const normalizedId = typeof id === "string" ? normalizeId(id) : "";
  if (!normalizedId || typeof precio !== "number" || !Number.isInteger(precio) || precio < 1 || typeof vendido !== "boolean" || (oculto !== undefined && typeof oculto !== "boolean")) {
    return NextResponse.json({ error: "Precio o disponibilidad inválidos" }, { status: 400 });
  }

  const [catalog, current] = await Promise.all([getAllProducts(), getDynamicProducts()]);
  const catalogProduct = catalog.find((product) => normalizeId(product.id) === normalizedId);
  if (!catalogProduct) return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });

  const index = current.findIndex((product) => normalizeId(product.id) === normalizedId);
  const updatedProduct: Product = {
    ...catalogProduct,
    precio,
    vendido,
    ...(typeof oculto === "boolean" ? { oculto } : {}),
  };
  const updated = [...current];
  if (index >= 0) updated[index] = updatedProduct;
  else updated.unshift(updatedProduct);

  try {
    await saveDynamicProducts(updated, token);
  } catch (error) {
    console.error("[admin/products] Error actualizando producto en Blob.", error);
    return NextResponse.json({ error: "No se pudo guardar en Blob" }, { status: 500 });
  }

  revalidateCatalog(catalogProduct.id);
  return NextResponse.json({ ok: true, product: updatedProduct });
}

export async function DELETE(req: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const token = await getBlobToken();
  if (!token) return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN no configurado" }, { status: 500 });

  const { id } = await req.json();
  const normalizedDeleteId = typeof id === "string" ? normalizeId(id) : "";
  if (!normalizedDeleteId) {
    return NextResponse.json({ error: "id inválido" }, { status: 400 });
  }

  const current = await getDynamicProducts();
  const updated = current.filter((p) => normalizeId(p.id) !== normalizedDeleteId);

  try {
    await saveDynamicProducts(updated, token);
  } catch (error) {
    console.error("[admin/products] Error eliminando producto dinámico en Blob.", error);
    return NextResponse.json({ error: "No se pudo actualizar Blob" }, { status: 500 });
  }

  revalidateCatalog(id);

  return NextResponse.json({ ok: true, total: updated.length });
}
