// app/webpay/resultado/WebpayResultadoClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export function WebpayResultadoClient() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const buyOrder = searchParams.get("buyOrder");
  const amount = searchParams.get("amount");

  const isSuccess = status === "success";

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

      <Link
        href="/"
        className="mt-6 inline-flex rounded-full border border-zinc-900 px-5 py-2 text-sm font-medium hover:bg-zinc-900 hover:text-white transition"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
