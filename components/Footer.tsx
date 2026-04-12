// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--cp-line)] bg-[rgba(255,255,255,0.88)] backdrop-blur">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm sm:h-36 sm:w-36">
            <Image
              src="/logo-carola-plaza.svg"
              alt="Carola Plaza Joyas"
              fill
              className="object-contain scale-[1.35]"
            />
          </div>

          <div className="space-y-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--cp-accent)]">
              Carola Plaza Joyas
            </p>
            <p className="text-2xl font-semibold text-slate-900">
              Plata 950, oficio y piezas con historia
            </p>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              Joyas de autor hechas a mano en Chile. Piezas únicas, series
              limitadas y encargos a medida para acompañar historias reales.
            </p>
            <p className="text-xs text-slate-500">
              © {year} Carola Plaza. Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <p className="text-sm text-slate-600">
            Escríbeme para ajustes, encargos o piezas a medida.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/56996397495?text=Hola%20Carola,%20quiero%20consultar%20por%20una%20pieza%20o%20encargo%20a%20medida."
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-[linear-gradient(to_right,#222222_50%,transparent_50%)] bg-[length:200%_100%] bg-right px-4 py-2 text-xs font-medium text-slate-900 transition-all duration-500 ease-in-out hover:bg-left hover:text-white"
            >
              Escribir por WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/carolaplazajoyas/"
              target="_blank"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-4 py-2 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Instagram
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-4 py-2 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Admin
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            Hecho a mano en Chile · Cada pieza incluye certificado de autenticidad · Envíos a todo Chile.
          </p>
        </div>
      </div>
    </footer>
  );
}
