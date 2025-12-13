// components/PromoNavidad.tsx
export function PromoNavidad() {
  const today = new Date();

  // Del 8 al 13 de diciembre (mes 11 porque Date usa 0 = enero)
  const start = new Date(2025, 11, 8);
  const end = new Date(2025, 11, 12, 23, 59, 59);

  const isActive = today >= start && today <= end;

  if (!isActive) return null;

  return (
    <div className="bg-slate-50/80 px-3 py-2">
      <div className="mx-auto max-w-4xl">
        {/* Borde brillante */}
        <div className="rounded-2xl bg-gradient-to-r from-rose-300/90 via-amber-100/90 to-rose-300/90 p-[1.5px] shadow-[0_0_18px_rgba(248,113,113,0.5)] animate-[xmas-glow_3s_ease-in-out_infinite]">
          <div className="flex flex-col items-center justify-center gap-1 rounded-[1rem] border border-rose-900/60 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-900 px-4 py-2.5 text-center text-xs text-rose-50 sm:flex-row sm:gap-3 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-800/70 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-[11px]">
              🎄 <span>Navidad 2025</span>
            </span>

            <span>
              Del 8 al 13 de diciembre:{" "}
              <span className="font-semibold">10% de descuento</span> en compras
              anticipadas de Navidad. Menciona el código{" "}
              <span className="font-mono bg-rose-700/80 px-1 rounded">
                NAVIDAD10
              </span>{" "}
              al escribir por WhatsApp.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
