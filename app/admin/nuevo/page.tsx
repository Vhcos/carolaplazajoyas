"use client";
// app/admin/nuevo/page.tsx
import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Product } from "@/data/products";

const CATEGORIAS: Product["categoria"][] = [
  "anillos",
  "aros",
  "collares",
  "colgantes",
  "pulseras-esclavas",
];

const EMPTY: Omit<Product, "id"> & { id: string } = {
  id: "",
  nombre: "",
  precio: 0,
  descripcionCorta: "",
  descripcionLarga: "",
  fotos: [],
  metal: "Plata 950",
  piedra: "",
  coleccion: "",
  destacado: false,
  tipo: "unica",
  categoria: "anillos",
  vendido: false,
};

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function NuevoProductoForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("editar");

  const [form, setForm] = useState(EMPTY);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [fotosUrls, setFotosUrls] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  // Si viene con ?editar=id, cargar el producto
  useEffect(() => {
    if (!editId) return;
    fetch("/api/admin/products").then(async (r) => {
      if (!r.ok) { router.push("/admin"); return; }
      const products: Product[] = await r.json();
      const p = products.find((x) => x.id === editId);
      if (p) {
        setForm(p);
        setFotosUrls(p.fotos);
      }
    });
  }, [editId, router]);

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (key === "nombre" && !editId) {
      setForm((f) => ({ ...f, nombre: value as string, id: slugify(value as string) }));
    }
  }

  async function uploadFoto(file: File) {
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    setUploading(false);
    if (!res.ok) {
      setError("Error al subir imagen");
      return null;
    }
    const { url } = await res.json();
    return url as string;
  }

  async function handleFotos(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    const urls: string[] = [];
    for (const file of files) {
      const url = await uploadFoto(file);
      if (url) urls.push(url);
    }
    const newFotos = [...fotosUrls, ...urls];
    setFotosUrls(newFotos);
    setForm((f) => ({ ...f, fotos: newFotos }));
  }

  function removeFoto(idx: number) {
    const newFotos = fotosUrls.filter((_, i) => i !== idx);
    setFotosUrls(newFotos);
    setForm((f) => ({ ...f, fotos: newFotos }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.id || !form.nombre || !form.precio) {
      setError("Nombre y precio son requeridos.");
      return;
    }
    if (form.fotos.length === 0) {
      setError("Debes subir al menos una foto.");
      return;
    }
    setSaving(true);
    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (res.ok) {
      router.push("/admin");
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al guardar");
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] px-4 py-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/admin")}
            className="text-sm text-slate-500 hover:text-slate-900"
          >
            ← Volver
          </button>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            {editId ? "Editar producto" : "Nuevo producto"}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nombre */}
          <Field label="Nombre">
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => set("nombre", e.target.value)}
              placeholder="Anillo Corazón Amor"
              className={INPUT}
              required
            />
          </Field>

          {/* Slug / ID */}
          <Field label="ID (slug — se genera solo)">
            <input
              type="text"
              value={form.id}
              onChange={(e) => setForm((f) => ({ ...f, id: slugify(e.target.value) }))}
              placeholder="anillo-corazon-amor"
              className={INPUT}
              required
            />
          </Field>

          {/* Precio */}
          <Field label="Precio (CLP)">
            <input
              type="number"
              value={form.precio || ""}
              onChange={(e) => set("precio", Number(e.target.value))}
              placeholder="59900"
              className={INPUT}
              required
              min={1}
            />
          </Field>

          {/* Categoría */}
          <Field label="Categoría">
            <select
              value={form.categoria}
              onChange={(e) => set("categoria", e.target.value as Product["categoria"])}
              className={INPUT}
            >
              {CATEGORIAS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>

          {/* Tipo */}
          <Field label="Tipo">
            <div className="flex gap-4">
              {(["unica", "serie"] as const).map((t) => (
                <label key={t} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="tipo"
                    value={t}
                    checked={form.tipo === t}
                    onChange={() => set("tipo", t)}
                  />
                  {t === "unica" ? "Pieza única" : "Serie limitada"}
                </label>
              ))}
            </div>
          </Field>

          {/* Descripción corta */}
          <Field label="Descripción corta">
            <textarea
              value={form.descripcionCorta}
              onChange={(e) => set("descripcionCorta", e.target.value)}
              rows={2}
              placeholder="Una línea que aparece en las tarjetas del catálogo."
              className={INPUT}
              required
            />
          </Field>

          {/* Descripción larga */}
          <Field label="Descripción larga (opcional)">
            <textarea
              value={form.descripcionLarga ?? ""}
              onChange={(e) => set("descripcionLarga", e.target.value)}
              rows={4}
              placeholder="Descripción completa que aparece en la página del producto."
              className={INPUT}
            />
          </Field>

          {/* Metal / Piedra / Colección */}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Metal">
              <input
                type="text"
                value={form.metal ?? ""}
                onChange={(e) => set("metal", e.target.value)}
                placeholder="Plata 950"
                className={INPUT}
              />
            </Field>
            <Field label="Piedra">
              <input
                type="text"
                value={form.piedra ?? ""}
                onChange={(e) => set("piedra", e.target.value)}
                placeholder="Amatista"
                className={INPUT}
              />
            </Field>
          </div>

          <Field label="Colección (opcional)">
            <input
              type="text"
              value={form.coleccion ?? ""}
              onChange={(e) => set("coleccion", e.target.value)}
              placeholder="Día de la Madre"
              className={INPUT}
            />
          </Field>

          {/* Opciones */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.destacado ?? false}
                onChange={(e) => set("destacado", e.target.checked)}
              />
              Destacado en inicio
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.vendido ?? false}
                onChange={(e) => set("vendido", e.target.checked)}
              />
              Vendido
            </label>
          </div>

          {/* Fotos */}
          <Field label="Fotos">
            <div className="space-y-3">
              {fotosUrls.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {fotosUrls.map((url, i) => (
                    <div key={i} className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={url}
                        alt=""
                        className="h-20 w-20 rounded-xl object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeFoto(i)}
                        className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                className="hidden"
                onChange={handleFotos}
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-500 transition hover:border-slate-400 hover:text-slate-700 disabled:opacity-50"
              >
                {uploading ? "Subiendo..." : "+ Agregar fotos"}
              </button>
            </div>
          </Field>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving || uploading}
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
            >
              {saving ? "Guardando..." : editId ? "Guardar cambios" : "Publicar producto"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function NuevoProductoPage() {
  return (
    <Suspense>
      <NuevoProductoForm />
    </Suspense>
  );
}

const INPUT = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </label>
      {children}
    </div>
  );
}
