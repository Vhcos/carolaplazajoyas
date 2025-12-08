// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const destacados = PRODUCTS.filter((p) => p.destacado);

  return (
    <div className="space-y-16">
      {/* Joyas destacadas justo debajo del hero */}
      {destacados.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-semibold text-slate-900">
              Joyas destacadas
            </h2>
            <Link
              href="/producto"
              className="text-xs font-medium text-slate-500 hover:text-slate-700"
            >
              Ver catálogo completo →
            </Link>
          </div>

          <div className="-mx-2 overflow-x-auto pb-4">
            <div className="flex gap-4 px-2">
              {destacados.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[220px] max-w-[230px] md:min-w-[240px] md:max-w-[260px] flex-shrink-0"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hero principal centrado */}
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-6 max-w-2xl">
          {/* Badge navideño */}
          <p className="text-[11px] tracking-[0.25em] uppercase text-rose-500">
            Navidad 2025 · Hecho a mano en Chile
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Joyas de plata 950 para regalar esta Navidad
          </h1>

          <p className="text-sm sm:text-base text-slate-700">
            Piezas únicas y series limitadas trabajadas a pulso en Chile, pensadas
            para convertirse en ese regalo especial que se queda muchos años.
            Del 8 al 13 de diciembre tienes un{" "}
            <span className="font-semibold">10% de descuento</span> en compras
            anticipadas de Navidad mencionando el código{" "}
            <span className="font-mono bg-rose-100 px-1 rounded-sm">
              NAVIDAD10
            </span>{" "}
            al escribir por WhatsApp.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/producto"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Ver catálogo completo
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full border border-rose-200 px-6 py-3 text-sm font-medium text-rose-700 hover:bg-rose-50 transition-colors"
            >
              Encargar una pieza
            </Link>
          </div>

          <div className="border-l-2 border-rose-200 pl-4 text-xs sm:text-sm text-slate-600 max-w-md mx-auto text-left">
            Si quieres asegurar un regalo de Navidad hecho a mano, podemos
            adaptar largo, talla o piedra para que llegue perfecto. Escríbeme y
            lo vemos juntas con tiempo.
          </div>
        </div>

        {/* Imagen hero centrada */}
        <div className="relative w-full max-w-xl lg:max-w-[520px] mx-auto aspect-[16/10] rounded-3xl overflow-hidden border border-rose-100 bg-slate-100">
          <Image
            src="/joyas/prendedor-ginko-bronce.jpg"
            alt="Joyas de autor Carola Plaza"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent" />
          <div className="absolute bottom-4 left-4 text-xs text-slate-100 space-y-1">
            <p className="font-medium">Colección Navidad 2025</p>
            <p className="text-[11px] text-slate-200">
              Plata 950 · Hecho a mano en Chile
            </p>
          </div>
        </div>
      </section>

      {/* Franja de confianza */}
      <section className="border-y border-slate-200 py-4">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-slate-600 px-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            <span>Plata 950 trabajada a mano</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            <span>Piezas únicas y series limitadas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            <span>Envíos a todo Chile</span>
          </div>
        </div>
      </section>

      {/* Grid de categorías tipo Swarovski */}
      <section className="max-w-6xl mx-auto px-2 space-y-6">
        <div className="space-y-2 text-left sm:text-left">
          <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
            Explora por categoría
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-slate-900">
            Elige la pieza que quieres que cuente tu historia
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pulseras y esclavas */}
          <Link href="/producto?categoria=pulseras-esclavas">
            <article className="group h-full rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/joyas/esclava-aventurina-duo-1.jpg"
                  alt="Pulsera y esclava de plata 950"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="px-4 pb-5 pt-4 space-y-2">
                <h3 className="font-serif text-lg text-slate-900">
                  Pulseras y esclavas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Plata 950 que acompaña cada gesto, desde esclavas abiertas
                  hasta pulseras con piedras naturales.
                </p>
                <p className="pt-1 text-xs font-medium text-rose-700 group-hover:underline">
                  Ver pulseras y esclavas
                </p>
              </div>
            </article>
          </Link>

          {/* Collares */}
          <Link href="/producto?categoria=collares">
            <article className="group h-full rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/joyas/colgante-granate-1.jpg"
                  alt="Collar de plata 950 con piedras naturales"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="px-4 pb-5 pt-4 space-y-2">
                <h3 className="font-serif text-lg text-slate-900">Collares</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Desde cadenas finas hasta collares con iniciales y piedras,
                  pensados para volverse tus amuletos diarios.
                </p>
                <p className="pt-1 text-xs font-medium text-rose-700 group-hover:underline">
                  Ver collares
                </p>
              </div>
            </article>
          </Link>

          {/* Colgantes */}
          <Link href="/producto?categoria=colgantes">
            <article className="group h-full rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/joyas/collar-rodocrosita-dorado-1.jpeg"
                  alt="colgante plata cruz martillado"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="px-4 pb-5 pt-4 space-y-2">
                <h3 className="font-serif text-lg text-slate-900">Collar de Piedras</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Collares con piedras naturales, cada uno con propiedades únicas que acompañan tu
                  corazón
                </p>
                <p className="pt-1 text-xs font-medium text-rose-700 group-hover:underline">
                  Ver colgantes
                </p>
              </div>
            </article>
          </Link>

          {/* Anillos */}
          <Link href="/producto?categoria=anillos">
            <article className="group h-full rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/joyas/anillo-agua-marina-redonda-1.jpeg"
                  alt="Anillo de plata 950 con cuarzo rosa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="px-4 pb-5 pt-4 space-y-2">
                <h3 className="font-serif text-lg text-slate-900">Anillos</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Anillos anchos y protagonistas, diseñados para usarse todos
                  los días, no para quedarse guardados en una caja.
                </p>
                <p className="pt-1 text-xs font-medium text-rose-700 group-hover:underline">
                  Ver anillos
                </p>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Proceso a medida con marco esmeralda e imágenes alternadas */}
      <section className="max-w-6xl mx-auto px-2">
        <div className="rounded-3xl border-4 border-emerald-200 bg-emerald-50/60 shadow-md px-4 py-6 sm:px-8 sm:py-8 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700">
              Proceso a medida
            </h2>
            <p className="text-lg sm:text-2xl font-semibold text-slate-900">
              Cómo encargar tu propia pieza
            </p>
            <p className="text-sm text-slate-700 max-w-xl mx-auto">
              Si tienes una idea en mente o quieres transformar un recuerdo en
              joya, podemos diseñarla juntas. Así funciona el proceso:
            </p>
          </div>

          <div className="space-y-6">
            {/* Paso 1: texto izquierda, imagen derecha */}
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-[11px] text-white">
                    1
                  </span>
                  Conversemos tu idea
                </div>
                <p className="text-sm text-slate-700">
                  Me escribes por WhatsApp y me cuentas a quién va dirigida la
                  pieza o qué quieres representar: un viaje, un comienzo, un
                  recuerdo. A partir de eso empezamos a soñar juntas.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-100 bg-emerald-100/60">
                <Image
                  src="/joyas/colgante-inicial-colibri-1.jpg"
                  alt="Bandeja con collares y piedras naturales"
                  fill
                  className="object-cover object-bottom"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:gap-8">
              <div className="space-y-3 md:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-[11px] text-white">
                    2
                  </span>
                  Diseñamos juntas
                </div>
                <p className="text-sm text-slate-700">
                  Definimos forma, tamaño, textura y posibles piedras. Te envío
                  ideas, bocetos y referencias hasta que encontramos el diseño
                  que se siente realmente tuyo.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-100 bg-emerald-100/60 md:order-1">
                <Image
                  src="/joyas/prendedor-ginko-bronce.jpg"
                  alt="Detalle de joya en proceso en el taller"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-[11px] text-white">
                    3
                  </span>
                  La creo en plata 950
                </div>
                <p className="text-sm text-slate-700">
                  Trabajo la pieza a mano en el taller, cuidando cada textura y
                  detalle. Cuando está lista, te la envío con certificado de
                  autenticidad a cualquier lugar de Chile.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-100 bg-emerald-100/60">
                <Image
                  src="/joyas/esclava-aventurina-duo-2.jpg"
                  alt="Esclava de plata 950 terminada con piedras verdes"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href="https://wa.me/56996397495?text=Hola%20Carolina,%20me%20gustaría%20encargar%20una%20pieza%20de%20plata%20950%20a%20medida.%20%C2%BFPodemos%20conversar%20los%20detalles?"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Quiero encargar la mía
            </a>
          </div>
        </div>
      </section>

      {/* Taller al final */}
      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
          Taller
        </h2>
        <p className="text-sm sm:text-base text-slate-700">
          En el taller cada pieza se construye a ritmo humano: calentar,
          martillar, limar, pulir. La plata guarda marcas mínimas que no se
          esconden; son la firma del oficio. Trabajo en pequeñas series y piezas
          únicas, pensadas para acompañar historias: anillos que celebran
          comienzos, colgantes que recuerdan un viaje, aros que te hacen sentir
          más tú. Todas comparten lo mismo: fueron hechas a mano, una por una,
          aquí en Chile.
        </p>
      </section>

      {/* Nota de confianza */}
      <section className="border-t border-slate-200 pt-6 text-xs sm:text-sm text-slate-600">
        Hecho a mano en Chile · Plata 950 · Cada pieza incluye certificado de
        autenticidad.
      </section>
    </div>
  );
}
