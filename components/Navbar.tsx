// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/producto", label: "Catálogo" },
  { href: "/guias", label: "Guías" },
  { href: "/contacto", label: "Contacto" },
];


export default function Navbar() {
  const pathname = usePathname();

  // Rodolfo solo en diciembre (mes 11)
  const now = new Date();
  const showRodolfo = now.getMonth() === 11;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-6 lg:px-8">
        {/* Marca con logo + Rodolfo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-14 w-24 sm:h-16 sm:w-28 rounded-lg bg-white border border-slate-300 overflow-hidden">
            <Image
              src="/logo-carola-plaza.svg"
              alt="Carola Plaza Joyas"
              fill
              className="object-contain"
              priority
            />
          </div>

          {showRodolfo && (
            <div className="relative h-10 w-32 sm:h-12 sm:w-40">
              <Image
                src="/rodolfo.gif"
                alt="Rodolfo el reno"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          <span className="sr-only">Carola Plaza Joyas</span>
        </Link>

        {/* Navegación + Webpay + Instagram */}
        <nav className="flex items-center justify-center gap-3 sm:justify-end sm:gap-6">
          <ul className="flex items-center gap-3 text-[11px] sm:gap-4 sm:text-sm">
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

          {/* Webpay siempre visible */}
          <Image
            src="/webpay-logo.png"
            alt="Webpay"
            width={80}
            height={20}
            className="h-4 w-auto"
          />

          {/* Instagram: solo desde sm hacia arriba */}
          <a
            href="https://www.instagram.com/carolaplazajoyas/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1.5 text-[11px] font-medium text-rose-700 hover:bg-rose-50 sm:px-4 sm:text-xs"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
