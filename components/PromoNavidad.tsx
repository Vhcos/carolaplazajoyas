export function PromoNavidad() {
  const today = new Date();

  const start = new Date(2026, 0, 10);
  const end = new Date(2026, 1, 15, 23, 59, 59);

  const isActive = today >= start && today <= end;
  if (!isActive) return null;

  return (
    <div className="bg-slate-50/80 px-3 py-2">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-r from-rose-300/90 via-pink-100/90 to-rose-300/90 p-[1.5px] shadow-[0_0_18px_rgba(244,63,94,0.35)]">
          <div className="flex flex-col items-center justify-center gap-1 rounded-[1rem] border border-rose-900/60 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-900 px-4 py-2.5 text-center text-xs text-rose-50 sm:flex-row sm:gap-3 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-800/70 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-[11px]">
              ❤ <span>Día del Amor 2026</span>
            </span>

            <span>
              Colección “Llévame contigo”:{" "}
              <span className="font-semibold">joyas hechas a mano</span> para acompañar tu historia.
              Escríbeme por WhatsApp.{" "}
              <span className="font-mono bg-rose-700/80 px-1 rounded">
            Piezas únicas para regalar algo que se queda
              </span>{" "}
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
