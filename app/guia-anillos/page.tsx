// app/guia-anillos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo medir tu dedo para anillos | Carola Plaza Joyas",
  description:
    "Guía sencilla para medir tu dedo en casa y elegir la talla de anillo correcta para tus joyas de plata 950 hechas a mano.",
};

export default function GuiaAnillosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Guía de tallas
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Cómo medir tu dedo para elegir el anillo perfecto
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          Encargarse un anillo a medida puede ser muy emocionante… hasta que
          aparece la gran pregunta: <strong>“¿y qué talla soy?”</strong> Aquí
          tienes una guía sencilla para medir tu dedo en casa y acercarnos lo
          más posible a tu talla ideal.
        </p>
      </header>

      {/* Antes de medir */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Antes de medir: 3 cosas importantes
        </h2>
        <p className="text-sm text-slate-700">
          Antes de partir, ten en cuenta estos detalles que pueden cambiar un
          poco la medida:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Los dedos cambian durante el día.</strong> En la mañana
            suelen estar más delgados y en la noche un poco más hinchados.
          </li>
          <li>
            <strong>El clima influye.</strong> Con el calor los dedos se
            agrandan; con el frío se achican.
          </li>
          <li>
            <strong>La mano que usas más suele ser un poco más grande.</strong>{" "}
            No asumas que la talla de un dedo es igual en ambas manos.
          </li>
        </ul>
        <p className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-xs text-amber-900">
          💡 <span className="font-semibold">Consejo:</span> mide tu dedo en la
          tarde, con la mano en reposo y a temperatura ambiente.
        </p>
      </section>

      {/* Opción 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Opción 1: usar un anillo que ya te quede bien
        </h2>
        <p className="text-sm text-slate-700">
          Esta es la forma más precisa si ya tienes un anillo que te guste cómo
          calza.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Elige un anillo que te quede <strong>perfecto</strong> en el dedo
            donde quieres usar la nueva joya.
          </li>
          <li>
            Pon el anillo sobre una hoja de papel blanca, apoyado bien plano.
          </li>
          <li>
            Con un lápiz bien finito, marca el{" "}
            <strong>contorno interno del anillo</strong>.
          </li>
          <li>
            Mide el diámetro interno (de borde interior a borde interior,
            pasando por el centro) con una regla o, idealmente, un pie de
            metro.
          </li>
        </ol>
        <p className="text-sm text-slate-700">
          Anota el número en milímetros (por ejemplo: 16, 17, 18 mm). Cuando me
          escribas por WhatsApp, puedes mandar algo como:
        </p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
          <span className="font-mono text-xs">
            “Mi anillo tiene un diámetro interno de 17 mm aprox.”
          </span>
          <br />
          Con eso ya tengo una muy buena referencia para ajustar la talla.
        </p>
      </section>

      {/* Opción 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Opción 2: medir el dedo con una cinta de papel
        </h2>
        <p className="text-sm text-slate-700">
          Si no tienes un anillo de referencia, puedes medir directamente el
          dedo.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Corta una <strong>tira fina de papel</strong> (unos 5 mm de ancho).
          </li>
          <li>
            Rodea con la tira el dedo donde quieres usar el anillo, a la altura
            del nudillo.
          </li>
          <li>
            Ajusta el papel para que:
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Pase bien por el nudillo.</li>
              <li>No quede ni apretado ni suelto.</li>
            </ul>
          </li>
          <li>
            Marca con lápiz el punto donde el papel se cruza consigo mismo.
          </li>
          <li>
            Estira la tira y mide la distancia entre el inicio y la marca con
            una regla.
          </li>
        </ol>
        <p className="text-sm text-slate-700">
          Ese número es la <strong>circunferencia del dedo</strong> en
          milímetros (por ejemplo: 54 mm, 56 mm, 58 mm).
        </p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
          Al escribir, puedes decir:
          <br />
          <span className="font-mono text-xs">
            “La circunferencia de mi dedo es de 55 mm aprox.”
          </span>
        </p>
      </section>

      {/* Opción 3 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Opción 3: medir con cinta métrica de costura
        </h2>
        <p className="text-sm text-slate-700">
          Si tienes una cinta métrica flexible (de costura), es aún más fácil:
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Pasa la cinta alrededor del dedo (idealmente sobre el nudillo).</li>
          <li>Ajusta hasta que quede cómoda, sin apretar.</li>
          <li>Anota la medida en milímetros.</li>
        </ol>
      </section>

      {/* Errores comunes */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Errores comunes al medir la talla
        </h2>
        <p className="text-sm text-slate-700">
          Para que el anillo no termine ni clavándose ni saliéndose al lavarte
          las manos, evita:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Medir solo una vez.</strong> Idealmente repite la medición{" "}
            2–3 veces y saca un promedio.
          </li>
          <li>
            <strong>Medir con frío extremo o mucho calor.</strong> Eso puede
            alterar la talla real.
          </li>
          <li>
            <strong>Olvidar el nudillo.</strong> El anillo tiene que pasar por
            el nudillo; si el nudillo es muy ancho, mide ahí también.
          </li>
        </ul>
      </section>

      {/* Si no estás segura */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Y si no estás segura de la talla?
        </h2>
        <p className="text-sm text-slate-700">
          No pasa nada, podemos decidirlo juntas. Cuando me escribas, me ayuda
          mucho si me mandas:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Foto del anillo que usas hoy (si tienes uno).</li>
          <li>
            Medida del <strong>diámetro interno</strong> del anillo o de la{" "}
            <strong>circunferencia del dedo</strong>.
          </li>
          <li>
            En qué dedo y mano lo quieres usar (por ejemplo: “anular mano
            derecha”).
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          Con eso, puedo orientarte mejor y ajustar la pieza para que te
          acompañe muchos años.
        </p>
      </section>

      {/* CTA WhatsApp */}
      <section className="space-y-3 border-t border-slate-200 pt-6">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Escríbeme y vemos la talla juntas
        </h2>
        <p className="text-sm text-slate-700">
          Si después de medir te quedan dudas, siempre puedes escribirme por
          WhatsApp. Cuéntame:
        </p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
          <span className="font-mono text-xs">
            “Quiero encargar un anillo, medí mi dedo y me dio aprox. XX mm, ¿qué
            talla recomiendas?”
          </span>
          <br />
          La idea es que la joya no solo se vea linda, sino que también se
          sienta cómoda y hecha para ti.
        </p>

        <a
          href="https://wa.me/56996397495?text=Hola%20Carola,%20quiero%20encargar%20un%20anillo%20y%20tengo%20dudas%20con%20mi%20talla.%20Te%20comparto%20mis%20medidas."
          target="_blank"
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
        >
          Escribirme por WhatsApp
        </a>
      </section>
    </main>
  );
}
