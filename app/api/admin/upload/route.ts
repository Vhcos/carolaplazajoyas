// app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const token = process.env.BLOB_READ_WRITE_TOKEN ?? "";
  if (!token) return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN no configurado" }, { status: 500 });

  const form = await req.formData();
  const file = form.get("file") as File | null;

  if (!file) return NextResponse.json({ error: "No se recibió archivo" }, { status: 400 });

  const allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
  if (!allowed.includes(file.type)) {
    return NextResponse.json({ error: "Formato no permitido. Usa JPG, PNG o WebP." }, { status: 400 });
  }

  const blob = await put(`joyas/${file.name}`, file, {
    access: "public",
    token,
    addRandomSuffix: false,
  });

  return NextResponse.json({ url: blob.url, pathname: `/joyas/${file.name}` });
}
