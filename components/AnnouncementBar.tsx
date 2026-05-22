// components/AnnouncementBar.tsx
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-slate-900 px-4 py-2.5 text-center text-xs font-medium text-white/90">
      <div className="mx-auto flex max-w-[1180px] items-center justify-center gap-6">
        <span className="hidden sm:inline text-white/60">·</span>
        <span>Envíos a todo Chile</span>
        <span className="text-white/40">·</span>
        <span>Plata 950 con certificado de autenticidad</span>
        <span className="text-white/40">·</span>
        <Link
          href="/producto"
          className="text-[var(--cp-gold)] underline underline-offset-2 transition-opacity hover:opacity-80"
        >
          Colorea tu invierno
        </Link>
        <span className="hidden sm:inline text-white/60">·</span>
      </div>
    </div>
  );
}
