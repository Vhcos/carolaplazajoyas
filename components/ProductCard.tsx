import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { getAmorPrice, isAmorPromoActive, getAmorPromoInfo } from "@/lib/promo";

type ProductCardProps = {
  product: Product;
};

const fmtCLP = (n: number) => `$${n.toLocaleString("es-CL")}`;

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.fotos[0] ?? "/joyas/placeholder.jpg";

  const promoActive = isAmorPromoActive();
  const finalPrice = getAmorPrice(product.precio);
  const promo = getAmorPromoInfo();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm/50 hover:shadow-md transition-shadow">
      <Link href={`/producto/${product.id}`} className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <Image
          src={mainImage}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 320px, 50vw"
        />

        {promoActive && (
          <div className="absolute left-3 top-3 rounded-full bg-rose-700 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
            -{promo.discountPercent}%
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-serif text-base text-slate-900 leading-snug">
          {product.nombre}
        </h3>

        <div className="mt-auto">
          {promoActive ? (
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-slate-900">
                {fmtCLP(finalPrice)}
              </span>
              <span className="text-sm text-slate-500 line-through">
                {fmtCLP(product.precio)}
              </span>
            </div>
          ) : (
            <div className="text-lg font-semibold text-slate-900">
              {fmtCLP(product.precio)}
            </div>
          )}

          <div className="mt-3">
            <Link
              href={`/producto/${product.id}`}
              className="inline-flex items-center rounded-full bg-rose-700 px-4 py-2 text-xs font-medium text-white hover:bg-rose-800 transition-colors"
            >
              Ver
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
