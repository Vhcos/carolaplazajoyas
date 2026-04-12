"use client";
import Link from "next/link";

function getDaysUntilMothersDay(): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const currentYearTarget = new Date(now.getFullYear(), 4, 11);
  const target = today > currentYearTarget ? new Date(now.getFullYear() + 1, 4, 11) : currentYearTarget;
  const diff = Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

export function PromoNavidad() {
  const days = getDaysUntilMothersDay();
  const isOver = days === 0;

  if (isOver) return null;

  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(176,143,90,0.28)] bg-gradient-to-br from-[rgba(255,255,255,0.92)] via-[rgba(251,248,242,0.95)] to-[rgba(255,248,240,0.92)] px-5 py-5 shadow-[0_8px_32px_rgba(176,143,90,0.12)] sm:px-6 backdrop-blur-sm">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(176,143,90,0.14),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(122,151,167,0.12),transparent_70%)]" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <p className="cp-kicker text-[var(--cp-gold)]">Día de la Madre · 11 de mayo</p>
              <span className="rounded-full border border-[rgba(176,143,90,0.28)] bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cp-gold)]">
                {days === 0 ? "Hoy" : `${days} ${days === 1 ? "día" : "días"}`}
              </span>
            </div>

            <p className="text-base font-semibold leading-snug tracking-[-0.02em] text-slate-900 sm:text-lg">
              Carola Plaza Joyas: plata 950 hecha a mano en Chile
            </p>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Joyas de autor trabajadas a pulso, en series limitadas y piezas únicas.
              Diseños con piedras naturales, certificado de autenticidad y envíos a todo Chile.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/producto"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
            >
              Ver regalos para mamá
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-5 py-2.5 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Encargar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
