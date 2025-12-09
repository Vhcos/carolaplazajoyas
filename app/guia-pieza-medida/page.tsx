// app/guia-pieza-medida/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo encargar una pieza de plata a medida | Carola Plaza Joyas",
  description:
    "Paso a paso de cómo funciona el proceso para encargar una joya de plata 950 a medida: desde la primera conversación hasta que recibes la pieza en tus manos.",
};

export default function GuiaPiezaMedidaPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Piezas a medida
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Cómo encargar una joya de plata 950 hecha a medida
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          Encargar una pieza a medida es una forma de transformar una idea, un
          recuerdo o un momento importante en una joya que vas a poder usar
          todos los días. Aquí te cuento, paso a paso, cómo funciona el proceso
          en el taller.
        </p>
      </header>

      {/* Paso 1 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          1. Me escribes y me cuentas tu idea
        </h2>
        <p className="text-sm text-slate-700">
          El primer paso es muy simple: me escribes por WhatsApp y me cuentas,
          con tus propias palabras, qué tienes en mente. Puede ser algo súper
          concreto o algo muy abierto, por ejemplo:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            “Quiero un <strong>anillo ancho con textura</strong> para mí.”
          </li>
          <li>
            “Quiero un <strong>colgante con inicial</strong> para mi hija.”
          </li>
          <li>
            “Quiero una joya que recuerde un <strong>viaje</strong> o una{" "}
            <strong>etapa importante</strong>.”
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          También me ayuda si me cuentas para quién es (para ti, para otra
          persona), qué estilo tiene y si hay algún símbolo, piedra o forma que
          te guste especialmente.
        </p>
      </section>

      {/* Paso 2 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          2. Definimos juntas el diseño
        </h2>
        <p className="text-sm text-slate-700">
          Con tu mensaje como punto de partida, empezamos a bajar la idea a algo
          más concreto. En esta etapa podemos:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Ver <strong>referencias</strong> de piezas que ya he hecho y que
            se acerquen a lo que buscas.
          </li>
          <li>
            Elegir el <strong>tipo de joya</strong>: anillo, colgante, pulsera,
            esclava, aros.
          </li>
          <li>
            Decidir si lleva <strong>piedras naturales</strong> (y cuáles) o si
            será solo en plata 950.
          </li>
          <li>
            Conversar sobre el <strong>estilo general</strong>: más minimalista,
            más orgánico, más protagonista, con textura, etc.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          A veces uso bocetos simples, descripciones o fotos de ejemplo para que
          podamos ver si estamos imaginando lo mismo.
        </p>
      </section>

      {/* Paso 3 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          3. Hablamos de medidas y comodidad
        </h2>
        <p className="text-sm text-slate-700">
          Para que la joya no solo se vea linda, sino que también sea cómoda,
          revisamos:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Anillos:</strong> talla y ancho del aro. Si no sabes tu
            talla, te puedo guiar con la{" "}
            <a
              href="/guia-anillos"
              className="text-rose-700 underline hover:text-rose-800"
            >
              guía para medir tu dedo
            </a>
            .
          </li>
          <li>
            <strong>Collares y colgantes:</strong> largo aproximado de la
            cadena y dónde te gustaría que quede (pegado al cuello, al centro
            del pecho, un poco más abajo).
          </li>
          <li>
            <strong>Pulseras y esclavas:</strong> medida de muñeca y cuánto
            espacio te gusta que haya entre la joya y la piel.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          Si tienes otras joyas que te queden perfectas, puedes mandarme fotos y
          medidas como referencia.
        </p>
      </section>

      {/* Paso 4 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          4. Presupuesto y tiempos
        </h2>
        <p className="text-sm text-slate-700">
          Antes de empezar a trabajar el metal, te cuento con claridad:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            El <strong>valor estimado</strong> de la pieza, según el diseño, el
            trabajo que implica y los materiales.
          </li>
          <li>
            El <strong>tiempo de elaboración</strong> aproximado.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          En piezas a medida, suele haber una parte del monto que se paga como{" "}
          <strong>adelanto</strong> cuando confirmamos el diseño, y el resto al
          momento de la entrega o antes del envío.
        </p>
      </section>

      {/* Paso 5 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          5. Trabajo la pieza en el taller
        </h2>
        <p className="text-sm text-slate-700">
          Con todo definido, empieza la parte más silenciosa: el trabajo en el
          taller. Ahí pasan cosas como:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Cortar, calar y dar forma a la plata 950.</li>
          <li>
            Martillar, texturizar, limar y pulir, según el estilo que definimos.
          </li>
          <li>Montar y engastar las piedras (si corresponde).</li>
          <li>Revisar y ajustar detalles finales de comodidad y terminación.</li>
        </ul>
        <p className="text-sm text-slate-700">
          A veces te voy mostrando avances con fotos o videos, sobre todo en
          piezas más complejas o simbólicas.
        </p>
      </section>

      {/* Paso 6 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          6. Entrega, envío y pequeños ajustes
        </h2>
        <p className="text-sm text-slate-700">
          Cuando la pieza está lista:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Coordinamos <strong>entrega o envío</strong> dentro de Chile.
          </li>
          <li>
            La joya va con su <strong>presentación</strong> y un{" "}
            <strong>certificado de autenticidad</strong>.
          </li>
          <li>
            Si al probarla sientes que hay que hacer un pequeño ajuste (por
            ejemplo, un leve cambio de talla o de largo), lo vemos juntas.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          La idea es que la pieza no solo te guste el día que la recibes, sino
          que te acompañe durante mucho tiempo de forma cómoda.
        </p>
      </section>

      {/* Preguntas frecuentes */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Preguntas frecuentes sobre piezas a medida
        </h2>
        <ul className="space-y-3 text-sm text-slate-700">
          <li>
            <strong>¿Cuánto se demora una pieza a medida?</strong>
            <br />
            Depende del diseño y de la carga de trabajo del taller, pero en
            general puede tomar entre <strong>2 y 6 semanas</strong>. Si tienes
            una fecha importante (cumpleaños, aniversario, Navidad), avísame con
            tiempo.
          </li>
          <li>
            <strong>¿Puedo basarme en una joya que ya hiciste?</strong>
            <br />
            Sí. Podemos tomar una pieza que viste en el catálogo o en
            Instagram como referencia y adaptarla para ti.
          </li>
          <li>
            <strong>¿Trabajas con plata que ya tengo?</strong>
            <br />
            En algunos casos es posible reutilizar material, pero siempre hay
            que evaluarlo primero. Lo ideal es que conversemos y me cuentes qué
            tienes.
          </li>
        </ul>
      </section>

      {/* CTA final */}
      <section className="space-y-3 border-t border-slate-200 pt-6">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Tienes una idea para una joya a medida?
        </h2>
        <p className="text-sm text-slate-700">
          Si quieres transformar una historia, un símbolo o un momento en una
          pieza de plata 950, puedes escribirme por WhatsApp y empezamos a darle
          forma juntas:
        </p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
          <span className="font-mono text-xs">
            “Hola Carolina, me gustaría encargar una pieza a medida. Te cuento
            un poco lo que tengo en mente…”
          </span>
        </p>

        <a
          href="https://wa.me/56996397495?text=Hola%20Carolina,%20me%20gustar%C3%ADa%20encargar%20una%20joya%20de%20plata%20950%20a%20medida%20y%20tengo%20una%20idea%20que%20quiero%20contarte."
          target="_blank"
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
        >
          Escribirme por WhatsApp
        </a>
      </section>
    </main>
  );
}
