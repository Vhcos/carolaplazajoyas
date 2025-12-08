// app/producto/page.tsx
import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
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
  { key: "series-limitadas", label: "Series limitadas · x/y" },
  { key: "anillos", label: "Anillos" },
  { key: "aros", label: "Aros" },
  { key: "collares", label: "Collares" },
  { key: "colgantes", label: "Collar de Piedras" },
  { key: "pulseras-esclavas", label: "Pulseras y esclavas" },
];

type CatalogPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  // 👇 DESENROLLAMOS LA PROMESA
  const params = await searchParams;

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
  } else if (categoria === "series-limitadas") {
    productosFiltrados = PRODUCTS.filter((p) => p.tipo === "serie");
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
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Todas las joyas disponibles
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Cada pieza está hecha a mano en plata 950. Los modelos pueden variar
          levemente, porque no trabajo en serie industrial, sino en pequeñas
          tandas y piezas únicas.
        </p>
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
              <a
                key={filter.key}
                href={href}
                className={
                  active
                    ? "inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-3 py-1.5 text-xs font-medium text-white"
                    : "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-50"
                }
              >
                {filter.label}
              </a>
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
