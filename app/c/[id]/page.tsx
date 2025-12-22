// app/c/[id]/page.tsx
import { notFound } from "next/navigation";
import { CERTIFICATES } from "@/data/certificates";

export default function CertificatePage({
  params,
}: {
  params: { id: string };
}) {
  const cert = CERTIFICATES[params.id];
  if (!cert) return notFound();

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px" }}>
      <div style={{ border: "1px solid #111", padding: 28 }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, color: "#333" }}>
            CAROLA PLAZA — JOYAS DE AUTOR
          </div>
          <h1 style={{ fontFamily: "serif", margin: "10px 0 0", fontSize: 28 }}>
            Certificado de Autenticidad
          </h1>
          <div style={{ marginTop: 8, color: "#444" }}>
            Lujo silencioso. Hecho a mano, pieza por pieza.
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #111", margin: "18px 0" }} />

        <h2 style={{ fontFamily: "serif", margin: "0 0 10px", fontSize: 20 }}>
          {cert.nombre}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 18 }}>
          <div style={{ color: "#666", fontSize: 12 }}>
            <div><b>ID</b>: {cert.id}</div>
            <div><b>Fecha</b>: {cert.fecha}</div>
          </div>

          <div style={{ fontSize: 15, lineHeight: 1.6 }}>
            <div><b>Material</b>: {cert.material}</div>
            <div><b>Piedra</b>: {cert.piedra}</div>
            <div><b>Cadena</b>: {cert.cadena}</div>
            <div><b>Medidas</b>: {cert.medidas}</div>
            <div><b>Técnica</b>: {cert.tecnica}</div>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "18px 0" }} />

        <h3 style={{ fontFamily: "serif", margin: "0 0 10px" }}>Cuidado</h3>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Evita perfumes, cremas, alcohol gel y cloro.</li>
          <li>Quítatela para dormir, ducharte, entrenar o entrar al mar/piscina.</li>
          <li>Guárdala por separado, idealmente en bolsita o caja, lejos de humedad.</li>
          <li>Limpia con paño suave y seco; para plata, usa paño específico para plata.</li>
          <li>Evita golpes y fricción con otras piezas.</li>
        </ul>

        <p style={{ marginTop: 16, color: "#666", fontSize: 12 }}>
          Nota: cada piedra es natural; vetas y tonos pueden variar. Este certificado valida
          la pieza y no es un comprobante de compra.
        </p>
      </div>
    </main>
  );
}
