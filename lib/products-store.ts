// lib/products-store.ts
// Fusiona productos estáticos (data/products.ts) con productos dinámicos (Vercel Blob)

import { head } from "@vercel/blob";
import { PRODUCTS as STATIC_PRODUCTS, type Product } from "@/data/products";

const PRODUCTS_BLOB_PATH = "data/products.json";
const BLOB_PRODUCTS_URL = process.env.BLOB_PRODUCTS_URL?.trim() ?? "";
const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN?.trim() ?? "";

let resolvedBlobProductsUrl: string | null = null;
let blobUrlResolved = false;

async function getBlobProductsUrl(): Promise<string | null> {
  if (BLOB_PRODUCTS_URL) return BLOB_PRODUCTS_URL;
  if (blobUrlResolved) return resolvedBlobProductsUrl;

  blobUrlResolved = true;

  if (!BLOB_READ_WRITE_TOKEN) {
    console.warn(
      "[products-store] BLOB_PRODUCTS_URL y BLOB_READ_WRITE_TOKEN no configurados. Usando catálogo estático."
    );
    resolvedBlobProductsUrl = null;
    return null;
  }

  try {
    const metadata = await head(PRODUCTS_BLOB_PATH, { token: BLOB_READ_WRITE_TOKEN });
    resolvedBlobProductsUrl = metadata.url;
    return metadata.url;
  } catch (error) {
    console.warn(
      "[products-store] No se pudo resolver data/products.json en Blob. Usando fallback.",
      error
    );
    resolvedBlobProductsUrl = null;
    return null;
  }
}

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
  const blobProductsUrl = await getBlobProductsUrl();
  if (!blobProductsUrl) {
    return STATIC_PRODUCTS;
  }

  try {
    const res = await fetch(blobProductsUrl, { next: { revalidate: 60 } });
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
  const blobProductsUrl = await getBlobProductsUrl();
  if (!blobProductsUrl) {
    return [];
  }

  try {
    const res = await fetch(blobProductsUrl, { cache: "no-store" });
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
