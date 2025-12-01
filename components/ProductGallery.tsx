// components/ProductGallery.tsx
import Image from "next/image";

type ProductGalleryProps = {
  fotos: string[];
  nombre: string;
};

export default function ProductGallery({ fotos, nombre }: ProductGalleryProps) {
  const main = fotos[0] ?? "/joyas/placeholder.jpg";
  const secondary = fotos.slice(1, 3);

  return (
    <div className="space-y-3">
      {/* Foto principal */}
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-rose-100 bg-slate-100">
        <Image
          src={main}
          alt={nombre}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 420px, 90vw"
        />
      </div>

      {/* Thumbnails */}
      {secondary.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {secondary.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-100"
            >
              <Image
                src={src}
                alt={`${nombre} vista ${idx + 2}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 200px, 45vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
