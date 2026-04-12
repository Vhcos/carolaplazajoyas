import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, type Product } from "@/data/products";

const HERO_VIDEO_URL = "https://www.youtube-nocookie.com/embed/7BlmzJUWNic?rel=0";
const DIA_MADRE_IDS = ["collar-corazon-amor", "anillo-nombres-personalizado", "colgante-inicial-colibri"] as const;
const WHATSAPP_HOME_URL =
  "https://wa.me/56996397495?text=Hola%20Carola,%20quiero%20asegurar%20una%20pieza%20o%20encargar%20una%20similar.%20%C2%BFLo%20vemos%20por%20aqu%C3%AD%3F";

const trustPoints = [
  { icon: "✦", text: "Plata 950 trabajada a mano" },
  { icon: "◈", text: "Piezas unicas y series limitadas" },
  { icon: "→", text: "Envios a todo Chile" },
  { icon: "◉", text: "Certificado de autenticidad" },
];

const categoryTiles = [
  {
    title: "Anillos",
    href: "/producto?categoria=anillos",
    image: "/joyas/anillo-glaciar-2.jpeg",
    alt: "Anillo de plata 950 con piedra azul",
    description:
      "Piezas protagonistas, curvas organicas y anillos pensados para quedarse en la mano todos los dias.",
    className: "lg:col-span-5",
  },
  {
    title: "Collares",
    href: "/producto?categoria=collares",
    image: "/joyas/colgante-luz-de-agua-1.jpeg",
    alt: "Collar de plata 950 con piedras naturales",
    description:
      "Colgantes, cadenas y piezas de pecho que funcionan como amuletos cotidianos.",
    className: "lg:col-span-4",
  },
  {
    title: "Aros",
    href: "/producto?categoria=aros",
    image: "/joyas/aros-ginko-1.jpeg",
    alt: "Aros de plata y metal trabajado a mano",
    description:
      "Piezas ligeras o protagonistas, siempre trabajadas a mano para acompanar el rostro con movimiento.",
    className: "lg:col-span-3",
  },
  {
    title: "Colgantes",
    href: "/producto?categoria=colgantes",
    image: "/joyas/collar-corazon-nieve-howlita-1.jpeg",
    alt: "Collar de piedras naturales en tonos claros",
    description:
      "Piedras naturales, tonos intensos y collares con presencia para construir capas.",
    className: "lg:col-span-4",
  },
  {
    title: "Pulseras y esclavas",
    href: "/producto?categoria=pulseras-esclavas",
    image: "/joyas/pulsera-eslabon.prenhita-1.jpeg",
    alt: "Pulsera de plata 950 con piedra verde",
    description:
      "Plata 950 que acompana cada gesto con volumen, textura y un calce comodo.",
    className: "lg:col-span-8",
  },
];

const formatCLP = (amount: number) => `$${amount.toLocaleString("es-CL")}`;

function CollectionCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="group cp-surface flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_72px_rgba(36,55,70,0.13)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#edf0f2]">
        <Image
          src={product.fotos[0] ?? "/joyas/placeholder.jpg"}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
        />
        {/* Badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full border border-[rgba(176,143,90,0.35)] bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--cp-gold)] backdrop-blur-sm">
            Regalo ideal
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 py-5">
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--cp-accent)]">
            Dia de la Madre
          </p>
          <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-slate-900">
            {product.nombre}
          </h3>
        </div>

        <p className="text-sm leading-6 text-slate-500 line-clamp-2">{product.descripcionCorta}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2 border-t border-[var(--cp-line)]">
          <span className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
            {formatCLP(product.precio)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-colors group-hover:bg-slate-700">
            Ver pieza →
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="group cp-surface flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#edf0f2]">
        <Image
          src={product.fotos[0] ?? "/joyas/placeholder.jpg"}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 py-5">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-slate-900">
            {product.nombre}
          </h3>
          <p className="text-sm leading-6 text-slate-600">{product.descripcionCorta}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-base font-semibold text-slate-900">
            {formatCLP(product.precio)}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--cp-accent)]">
            Ver pieza
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategoryTile({
  title,
  href,
  image,
  alt,
  description,
  className,
}: (typeof categoryTiles)[number]) {
  return (
    <Link href={href} className={`group block ${className}`}>
      <article className="cp-surface flex h-full flex-col overflow-hidden rounded-[1.9rem]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#edf0f2] lg:min-h-[320px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/8 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="cp-kicker text-white/80">Categoria</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-[2rem]">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-between gap-4 px-5 py-5 sm:px-6">
          <p className="max-w-xl text-sm leading-6 text-slate-600">{description}</p>
          <span className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-[var(--cp-deep)]">
            Explorar
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function HomePage() {
  const diaMadrePieces = DIA_MADRE_IDS.map((id) => PRODUCTS.find((product) => product.id === id)).filter(
    (product): product is Product => Boolean(product)
  );

  const destacados = PRODUCTS.filter(
    (product) => product.destacado && !product.vendido && !DIA_MADRE_IDS.includes(product.id as (typeof DIA_MADRE_IDS)[number])
  ).slice(0, 4);

  return (
    <div className="space-y-16 pb-10 sm:space-y-20">
      <section className="cp-surface relative overflow-hidden rounded-[2.25rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(122,151,167,0.22),transparent_72%)]" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(176,143,90,0.18),transparent_72%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="cp-kicker">Dia de la Madre · 11 de mayo</p>
                <span className="rounded-full border border-[rgba(176,143,90,0.35)] bg-[rgba(176,143,90,0.08)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cp-gold)]">
                  Solo 30 dias
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
                Joyas de plata 950 para regalar a mama
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                Piezas unicas y series limitadas trabajadas a pulso en Chile,
                pensadas para convertirse en ese regalo especial que se queda
                muchos anos. Collares, anillos e iniciales con alma artesanal
                para la persona mas importante.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/producto"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Ver regalos para mama
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-6 py-3 text-sm font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
              >
                Encargar una pieza
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-3 rounded-[1.25rem] border border-white/60 bg-white/50 px-4 py-3.5"
                >
                  <span className="text-base text-[var(--cp-gold)]">{point.icon}</span>
                  <span className="text-sm text-slate-700">{point.text}</span>
                </div>
              ))}
            </div>

            <div className="max-w-xl rounded-[1.4rem] border border-[var(--cp-line)] bg-[rgba(255,255,255,0.54)] px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--cp-accent)]">
                Encargos y ajustes
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Si quieres asegurar la tuya o encargar una similar, escribeme
                por WhatsApp y lo vemos juntas con tiempo.
              </p>
              <Link
                href={WHATSAPP_HOME_URL}
                target="_blank"
                className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
              >
                Escribirme por WhatsApp
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="cp-ring relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e9eef1]">
              <Image
                src="/joyas/Collar Corazon de  Plata.jpeg"
                alt="Collar Corazon de Plata 950, regalo Dia de la Madre"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 460px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="cp-kicker text-white/80">Hecho a mano en Chile</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                    Plata 950, para mama
                  </p>
                </div>
                <span className="rounded-full border border-white/30 bg-black/15 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  Dia de la Madre
                </span>
              </div>
            </div>

            <div className="cp-surface mt-4 overflow-hidden rounded-[1.6rem] lg:absolute lg:-bottom-10 lg:left-[-2.5rem] lg:mt-0 lg:w-[42%]">
              <div className="border-b border-[var(--cp-line)] px-4 py-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--cp-accent)]">
                  Taller en movimiento
                </p>
              </div>
              <div className="relative aspect-[9/16] overflow-hidden bg-slate-100">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={HERO_VIDEO_URL}
                  title="Video Carola Plaza Joyas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {diaMadrePieces.length > 0 && (
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="cp-kicker">Seleccion Dia de la Madre</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Tres piezas pensadas para ella
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-700">
              Un collar con corazon grabado, un anillo con sus nombres y un
              colgante con su inicial. Piezas de plata 950 hechas a mano que
              se convierten en recuerdo para siempre.
            </p>
            <Link
              href="/producto"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-5 py-3 text-sm font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Ver catalogo completo
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {diaMadrePieces.map((product) => (
              <CollectionCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {destacados.length > 0 && (
        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="cp-kicker">Joyas destacadas</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
                Otras piezas que sostienen la coleccion
              </h2>
            </div>

            <Link
              href="/producto"
              className="text-sm font-medium text-[var(--cp-deep)] transition-colors hover:text-slate-900"
            >
              Ver catalogo completo
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {destacados.map((product) => (
              <FeaturedCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="cp-kicker">Explora por categoria</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Un catalogo con distintas maneras de llevar la plata
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {categoryTiles.map((tile) => (
            <CategoryTile key={tile.title} {...tile} />
          ))}
        </div>
      </section>

      <section className="cp-surface rounded-[2.2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-4">
            <p className="cp-kicker">Proceso a medida</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Como encargar tu propia pieza
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-700">
              Si tienes una idea en mente o quieres transformar un recuerdo en
              joya, podemos disenarla juntas a ritmo humano: conversar, probar,
              ajustar y construir.
            </p>
            <a
              href="https://wa.me/56996397495?text=Hola%20Carolina,%20me%20gustaria%20encargar%20una%20pieza%20de%20plata%20950%20a%20medida.%20%C2%BFPodemos%20conversar%20los%20detalles?"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Quiero encargar la mia
            </a>
          </div>

          <div className="space-y-4">
            {[
              {
                number: "01",
                title: "Conversemos tu idea",
                copy:
                  "Me escribes por WhatsApp y me cuentas a quien va dirigida la pieza o que quieres representar: un viaje, un comienzo o un recuerdo.",
              },
              {
                number: "02",
                title: "Definimos forma y materiales",
                copy:
                  "Revisamos tamano, textura, piedras y referencias hasta llegar a un diseno que se sienta realmente tuyo.",
              },
              {
                number: "03",
                title: "La construyo en el taller",
                copy:
                  "Trabajo la pieza a mano en plata 950 y te la envio con certificado de autenticidad a cualquier lugar de Chile.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-[1.4rem] border border-white/60 bg-white/55 px-5 py-5"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                  <span className="text-2xl font-semibold tracking-[-0.03em] text-[var(--cp-accent)]">
                    {step.number}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">{step.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              src: "/joyas/colgante-inicial-colibri-1.jpg",
              alt: "Collares y piedras naturales en el taller",
            },
            {
              src: "/joyas/prendedor-ginko-bronce.jpg",
              alt: "Detalle de joya en proceso en el taller",
            },
            {
              src: "/joyas/esclava-aventurina-duo-2.jpg",
              alt: "Esclava de plata 950 terminada con piedras verdes",
            },
          ].map((image) => (
            <div
              key={image.src}
              className="cp-ring relative aspect-[4/3] overflow-hidden rounded-[1.7rem] bg-[#edf0f2]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, 100vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="cp-surface rounded-[2rem] px-6 py-7 sm:px-8">
          <p className="cp-kicker">Taller</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Oficio, tiempo y material
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            En el taller cada pieza se construye a ritmo humano: calentar,
            martillar, limar y pulir. La plata guarda marcas minimas que no se
            esconden; son parte del oficio. Trabajo en pequenas series y piezas
            unicas, pensadas para acompanar historias reales.
          </p>
        </div>

        <div className="cp-surface rounded-[2rem] px-6 py-7 sm:px-8">
          <p className="cp-kicker">Guias utiles</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Antes de elegir, puedes mirar estas guias
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
            Si tienes dudas con tu talla, el cuidado de la plata 950 o que tipo
            de pieza regalar, estas paginas te orientan antes de escribirme.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/guia-anillos"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
            >
              Como medir tu dedo para anillos
            </Link>
            <Link
              href="/guia-cuidado-plata"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-4 py-2.5 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Cuidado de joyas de plata 950
            </Link>
            <Link
              href="/guia-regalos"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/70 px-4 py-2.5 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Elegir una joya para regalo
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cp-line)] pt-6 text-sm text-slate-600">
        Hecho a mano en Chile · Plata 950 · Cada pieza incluye certificado de
        autenticidad.
      </section>
    </div>
  );
}
