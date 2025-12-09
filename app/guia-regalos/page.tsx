// app/guia-regalos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo elegir una joya con significado para regalar | Carola Plaza Joyas",
  description:
    "Guía para elegir una joya de plata 950 con sentido: cómo pensar en la persona, el momento y el símbolo que quieres que la joya represente.",
};

export default function GuiaRegalosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Guía de regalos
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Cómo elegir una joya con significado para regalar
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          Regalar una joya no es solo entregar un objeto: es regalar{" "}
          <strong>un recuerdo que se lleva puesto</strong>. Esta guía te ayuda a
          elegir una pieza de plata 950 que tenga sentido para la persona, el
          momento y la historia que quieres contar.
        </p>
      </header>

      {/* 1. Pensar en la persona */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          1. Piensa primero en la persona, no en la joya
        </h2>
        <p className="text-sm text-slate-700">
          Antes de pensar en anillos, colgantes o pulseras, hazte estas
          preguntas sobre la persona:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>¿Cómo se viste en el día a día?</strong> ¿Es más minimalista
            o le gustan las piezas protagonistas?
          </li>
          <li>
            <strong>¿Usa joyas todos los días o solo en ocasiones especiales?</strong>
          </li>
          <li>
            <strong>¿Prefiere piezas delicadas o más grandes y con textura?</strong>
          </li>
        </ul>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800">
          Cuanto más puedas imaginarla usando la joya en su vida real (trabajo,
          estudio, fines de semana), más fácil será elegir algo que se sienta
          “muy ella”.
        </p>
      </section>

      {/* 2. El momento que quieres marcar */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          2. ¿Qué momento quieres que la joya recuerde?
        </h2>
        <p className="text-sm text-slate-700">
          Una misma joya puede significar cosas distintas según el motivo del
          regalo. Pregúntate:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>¿Es un comienzo?</strong> (un nuevo trabajo, un viaje, una
            mudanza, un proyecto propio).
          </li>
          <li>
            <strong>¿Es un cierre o un logro?</strong> (un título, un proceso
            difícil que terminó, un cumpleaños especial).
          </li>
          <li>
            <strong>¿Es un amuleto?</strong> Algo que quieras que la acompañe
            como símbolo de fuerza, calma o protección.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          Ese “para qué” del regalo ayuda a decidir si es mejor un{" "}
          <strong>colgante cerca del corazón</strong>, un{" "}
          <strong>anillo que vea todo el día</strong> o una{" "}
          <strong>pulsera que la acompañe en cada gesto</strong>.
        </p>
      </section>

      {/* 3. Elegir el tipo de joya */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          3. ¿Colgante, anillo, pulsera o aros?
        </h2>
        <p className="text-sm text-slate-700">
          Cada tipo de joya tiene su propia “personalidad”:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Colgantes:</strong> ideales para regalos con mensaje. Se
            sienten cercanos al corazón y se pueden usar sobre distintas
            prendas.
          </li>
          <li>
            <strong>Anillos:</strong> más íntimos y personales. Perfectos para
            alguien que disfruta mirar sus manos mientras trabaja o escribe.{" "}
            <span className="underline">
              (Y si tienes dudas de talla, puedes ver la guía para medir tu
              dedo).
            </span>
          </li>
          <li>
            <strong>Pulseras y esclavas:</strong> acompañan mucho el día a día,
            sobre todo si la persona usa mangas tres cuartos o arremangadas.
          </li>
          <li>
            <strong>Aros:</strong> dan luz al rostro y pueden ser desde
            minimalistas hasta muy presentes, según su estilo.
          </li>
        </ul>
      </section>

      {/* 4. Símbolos, formas y piedras */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          4. Elegir símbolos, formas y piedras con sentido
        </h2>
        <p className="text-sm text-slate-700">
          A veces el detalle que vuelve especial a una joya es un{" "}
          <strong>símbolo pequeño</strong> o una <strong>piedra</strong> que
          representa algo importante:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>Iniciales y letras:</strong> ideales para representar a una
            persona, una historia o incluso una palabra clave (como “C” de
            comienzo, “L” de libertad, etc.).
          </li>
          <li>
            <strong>Figuras orgánicas:</strong> hojas, flores, gotas, lunas. Se
            sienten cercanas a lo natural y al movimiento.
          </li>
          <li>
            <strong>Cuarzo rosa:</strong> muy asociado al amor propio, la
            dulzura y los afectos.
          </li>
          <li>
            <strong>Amatista:</strong> relacionada con la calma, la intuición y
            el equilibrio.
          </li>
          <li>
            <strong>Aventurina:</strong> muchas veces vinculada a la suerte, los
            nuevos caminos y la expansión.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          No se trata de “creer o no creer” en las piedras, sino de elegir algo
          que haga sentido a la historia que quieres acompañar.
        </p>
      </section>

      {/* 5. Personalidad: minimalista vs protagonista */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          5. ¿Minimalista o protagonista?
        </h2>
        <p className="text-sm text-slate-700">
          También ayuda pensar si la joya debería ser un{" "}
          <strong>detalle sutil</strong> o una pieza que llame la atención:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Si la persona viste colores neutros y líneas simples, probablemente
            conecte bien con <strong>piezas más delicadas</strong>, con uno o
            dos elementos protagonistas.
          </li>
          <li>
            Si le gusta mezclar texturas y accesorios, puede disfrutar{" "}
            <strong>anillos anchos, colgantes más grandes o esclavas con
            volumen</strong>.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          Puedes imaginarla entrando a una reunión, a una comida o a una
          celebración: ¿qué tipo de joya se vería “muy ella” en esa escena?
        </p>
      </section>

      {/* 6. Presupuesto con sentido */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          6. Pensar en el presupuesto sin perder el sentido
        </h2>
        <p className="text-sm text-slate-700">
          Una joya con significado no tiene que ser enorme ni estar llena de
          piedras para ser especial. A veces, una pieza pequeña pero bien
          pensada cuenta más historia que algo muy grande.
        </p>
        <p className="text-sm text-slate-700">
          Si me cuentas tu presupuesto aproximado, puedo sugerirte opciones que
          respeten eso pero mantengan la esencia del regalo que quieres hacer.
        </p>
      </section>

      {/* 7. Cuando escribirme para que la pensemos juntas */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          7. Cuándo escribirme para que pensemos la joya juntas
        </h2>
        <p className="text-sm text-slate-700">
          Si después de leer esto sigues con dudas (muy normal), podemos
          diseñar la pieza juntas. Cuando me escribas por WhatsApp, me ayuda
          que me cuentes:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            ¿Para quién es el regalo? (sin nombre si quieres, basta el vínculo:
            amiga, pareja, mamá, hermana, etc.).
          </li>
          <li>Qué momento quieres marcar (logro, inicio, cierre, apoyo).</li>
          <li>
            Si tienes fotos de cómo se viste o de otras joyas que use, mejor
            aún.
          </li>
          <li>
            Un rango de presupuesto aproximado, para sugerirte opciones realistas.
          </li>
        </ul>
      </section>

      {/* CTA final */}
      <section className="space-y-3 border-t border-slate-200 pt-6">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Te gustaría regalar una joya con historia?
        </h2>
        <p className="text-sm text-slate-700">
          Si quieres que te ayude a elegir o diseñar una joya con significado
          para alguien importante, puedes escribirme por WhatsApp y lo vemos
          juntas:
        </p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
          <span className="font-mono text-xs">
            “Hola Carolina, quiero hacer un regalo con una joya y necesito ayuda
            para elegir algo con significado. Te cuento un poco de la persona…”
          </span>
        </p>

        <a
          href="https://wa.me/56996397495?text=Hola%20Carolina,%20quiero%20regalar%20una%20joya%20con%20significado%20y%20necesito%20ayuda%20para%20elegirla."
          target="_blank"
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
        >
          Escribirme por WhatsApp
        </a>
      </section>
    </main>
  );
}
