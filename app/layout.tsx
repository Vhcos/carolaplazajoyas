// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import AnnouncementBar from "@/components/AnnouncementBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

export const SITE_URL = "https://www.carolaplazajoyas.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Joyas de plata 950 hechas a mano en Chile | Carola Plaza Joyas",
    template: "%s | Carola Plaza Joyas",
  },
  description:
    "Joyas de autor en plata 950 hechas a mano en Chile por Carola Plaza. Piezas únicas y series limitadas con piedras naturales y certificado de autenticidad.",
  keywords: [
    "joyas de plata 950",
    "joyería de autor",
    "joyas artesanales Chile",
    "anillos de plata 950",
    "colgantes de plata 950",
    "joyas hechas a mano",
    "Carola Plaza Joyas",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Carola Plaza Joyas",
    title: "Joyas de plata 950 hechas a mano en Chile | Carola Plaza Joyas",
    description:
      "Joyas de autor en plata 950 trabajadas a mano en Chile. Piezas únicas y series limitadas con piedras naturales y certificado de autenticidad.",
    images: [
      {
        url: "/joyas/prendedor-ginko-bronce.jpg",
        width: 1200,
        height: 630,
        alt: "Joyas de autor en plata 950 hechas a mano por Carola Plaza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyas de plata 950 hechas a mano en Chile | Carola Plaza Joyas",
    description: "Piezas únicas de plata 950 hechas a mano en Chile por Carola Plaza.",
  },
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Carola Plaza",
    url: SITE_URL,
    description: "Joyas de autor en plata 950 hechas a mano en Chile por Carola Plaza.",
    sameAs: ["https://www.instagram.com/carolaplazajoyas"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Chile",
    },
  };

  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col text-slate-900 antialiased">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8">
            <PromoBanner />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
