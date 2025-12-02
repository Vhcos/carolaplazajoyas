// app/piezas-unicas/page.tsx
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Piezas únicas 1/1 en plata 950 | Carola Plaza Joyas",
  description:
    "Joyas de autor en plata 950, piezas únicas 1/1 hechas a mano en Chile. Diseños irrepetibles con certificado de autenticidad.",
};

export default function PiezasUnicasPage() {
  const piezasUnicas = PRODUCTS.filter((p) => p.tipo === "unica");

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Piezas únicas · 1/1
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Piezas únicas en plata 950
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-3xl">
          Aquí encuentras piezas que existen una sola vez. No se repiten. Algunas
          nacen de bocetos que no vuelvo a usar; otras aparecen directamente en la
          mesa de trabajo, al probar una curva nueva o una textura distinta sobre
          la plata 950. Si una pieza única se vende, su lugar no se rellena con
          una copia.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {piezasUnicas.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
