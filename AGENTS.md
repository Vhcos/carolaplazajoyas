# AGENTS.md

Guía para asistentes y agentes que trabajen en este repositorio.

## Proyecto

Este repo es el sitio de **Carola Plaza Joyas**, una tienda/catálogo de joyería de autor. Está construido con Next.js App Router, TypeScript y Tailwind CSS. El tono visual y textual debe ser cálido, artesanal, elegante y claro.

## Comandos

Usar estos comandos para validar cambios:

```bash
npm run lint
npm run build
npm run dev
```

El servidor local queda en `http://localhost:3000`.

## Reglas de edición

- No borrar ni reordenar cambios existentes del usuario.
- Mantener los cambios acotados al pedido.
- Usar `data/products.ts` para productos estáticos.
- Usar `public/joyas` para fotos de productos.
- Al reemplazar fotos importantes, preferir nombres nuevos para evitar caché del navegador o de Next.
- Mantener rutas de imagen con formato `/joyas/archivo.jpeg`.
- No introducir librerías nuevas salvo que sea realmente necesario.
- Después de cambios en productos, correr `npm run lint`.
- Después de cambios en rutas, Webpay, admin, metadata o catálogo compartido, correr también `npm run build`.

## Productos

El tipo `Product` está en `data/products.ts`.

Campos importantes:

- `id`: slug público, debe ser único y estable.
- `nombre`: nombre visible.
- `precio`: número en CLP, sin puntos ni signo peso.
- `descripcionCorta`: aparece en tarjetas.
- `descripcionLarga`: aparece en ficha.
- `fotos`: primera imagen es la principal.
- `metal`, `piedra`, `coleccion`, `estado`: datos opcionales de ficha.
- `destacado`: muestra en destacados de home.
- `tipo`: `"unica"` o `"serie"`.
- `categoria`: una de `anillos`, `aros`, `collares`, `colgantes`, `pulseras-esclavas`.
- `vendido`: controla disponibilidad visual.

Ejemplo:

```ts
{
  id: "brisa-de-otono",
  nombre: "Brisa de Otoño",
  precio: 50000,
  descripcionCorta: "Aros colgantes con hojas doradas en cascada.",
  descripcionLarga: "Aros colgantes trabajados a mano...",
  fotos: ["/joyas/aros-brisa-de-otono-1.jpeg"],
  metal: "Bronce y plata 950",
  destacado: false,
  tipo: "unica",
  categoria: "aros",
  vendido: false,
}
```

## Imágenes

- Fotos de producto: `public/joyas`.
- Decoración: `public/decor`.
- Usar nombres legibles en minúsculas, por ejemplo `aros-brisa-de-otono-1.jpeg`.
- Si el usuario indica foto principal, ponerla primera en `fotos`.
- Si se reemplaza un producto y la imagen no cambia en browser, crear filenames nuevos y actualizar referencias.

## Catálogo dinámico

`lib/products-store.ts` mezcla productos dinámicos de Vercel Blob con `data/products.ts`.

Variables usadas:

```bash
BLOB_READ_WRITE_TOKEN
BLOB_PRODUCTS_URL
ADMIN_PASSWORD
```

En local puede faltar Blob. El fallback al catálogo estático es comportamiento esperado.

## Webpay

Archivos principales:

- `lib/webpay.ts`
- `app/api/webpay/create/route.ts`
- `app/api/webpay/commit/route.ts`
- `app/webpay/resultado/`
- `components/WebpayButton.tsx`

Variables usadas:

```bash
RESEND_API_KEY
PAYMENT_NOTIFY_EMAIL
PAYMENT_NOTIFY_FROM
PAYMENT_NOTIFY_WEBHOOK_URL
NEXT_PUBLIC_WEBPAY_ENABLED
TBK_ENV
TBK_COMMERCE_CODE
TBK_API_KEY
WEBPAY_RETURN_URL
WEBPAY_FINAL_URL
```

No cambiar el flujo de pagos sin validar build y rutas relacionadas. Las notificaciones de Webpay deben informar tanto pagos aprobados como pagos no aprobados; si `PAYMENT_NOTIFY_EMAIL` no existe, el destinatario por defecto es `carolaplaza7@gmail.com`.

## Rutas clave para revisar

```text
/
/producto
/producto/[id]
/producto?categoria=aros
/contacto
/admin
/admin/nuevo
/webpay/resultado
```

## SEO

- `SITE_URL` vive en `lib/config.ts`.
- Metadata global: `app/layout.tsx`.
- Metadata de catálogo: `app/producto/page.tsx`.
- Metadata y JSON-LD por ficha: `app/producto/[slug]/page.tsx`.
- Sitemap: `app/sitemap.ts`.
- Robots: `app/robots.ts`.

Al agregar productos nuevos, revisar que `id`, `nombre`, `descripcionCorta`, `precio` y `fotos[0]` estén correctos, porque alimentan metadata y JSON-LD.

## Estilo de UI

- Mantener estética limpia, artesanal y sofisticada.
- Evitar cambios globales de paleta o tipografía sin pedido explícito.
- Usar componentes existentes antes de crear nuevos.
- Cuidar mobile: tarjetas, botones y textos no deben superponerse.
- No convertir la home en landing genérica; debe mostrar piezas y caminos de compra reales.

## Checklist antes de terminar

```bash
npm run lint
```

Para cambios más amplios:

```bash
npm run build
```

Si hay servidor dev activo, verificar al menos la ruta afectada con `curl` o navegador.
