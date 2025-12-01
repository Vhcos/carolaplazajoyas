// app/producto/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";

// En Next 16 params viene como *Promise*
type ProductPageParams = {
  slug: string;
};

type ProductPageProps = {
  params: Promise<ProductPageParams>;
};

// --- Helper: buscar producto por slug (id) ---
function getProductFromSlug(slug: string) {
  const clean = decodeURIComponent(slug).trim().toLowerCase();

  const product = PRODUCTS.find(
    (p) => p.id.trim().toLowerCase() === clean
  );

  if (!product) {
    throw new Error(`No se encontró producto con id="${clean}"`);
  }

  return product;
}

// --- SEO dinámico ---
export async function generateMetadata(
  props: ProductPageProps
): Promise<Metadata> {
  const { slug } = await props.params; // 👈 aquí se espera el Promise
  const product = getProductFromSlug(slug);

  return {
    title: `${product.nombre} — Carolina Plaza Joyas`,
    description:
      product.descripcionCorta ||
      "Joyas de autor hechas a mano en plata 950 por Carolina Plaza.",
  };
}

// --- Página de producto ---
export default async function ProductPage(props: ProductPageProps) {
  const { slug } = await props.params; // 👈 igual acá
  const product = getProductFromSlug(slug);

  const whatsappUrl = `https://wa.me/56996937495?text=${encodeURIComponent(
    `Hola Carolina, vi la joya "${product.nombre}" en tu web y me gustaría saber si está disponible.`
  )}`;

  return (
    <div className="space-y-10">
      <Link
        href="/producto"
        className="inline-flex items-center text-xs text-slate-500 hover:text-slate-700"
      >
        ← Volver al catálogo
      </Link>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]">
        {/* Galería */}
        <ProductGallery fotos={product.fotos ?? []} nombre={product.nombre} />

        {/* Info producto */}
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
              Joya de autor
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {product.nombre}
            </h1>
            <p className="text-lg font-semibold text-rose-700">
              ${product.precio.toLocaleString("es-CL")} CLP
            </p>
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            {product.descripcionLarga ? (
              <p>{product.descripcionLarga}</p>
            ) : (
              <p>{product.descripcionCorta}</p>
            )}
            <p>
              Al ser una pieza hecha a mano, pueden existir pequeñas
              variaciones respecto a la foto. Si necesitas ajustar talla o
              largo, conversemos por WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Comprar por WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/carolaplazajoyas/"
              target="_blank"
              className="inline-flex items-center rounded-full border border-rose-200 px-6 py-3 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-50"
            >
              Ver más en Instagram
            </Link>
          </div>

          <div className="space-y-1 rounded-2xl border border-slate-100 bg-white p-4 text-xs text-slate-500">
            <p className="font-medium text-slate-700">
              Tiempo de elaboración y envío
            </p>
            <p>
              Si la pieza está disponible, el envío se realiza en 3–5 días
              hábiles dentro de Chile. Para encargos personalizados, el
              tiempo puede ser mayor según el diseño.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
