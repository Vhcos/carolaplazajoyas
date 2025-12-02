// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const SITE_URL = "https://www.carolaplazajoyas.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Carola Plaza | Joyas de autor en plata 950 hechas a mano en Chile",
    template: "%s | Carola Plaza",
  },
  description:
    "Joyas de autor en plata 950 hechas a mano en Chile por Carola Plaza. Piezas únicas y series limitadas con piedras naturales y certificado de autenticidad.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Carola Plaza",
    title:
      "Carola Plaza | Joyas de autor en plata 950 hechas a mano en Chile",
    description:
      "Joyas de autor en plata 950 hechas a mano en Chile por Carola Plaza. Piezas únicas y series limitadas con piedras naturales y certificado de autenticidad.",
    images: [
      {
        // imagen que se usará al compartir la home
        url: "/joyas/prendedor-ginko-bronce.jpg",
        width: 1200,
        height: 630,
        alt: "Joyas de autor en plata 950 hechas a mano por Carola Plaza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carola Plaza | Joyas de autor en plata 950",
    description:
      "Piezas únicas de plata 950 hechas a mano en Chile por Carola Plaza.",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Carola Plaza",
    url: SITE_URL,
    description:
      "Joyas de autor en plata 950 hechas a mano en Chile por Carola Plaza.",
    sameAs: [
      // reemplaza por el Instagram real si cambia
      "https://www.instagram.com/carolaplazajoyas",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Chile",
    },
  };

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // importante: JSON.stringify para que sea JSON válido
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
