// app/producto/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PRODUCTS } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import { SITE_URL } from "@/lib/config";

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

  return product ?? null;
}

// --- SEO dinámico ---
export async function generateMetadata(
  props: ProductPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductFromSlug(slug);

  if (!product) {
    return {
      title: "Joya no encontrada | Carola Plaza",
      description: "No pudimos encontrar esta joya de Carola Plaza.",
    };
  }

  const url = `${SITE_URL}/producto/${product.id}`;
  const title = `${product.nombre} en plata 950 — Carola Plaza`;
  const description =
    product.descripcionCorta ||
    "Joyas de autor hechas a mano en plata 950 por Carola Plaza.";

  const imageUrl =
    product.fotos?.[0] ?? "/joyas/prendedor-ginko-bronce.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// --- Página de producto ---
export default async function ProductPage(props: ProductPageProps) {
  const { slug } = await props.params;
  const product = getProductFromSlug(slug);

  if (!product) {
    notFound();
  }

  const url = `${SITE_URL}/producto/${product.id}`;

  const imageUrls =
    product.fotos?.map((foto: string) =>
      foto.startsWith("http") ? foto : `${SITE_URL}${foto}`
    ) ?? [`${SITE_URL}/joyas/prendedor-ginko-bronce.jpg`];

  // Para poder leer campos opcionales sin pelear con TS
  const p: any = product;

  const detalles: { label: string; value?: string }[] = [
    { label: "Metal", value: p.metal ?? "Plata 950" },
    { label: "Piedra", value: p.piedra },
    { label: "Colección", value: p.coleccion },
    { label: "Estado", value: p.estado ?? "Disponible" },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nombre,
    image: imageUrls,
    description:
      product.descripcionLarga ||
      product.descripcionCorta ||
      "Joya de autor en plata 950 hecha a mano en Chile por Carola Plaza.",
    brand: {
      "@type": "Brand",
      name: "Carola Plaza",
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "CLP",
      price: String(product.precio),
      availability: "https://schema.org/InStock",
    },
  };

  const whatsappUrl = `https://wa.me/56996937495?text=${encodeURIComponent(
    `Hola Carola, vi la joya "${product.nombre}" en tu web y me gustaría saber si está disponible.`
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

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

            {/* 🔹 Bloque de detalles técnicos + estado */}
            <div className="rounded-2xl border border-slate-100 bg-white p-4 text-xs text-slate-700 space-y-1">
              {detalles
                .filter((d) => d.value)
                .map((d) => (
                  <div key={d.label} className="flex gap-2">
                    <span className="font-semibold">{d.label}:</span>
                    <span>{d.value}</span>
                  </div>
                ))}
            </div>

            {/* Descripción + texto adicional */}
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
    </>
  );
}
