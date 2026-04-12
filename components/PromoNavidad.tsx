"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function getDaysUntilMothersDay(): number {
  const now = new Date();
  const target = new Date(2026, 4, 11); // 11 mayo 2026
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

export function PromoNavidad() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(getDaysUntilMothersDay());
  }, []);

  const isOver = days !== null && days === 0;

  if (isOver) return null;

  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(176,143,90,0.28)] bg-gradient-to-br from-[rgba(255,255,255,0.92)] via-[rgba(251,248,242,0.95)] to-[rgba(255,248,240,0.92)] px-5 py-5 shadow-[0_8px_32px_rgba(176,143,90,0.12)] sm:px-6 backdrop-blur-sm">
        {/* Detalle decorativo */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(176,143,90,0.14),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(122,151,167,0.12),transparent_70%)]" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            {/* Cuenta regresiva */}
            {days !== null && days > 0 && (
              <div className="flex-shrink-0 rounded-2xl border border-[rgba(176,143,90,0.22)] bg-white/70 px-4 py-3 text-center shadow-sm">
                <p className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[var(--cp-gold)]">
                  {days}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  {days === 1 ? "día" : "días"}
                </p>
              </div>
            )}

            <div className="space-y-1.5">
              <p className="cp-kicker text-[var(--cp-gold)]">Dia de la Madre · 11 de mayo</p>
              <p className="text-base font-semibold leading-snug tracking-[-0.02em] text-slate-900 sm:text-lg">
                Joyas de plata 950 para regalar a mama
              </p>
              <p className="max-w-xl text-sm leading-6 text-slate-600">
                Piezas unicas hechas a mano en Chile. Collares, anillos e iniciales
                con certificado de autenticidad. Envios a todo Chile.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/producto"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
            >
              Ver regalos para mama
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
