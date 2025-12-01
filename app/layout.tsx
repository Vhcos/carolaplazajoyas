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

export const metadata: Metadata = {
  title: "Carolina Plaza Joyas | Joyas de autor hechas a mano en Chile",
  description:
    "Joyas de autor en plata 950 inspiradas en la Patagonia y el fin del mundo. Diseños únicos hechos a mano por Carolina Plaza.",
  metadataBase: new URL("https://carolaplazajoyas.cl"),
  openGraph: {
    title: "Carolina Plaza Joyas",
    description:
      "Joyas de autor en plata 950 inspiradas en la Patagonia y el fin del mundo.",
    url: "https://carolaplazajoyas.cl",
    siteName: "Carolina Plaza Joyas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Plaza Joyas",
    description:
      "Joyas de autor en plata 950 inspiradas en la Patagonia y el fin del mundo.",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
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
