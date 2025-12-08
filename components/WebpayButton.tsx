// components/WebpayButton.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  productId: string;
};

export function WebpayButton({ productId }: Props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/webpay/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok || !data?.url || !data?.token) {
        throw new Error(data?.error || "Error al iniciar pago");
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.url;

      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "token_ws";
      input.value = data.token;

      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error(err);
      alert("Hubo un problema al iniciar el pago con Webpay.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
    >
      <span>{loading ? "Redirigiendo..." : "Pagar con Webpay"}</span>
    </button>
  );
}
