// app/guia-piedras/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piedras que uso en el taller y sus significados | Carola Plaza Joyas",
  description:
    "Cuarzo rosa, amatista, aventurina y otras piedras naturales que uso en el taller: sus significados, energías y en qué tipo de joyas se ven mejor.",
};

export default function GuiaPiedrasPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
          Guía de piedras
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Piedras que uso en el taller y qué significan
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          Muchas de las joyas que hago combinan <strong>plata 950</strong> con{" "}
          <strong>piedras naturales</strong>. Más allá de lo estético, a varias
          personas les importa la historia y la energía que se asocia a cada
          piedra. Esta guía no es un manual rígido, sino una manera de ayudarte
          a elegir la que más resuene contigo o con la persona que recibirá la
          joya.
        </p>
      </header>

      {/* Cuarzo rosa */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Cuarzo rosa: amor propio y suavidad
        </h2>
        <p className="text-sm text-slate-700">
          El <strong>cuarzo rosa</strong> es probablemente una de las piedras
          más conocidas cuando hablamos de amor, pero no solo en el sentido
          romántico. Se asocia mucho al{" "}
          <strong>amor propio, la dulzura y la ternura</strong>.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Se vincula con la idea de <strong>cuidarse a una misma</strong> y
            de darse permiso para sentir con calma.
          </li>
          <li>
            Es una buena piedra para regalos que tengan que ver con{" "}
            <strong>cicatrizar procesos</strong>, acompañar duelos suaves o
            celebrar etapas de crecimiento personal.
          </li>
          <li>
            Visualmente, sus tonos suaves funcionan muy bien en{" "}
            <strong>anillos protagonistas</strong> y{" "}
            <strong>colgantes cercanos al corazón</strong>.
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Suele quedar muy lindo en piezas donde la plata abraza la piedra y la
          deja respirar, sin cubrirla demasiado.
        </p>
      </section>

      {/* Amatista */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Amatista: calma, intuición y equilibrio
        </h2>
        <p className="text-sm text-slate-700">
          La <strong>amatista</strong> es una piedra que muchas personas
          relacionan con la <strong>calma mental</strong> y la{" "}
          <strong>intuición</strong>. Sus tonos morados van desde lo muy suave
          hasta lo profundo.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Se asocia a <strong>ordenar la mente</strong>, bajar revoluciones
            y encontrar un poco más de centro.
          </li>
          <li>
            Puede ser un lindo símbolo para alguien que está en una etapa de{" "}
            <strong>decisiones importantes</strong> o cambios.
          </li>
          <li>
            Estéticamente combina muy bien con plata martillada y texturas,
            porque el morado contrasta con el brillo metálico.
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Me gusta usarla en colgantes y anillos que no son demasiado pequeños,
          para que su color tenga espacio para aparecer.
        </p>
      </section>

      {/* Aventurina */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Aventurina: nuevos caminos y expansión
        </h2>
        <p className="text-sm text-slate-700">
          La <strong>aventurina</strong> suele relacionarse con la{" "}
          <strong>buena suerte, los nuevos comienzos y la expansión</strong>.
          Sus tonos verdes pueden variar, pero casi siempre evocan algo fresco y
          vivo.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            Es una buena piedra para marcar etapas como{" "}
            <strong>emprender, cambiar de ciudad o comenzar un proyecto</strong>
            .
          </li>
          <li>
            El verde tiene una energía muy vinculada a lo{" "}
            <strong>natural, al corazón y al abrir caminos</strong>.
          </li>
          <li>
            Se ve especialmente bien en <strong>esclavas y pulseras</strong>,
            acompañando los gestos de las manos.
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          En piezas donde la plata tiene formas fluidas, la aventurina da un
          toque de frescura sin ser demasiado estridente.
        </p>
      </section>

      {/* Otras piedras / libertad */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          No se trata de reglas: se trata de resonancia
        </h2>
        <p className="text-sm text-slate-700">
          Más que seguir un manual rígido de “esta piedra sirve para esto”, me
          interesa que la pieza conecte con{" "}
          <strong>lo que tú quieres representar</strong>. A veces alguien elige
          amatista por calma, pero termina quedándose con cuarzo rosa porque lo
          siente más propio.
        </p>
        <p className="text-sm text-slate-700">
          También uso otras piedras y combinaciones según el diseño y la
          historia que estemos construyendo. Lo importante es que{" "}
          <strong>la joya cuente algo tuyo</strong>, no que cumpla una lista de
          requisitos místicos.
        </p>
      </section>

      {/* Cómo elegir tu piedra */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Cómo elegir la piedra para tu próxima joya?
        </h2>
        <p className="text-sm text-slate-700">
          Si estás pensando en encargar una pieza con piedra, puedes guiarte
          por estas preguntas:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            <strong>¿Qué estás viviendo ahora?</strong> ¿Un comienzo, un cierre,
            un descanso, un impulso?
          </li>
          <li>
            <strong>¿Qué quieres que te recuerde la joya</strong> cuando la
            mires? ¿Calma, fuerza, ternura, coraje?
          </li>
          <li>
            <strong>¿Con qué color conectas más?</strong> A veces el cuerpo
            sabe antes que la cabeza.
          </li>
        </ul>
        <p className="text-sm text-slate-700">
          Puedes escribir y contarme un poco de tu momento, y desde ahí vemos
          juntas qué combinación de plata + piedra podría acompañarte mejor.
        </p>
      </section>

      {/* CTA final */}
      <section className="space-y-3 border-t border-slate-200 pt-6">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          ¿Te gustaría una joya con una piedra específica?
        </h2>
        <p className="text-sm text-slate-700">
          Si tienes en mente una piedra (o no tienes idea y quieres que lo
          conversemos), puedes escribirme por WhatsApp. Vemos juntas el diseño,
          la piedra y el significado que quieres que te acompañe.
        </p>
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
          <span className="font-mono text-xs">
            “Hola Carolina, quiero encargar una joya con piedra y no sé si
            elegir cuarzo rosa, amatista o aventurina. Te cuento un poco de mi
            momento…”
          </span>
        </p>

        <a
          href="https://wa.me/56996397495?text=Hola%20Carolina,%20quiero%20encargar%20una%20joya%20con%20piedras%20naturales%20y%20necesito%20ayuda%20para%20elegir."
          target="_blank"
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
        >
          Escribirme por WhatsApp
        </a>
      </section>
    </main>
  );
}
