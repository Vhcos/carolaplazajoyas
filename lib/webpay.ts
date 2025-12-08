// lib/webpay.ts

const TBK_ENV = process.env.TBK_ENV || "integration";
const TBK_COMMERCE_CODE = process.env.TBK_COMMERCE_CODE;
const TBK_API_KEY = process.env.TBK_API_KEY;

if (!TBK_COMMERCE_CODE || !TBK_API_KEY) {
  console.warn(
    "[Webpay] Faltan TBK_COMMERCE_CODE o TBK_API_KEY en variables de entorno"
  );
}

const BASE_URL =
  TBK_ENV === "production"
    ? "https://webpay3g.transbank.cl/rswebpaytransaction/api/webpay/v1.2"
    : "https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2";

const TRANSACTIONS_URL = `${BASE_URL}/transactions`;

type CreateTxInput = {
  buyOrder: string;
  sessionId: string;
  amount: number;
  returnUrl: string;
};

type CreateTxResponse = {
  token: string;
  url: string;
};

export async function webpayCreateTransaction(
  input: CreateTxInput
): Promise<CreateTxResponse> {
  const res = await fetch(TRANSACTIONS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Tbk-Api-Key-Id": TBK_COMMERCE_CODE || "",
      "Tbk-Api-Key-Secret": TBK_API_KEY || "",
    },
    body: JSON.stringify({
      buy_order: input.buyOrder,
      session_id: input.sessionId,
      amount: input.amount,
      return_url: input.returnUrl,
    }),
  });

if (!res.ok) {
  const text = await res.text().catch(() => "");
  console.error("[Webpay] Error create", res.status, text);
  throw new Error(`Webpay error: ${res.status} ${text}`);
}

  const data = (await res.json()) as { token: string; url: string };
  return data;
}

export async function webpayCommitTransaction(token: string): Promise<any> {
  const url = `${TRANSACTIONS_URL}/${token}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Tbk-Api-Key-Id": TBK_COMMERCE_CODE || "",
      "Tbk-Api-Key-Secret": TBK_API_KEY || "",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[Webpay] Error commit", res.status, text);
    throw new Error("No se pudo confirmar la transacción en Webpay");
  }

  const data = await res.json();
  return data;
}
