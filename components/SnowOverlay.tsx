"use client";

import { useEffect, useState } from "react";

type Flake = {
  id: number;
  left: string;      // "12.3%"
  sizePx: number;    // 4..12
  durationS: number; // 10..20
  delayS: number;    // 0..10 (lo usamos negativo)
};

function makeFlakes(count: number): Flake[] {
  return Array.from({ length: count }).map((_, i) => {
    const size = 4 + Math.random() * 8;       // 4..12
    const duration = 10 + Math.random() * 10; // 10..20
    const delay = Math.random() * 10;         // 0..10
    const left = `${Math.random() * 100}%`;

    return {
      id: i + 1,
      left,
      sizePx: size,
      durationS: duration,
      delayS: delay,
    };
  });
}

export default function SnowOverlay() {
  // IMPORTANTE: SSR y primer render del cliente deben ser iguales -> empezamos vacío.
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    setFlakes(makeFlakes(26));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full bg-white/80 shadow-sm"
          style={{
            left: f.left,
            width: `${f.sizePx}px`,
            height: `${f.sizePx}px`,
            top: "-10%",
            animation: `snow-fall ${f.durationS}s linear infinite`,
            animationDelay: `-${f.delayS}s`,
          }}
        />
      ))}
    </div>
  );
}
