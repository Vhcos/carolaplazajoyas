// app/producto/page.tsx
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Catálogo — Carolina Plaza Joyas",
  description:
    "Explora el catálogo de joyas de autor en plata 950 de Carolina Plaza: anillos, colgantes, aros y pulseras inspirados en la Patagonia.",
};

export default function CatalogPage() {
  return (
    <div className="space-y-8">
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

      <section>
        {PRODUCTS.length === 0 ? (
          <p className="text-sm text-slate-500">
            Pronto subiré nuevas joyas al catálogo. Si quieres ver piezas en
            proceso o hacer un encargo, escríbeme por WhatsApp.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
