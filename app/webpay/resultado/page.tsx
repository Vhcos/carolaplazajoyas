// app/webpay/resultado/page.tsx
import { Suspense } from "react";
import { WebpayResultadoClient } from "./WebpayResultadoClient";

export default function WebpayResultadoPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
          <p className="text-slate-600">
            Procesando el resultado de tu pago...
          </p>
        </main>
      }
    >
      <WebpayResultadoClient />
    </Suspense>
  );
}
