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

# Carola Plaza Joyas – Sitio oficial

E-commerce minimalista para **Carola Plaza**, orfebre chilena especializada en joyas de autor en **plata 950** y piezas con piedras naturales.  
Proyecto construido con **Next.js (App Router)**, desplegado en **Vercel**.

---

## 1. Tech stack

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (v3, vía `@import "tailwindcss";`)
- **Fuentes:** Inter + Playfair Display (Google Fonts)
- **Hosting:** Vercel
- **Imágenes:** carpeta `/public/joyas` (importadas con `next/image`)

---

## 2. Estructura principal

```text
app/
  layout.tsx        # Layout global, metadata y JSON-LD
  page.tsx          # Home (hero, destacados, categorías, proceso a medida, taller)
  producto/
    page.tsx        # Catálogo con filtros por categoría y tipo de pieza
  producto/[slug]/
    page.tsx        # Ficha de producto (detalle)
  contacto/
    page.tsx        # Formulario / CTA a WhatsApp

components/
  Navbar.tsx        # Navegación sticky, logo + links + Instagram
  Footer.tsx        # Footer con datos del taller y confianza
  ProductCard.tsx   # Tarjeta reutilizable de producto (imagen, nombre, precio, CTAs)

data/
  products.ts       # Catálogo en memoria (array de `Product`)

lib/
  config.ts         # SITE_URL y otros helpers (si aplica)

public/
  joyas/            # Fotografías optimizadas de todas las piezas
  logo-carola-plaza.svg
Entiendo perfecto: quieres un **PROMPT MAESTRO** que resuma *todo lo que hicimos con Webpay en Carola Plaza* para pegarlo en una nueva conversación y, desde ahí, generar un README específico de esta etapa de integración.

Aquí va el prompt listo para copiar/pegar 👇

---

## PROMPT MAESTRO — README integración Webpay (Carola Plaza Joyas)

Quiero que me ayudes a escribir un **README en Markdown** que documente la integración de **Webpay REST** en el proyecto `carolaplazajoyas` (Next.js).

### 0) Contexto del proyecto

* Sitio: **Carola Plaza Joyas**, joyas de autor en plata 950.
* Stack:

  * Next.js (App Router) + TypeScript.
  * Tailwind CSS.
  * Despliegue en Vercel (prod será `https://www.carolaplazajoyas.cl`).
* Ya existe un README general de la fase anterior (SEO, catálogo, productos, etc.).
* Este nuevo README es **solo para la etapa Webpay**: cómo está hecha la integración, variables de entorno, endpoints, pruebas, y cómo pasar a producción.

### 1) Estado actual de la integración Webpay

Toma como dado que ya está implementado lo siguiente (NO inventes nada nuevo, solo organiza y nómbralo bien):

1. **Librería Webpay**
   Archivo `lib/webpay.ts` (nombre puede variar, pero la idea es esta):

   * Función `webpayCreateTransaction({ buyOrder, sessionId, amount, returnUrl })`
   * Función `webpayCommitTransaction(token)`
   * Usa Webpay REST v1.2 con `fetch` a:

     * Integración: `https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2`
     * Producción: `https://webpay3g.transbank.cl/rswebpaytransaction/api/webpay/v1.2`
   * Lee estas env vars:

     * `TBK_ENV` (`integration` | `production`)
     * `TBK_COMMERCE_CODE`
     * `TBK_API_KEY`
   * Loguea errores así: `"[Webpay] Error create ..."` y `"[Webpay] Error commit ..."`.

