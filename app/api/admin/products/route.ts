// app/api/admin/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put, head } from "@vercel/blob";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getDynamicProducts } from "@/lib/products-store";
import type { Product } from "@/data/products";

const PRODUCTS_BLOB_PATH = "data/products.json";

async function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN ?? "";
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
  const idx = current.findIndex((p) => p.id === newProduct.id);
  let updated: Product[];
  if (idx >= 0) {
    updated = [...current];
    updated[idx] = newProduct;
  } else {
    updated = [newProduct, ...current];
  }

  await put(PRODUCTS_BLOB_PATH, JSON.stringify(updated, null, 2), {
    access: "public",
    contentType: "application/json",
    token,
    addRandomSuffix: false,
  });

  // Guardar la URL en env (se necesita hacer esto manualmente la primera vez)
  return NextResponse.json({ ok: true, total: updated.length });
}

export async function DELETE(req: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const token = await getBlobToken();
  if (!token) return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN no configurado" }, { status: 500 });

  const { id } = await req.json();
  const current = await getDynamicProducts();
  const updated = current.filter((p) => p.id !== id);

  await put(PRODUCTS_BLOB_PATH, JSON.stringify(updated, null, 2), {
    access: "public",
    contentType: "application/json",
    token,
    addRandomSuffix: false,
  });

  return NextResponse.json({ ok: true, total: updated.length });
}
