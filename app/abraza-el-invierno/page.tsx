"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Snowflake, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP_URL =
  "https://wa.me/56996397495?text=Hola%20Carola,%20quiero%20saber%20m%C3%A1s%20sobre%20la%20colecci%C3%B3n%20Abraza%20el%20invierno.";

const products = [
  {
    id: "anillo-circon-austral",
    name: "Anillo Circón Austral",
    price: "$65.900",
    image: "/joyas/anillo-circon-austral-3.jpeg",
  },
  {
    id: "anillo-prisma-amatista",
    name: "Anillo Prisma Amatista",
    price: "$71.900",
    image: "/joyas/anillo-prisma-amatista-3.jpeg",
  },
  {
    id: "anillo-sirena",
    name: "Anillo Sirena",
    price: "$75.000",
    image: "/joyas/anillo-sirena-1.jpeg",
  },
  {
    id: "anillo-memoria-del-fuego",
    name: "Memoria del Fuego",
    price: "$90.000",
    image: "/joyas/anillo-memoria-del-fuego-1.jpeg",
  },
] as const;

const moodImages = [
  { src: "/joyas/anillo-glaciar-nuevo-1.jpeg", alt: "Anillo Glaciar" },
  { src: "/joyas/anillo-duo-luz-1.jpeg", alt: "Anillo Duo Luz" },
  { src: "/joyas/Anillo pirita gota 1.jpeg", alt: "Anillo Pirita Gota" },
  { src: "/joyas/anillo-amatista-solitario-1.jpeg", alt: "Anillo Amatista Solitario" },
  { src: "/joyas/anillo-granate-facetado-1.jpg", alt: "Anillo Granate Facetado" },
  { src: "/joyas/anillo-personalizado-110000-1.jpeg", alt: "Anillo Personalizado" },
];

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AbrazaElInviernoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div className="min-h-screen">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src="/decor/anillo-cafe-humeante.png"
            alt="Colección Abraza el invierno — Carola Plaza Joyas"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/68 via-slate-800/38 to-slate-900/62" />
        </motion.div>

        {/* diagonal headline — top center */}
        <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center px-6 pt-10 sm:pt-14">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <h1
              className="text-[clamp(3rem,10vw,7rem)] font-semibold text-white leading-[0.9] tracking-[-0.025em]"
              style={{ transform: "rotate(-4deg)" }}
            >
              Abraza el
              <br />
              <span className="text-[var(--cp-gold)]">invierno</span>
            </h1>
          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-10 right-8 z-10"
          >
            <Snowflake
              className="w-10 h-10 text-white/35 animate-spin"
              style={{ animationDuration: "14s" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-20 left-8 z-10 sm:left-12"
          >
            <Sparkles className="w-7 h-7 text-[var(--cp-gold)]/65" />
          </motion.div>
        </div>

        {/* kicker + scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
        >
          <p className="cp-kicker text-white/55 mb-4">Carola Plaza Joyas · Invierno 2026</p>
          <div className="mx-auto h-12 w-px animate-pulse bg-white/28" />
        </motion.div>
      </section>

      {/* ── HORIZONTAL SCROLL PRODUCT STRIP ───────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--cp-deep)" }}>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-white tracking-[-0.03em]"
          >
            Joyas de la colección
          </motion.h2>
          <p className="mt-2 text-xs text-white/40 uppercase tracking-[0.2em]">← desliza →</p>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-5 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-8 snap-x snap-mandatory"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="shrink-0 snap-center"
              style={{ width: "min(78vw, 300px)" }}
            >
              <Link href={`/producto/${product.id}`} className="group block">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <p className="mt-1 text-base font-semibold text-[var(--cp-gold)]">{product.price}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="shrink-0 w-1" aria-hidden />
        </div>
      </section>

      {/* ── STAGGERED MOOD BOARD ──────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl"
          >
            Inspiración invernal
          </motion.h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {moodImages.map((image, index) => {
              const isLarge = index % 3 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className={cn(
                    "cp-ring group relative cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#edf0f2]",
                    isLarge ? "col-span-2 md:col-span-2" : "",
                    index === 1 ? "md:translate-y-10" : "",
                    index === 4 ? "md:-translate-y-10" : ""
                  )}
                  style={{ aspectRatio: isLarge ? "16/9" : "1/1" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 40vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background:
            "radial-gradient(circle at 22% 42%, rgba(197,160,89,0.22) 0%, transparent 55%), radial-gradient(circle at 78% 58%, rgba(116,110,100,0.15) 0%, transparent 55%), linear-gradient(145deg, #222222 0%, #2a271f 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-12">
          <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-[#c5a059] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#7a7469] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="cp-kicker text-[var(--cp-gold)] mb-4">Catálogo completo</p>
            <h2 className="mb-6 text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
              Descubre la colección completa
            </h2>
            <p className="mb-10 text-base text-white/55">
              Cada pieza cuenta una historia de elegancia invernal.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/producto"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--cp-gold)] px-8 py-4 text-sm font-semibold text-[var(--cp-deep)] transition-opacity hover:opacity-90"
                >
                  Ver todas las joyas
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/16"
                >
                  Preguntar por WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