2. **Endpoint para crear la transacción**
   Archivo `app/api/webpay/create/route.ts`:

   * Método: `POST`.
   * Recibe JSON `{ productId }`.
   * Busca el producto en `PRODUCTS` (`@/data/products`).
   * Valida que tenga `precio` > 0 y arma:

     * `amount` = precio del producto.
     * `shortSlug` = primeros 10 caracteres de `product.id`.
     * `timePart` = últimos 6 dígitos de `Date.now()`.
     * `buyOrder` = `CP-${shortSlug}-${timePart}` (máx 26 caracteres, compatible TBK).
     * `sessionId` = `crypto.randomUUID()`.
     * `returnUrl` = `process.env.WEBPAY_RETURN_URL || \`${SITE_URL}/api/webpay/commit``.
   * Llama `webpayCreateTransaction` y responde JSON:

     * `{ ok: true, url, token }`.
   * En error: responde 500 con `{ ok: false, error: "Error interno al crear la transacción" }`.

3. **Endpoint para el `commit` / retorno Webpay**
   Archivo `app/api/webpay/commit/route.ts`:

   * Exporta `POST` y `GET` y ambos llaman a una función común `handleCommit`.
   * Extrae el token en este orden:

     * Si `POST` con `application/x-www-form-urlencoded`: `token_ws` o `token`.
     * Si `POST` JSON: `token_ws` o `token` del body.
     * Fallback: query params `token_ws` o `token`.
   * Si **NO hay `token_ws`**:

     * NO llama a `webpayCommitTransaction`.
     * Redirige a `WEBPAY_FINAL_URL || \`${SITE_URL}/webpay/resultado`` con:

       * `?status=fail&error=missing_token`
     * Esto cubre el caso “Anular compra y volver al comercio” usando `TBK_TOKEN`, `TBK_ORDEN_COMPRA` y `TBK_ID_SESION`.
   * Si hay `token_ws`:

     * Llama `webpayCommitTransaction(token)`.
     * Lee de la respuesta:

       * `status`
       * `response_code` (o `responseCode`)
       * `buy_order`
       * `amount`
     * Considera **aprobado** si:

       * `status === "AUTHORIZED"` o `status === "Aceptado"` o `response_code === 0`.
     * Redirige a `WEBPAY_FINAL_URL || .../webpay/resultado` con query:

       * `status=success|fail`
       * `buyOrder`
       * `amount`.

4. **Página de resultado Webpay**
   Archivo `app/webpay/resultado/page.tsx`:

   * Componente **client** (`"use client"`).
   * Usa `useSearchParams` para leer:

     * `status`
     * `buyOrder`
     * `amount`
   * Muestra dos estados:

     * `status === "success"` → “¡Pago recibido con éxito! Tu compra fue autorizada…” + monto y orden.
     * En otro caso → mensaje de error genérico (“No se pudo confirmar tu pago…”) + sugerencia de contactar por WhatsApp.
   * Botón “Volver al inicio” (link a `/`).

5. **Botón Webpay en la ficha de producto**

   * Componente `WebpayButton.tsx`:

     * Recibe `productId`.
     * Hace `fetch("/api/webpay/create", { method: "POST", body: JSON.stringify({ productId }) })`.
     * Maneja estado de carga: texto “Redirigiendo…” mientras espera.
     * Si la respuesta es `ok`, lee `data.url` y hace `window.location.href = data.url`.
     * Si falla, muestra `alert("Hubo un problema al iniciar el pago con Webpay.")`.
     * El botón es rojo, con texto “Pagar con Webpay” + logo SVG de Webpay.
   * En `app/producto/[slug]/page.tsx`:

     * Se llama `<WebpayButton productId={product.id} />` sobre la descripción.
     * Debajo están los otros botones:

       * WhatsApp (icono verde, sin texto largo).
       * Instagram (igual que antes).

6. **Variables de entorno**

Para **desarrollo / integración (local)**:

```env
# Webpay integración
TBK_ENV=integration
TBK_COMMERCE_CODE=597055555532
TBK_API_KEY=579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C

