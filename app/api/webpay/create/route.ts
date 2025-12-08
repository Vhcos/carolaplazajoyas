// app/api/webpay/create/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { webpayCreateTransaction } from "@/lib/webpay";
import { PRODUCTS } from "@/data/products";
import { SITE_URL } from "@/lib/config";
import { getNavidadPrice } from "@/lib/promo";


export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const productId = body?.productId as string | undefined;

    if (!productId) {
      return NextResponse.json(
        { ok: false, error: "Falta productId" },
        { status: 400 }
      );
    }

    const product = PRODUCTS.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json(
        { ok: false, error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Precio base desde el producto
const baseAmount = Number(product.precio || 0);

if (!baseAmount || baseAmount <= 0) {
  return NextResponse.json(
    { ok: false, error: "Monto inválido para el producto" },
    { status: 400 }
  );
}

// Aplica promo de Navidad si corresponde (10% menos)
const amount = getNavidadPrice(baseAmount);

    const WEBPAY_RETURN_URL =
         process.env.WEBPAY_RETURN_URL || `${SITE_URL}/webpay/resultado`;


    const shortSlug = product.id.slice(0, 10); // recorto el id para que no se pase
    const timePart = Date.now().toString().slice(-6); // últimos 6 dígitos del timestamp
    const buyOrder = `CP-${shortSlug}-${timePart}`;

    const sessionId = crypto.randomUUID();

    const returnUrl = WEBPAY_RETURN_URL;

    const tx = await webpayCreateTransaction({
      buyOrder,
      sessionId,
      amount,
      returnUrl,
    });
    console.log("[TBK] create tx:", {
    buyOrder,
    token: tx.token,
    amount,
    });

    return NextResponse.json({
      ok: true,
      url: tx.url,
      token: tx.token,
    });
  } catch (err) {
    console.error("[API] /api/webpay/create error", err);
    return NextResponse.json(
      { ok: false, error: "Error interno al crear la transacción" },
      { status: 500 }
    );
  }
}
