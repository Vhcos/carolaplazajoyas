// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--cp-line)] bg-[rgba(247,243,237,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-12 w-32 overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm sm:h-14 sm:w-40 lg:h-16 lg:w-48">
            <Image
              src="/logo-carola-plaza.svg"
              alt="Carola Plaza Joyas"
              fill
              className="object-contain p-2"
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
            <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-900">
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
