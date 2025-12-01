// app/contacto/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto — Carolina Plaza Joyas",
  description:
    "Conversa directamente con Carolina Plaza para ver disponibilidad de joyas, encargos personalizados y envíos.",
};

export default function ContactPage() {
  const whatsapp = "https://wa.me/56996397495";
  const instagram = "https://www.instagram.com/carolaplazajoyas/";

  return (
    <div className="max-w-xl space-y-6">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Contacto
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Hablemos sobre tu próxima joya
        </h1>
        <p className="text-sm text-slate-600">
          Para saber disponibilidad de una pieza, encargar un diseño
          personalizado o pedir más fotos, escríbeme por WhatsApp o Instagram.
        </p>
      </header>

      <div className="space-y-4">
        <Link
          href={`${whatsapp}?text=${encodeURIComponent(
            "Hola Carolina, me gustaría saber más sobre tus joyas."
          )}`}
          target="_blank"
          className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
        >
          Escribir por WhatsApp
        </Link>

        <Link
          href={instagram}
          target="_blank"
          className="inline-flex w-full items-center justify-center rounded-full border border-rose-200 px-6 py-3 text-sm font-medium text-rose-700 hover:bg-rose-50 transition-colors"
        >
          Ver Instagram
        </Link>
      </div>

      <p className="text-xs text-slate-500">
        Suelo responder dentro de 24 horas. Si no recibes respuesta, revisa tu
        bandeja de mensajes solicitados en Instagram.
      </p>
    </div>
  );
}
