import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CERTIFICATES } from "@/data/certificates";

type ParamsPromise = Promise<{ id: string }>;
type PageProps = { params: ParamsPromise };

export function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return (async () => {
    const { id } = await params;
    const cert = CERTIFICATES[id];

    if (!cert) {
      return {
        title: "Certificado no encontrado",
        robots: { index: false, follow: false },
      };
    }

    return {
      title: `Certificado ${cert.id} | ${cert.nombre}`,
      description: `Certificado de autenticidad de ${cert.nombre} — Carola Plaza Joyas.`,
      robots: { index: false, follow: false },
    };
  })();
}

export default async function CertificatePage({ params }: PageProps) {
  const { id } = await params;
  const cert = CERTIFICATES[id];
  if (!cert) return notFound();

  const qrSrc = `/qr/${cert.id}.png`; // generado por tu script
  const onlineUrl = `https://www.carolaplazajoyas.cl/c/${cert.id}`;

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 14px" }}>
      <section
        style={{
          position: "relative",
          border: "1px solid #111",
          background: "#fff",
          padding: "28px 34px",
          aspectRatio: "3 / 2",
          overflow: "hidden",
        }}
      >
        {/* Logo arriba a la izquierda, dentro del certificado */}
        <div style={{ position: "absolute", top: 22, left: 22 }}>
          <Image
            src="/icon.svg"
            alt="Carola Plaza — Joyas de Autor"
            width={78}
            height={78}
            priority
          />
        </div>

        {/* Header */}
        <header style={{ textAlign: "center", paddingTop: 4, marginBottom: 14 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, color: "#333" }}>
            CAROLA PLAZA — JOYAS DE AUTOR
          </div>

          <h1
            style={{
              fontFamily: "serif",
              margin: "8px 0 0",
              fontSize: 35,
              fontWeight: 700,
            }}
          >
            Certificado de Autenticidad
          </h1>

          <div
            style={{
              height: 1,
              background: "#111",
              margin: "14px 0 0",
            }}
          />
        </header>

        {/* Contenido superior: datos + QR */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 18,
            alignItems: "start",
            marginTop: 8,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "serif",
                margin: "0 0 10px",
                fontSize: 36,
                fontWeight: 700,
              }}
            >
              {cert.nombre}
            </h2>

            <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "220px 1fr",
                  gap: 3,
                  alignItems: "start",
                }}
              >
                <div style={{ color: "#111", fontSize: 22, lineHeight: 1.5 }}>
                  <div>
                    <b>ID</b>: {cert.id}
                  </div>
                  <div>
                    <b>Fecha</b>: {cert.fecha}
                  </div>
                </div>

                <div style={{ fontSize: 18, lineHeight: 1.65 }}>
                  <div>
                    <b>Material</b>: {cert.material}
                  </div>
                  <div>
                    <b>Piedra</b>: {cert.piedra}
                  </div>
                  <div>
                    <b>Cadena</b>: {cert.cadena}
                  </div>
                  <div>
                    <b>Medidas</b>: {cert.medidas}
                  </div>
                  <div>
                    <b>Técnica</b>: {cert.tecnica}
                  </div>

                  {/* NUEVO: Descripción debajo de Técnica */}
                  {cert.descripcion ? (
                    <div style={{ marginTop: 6 }}>
                      <b>Descripción</b>: {cert.descripcion}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>


          {/* QR (25% más grande) */}
          <aside style={{ textAlign: "right" }}>
            <div style={{ display: "inline-block", textAlign: "center" }}>
              <div
                style={{
                  border: "1px solid #111",
                  padding: 10,
                  background: "#fff",
                }}
              >
                <Image
                  src={qrSrc}
                  alt={`QR certificado ${cert.id}`}
                  width={250}   // antes típico ~150; 190 es ~+25%
                  height={250}
                />
              </div>
              <div style={{ marginTop: 8, fontSize: 12, color: "#333" }}>
                Certificado online
              </div>
              <div style={{ marginTop: 4, fontSize: 11, color: "#666" }}>
                {onlineUrl}
              </div>
            </div>
          </aside>
        </div>

        {/* Divider suave */}
        <div style={{ height: 6, background: "#e6e6e6", margin: "8px 0" }} />

        {/* Cuidados (2 columnas para que entre en formato apaisado) */}
        <h3 style={{ fontFamily: "serif", margin: "0 0 8px", fontSize: 30, fontWeight: 700 }}>
          Cuidados
        </h3>

        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            fontSize: 20, // + tamaño general
            lineHeight: 1.3,
            columns: 2,
            columnGap: 26,
          }}
        >
          <li style={{ breakInside: "avoid" }}>Evita perfumes, cremas, alcohol gel y cloro.</li>
          <li style={{ breakInside: "avoid" }}>Quítatela para dormir, ducharte, entrenar o entrar al mar/piscina.</li>
          <li style={{ breakInside: "avoid" }}>Guárdala por separado, idealmente en bolsita o caja, lejos de humedad.</li>
          <li style={{ breakInside: "avoid" }}>Limpia con paño suave y seco; para plata, usa paño específico para plata.</li>
          <li style={{ breakInside: "avoid" }}>Evita golpes y fricción con otras piezas.</li>
        </ul>

       
      </section>
    </main>
  );
}
