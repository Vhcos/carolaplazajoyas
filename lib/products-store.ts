// lib/products-store.ts
// Fusiona productos estáticos (data/products.ts) con productos dinámicos (Vercel Blob)

import { PRODUCTS as STATIC_PRODUCTS, type Product } from "@/data/products";

const BLOB_PRODUCTS_URL = process.env.BLOB_PRODUCTS_URL?.trim() ?? "";

function getNormalizedId(product: Product): string {
  return product.id.trim().toLowerCase();
}

function mergeProducts(dynamic: Product[], fallbackStatic: Product[]): Product[] {
  const merged = new Map<string, Product>();

  // Prioridad para Blob: mismo id en estático queda sobrescrito.
  for (const product of dynamic) {
    merged.set(getNormalizedId(product), product);
  }

  for (const product of fallbackStatic) {
    const id = getNormalizedId(product);
    if (!merged.has(id)) {
      merged.set(id, product);
    }
  }

  return [...merged.values()];
}

function parseProducts(payload: unknown): Product[] {
  if (!Array.isArray(payload)) return [];

  return payload.filter((item): item is Product => {
    if (!item || typeof item !== "object") return false;
    const maybeProduct = item as Product;
    return typeof maybeProduct.id === "string" && maybeProduct.id.trim().length > 0;
  });
}

export async function getAllProducts(): Promise<Product[]> {
  if (!BLOB_PRODUCTS_URL) {
    console.warn("[products-store] BLOB_PRODUCTS_URL no configurado. Usando catálogo estático.");
    return STATIC_PRODUCTS;
  }

  try {
    const res = await fetch(BLOB_PRODUCTS_URL, { next: { revalidate: 60 } });
    if (!res.ok) {
      console.error(`[products-store] Error ${res.status} leyendo Blob. Usando catálogo estático.`);
      return STATIC_PRODUCTS;
    }

    const dynamic = parseProducts(await res.json());
    return mergeProducts(dynamic, STATIC_PRODUCTS);
  } catch (error) {
    console.error("[products-store] Falló carga desde Blob. Usando catálogo estático.", error);
    return STATIC_PRODUCTS;
  }
}

export async function getDynamicProducts(): Promise<Product[]> {
  if (!BLOB_PRODUCTS_URL) {
    console.warn("[products-store] BLOB_PRODUCTS_URL no configurado. Sin productos dinámicos.");
    return [];
  }

  try {
    const res = await fetch(BLOB_PRODUCTS_URL, { cache: "no-store" });
    if (!res.ok) {
      console.error(`[products-store] Error ${res.status} leyendo productos dinámicos.`);
      return [];
    }

    return parseProducts(await res.json());
  } catch (error) {
    console.error("[products-store] Falló carga de productos dinámicos desde Blob.", error);
    return [];
  }
}
