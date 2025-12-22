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

  const qrSrc = `/qr/${cert.id}.png`;
  const onlineUrl = `https://www.carolaplazajoyas.cl/c/${cert.id}`;

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 14px" }}>
      <style>{`
        /* --- Layout responsive sin depender de Tailwind --- */
        .cert {
          position: relative;
          border: 1px solid #111;
          background: #fff;
          padding: 20px 18px;
          overflow: hidden;
        }

        /* En desktop mantenemos proporción apaisada */
        @media (min-width: 768px) {
          .cert {
            padding: 28px 34px;
            aspect-ratio: 3 / 2;
          }
        }

        .cert-header {
          text-align: center;
          margin-bottom: 14px;
          padding-top: 2px;
        }

        .brand {
          font-size: 12px;
          letter-spacing: 2px;
          color: #333;
        }

        /* Tipos con clamp para que no reviente en móvil */
        .title {
          font-family: serif;
          margin: 8px 0 0;
          font-weight: 700;
          font-size: clamp(22px, 5.6vw, 35px);
          line-height: 1.1;
        }

        .divider {
          height: 1px;
          background: #111;
          margin-top: 14px;
        }

        .top-grid {
          display: grid;
          grid-template-columns: 1fr; /* móvil: 1 columna */
          gap: 16px;
          align-items: start;
          margin-top: 10px;
        }

        @media (min-width: 768px) {
          .top-grid {
            grid-template-columns: 1.2fr 0.8fr; /* desktop */
            gap: 18px;
          }
        }

        .piece-title {
          font-family: serif;
          margin: 0 0 10px;
          font-weight: 700;
          font-size: clamp(22px, 6.2vw, 36px);
          line-height: 1.05;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr; /* móvil */
          gap: 10px;
          align-items: start;
        }

        @media (min-width: 768px) {
          .info-grid {
            grid-template-columns: 220px 1fr;
            gap: 12px;
          }
        }

        .id-box {
          color: #111;
          font-size: clamp(14px, 4.6vw, 22px);
          line-height: 1.5;
        }

        .details {
          font-size: clamp(14px, 4.2vw, 18px);
          line-height: 1.6;
        }

        .qr-wrap {
          text-align: center; /* móvil: centrado */
        }

        @media (min-width: 768px) {
          .qr-wrap {
            text-align: right; /* desktop: a la derecha */
          }
        }

        .qr-card {
          display: inline-block;
          text-align: center;
        }

        .qr-frame {
          border: 1px solid #111;
          padding: 10px;
          background: #fff;
          display: inline-block;
        }

        /* QR responsive: en móvil no puede ser fijo 250 */
        .qr-img {
          width: min(62vw, 230px);
          height: auto;
          display: block;
        }

        @media (min-width: 768px) {
          .qr-img {
            width: 250px; /* mantiene tu tamaño grande en desktop */
          }
        }

        .qr-label {
          margin-top: 8px;
          font-size: 12px;
          color: #333;
        }

        .qr-url {
          margin-top: 4px;
          font-size: 11px;
          color: #666;
          word-break: break-all;
        }

        .soft-divider {
          height: 6px;
          background: #e6e6e6;
          margin: 10px 0 10px;
        }

        .care-title {
          font-family: serif;
          margin: 0 0 8px;
          font-weight: 700;
          font-size: clamp(18px, 5.6vw, 30px);
        }

        .care-list {
          margin: 0;
          padding-left: 18px;
          font-size: clamp(14px, 4.6vw, 20px);
          line-height: 1.35;
          columns: 1; /* móvil */
          column-gap: 26px;
        }

        @media (min-width: 768px) {
          .care-list {
            columns: 2; /* desktop 2 columnas */
          }
        }

        .avoid-break {
          break-inside: avoid;
        }

        /* Logo dentro del certificado */
        $1

        .logoImg {
          width: clamp(44px, 10vw, 78px);
          height: auto;
        }
@media (min-width: 768px) {
          .logo {
            top: 22px;
            left: 22px;
          }
        }

        /* Print: que salga bonito y grande */
        @media print {
          header, nav, footer, .no-print { display: none !important; }
          body { background: #fff !important; }
          main { padding: 0 !important; }
          .cert { max-width: none !important; width: 100% !important; }
        }
      `}</style>

      <section className="cert">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/icon.svg"
            alt="Carola Plaza — Joyas de Autor"
            width={78}
            height={78}
            priority
          />
        </div>

        {/* Header */}
        <header className="cert-header">
          <div className="brand">CAROLA PLAZA — JOYAS DE AUTOR</div>

          <h1 className="title">Certificado de Autenticidad</h1>

          <div className="divider" />
        </header>

        {/* Datos + QR */}
        <div className="top-grid">
          <div>
            <h2 className="piece-title">{cert.nombre}</h2>

            <div className="info-grid">
              <div className="id-box">
                <div>
                  <b>ID</b>: {cert.id}
                </div>
                <div>
                  <b>Fecha</b>: {cert.fecha}
                </div>
              </div>

              <div className="details">
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

                {cert.descripcion ? (
                  <div style={{ marginTop: 6 }}>
                    <b>Descripción</b>: {cert.descripcion}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <aside className="qr-wrap">
            <div className="qr-card">
              <div className="qr-frame">
                <Image
                  src={qrSrc}
                  alt={`QR certificado ${cert.id}`}
                  width={500}
                  height={500}
                  className="qr-img"
                />
              </div>

              <div className="qr-label">Certificado online</div>
              <div className="qr-url">{onlineUrl}</div>
            </div>
          </aside>
        </div>

        <div className="soft-divider" />

        {/* Cuidados */}
        <h3 className="care-title">Cuidados</h3>

        <ul className="care-list">
          <li className="avoid-break">Evita perfumes, cremas, alcohol gel y cloro.</li>
          <li className="avoid-break">Quítatela para dormir, ducharte, entrenar o entrar al mar/piscina.</li>
          <li className="avoid-break">Guárdala por separado, idealmente en bolsita o caja, lejos de humedad.</li>
          <li className="avoid-break">Limpia con paño suave y seco; para plata, usa paño específico para plata.</li>
          <li className="avoid-break">Evita golpes y fricción con otras piezas.</li>
        </ul>
      </section>
    </main>
  );
}
