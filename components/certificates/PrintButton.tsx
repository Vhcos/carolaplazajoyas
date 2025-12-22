"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      style={{
        border: "1px solid #111",
        background: "#fff",
        padding: "10px 14px",
        borderRadius: 10,
        cursor: "pointer",
        fontSize: 14,
      }}
    >
      Imprimir / Guardar PDF
    </button>
  );
}
