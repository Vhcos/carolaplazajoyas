"use client";
// app/admin/page.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";

// ─── Login ─────────────────────────────────────────────────────────────────

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      onLogin();
    } else {
      setError("Contraseña incorrecta");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f6f8]">
      <div className="w-full max-w-sm rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Admin</h1>
        <p className="mt-1 text-sm text-slate-500">Carola Plaza Joyas</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            required
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-slate-900 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Dashboard ─────────────────────────────────────────────────────────────

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("/api/admin/products");
    if (!res.ok) return [];
    return (await res.json()) as Product[];
  }

  async function loadProducts() {
    setLoading(true);
    const items = await fetchProducts();
    setProducts(items);
    setLoading(false);
  }

  async function deleteProduct(id: string) {
    if (!confirm(`¿Eliminar "${id}" del catálogo dinámico?`)) return;
    await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadProducts();
  }

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    window.location.reload();
  }

  useEffect(() => {
    let cancelled = false;

    fetchProducts()
      .then((items) => {
        if (cancelled) return;
        setProducts(items);
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f6f8] px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Panel Admin</h1>
            <p className="text-sm text-slate-500">Productos dinámicos del catálogo</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/nuevo"
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              + Nuevo producto
            </Link>
            <button
              onClick={logout}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Salir
            </button>
          </div>
        </div>

        {/* Info banner */}
        <div className="rounded-[1.25rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          <strong>Productos dinámicos</strong> — Aquí aparecen solo los productos subidos desde este panel.
          Los productos del catálogo base (products.ts) se gestionan directamente en el código.
          Los nuevos productos subidos aquí aparecen primero en la tienda.
        </div>

        {/* Product list */}
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
          {loading ? (
            <div className="px-6 py-12 text-center text-sm text-slate-400">Cargando productos...</div>
          ) : products.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-slate-500">No hay productos dinámicos aún.</p>
              <Link
                href="/admin/nuevo"
                className="mt-3 inline-block text-sm font-medium text-slate-900 underline underline-offset-2"
              >
                Subir el primero
              </Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-4">Producto</th>
                  <th className="px-6 py-4">Categoría</th>
                  <th className="px-6 py-4">Precio</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-slate-50 last:border-0">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {p.fotos[0] && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.fotos[0]}
                            alt={p.nombre}
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium text-slate-900">{p.nombre}</p>
                          <p className="text-xs text-slate-400">{p.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 capitalize text-slate-600">{p.categoria}</td>
                    <td className="px-6 py-4 text-slate-900">
                      ${p.precio.toLocaleString("es-CL")}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          p.vendido
                            ? "bg-red-50 text-red-600"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {p.vendido ? "Vendido" : "Disponible"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/nuevo?editar=${p.id}`}
                          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="rounded-lg border border-red-100 px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <p className="text-center text-xs text-slate-400">
          <Link href="/" className="underline underline-offset-2">Volver a la tienda</Link>
        </p>
      </div>
    </div>
  );
}

// ─── Entry point ───────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    // Verificar sesión al cargar
    fetch("/api/admin/products").then((r) => {
      setAuthed(r.status !== 401);
    });
  }, []);

  if (authed === null) return null; // loading

  return authed ? <Dashboard /> : <LoginForm onLogin={() => setAuthed(true)} />;
}
