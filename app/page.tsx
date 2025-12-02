// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const destacados = PRODUCTS.filter((p) => p.destacado);

  return (
    <div className="space-y-12">
      {/* Hero principal centrado */}
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-6 max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-rose-500">
            Hecho a mano en Chile
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Piezas únicas de plata 950
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            Plata 950 trabajada a pulso en Chile. Piezas únicas y series
            limitadas con certificado de autenticidad, pensadas para usarse y
            heredarse.
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
            Cada joya se hace en pequeñas series o como pieza única. Si te
            enamoras de un diseño, conversemos la mejor forma de adaptarlo a ti.
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
            <p className="font-medium">Colección Verano 2025</p>
            <p className="text-[11px] text-slate-200">
              Plata 950 · Hecho a mano en Chile
            </p>
          </div>
        </div>
      </section>

      {/* Manifiesto breve centrado en ancho */}
      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
          Taller
        </h2>
        <p className="text-sm sm:text-base text-slate-700">
          En el taller cada pieza se construye a ritmo humano: calentar,
          martillar, limar, pulir. La plata guarda marcas mínimas que no se
          esconden; son la firma del oficio. No trabajo para llenar vitrinas,
          sino para acompañar historias: anillos que celebran comienzos,
          colgantes que recuerdan un viaje, aros que te hacen sentir más tú.
          Algunas piezas existen una sola vez, otras en series pequeñas donde
          cada una es ligeramente distinta. Todas comparten lo mismo: fueron
          hechas a mano, una por una, aquí en Chile.
        </p>
      </section>

      {/* Bloques Piezas únicas / Series limitadas */}
      <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">
            Piezas únicas · 1/1
          </h3>
          <p className="text-sm text-slate-600">
            Piezas que se diseñan y construyen una sola vez. No hay copias ni
            “otra igual”. Cada curva, textura y soldadura queda registrada como
            huella del proceso, ideal para regalos con historia o para marcar un
            momento solo tuyo.
          </p>
          <Link
            href="/piezas-unicas"
            className="inline-flex items-center text-sm font-medium text-rose-700 hover:text-rose-800"
          >
            Ver piezas únicas →
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">
            Series limitadas · x/y
          </h3>
          <p className="text-sm text-slate-600">
            Colecciones pequeñas que nacen de una misma idea de diseño.
            Comparten estructura, pero se terminan a mano, con variaciones en
            textura, pulido o piedra. Se numeran como{" "}
            <span className="font-mono">No. x/y</span> e incluyen certificado de
            autenticidad.
          </p>
          <Link
            href="/series-limitadas"
            className="inline-flex items-center text-sm font-medium text-rose-700 hover:text-rose-800"
          >
            Ver series limitadas →
          </Link>
        </div>
      </section>

      {/* Destacados (mantiene ancho del layout) */}
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Nota de confianza */}
      <section className="border-t border-slate-200 pt-6 text-xs sm:text-sm text-slate-600">
        Hecho a mano en Chile · Plata 950 · Cada pieza incluye certificado de
        autenticidad.
      </section>
    </div>
  );
}
