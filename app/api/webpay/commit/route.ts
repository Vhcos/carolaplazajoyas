//app/api/webpay/commit/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { webpayCommitTransaction } from "@/lib/webpay";
import { notifyPaymentResult } from "@/lib/payment-notify";
import { SITE_URL } from "@/lib/config";

const FINAL_URL =
  process.env.WEBPAY_FINAL_URL || `${SITE_URL}/webpay/resultado`;

function buildRedirectUrl(params: Record<string, string | undefined | null>) {
  const url = new URL(FINAL_URL);
  for (const [k, v] of Object.entries(params)) {
    if (v != null && v !== "") url.searchParams.set(k, v);
  }
  return url.toString();
}

async function handleCommit(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const method = req.method.toUpperCase();

    let token: string | null = null;

    if (method === "POST") {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("application/x-www-form-urlencoded")) {
        const bodyText = await req.text();
        const form = new URLSearchParams(bodyText);
        token = form.get("token_ws") || form.get("token");
      } else if (contentType.includes("application/json")) {
        const json = await req.json().catch(() => ({}));
        token = json.token_ws || json.token || null;
      }
    }

    // fallback: si viene por GET con token en la query
    if (!token) {
      token = searchParams.get("token_ws") || searchParams.get("token");
    }

    if (!token) {
      await notifyPaymentResult({
        paymentStatus: "fail",
        status: "missing_token",
        error: "Webpay volvió sin token_ws. Puede corresponder a compra anulada o retorno incompleto.",
      });
      const redirect = buildRedirectUrl({
        status: "fail",
        error: "missing_token",
      });
      return NextResponse.redirect(redirect, { status: 302 });
    }

    const result = await webpayCommitTransaction(token);

    const status = result.status;
    const responseCode = result.response_code ?? result.responseCode;
    const buyOrder = String(result.buy_order ?? "");
    const amount =
      typeof result.amount === "number" ? result.amount : Number(result.amount ?? 0);
    const isAuthorized =
      status === "AUTHORIZED" || status === "Aceptado" || responseCode === 0;

    console.log("[TBK] commit result:", {
      buyOrder,
      amount,
      status,
      responseCode,
      authorized: isAuthorized,
    });

    await notifyPaymentResult({
      paymentStatus: isAuthorized ? "success" : "fail",
      buyOrder,
      amount,
      status: String(status ?? (isAuthorized ? "AUTHORIZED" : "NOT_AUTHORIZED")),
      responseCode: responseCode ?? (isAuthorized ? 0 : "sin código"),
      rawResult: result,
    });

    const redirect = buildRedirectUrl({
      status: isAuthorized ? "success" : "fail",
      buyOrder,
      amount: String(result.amount ?? ""),
    });

    return NextResponse.redirect(redirect, { status: 302 });
  } catch (err) {
    console.error("[API] /api/webpay/commit error", err);
    await notifyPaymentResult({
      paymentStatus: "fail",
      status: "exception",
      error: err instanceof Error ? err.message : "Error desconocido en commit Webpay",
    });
    const redirect = buildRedirectUrl({
      status: "fail",
      error: "exception",
    });
    return NextResponse.redirect(redirect, { status: 302 });
  }
}

// Webpay puede llamar por POST, pero si llega GET también lo manejamos
export async function POST(req: Request) {
  return handleCommit(req);
}

export async function GET(req: Request) {
  return handleCommit(req);
}
