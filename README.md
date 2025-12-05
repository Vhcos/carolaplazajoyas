This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Carola Plaza Joyas

Sitio web de **Carola Plaza**, joyas de autor en plata 950 hechas a mano en Chile.  
Proyecto Next.js (App Router) desplegado en Vercel.

---

## 1. Stack y estructura

- **Framework**: Next.js (App Router, TypeScript).
- **Estilos**: Tailwind CSS.
- **Fuente principal**: Inter + Playfair Display.
- **Hosting**: Vercel.
- **Dominio**: `https://www.carolaplazajoyas.cl`.

Estructura relevante:

- `app/`
  - `layout.tsx` → layout global, metadatos SEO, JSON-LD de negocio.
  - `page.tsx` → Home.
  - `producto/page.tsx` → catálogo completo.
  - `producto/[slug]/page.tsx` → ficha de producto.
  - `contacto/page.tsx` → página de contacto (si aplica).
  - `robots.ts` → generación de `robots.txt`.
  - `sitemap.ts` → generación de `sitemap.xml`.
- `components/`
  - `Navbar.tsx`, `Footer.tsx`
  - `ProductCard.tsx` → tarjeta de producto (lista / catálogo).
  - `ProductGallery.tsx` → galería de imágenes en la ficha.
- `data/`
  - `products.ts` → listado de productos (joyas) con sus datos.
- `lib/`
  - `config.ts` → constantes compartidas (ej. `SITE_URL`).

---

## 2. SEO y metadatos

### 2.1. `app/layout.tsx`

- Define `SITE_URL = "https://www.carolaplazajoyas.cl"`.
- Configura `metadata` global:

  - `title.default`:  
    `Carola Plaza | Joyas de autor en plata 950 hechas a mano en Chile`.
  - `title.template`: `"%s | Carola Plaza"`.
  - `description` genérica del sitio.
  - `openGraph` tipo `website` con:
    - `url: SITE_URL`
    - `siteName: "Carola Plaza"`
    - imagen por defecto (`/joyas/prendedor-ginko-bronce.jpg`).
  - `twitter` con `card: "summary_large_image"`.

### 2.2. JSON-LD de negocio (LocalBusiness / JewelryStore)

En `RootLayout` se inyecta un `<script type="application/ld+json">` con:

- `@type: "JewelryStore"`
- `name: "Carola Plaza"`
- `url: SITE_URL`
- `description` del taller y el trabajo en plata 950.
- `sameAs` apuntando a Instagram.
- `address` básico (país: CL).

Esto ayuda a que Google entienda que el sitio es una joyería / marca de joyas de autor.

---

## 3. Catálogo y fichas de producto

### 3.1. Catálogo (`app/producto/page.tsx`)

- `metadata` propia:

  - `title: "Catálogo de joyas en plata 950"`.
  - `description` explicando el catálogo.
  - `alternates.canonical: SITE_URL + "/producto"`.
  - `openGraph` y `twitter` específicos para el catálogo.

- Muestra:

  - Encabezado con H1 “Todas las joyas disponibles”.
  - Párrafo explicando que todo es plata 950 y piezas hechas a mano.
  - Grid de `ProductCard` recorriendo `PRODUCTS`.

### 3.2. Ficha de producto (`app/producto/[slug]/page.tsx`)

- Usa `params` como `Promise` (patrón Next 16) y helper `getProductFromSlug` que busca por `id` en `PRODUCTS`.
- `generateMetadata` dinámico:

  - `title`: `${product.nombre} en plata 950 — Carola Plaza`.
  - `description`: `descripcionCorta` o descripción genérica.
  - `canonical`: `SITE_URL/producto/{id}`.
  - `openGraph` (tipo `website`) con imagen principal de la joya.
  - `twitter` con `summary_large_image`.

- Bloque de detalles técnicos arriba de la descripción:

  - `Metal` (por defecto “Plata 950” si no se define).
  - `Piedra` (opcional).
  - `Colección` (opcional).
  - `Estado` (por defecto “Disponible” si no se define).

- Descripción larga o corta del producto + texto estándar sobre variaciones y ajustes.
- Botones de acción:

  - `Comprar por WhatsApp` con mensaje prellenado.
  - `Ver más en Instagram`.

### 3.3. JSON-LD de Product

En la propia ficha se inyecta un JSON-LD:

- `@type: "Product"`.
- `name: product.nombre`.
- `image`: lista de URLs absolutas de las fotos.
- `description`: descripción larga/corta.
- `brand.name: "Carola Plaza"`.
- `offers`:

  - `@type: "Offer"`.
  - `url`: URL de la ficha.
  - `priceCurrency: "CLP"`.
  - `price`: precio como string.
  - `availability: "https://schema.org/InStock"`.

Esto permite que Google entienda cada ficha como producto con precio y disponibilidad.

---

## 4. Robots y Sitemap

### 4.1. `app/robots.ts`

Genera `robots.txt` con:

- `User-agent: *`
- `Allow: /`
- `Sitemap: https://www.carolaplazajoyas.cl/sitemap.xml`

### 4.2. `app/sitemap.ts`

Genera `sitemap.xml` usando `MetadataRoute.Sitemap`:

- Rutas estáticas:

  - `/` (home)
  - `/producto` (catálogo)
  - `/contacto` (si aplica)

- Rutas de producto:

  - Una URL por cada `PRODUCTS[i].id`, con forma:
    `https://www.carolaplazajoyas.cl/producto/{id}`.

Cada entrada incluye:

- `lastModified: new Date()`
- `changeFrequency` (`monthly`, `weekly`, etc.).
- `priority` (home con 1, catálogo 0.9, productos 0.8).

---

## 5. Google Search Console

1. Se dio de alta el dominio `carolaplazajoyas.cl` como propiedad de dominio.
2. Verificación mediante registro **TXT** en DNS de Vercel:

   ```txt
   google-site-verification=XXXXXXXXXXXX...
