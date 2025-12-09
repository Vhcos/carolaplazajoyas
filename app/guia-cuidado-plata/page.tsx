// app/guia-cuidado-plata/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo cuidar tus joyas de plata 950 | Carola Plaza Joyas",
  description:
    "Consejos simples para limpiar, guardar y cuidar tus joyas de plata 950 hechas a mano, para que se mantengan bonitas y brillantes por muchos años.",
};

export default function GuiaCuidadoPlataPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Guía de cuidado
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Cómo cuidar tus joyas de plata 950 para que te acompañen muchos años
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          La plata 950 es hermosa, brillante y noble, pero también es{" "}
          <strong>sensible al ambiente</strong>. Con algunos cuidados simples,
          tus joyas hechas a mano pueden acompañarte por muchos años sin perder
          su encanto.
        </p>
      </header>

      {/* Por qué se oscurece la plata */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Por qué se oscurece la plata?
        </h2>
        <p className="text-sm text-slate-700">
          Si tu joya de plata se ha puesto más opaca o un poco negra, no es que
          esté “mala”: es un proceso natural. La plata reacciona con:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            El <strong>azufre</strong> presente en el aire y algunos productos
            de limpieza.
          </li>
          <li>
            La <strong>humedad</strong> y el <strong>salitre</strong>.
          </li>
          <li>
            El <strong>ph de la piel</strong>, perfumes, cremas y maquillaje.
          </li>
        </ul>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800">
          Que una joya se oscurezca no significa que esté dañada. Muchas veces
          basta una buena limpieza para que vuelva a brillar.
        </p>
      </section>

      {/* Uso diario */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Cuidado en el uso diario
        </h2>
        <p className="text-sm text-slate-700">
          No se trata de guardar las joyas y no usarlas, sino de conocer algunos
          momentos en los que es mejor sacárselas:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Antes de ducharte o ir a la piscina.</strong> El cloro y
            algunos jabones pueden opacar la plata y dañar ciertas piedras.
          </li>
          <li>
            <strong>Antes de dormir.</strong> Así evitas enganchar la joya y
            deformarla, sobre todo en el caso de anillos y pulseras.
          </li>
          <li>
            <strong>Al usar cremas, perfumes o maquillaje.</strong> Idealmente
            aplica todo eso primero, deja que se absorba, y pon las joyas al
            final.
          </li>
          <li>
            <strong>En la playa o haciendo deporte intenso.</strong> El sudor,
            la arena y los golpes pueden maltratar la pieza.
          </li>
        </ul>
      </section>

      {/* Cómo guardar las joyas */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Cómo guardar tus joyas de plata 950
        </h2>
        <p className="text-sm text-slate-700">
          La forma en que guardas tus joyas también influye mucho en cuánto se
          oscurecen:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Guárdalas en un lugar seco y cerrado.</strong> Idealmente en
            una caja o bolsita individual.
          </li>
          <li>
            <strong>Evita dejarlas al aire libre</strong> sobre el velador o
            cerca de ventanas, donde hay más humedad y cambios de temperatura.
          </li>
          <li>
            Si puedes, usa <strong>bolsitas de tela o gamuza</strong> para que
            no se rayen entre sí.
          </li>
          <li>
            No mezcles joyas de plata con piezas que puedan soltar químicos o
            aleaciones muy distintas.
          </li>
        </ul>
      </section>

      {/* Cómo limpiar la plata en casa */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Cómo limpiar tus joyas de plata en casa
        </h2>
        <p className="text-sm text-slate-700">
          Si tu joya está un poco opaca, puedes hacer una limpieza suave en
          casa:
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Usa un <strong>paño suave de algodón</strong> o una gamuza especial
            para plata.
          </li>
          <li>
            Frota la superficie de la joya con movimientos suaves y repetidos.
          </li>
          <li>
            Si está muy oscura, puedes usar un{" "}
            <strong>limpiador específico para plata</strong>, siguiendo las
            instrucciones del producto.
          </li>
        </ol>
        <p className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-xs text-amber-900">
          ⚠️ <span className="font-semibold">Importante:</span> si la joya tiene
          piedras naturales, no la sumerjas en químicos fuertes sin consultar
          antes. Algunas piedras son más delicadas que la plata misma.
        </p>
      </section>

      {/* Qué NO hacer */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Qué NO hacer con tus joyas de plata
        </h2>
        <p className="text-sm text-slate-700">
          Hay trucos caseros que pueden funcionar, pero también pueden dañar la
          pieza, sobre todo si es una joya hecha a mano y con textura. Evita:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Limpiar con <strong>productos abrasivos</strong> (cloro, limpiador
            de baños, pasta de dientes granulada, etc.).
          </li>
          <li>
            Usar <strong>esponjas metálicas</strong> o muy ásperas.
          </li>
          <li>
            Frotar con demasiada fuerza zonas que tienen{" "}
            <strong>pátina o textura intencional</strong>, porque puedes borrar
            el efecto que se trabajó en el taller.
          </li>
        </ul>
      </section>

      {/* Cuando pedir ayuda */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Cuándo es mejor escribirme para una limpieza o ajuste?
        </h2>
        <p className="text-sm text-slate-700">
          Hay casos en que es mejor que veamos la pieza juntas:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Si la joya <strong>se deformó</strong> (por ejemplo, una esclava o
            un anillo que se abrió o se apretó demasiado).
          </li>
          <li>
            Si tiene <strong>piedras sueltas</strong> o ves que alguna se mueve.
          </li>
          <li>
            Si la pieza está muy, muy oscura y te da miedo dañarla limpiándola
            en casa.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          En esos casos, puedes escribirme y vemos la mejor forma de ayudarte,
          ya sea con una limpieza más profunda o con un pequeño ajuste.
        </p>
      </section>

      {/* CTA final */}
      <section className="space-y-3 border-t border-slate-200 pt-6">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Tienes una joya que quieras revivir?
        </h2>
        <p className="text-sm text-slate-700">
          Si tienes una pieza de plata 950 que quieres volver a ver brillar, o
          si te gustaría encargar una joya hecha especialmente para ti, puedes
          escribirme por WhatsApp:
        </p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
          <span className="font-mono text-xs">
            “Hola Carolina, tengo una joya de plata que me gustaría limpiar /
            ajustar. ¿Te puedo enviar fotos para que la veamos?”
          </span>
        </p>

        <a
          href="https://wa.me/56996397495?text=Hola%20Carolina,%20tengo%20una%20joya%20de%20plata%20950%20que%20quiero%20cuidar%20y%20me%20gustar%C3%ADa%20tu%20ayuda."
          target="_blank"
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
        >
          Escribirme por WhatsApp
        </a>
      </section>
    </main>
  );
}
