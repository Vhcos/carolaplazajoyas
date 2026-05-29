"use client";
import Image from "next/image";
import Link from "next/link";
import { getPromoInfo, isPromoActive } from "@/lib/promo";

function getDaysUntilPromoEnd(endDate: Date): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  const diff = Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

export function PromoBanner() {
  if (!isPromoActive()) return null;

  const promo = getPromoInfo();
  const days = getDaysUntilPromoEnd(promo.end);
  const promoDateLabel = promo.end.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
  });

  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(176,143,90,0.28)] bg-gradient-to-br from-[rgba(255,255,255,0.92)] via-[rgba(251,248,242,0.95)] to-[rgba(255,248,240,0.92)] px-5 py-5 shadow-[0_8px_32px_rgba(176,143,90,0.12)] sm:px-6 backdrop-blur-sm">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(176,143,90,0.14),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(122,151,167,0.12),transparent_70%)]" />

        <div className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
          <div className="space-y-3">
            <p className="font-['Brush_Script_MT','Lucida_Handwriting','cursive'] text-2xl leading-none text-[#d95ac5] sm:text-[2.2rem]">
              {promo.name} · {promoDateLabel}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="min-w-[130px] rounded-2xl border border-[#8f1e25] bg-[#ce2b37] px-4 py-3 text-center shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                  Cuenta regresiva
                </p>
                <p className="mt-1 text-4xl font-semibold leading-none tracking-[-0.04em] text-white">
                  {days === 0 ? "Hoy" : days}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90">
                  {days === 0 ? "día especial" : days === 1 ? "día" : "días"}
                </p>
              </div>

              <p className="max-w-xl text-sm leading-6 text-slate-700 sm:text-base">
                Joyas de autor en plata 950 para sumar color, textura y luz a
                los días fríos. Series limitadas, certificado de autenticidad y
                envíos a todo Chile.
              </p>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Carola Plaza Joyas: piezas hechas a mano con piedras naturales,
              textura y proporción cuidada para acompañar historias reales.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/producto"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
              >
                Ver Abraza el invierno
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-5 py-2.5 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
              >
                Encargar por WhatsApp
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.35rem] border border-[rgba(176,143,90,0.3)] bg-white/80 shadow-sm">
            <div className="relative h-40 w-full sm:h-44 lg:h-48">
              <Image
                src="/decor/winter-color-roses-side.jpeg"
                alt="Detalle floral para la colección Abraza el invierno"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 260px, 100vw"
                priority
              />
            </div>
            <div className="border-t border-[rgba(176,143,90,0.22)] px-3 py-2 text-center">
              <p className="text-xs font-semibold italic tracking-[0.08em] text-rose-700">
                Abraza el invierno
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
