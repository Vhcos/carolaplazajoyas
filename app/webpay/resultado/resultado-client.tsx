// app/webpay/resultado/resultado-client.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function ResultadoClient() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const buyOrder = searchParams.get("buyOrder");
  const amount = searchParams.get("amount");

  const isSuccess = status === "success";

  // Mensaje para WhatsApp cuando el pago fue exitoso
  const whatsappText = isSuccess
    ? `Hola Carolina, acabo de pagar una joya en tu web.\n\nOrden: ${
        buyOrder ?? "sin orden"
      }\nMonto: $${amount ?? ""}\n\nMi nombre es ______ y mis datos de envío son: ______.`
    : `Hola Carolina, tuve un problema al pagar en la web. ¿Me puedes ayudar?`;

  const whatsappUrl = `https://wa.me/56996397495?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold">
        {isSuccess ? "¡Pago recibido con éxito!" : "No se pudo confirmar tu pago"}
      </h1>

      <p className="mt-3 text-sm text-zinc-600">
        {isSuccess ? (
          <>
            Tu compra fue autorizada.
            <br />
            Carolina se pondrá en contacto contigo para coordinar envío o
            entrega de tu joya.
          </>
        ) : (
          <>
            Ocurrió un problema al procesar la transacción.
            <br />
            Si crees que hubo un cobro, escríbenos por WhatsApp con el
            comprobante para revisarlo.
          </>
        )}
      </p>

      {amount && (
        <p className="mt-3 text-xs text-zinc-500">
          Monto: ${amount} · Orden: {buyOrder || "—"}
        </p>
      )}

      {/* Botón WhatsApp para coordinar el pedido */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#1ebe5d]"
      >
        {isSuccess
          ? "Confirmar mi pedido por WhatsApp"
          : "Escribir por WhatsApp"}
      </a>

      <a
        href="/"
        className="mt-4 inline-flex rounded-full border border-zinc-900 px-5 py-2 text-sm font-medium hover:bg-zinc-900 hover:text-white transition"
      >
        Volver al inicio
      </a>
    </main>
  );
}
