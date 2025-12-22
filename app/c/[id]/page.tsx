import { notFound } from "next/navigation";
import { CERTIFICATES } from "@/data/certificates";

type Params = { id: string };
type PageProps = { params: Promise<Params> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CERTIFICATES).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const cert = CERTIFICATES[id];

  if (!cert) {
    return {
      title: "Certificado no encontrado — Carola Plaza",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `Certificado ${cert.id} — Carola Plaza`,
    description: `Certificado de autenticidad de ${cert.nombre}.`,
    robots: { index: false, follow: false },
  };
}

export default async function CertificatePage({ params }: PageProps) {
  const { id } = await params;
  const cert = CERTIFICATES[id];
  if (!cert) return notFound();

  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "56px 20px", color: "#111" }}>
      <div style={{ border: "1px solid #111", padding: 34, background: "#fff" }}>
        <header style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, color: "#333" }}>
            CAROLA PLAZA — JOYAS DE AUTOR
          </div>
          <h1 style={{ fontFamily: "ui-serif, Georgia, serif", margin: "12px 0 0", fontSize: 30, fontWeight: 600 }}>
            Certificado de Autenticidad
          </h1>
          <div style={{ marginTop: 8, color: "#444", fontSize: 15 }}>
            Lujo silencioso. Hecho a mano, pieza por pieza.
          </div>
        </header>

        <hr style={{ border: "none", borderTop: "1px solid #111", margin: "18px 0 22px" }} />

        <h2 style={{ fontFamily: "ui-serif, Georgia, serif", margin: "0 0 14px", fontSize: 22, fontWeight: 600 }}>
          {cert.nombre}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: 22, alignItems: "start" }}>
          <aside style={{ color: "#666", fontSize: 13, lineHeight: 1.6 }}>
            <div><b style={{ color: "#111" }}>ID</b>: {cert.id}</div>
            <div><b style={{ color: "#111" }}>Fecha</b>: {cert.fecha}</div>
          </aside>

          <section style={{ fontSize: 15.5, lineHeight: 1.8 }}>
            <div><b>Material</b>: {cert.material}</div>
            <div><b>Piedra</b>: {cert.piedra}</div>
            <div><b>Cadena</b>: {cert.cadena}</div>
            <div><b>Medidas</b>: {cert.medidas}</div>
            <div><b>Técnica</b>: {cert.tecnica}</div>
          </section>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "22px 0" }} />

        <h3 style={{ fontFamily: "ui-serif, Georgia, serif", margin: "0 0 10px", fontSize: 18, fontWeight: 600 }}>
          Cuidado
        </h3>

        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85, fontSize: 15.5 }}>
          <li>Evita perfumes, cremas, alcohol gel y cloro.</li>
          <li>Quítatela para dormir, ducharte, entrenar o entrar al mar/piscina.</li>
          <li>Guárdala por separado, idealmente en bolsita o caja, lejos de humedad.</li>
          <li>Limpia con paño suave y seco; para plata, usa paño específico para plata.</li>
          <li>Evita golpes y fricción con otras piezas.</li>
        </ul>

        <p style={{ marginTop: 18, color: "#666", fontSize: 12.5, lineHeight: 1.6 }}>
          Nota: cada piedra es natural; vetas y tonos pueden variar. Este certificado valida la pieza y
          no es un comprobante de compra.
        </p>
      </div>
    </main>
  );
}
