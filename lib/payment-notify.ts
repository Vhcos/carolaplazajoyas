// lib/payment-notify.ts

type PaymentResultPayload = {
  paymentStatus: "success" | "fail";
  buyOrder?: string;
  amount?: number;
  status?: string;
  responseCode?: number | string;
  error?: string;
  rawResult?: unknown;
};

const DEFAULT_NOTIFY_EMAIL = "carolaplaza7@gmail.com";

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendResendEmail(payload: PaymentResultPayload) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.PAYMENT_NOTIFY_EMAIL?.trim() || DEFAULT_NOTIFY_EMAIL;
  const from = process.env.PAYMENT_NOTIFY_FROM?.trim() || "onboarding@resend.dev";

  if (!apiKey) {
    return { skipped: true, reason: "missing_resend" as const };
  }

  const order = payload.buyOrder || "sin orden";
  const amountLabel =
    typeof payload.amount === "number" && Number.isFinite(payload.amount)
      ? `$${payload.amount.toLocaleString("es-CL")} CLP`
      : "sin monto";
  const now = new Date().toLocaleString("es-CL", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Santiago",
  });
  const isSuccess = payload.paymentStatus === "success";
  const title = isSuccess
    ? "Pago aprobado en Carola Plaza Joyas"
    : "Pago no aprobado en Carola Plaza Joyas";
  const subject = isSuccess
    ? `Pago Webpay aprobado · ${order}`
    : `Pago Webpay no aprobado · ${order}`;

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
      <h2 style="margin:0 0 12px;">${escapeHtml(title)}</h2>
      <p style="margin:0 0 8px;"><strong>Orden:</strong> ${escapeHtml(order)}</p>
      <p style="margin:0 0 8px;"><strong>Monto:</strong> ${escapeHtml(amountLabel)}</p>
      <p style="margin:0 0 8px;"><strong>Resultado:</strong> ${escapeHtml(isSuccess ? "Aprobado" : "No aprobado")}</p>
      <p style="margin:0 0 8px;"><strong>Estado Webpay:</strong> ${escapeHtml(String(payload.status ?? "sin estado"))}</p>
      <p style="margin:0 0 8px;"><strong>Código:</strong> ${escapeHtml(String(payload.responseCode ?? "sin código"))}</p>
      ${
        payload.error
          ? `<p style="margin:0 0 8px;"><strong>Error:</strong> ${escapeHtml(payload.error)}</p>`
          : ""
      }
      <p style="margin:16px 0 0;color:#555;">Notificación automática · ${escapeHtml(now)}</p>
    </div>
  `;

  const text =
    `${title}\n` +
    `Orden: ${order}\n` +
    `Monto: ${amountLabel}\n` +
    `Resultado: ${isSuccess ? "Aprobado" : "No aprobado"}\n` +
    `Estado Webpay: ${payload.status ?? "sin estado"}\n` +
    `Código: ${payload.responseCode ?? "sin código"}\n` +
    (payload.error ? `Error: ${payload.error}\n` : "") +
    `Fecha: ${now}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`resend_${res.status}: ${body}`);
  }

  return { skipped: false as const };
}

async function sendWebhook(payload: PaymentResultPayload) {
  const webhookUrl = process.env.PAYMENT_NOTIFY_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return { skipped: true, reason: "missing_webhook" as const };
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event:
        payload.paymentStatus === "success"
          ? "webpay_payment_authorized"
          : "webpay_payment_not_authorized",
      paymentStatus: payload.paymentStatus,
      buyOrder: payload.buyOrder,
      amount: payload.amount,
      status: payload.status,
      responseCode: payload.responseCode,
      error: payload.error,
      rawResult: payload.rawResult,
      createdAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`webhook_${res.status}: ${body}`);
  }

  return { skipped: false as const };
}

export async function notifyPaymentResult(payload: PaymentResultPayload) {
  const jobs = [sendResendEmail(payload), sendWebhook(payload)];
  const settled = await Promise.allSettled(jobs);

  for (const result of settled) {
    if (result.status === "rejected") {
      console.error("[payment-notify] Error notificando pago", result.reason);
    }
  }
}

export async function notifyPaymentSuccess(
  payload: Omit<PaymentResultPayload, "paymentStatus">
) {
  await notifyPaymentResult({ ...payload, paymentStatus: "success" });
}
