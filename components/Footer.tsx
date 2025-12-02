// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        {/* Logo + texto marca */}
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 rounded-lg bg-white border border-slate-300 overflow-hidden">
            {/* Ajusta el nombre si tu archivo se llama distinto */}
            <Image
              src="/logo-carola-plaza.svg"
              alt="Carola Plaza Joyas"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1 text-xs sm:text-sm text-slate-600">
            <p className="font-medium text-slate-900 tracking-[0.22em] uppercase">
              Carola Plaza
            </p>
            <p>Joyas de autor hechas a mano en Chile.</p>
            <p className="text-slate-500">
              Plata 950 · Piezas únicas y series limitadas.
            </p>
            <p className="text-[11px] text-slate-400">
              © {year} Carola Plaza. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Contacto / redes */}
        <div className="flex flex-col items-start gap-3 text-xs sm:text-sm sm:items-end">
          <p className="text-slate-600">
            Escríbeme para encargos, ajustes o piezas a medida.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/56996397495"
              target="_blank"
              className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-50"
            >
              WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/carolaplazajoyas/"
              target="_blank"
              className="inline-flex items-center rounded-full border border-rose-200 bg-white px-4 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-50"
            >
              Instagram
            </Link>
          </div>
          <p className="text-[11px] text-slate-400">
            Hecho a mano en Chile · Cada pieza incluye certificado de
            autenticidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
