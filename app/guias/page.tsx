// app/guias/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guías y consejos | Carola Plaza Joyas",
  description:
    "Guías para ayudarte a elegir, cuidar y disfrutar tus joyas de plata 950 hechas a mano: tallas, cuidado, regalos con sentido y más.",
};

const GUIDES = [
  {
    slug: "/guia-anillos",
    title: "Cómo medir tu dedo para elegir el anillo perfecto",
    category: "Tallas",
    description:
      "Pasos simples para medir tu dedo o un anillo que ya usas y acercarnos a tu talla ideal sin salir de casa.",
  },
  {
    slug: "/guia-cuidado-plata",
    title: "Cómo cuidar tus joyas de plata 950",
    category: "Cuidado",
    description:
      "Consejos para usar, limpiar y guardar tus joyas de plata 950 para que se mantengan bonitas por muchos años.",
  },
  {
    slug: "/guia-regalos",
    title: "Cómo elegir una joya con significado para regalar",
    category: "Regalos",
    description:
      "Ideas para elegir una joya que no sea solo un objeto, sino un recuerdo con historia y sentido.",
  },
  {
    slug: "/guia-piedras",
    title: "Piedras que uso en el taller y sus significados",
    category: "Piedras naturales",
    description:
      "Cuarzo rosa, amatista, aventurina y más: qué simboliza cada piedra y en qué tipo de piezas se ve mejor.",
  },
  {
    slug: "/guia-pieza-medida",
    title: "Cómo encargar una pieza de plata a medida",
    category: "Piezas a medida",
    description:
      "Qué necesito saber de ti, cómo es el proceso y qué puedes esperar al encargar una joya personalizada.",
  },
];

export default function GuiasPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
      <header className="space-y-3 text-center sm:text-left">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Guías y consejos
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Guías para elegir y cuidar tus joyas
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
          Aquí encontrarás guías simples para ayudarte a elegir la talla, cuidar
          tus piezas de plata 950, entender mejor las piedras que uso en el
          taller y atreverte a encargar una joya con significado.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide) => (
          <article
            key={guide.slug}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-rose-500">
              {guide.category}
            </p>
            <h2 className="mt-2 text-sm font-semibold text-slate-900">
              {guide.title}
            </h2>
            <p className="mt-2 flex-1 text-xs text-slate-600">
              {guide.description}
            </p>
            <div className="mt-3">
              <Link
                href={guide.slug}
                className="inline-flex text-xs font-medium text-rose-700 hover:underline"
              >
                Leer guía →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
