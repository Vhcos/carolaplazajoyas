// components/SnowOverlay.tsx
"use client";

import { useMemo } from "react";

const SNOWFLAKES = 40;

export function SnowOverlay() {
  const now = new Date();

  // Solo diciembre
  if (now.getMonth() !== 11) return null;

  const flakes = useMemo(
    () =>
      Array.from({ length: SNOWFLAKES }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * -10,
        size: 4 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full bg-white/80 shadow-sm"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            top: "-10%",
            animation: `snow-fall ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
