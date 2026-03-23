// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--cp-line)] bg-[rgba(251,248,242,0.72)] backdrop-blur">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm sm:h-24 sm:w-24">
            <Image
              src="/logo-carola-plaza.svg"
              alt="Carola Plaza Joyas"
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--cp-accent)]">
              Carola Plaza Joyas
            </p>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
              Plata 950, oficio y piezas con historia
            </p>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              Joyas de autor hechas a mano en Chile. Piezas unicas, series
              limitadas y encargos a medida para acompanar historias reales.
            </p>
            <p className="text-xs text-slate-500">
              © {year} Carola Plaza. Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <p className="text-sm text-slate-600">
            Escribeme para ajustes, encargos o piezas a medida.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/56996397495"
              target="_blank"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800"
            >
              WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/carolaplazajoyas/"
              target="_blank"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-4 py-2 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Instagram
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            Hecho a mano en Chile · Cada pieza incluye certificado de
            autenticidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
