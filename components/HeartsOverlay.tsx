"use client";

import { useEffect, useMemo, useState } from "react";

type Heart = {
  id: string;
  leftPct: number;
  sizePx: number;
  durationS: number;
  delayS: number;
  opacity: number;
  rotateDeg: number;
};

function isAmorWindow(date: Date) {
  // Mes base 0 => 0 = enero, 1 = febrero
  const start = new Date(2026, 0, 10, 0, 0, 0); // 10 enero 2026
  const end = new Date(2026, 1, 14, 23, 59, 59); // 14 febrero 2026
  return date >= start && date <= end;
}

export default function HeartsOverlay() {
  const [mounted, setMounted] = useState(false);

  const active = useMemo(() => isAmorWindow(new Date()), []);

  useEffect(() => {
    if (!active) return;
    setMounted(true);
  }, [active]);

  const hearts = useMemo<Heart[]>(() => {
    if (!mounted || !active) return [];

    const count = 18; // cantidad de corazones
    const arr: Heart[] = [];

    for (let i = 0; i < count; i++) {
      const size = 14 + Math.random() * 18; // 14–32px
      arr.push({
        id: `h-${i}-${Math.random().toString(16).slice(2)}`,
        leftPct: Math.random() * 100,
        sizePx: size,
        durationS: 10 + Math.random() * 10, // 10–20s
        delayS: -Math.random() * 10,
        opacity: 0.22 + Math.random() * 0.35,
        rotateDeg: -18 + Math.random() * 36,
      });
    }

    return arr;
  }, [mounted, active]);

  if (!active) return null;

  return (
    <>
      <style>{`
        @keyframes heart-fall {
          0% { transform: translateY(-12%) translateX(0) rotate(var(--rot)); }
          100% { transform: translateY(112%) translateX(12px) rotate(calc(var(--rot) + 16deg)); }
        }

        @keyframes heart-sway {
          0% { margin-left: 0; }
          50% { margin-left: 18px; }
          100% { margin-left: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .heart { animation: none !important; }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        {hearts.map((h) => (
          <div
            key={h.id}
            className="heart absolute select-none"
            style={{
              left: `${h.leftPct}%`,
              top: "-10%",
              opacity: h.opacity,
              fontSize: `${h.sizePx}px`,
              lineHeight: 1,
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.10))",
              ["--rot" as any]: `${h.rotateDeg}deg`,
              animation: `heart-fall ${h.durationS}s linear infinite`,
              animationDelay: `${h.delayS}s`,
            }}
          >
            <span
              style={{
                display: "inline-block",
                animation: `heart-sway ${3.6 + Math.random() * 2.6}s ease-in-out infinite`,
              }}
            >
              ♥
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
