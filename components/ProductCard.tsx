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
  const secondaryImage = product.fotos[1] ?? mainImage;
  const hasSecondaryImage = secondaryImage !== mainImage;

  const promoActive = isAmorPromoActive();
  const finalPrice = getAmorPrice(product.precio);
  const promo = getAmorPromoInfo();

  const isSold = Boolean(product.vendido);

  return (
    <article className="cp-surface cp-reveal group flex flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-in-out hover:shadow-[0_20px_42px_rgba(0,0,0,0.1)]">
      <Link
        href={`/producto/${product.id}`}
        className="relative aspect-[4/5] w-full overflow-hidden bg-[#f2f1ee]"
      >
        <Image
          src={mainImage}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 320px, 50vw"
        />
        {hasSecondaryImage && (
          <Image
            src={secondaryImage}
            alt={`${product.nombre} vista alternativa`}
            fill
            className="object-cover opacity-0 transition-all duration-500 ease-in-out group-hover:scale-[1.02] group-hover:opacity-100"
            sizes="(min-width: 1024px) 320px, 50vw"
          />
        )}

        {promoActive && (
          <div className="absolute left-3 top-3 z-10 rounded-full border border-[rgba(197,160,89,0.5)] bg-[rgba(255,255,255,0.92)] px-3 py-1 text-[11px] font-semibold text-[var(--cp-gold)] shadow-sm">
            -{promo.discountPercent}%
          </div>
        )}

        {/* ✅ Sello VENDIDO */}
        {isSold && (
          <div className="pointer-events-none absolute right-3 top-3 z-20 rotate-[8deg]">
            <div className="rounded-md bg-rose-700 px-4 py-2 shadow-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-50 text-center">
                VENDIDO
              </p>
              <p className="text-[10px] text-rose-100 text-center">
                si te gusta, encárgamelo
              </p>
            </div>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold leading-snug text-slate-900">
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
              className="inline-flex items-center rounded-full border border-slate-900 bg-[linear-gradient(to_right,#222222_50%,transparent_50%)] bg-[length:200%_100%] bg-right px-4 py-2 text-xs font-medium text-slate-900 transition-all duration-500 ease-in-out hover:bg-left hover:text-white"
            >
              Ver
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
