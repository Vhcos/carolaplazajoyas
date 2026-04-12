// app/producto/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts } from "@/lib/products-store";
import ProductCard from "@/components/ProductCard";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Catálogo de joyas en plata 950",
  description:
    "Catálogo completo de joyas de autor en plata 950 de Carola Plaza: anillos, colgantes, aros, pulseras y esclavas hechas a mano en Chile.",
  alternates: {
    canonical: `${SITE_URL}/producto`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/producto`,
    title: "Catálogo de joyas en plata 950 | Carola Plaza",
    description:
      "Explora el catálogo completo de joyas de autor en plata 950 de Carola Plaza: anillos, colgantes, aros, pulseras y esclavas hechas a mano en Chile.",
    images: [
      {
        url: "/joyas/prendedor-ginko-bronce.jpg",
        width: 1200,
        height: 630,
        alt: "Catálogo de joyas de autor en plata 950 de Carola Plaza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de joyas en plata 950 | Carola Plaza",
    description:
      "Catálogo completo de joyas de autor en plata 950 hechas a mano en Chile.",
  },
};

const CATEGORY_FILTERS = [
  { key: "todas", label: "Todo el catálogo" },
  { key: "piezas-unicas", label: "Piezas únicas · 1/1" },
  { key: "anillos", label: "Anillos" },
  { key: "aros", label: "Aros" },
  { key: "collares", label: "Collares" },
  { key: "colgantes", label: "Collar de Piedras" },
  { key: "pulseras-esclavas", label: "Pulseras y esclavas" },
];

const WHATSAPP_CATALOG_URL =
  "https://wa.me/56996397495?text=Hola%20Carola,%20estoy%20viendo%20el%20catalogo%20y%20quiero%20preguntar%20por%20una%20pieza%20o%20una%20similar.";

type CatalogPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  // 👇 DESENROLLAMOS LA PROMESA
  const params = await searchParams;
  const PRODUCTS = await getAllProducts();

  const rawCategoria = params.categoria;
  const categoria =
    typeof rawCategoria === "string"
      ? rawCategoria
      : Array.isArray(rawCategoria)
      ? rawCategoria[0] ?? "todas"
      : "todas";

  let productosFiltrados = PRODUCTS;

  if (categoria === "piezas-unicas") {
    productosFiltrados = PRODUCTS.filter((p) => p.tipo === "unica");
  } else if (
    categoria === "anillos" ||
    categoria === "aros" ||
    categoria === "collares" ||
    categoria === "colgantes" ||
    categoria === "pulseras-esclavas"
  ) {
    productosFiltrados = PRODUCTS.filter((p) => p.categoria === categoria);
  }

  const currentFilter =
    CATEGORY_FILTERS.find((f) => f.key === categoria) ?? CATEGORY_FILTERS[0];

  return (
    <div className="space-y-8">
      {/* Encabezado catálogo */}
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Catálogo
        </p>
        <h1 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl">
          Todas las joyas disponibles
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Cada pieza está hecha a mano en plata 950. Los modelos pueden variar
          levemente, porque no trabajo en serie industrial, sino en pequeñas
          tandas y piezas únicas.
        </p>
        <div className="max-w-2xl rounded-[1.4rem] border border-[var(--cp-line)] bg-[rgba(255,255,255,0.62)] px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--cp-accent)]">
            Encargos y ajustes
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Si buscas otra talla, una versión similar o una pieza a medida,
            escríbeme por WhatsApp y lo vemos juntas.
          </p>
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
          >
            Escribirme por WhatsApp
          </a>
        </div>
      </header>

      {/* Filtros por categoría */}
      <section className="space-y-3">
        <p className="text-xs font-medium text-slate-600">
          Filtrar por tipo de joya:
        </p>
        <div className="flex flex-wrap gap-2">
          {CATEGORY_FILTERS.map((filter) => {
            const active = filter.key === categoria;
            const href =
              filter.key === "todas"
                ? "/producto"
                : `/producto?categoria=${filter.key}`;

            return (
              <Link
                key={filter.key}
                href={href}
                className={
                  active
                    ? "inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-3 py-1.5 text-xs font-medium text-white"
                    : "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-50"
                }
              >
                {filter.label}
              </Link>
            );
          })}
        </div>
        <p className="text-xs text-slate-500">
          Mostrando:{" "}
          <span className="font-medium">{currentFilter.label}</span> ·{" "}
          {productosFiltrados.length}{" "}
          {productosFiltrados.length === 1 ? "pieza" : "piezas"}
        </p>
      </section>

      {/* Grid de productos */}
      <section>
        {productosFiltrados.length === 0 ? (
          <p className="text-sm text-slate-500">
            Pronto subiré nuevas joyas en esta categoría. Si quieres ver piezas
            en proceso o hacer un encargo, escríbeme por WhatsApp.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productosFiltrados.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
