// app/series-limitadas/page.tsx
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Series limitadas en plata 950 | Carolina Plaza Joyas",
  description:
    "Colecciones pequeñas de joyería en plata 950 hechas a mano en Chile. Series numeradas x/y con variaciones sutiles y certificado de autenticidad.",
};

export default function SeriesLimitadasPage() {
  const series = PRODUCTS.filter((p) => p.tipo === "serie");

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Series limitadas · x/y
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Series limitadas en plata 950
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-3xl">
          Colecciones pequeñas que nacen de una misma idea de diseño. Comparten
          una estructura base, pero cada pieza se termina a mano, con variaciones
          en textura, pulido o piedra. Cada joya se numera como{" "}
          <span className="font-mono">No. x/y</span> y se entrega con certificado
          de autenticidad.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {series.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
