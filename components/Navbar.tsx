// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Marca con logo grande */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-25 w-25 sm:h-27 sm:w-27 rounded-lg bg-white border border-slate-300 overflow-hidden">
            {/* usa /public/logo-carola-plaza.svg o .png */}
            <Image
              src="/logo-carola-plaza.svg"
              alt="Carola Plaza Joyas"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.28em] text-slate-500 uppercase">
              Carola Plaza
            </span>
            <span className="text-[11px] sm:text-xs text-slate-600">
              Joyas de autor · Plata 950
            </span>
          </div>
        </Link>

        {/* Navegación + Instagram */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-4 text-xs sm:flex sm:text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      active
                        ? "font-medium text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="https://www.instagram.com/carolaplazajoyas/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1.5 text-[11px] font-medium text-rose-700 hover:bg-rose-50 sm:px-4 sm:text-xs"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
