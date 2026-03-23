import Link from "next/link";

export function PromoNavidad() {
  return (
    <section className="mb-8">
      <div className="cp-surface rounded-[1.5rem] px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="cp-kicker">Coleccion Piscis 2026</p>
            <p className="max-w-2xl text-sm leading-6 text-slate-700 sm:text-[15px]">
              Anillos de plata 950, piezas unicas y encargos a medida pensados
              para quedarse contigo por anos.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/producto?categoria=anillos"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800"
            >
              Ver anillos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-4 py-2 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Encargar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
