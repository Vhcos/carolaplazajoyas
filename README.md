# Carola Plaza Joyas

Sitio oficial de **Carola Plaza Joyas**, joyería de autor hecha a mano en Chile. El proyecto funciona como catálogo, vitrina comercial y base de e-commerce para piezas únicas, series limitadas, guías de compra, certificados y pagos con Webpay.

## Stack

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel para hosting
- Vercel Blob para catálogo dinámico e imágenes subidas desde admin
- Webpay/Transbank para pagos

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

El sitio local corre en `http://localhost:3000`.

## Estructura

```text
app/
  page.tsx                    Home
  producto/page.tsx           Catálogo con filtros
  producto/[slug]/page.tsx    Ficha de producto
  contacto/page.tsx           Contacto y WhatsApp
  guias/                      Índice de guías
  guia-*/                     Guías de compra y cuidado
  admin/                      Gestión simple de productos
  login/                      Login admin
  api/admin/                  API de admin, productos y uploads
  api/webpay/                 Creación y confirmación de pagos
  webpay/resultado/           Resultado de pago
  c/[id]/                     Certificados
  sitemap.ts                  Sitemap dinámico
  robots.ts                   Robots

components/
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
  ProductGallery.tsx
  WebpayButton.tsx
  PromoBanner.tsx
  AnnouncementBar.tsx

data/
  products.ts                 Catálogo estático base
  certificates.ts             Datos de certificados

lib/
  config.ts                   Configuración compartida
  products-store.ts           Merge catálogo estático + Blob
  webpay.ts                   Cliente Webpay
  payment-notify.ts           Notificaciones de pago
  admin-auth.ts               Validación admin

public/
  joyas/                      Fotos de productos
  decor/                      Imágenes decorativas
```

## Catálogo de productos

El catálogo base vive en `data/products.ts`. Cada producto usa este formato:

```ts
{
  id: "brisa-de-otono",
  nombre: "Brisa de Otoño",
  precio: 50000,
  descripcionCorta: "...",
  descripcionLarga: "...",
  fotos: ["/joyas/aros-brisa-de-otono-1.jpeg"],
  metal: "Bronce y plata 950",
  destacado: false,
  tipo: "unica",
  categoria: "aros",
  vendido: false,
}
```

Categorías válidas:

- `anillos`
- `aros`
- `collares`
- `colgantes`
- `pulseras-esclavas`

Las fotos locales deben ir en `public/joyas` y referenciarse como `/joyas/nombre-del-archivo.jpeg`.

## Catálogo dinámico y admin

`lib/products-store.ts` carga productos desde Vercel Blob cuando existe configuración y, si no, usa `data/products.ts` como fallback.

Variables relacionadas:

```bash
BLOB_READ_WRITE_TOKEN=
BLOB_PRODUCTS_URL=
ADMIN_PASSWORD=
```

Sin esas variables, el proyecto sigue funcionando en local con catálogo estático. Es normal ver el aviso:

```text
[products-store] BLOB_READ_WRITE_TOKEN y BLOB_PRODUCTS_URL no configurados. Usando fallback.
```

## Webpay

La integración vive en:

- `lib/webpay.ts`
- `app/api/webpay/create/route.ts`
- `app/api/webpay/commit/route.ts`
- `app/webpay/resultado/`
- `components/WebpayButton.tsx`

Variables relacionadas:

```bash
NEXT_PUBLIC_WEBPAY_ENABLED=true
TBK_ENV=integration
TBK_COMMERCE_CODE=
TBK_API_KEY=
WEBPAY_RETURN_URL=
WEBPAY_FINAL_URL=
```

Si `NEXT_PUBLIC_WEBPAY_ENABLED` no es `true`, las fichas pueden mostrar flujo alternativo por WhatsApp.

## Notificaciones de pago

`lib/payment-notify.ts` puede enviar notificaciones por Resend o webhook.

```bash
RESEND_API_KEY=
PAYMENT_NOTIFY_EMAIL=
PAYMENT_NOTIFY_FROM=
PAYMENT_NOTIFY_WEBHOOK_URL=
```

## SEO

El dominio base está en `lib/config.ts` como `SITE_URL`.

El proyecto genera:

- metadata global en `app/layout.tsx`
- metadata por catálogo en `app/producto/page.tsx`
- metadata y JSON-LD Product por ficha en `app/producto/[slug]/page.tsx`
- `robots.txt` en `app/robots.ts`
- `sitemap.xml` en `app/sitemap.ts`

## Flujo recomendado para cambios

1. Editar datos, UI o imágenes.
2. Ejecutar `npm run lint`.
3. Ejecutar `npm run build` si el cambio toca rutas, data compartida, Webpay, admin o metadata.
4. Levantar `npm run dev`.
5. Revisar rutas clave:

```bash
http://localhost:3000/
http://localhost:3000/producto
http://localhost:3000/producto/[id]
http://localhost:3000/admin/nuevo
```

## Notas actuales

- La colección visible de invierno se llama **Abraza el invierno**.
- Para evitar caché de imágenes, cuando se reemplaza una foto importante conviene usar nombres nuevos de archivo.
- El sitio puede correr localmente sin Blob ni Webpay configurado, usando fallback y CTAs de WhatsApp.
