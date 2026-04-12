// app/api/admin/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getDynamicProducts } from "@/lib/products-store";
import type { Product } from "@/data/products";

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

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const products = await getDynamicProducts();
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const token = await getBlobToken();
  if (!token) return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN no configurado" }, { status: 500 });

  const newProduct: Product = await req.json();

  // Validación básica
  if (!newProduct.id || !newProduct.nombre || !newProduct.precio) {
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
    await put(PRODUCTS_BLOB_PATH, JSON.stringify(updated, null, 2), {
      access: "public",
      contentType: "application/json",
      token,
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60,
    });
  } catch (error) {
    console.error("[admin/products] Error guardando catálogo dinámico en Blob.", error);
    return NextResponse.json({ error: "No se pudo guardar en Blob" }, { status: 500 });
  }

  revalidateCatalog(newProduct.id);

  // Guardar la URL en env (se necesita hacer esto manualmente la primera vez)
  return NextResponse.json({ ok: true, total: updated.length });
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
    await put(PRODUCTS_BLOB_PATH, JSON.stringify(updated, null, 2), {
      access: "public",
      contentType: "application/json",
      token,
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60,
    });
  } catch (error) {
    console.error("[admin/products] Error eliminando producto dinámico en Blob.", error);
    return NextResponse.json({ error: "No se pudo actualizar Blob" }, { status: 500 });
  }

  revalidateCatalog(id);

  return NextResponse.json({ ok: true, total: updated.length });
}
