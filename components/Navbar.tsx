// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Catalogo" },
  { href: "/guias", label: "Guias" },
  { href: "/contacto", label: "Contacto" },
  { href: "/admin", label: "Admin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const now = new Date();
  const showRodolfo = now.getMonth() === 11;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[var(--cp-line)] transition-all duration-300 ${
        isScrolled
          ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(249,248,246,0.94))] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-14 w-40 overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm sm:h-16 sm:w-48 lg:h-20 lg:w-60">
            <Image
              src="/logo-carola-plaza.svg"
              alt="Carola Plaza Joyas"
              fill
              className="object-contain"
              priority
            />
          </div>

          {showRodolfo && (
            <div className="relative hidden h-12 w-24 sm:block">
              <Image
                src="/rodolfo.gif"
                alt="Rodolfo el reno"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          <div className="hidden sm:block">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--cp-accent)]">
              Plata 950
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              Joyas hechas a mano en Chile
            </p>
          </div>

          <span className="sr-only">Carola Plaza Joyas</span>
        </Link>

        <div className="flex flex-col gap-3 lg:items-end">
          <nav className="flex flex-wrap items-center gap-3 lg:justify-end">
            <ul className="flex flex-wrap items-center gap-2 rounded-full border border-[var(--cp-line)] bg-white/65 px-2 py-1 shadow-sm">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                        active
                          ? "inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white"
                          : "inline-flex rounded-full px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-900"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2 rounded-full border border-[var(--cp-line)] bg-white/65 px-3 py-2 shadow-sm">
              <Image
                src="/webpay-logo.png"
                alt="Webpay"
                width={80}
                height={20}
                className="h-4 w-auto"
              />
            </div>

            <Link
              href="/contacto"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--cp-line)] bg-white/70 text-[var(--cp-deep)] transition-colors hover:bg-white"
              aria-label="Cuenta"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c2-4 5-6 8-6s6 2 8 6" />
              </svg>
            </Link>

            <Link
              href="/producto"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--cp-line)] bg-white/70 text-[var(--cp-deep)] transition-colors hover:bg-white"
              aria-label="Carro"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 5h2l2.2 9h9.8l2-7H7.2" />
                <circle cx="10" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
              </svg>
            </Link>

            <a
              href="https://www.instagram.com/carolaplazajoyas/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--cp-line)] bg-white/65 px-4 py-2 text-xs font-medium text-[var(--cp-deep)] transition-colors hover:bg-white"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
