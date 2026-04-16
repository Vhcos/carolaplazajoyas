// lib/payment-notify.ts

type PaymentSuccessPayload = {
  buyOrder: string;
  amount?: number;
  status?: string;
  responseCode?: number | string;
  rawResult?: unknown;
};

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendResendEmail(payload: PaymentSuccessPayload) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.PAYMENT_NOTIFY_EMAIL?.trim();
  const from = process.env.PAYMENT_NOTIFY_FROM?.trim() || "onboarding@resend.dev";

  if (!apiKey || !to) {
    return { skipped: true, reason: "missing_resend_or_email" as const };
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

  const subject = `Pago Webpay aprobado · ${order}`;
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
      <h2 style="margin:0 0 12px;">Pago aprobado en Carola Plaza Joyas</h2>
      <p style="margin:0 0 8px;"><strong>Orden:</strong> ${escapeHtml(order)}</p>
      <p style="margin:0 0 8px;"><strong>Monto:</strong> ${escapeHtml(amountLabel)}</p>
      <p style="margin:0 0 8px;"><strong>Estado:</strong> ${escapeHtml(String(payload.status ?? "AUTHORIZED"))}</p>
      <p style="margin:0 0 8px;"><strong>Código:</strong> ${escapeHtml(String(payload.responseCode ?? 0))}</p>
      <p style="margin:16px 0 0;color:#555;">Notificación automática · ${escapeHtml(now)}</p>
    </div>
  `;

  const text =
    `Pago aprobado en Carola Plaza Joyas\n` +
    `Orden: ${order}\n` +
    `Monto: ${amountLabel}\n` +
    `Estado: ${payload.status ?? "AUTHORIZED"}\n` +
    `Código: ${payload.responseCode ?? 0}\n` +
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

async function sendWebhook(payload: PaymentSuccessPayload) {
  const webhookUrl = process.env.PAYMENT_NOTIFY_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return { skipped: true, reason: "missing_webhook" as const };
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: "webpay_payment_authorized",
      buyOrder: payload.buyOrder,
      amount: payload.amount,
      status: payload.status,
      responseCode: payload.responseCode,
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

export async function notifyPaymentSuccess(payload: PaymentSuccessPayload) {
  const jobs = [sendResendEmail(payload), sendWebhook(payload)];
  const settled = await Promise.allSettled(jobs);

  for (const result of settled) {
    if (result.status === "rejected") {
      console.error("[payment-notify] Error notificando pago", result.reason);
    }
  }
}

