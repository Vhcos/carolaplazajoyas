// components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.fotos[0] ?? "/joyas/placeholder.jpg";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm/50 hover:shadow-md transition-shadow">
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <Image
          src={mainImage}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 250px, (min-width: 640px) 45vw, 90vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-medium text-slate-900">
          {product.nombre}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2">
          {product.descripcionCorta}
        </p>
        <p className="mt-1 text-sm font-semibold text-rose-700">
          ${product.precio.toLocaleString("es-CL")} CLP
        </p>

        <div className="mt-3 flex gap-2">
          <Link
            href={`/producto/${product.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors"
          >
            Ver detalle
          </Link>
          <Link
            href={`https://wa.me/56996397495?text=${encodeURIComponent(
              `Hola Carolina, vi la joya "${product.nombre}" en tu web y me gustaría saber si está disponible.`
            )}`}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-3 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}
