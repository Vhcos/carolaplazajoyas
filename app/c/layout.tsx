export default function CertificateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        :root { color-scheme: light; }

        /* Fondo solo para /c/ */
        .cp-cert-page { background: #f3f3f3; }

        /* Print */
        @media print {
          .no-print { display: none !important; }
          .cp-cert-page { background: #fff !important; }
          .cp-cert-wrap { padding: 0 !important; }
          .cp-cert-sheet { box-shadow: none !important; margin: 0 !important; }
        }
      `}</style>

      <div className="cp-cert-page">
        {children}
      </div>
    </>
  );
}