SITE_URL=http://localhost:3001
WEBPAY_RETURN_URL=http://localhost:3001/api/webpay/commit
WEBPAY_FINAL_URL=http://localhost:3001/webpay/resultado
```

Para **producción** (cuando se suba a Vercel):

```env
# Webpay producción (código real Carola Plaza)
TBK_ENV=production
TBK_COMMERCE_CODE=597051440056
TBK_API_KEY=<LLAVE_SECRETA_PRODUCCION_REAL>

SITE_URL=https://www.carolaplazajoyas.cl
WEBPAY_RETURN_URL=https://www.carolaplazajoyas.cl/api/webpay/commit
WEBPAY_FINAL_URL=https://www.carolaplazajoyas.cl/webpay/resultado
```

> Importante:
>
> * En local usamos el **código de integración Webpay Plus** (`597055555532`).
> * En producción se usará el **código real 597051440056** que ya fue validado por Transbank.
> * No implementamos **refunds/anulaciones** vía API (solo anulaciones del usuario en Webpay).

7. **Validación de Transbank**

* El comercio **597051440056** ya tiene un correo de Transbank indicando:
  “**Proceso de validación aprobado automáticamente**”, con todas las pruebas obligatorias OK.
* Las pruebas adicionales de **anulaciones (refunds)** figuran como opcionales y no se implementaron.

### 2) Objetivo del README

Quiero que generes un README nuevo (o sección nueva) titulado algo tipo:

> `Integración Webpay REST — Carola Plaza Joyas`

y que:

1. Explique en lenguaje claro **qué hace la integración** y su alcance:

   * Compra por producto individual.
   * Sin carro de compras.
   * Sin refunds por ahora.
2. Documente:

   * Variables de entorno y ejemplos para integración y producción.
   * Cómo funciona el flujo:

     1. Usuario hace click en “Pagar con Webpay”.
     2. `/api/webpay/create` crea la transacción.
     3. Redirección a Webpay.
     4. Pago aprobado / rechazado / anulado.
     5. Webpay llama a `/api/webpay/commit`.
     6. Redirección a `/webpay/resultado`.
   * Qué archivos tocan este flujo y para qué sirve cada uno.
3. Incluya una sección **“Cómo probar en integración”** con pasos concretos:

   * Levantar `npm run dev`.
   * Configurar `.env.local`.
   * Hacer compra aprobada (tarjeta de prueba).
   * Hacer compra rechazada.
   * Hacer “Anular compra y volver”.
   * Mencionar que los `token_ws` y `TBK_TOKEN` se ven en los logs del servidor (`[TBK] ...`).
4. Incluya una sección **“Cómo pasar a producción”**:

   * Configurar env vars en Vercel para el entorno `production`.
   * Poner `TBK_ENV=production`, código real, llave secreta real.
   * Hacer una compra real pequeña para verificar.
5. Tenga una sección corta de **“Limitaciones actuales / futuro”**:

   * No hay refunds vía API implementados.
   * No hay carro de compras (una joya por transacción).
   * Futuro: agregar refunds, carro de compras básico, registro de órdenes y email al comprador.

### 3) Estilo del README

* Lenguaje: **español**, tono profesional pero cercano, como documentación para un dev futuro (o para mí misma en 6 meses).

* Formato: Markdown con secciones jerarquizadas:

  * `# Integración Webpay REST`
  * `## Arquitectura`
  * `## Variables de entorno`
  * `## Flujo de pago`
  * `## Archivos relevantes`
  * `## Pruebas en ambiente de integración`
  * `## Paso a producción`
  * `## Limitaciones y próximos pasos`

* Evita jerga innecesaria. Explica lo justo para que otro dev pueda:

  * Clonar el repo,
  * Configurar `.env.local`,
  * Probar Webpay,
  * Preparar la app para producción.

No inventes endpoints ni features que no describí arriba. Si algo no está claro, acláralo como “pendiente de definir” en vez de asumir.

Con todo lo anterior, genera el **README completo en Markdown** listo para pegar en `README-webpay.md` o como sección nueva del README principal.
