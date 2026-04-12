// lib/products-store.ts
// Fusiona productos estáticos (data/products.ts) con productos dinámicos (Vercel Blob)

import { PRODUCTS as STATIC_PRODUCTS, type Product } from "@/data/products";

const BLOB_PRODUCTS_URL =
  process.env.BLOB_PRODUCTS_URL ??
  "https://9sxkvs205ipfyljr.public.blob.vercel-storage.com/data/products.json";

export async function getAllProducts(): Promise<Product[]> {
  if (!BLOB_PRODUCTS_URL) return STATIC_PRODUCTS;

  try {
    const res = await fetch(BLOB_PRODUCTS_URL, { next: { revalidate: 60 } });
    if (!res.ok) return STATIC_PRODUCTS;
    const dynamic: Product[] = await res.json();
    // Los dinámicos van primero (aparecen antes en el catálogo)
    return [...dynamic, ...STATIC_PRODUCTS];
  } catch {
    return STATIC_PRODUCTS;
  }
}

export async function getDynamicProducts(): Promise<Product[]> {
  if (!BLOB_PRODUCTS_URL) return [];
  try {
    const res = await fetch(BLOB_PRODUCTS_URL, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}
