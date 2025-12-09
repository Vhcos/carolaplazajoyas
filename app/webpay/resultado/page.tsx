// app/webpay/resultado/page.tsx
import { Suspense } from "react";
import ResultadoClient from "./resultado-client";

export default function WebpayResultadoPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
          <p className="text-sm text-zinc-600">Cargando resultado del pago…</p>
        </main>
      }
    >
      <ResultadoClient />
    </Suspense>
  );
}
