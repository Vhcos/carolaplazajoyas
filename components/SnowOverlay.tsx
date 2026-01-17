"use client";

import React, { useMemo } from "react";

type Heart = {
  left: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
  drift: string;
};

function isHeartsActive(date = new Date()) {
  // corazones: 10 enero 2026 -> 14 febrero 2026
  const start = new Date(2026, 0, 10, 0, 0, 0);
  const end = new Date(2026, 1, 14, 23, 59, 59);
  return date >= start && date <= end;
}

export default function SnowOverlay() {
  const active = isHeartsActive();

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const hearts: Heart[] = useMemo(() => {
    // Más densidad para que sea obvio
    const base: Heart[] = [];
    const cols = 26;

    for (let i = 0; i < cols; i++) {
      const left = `${Math.round((i / (cols - 1)) * 98) + 1}vw`;
      const delay = `${(i % 7) * 0.6}s`;
      const duration = `${9 + (i % 6) * 1.2}s`;
      const size = `${12 + (i % 5) * 4}px`;
      const opacity = 0.18 + ((i % 6) * 0.03);
      const drift = `${10 + (i % 6) * 6}px`;
      base.push({ left, delay, duration, size, opacity, drift });
    }

    return base;
  }, []);

  if (!active || prefersReduced) return null;

  return (
    <>
      <style>{`
        .cp-hearts {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999; /* arriba de todo */
          overflow: hidden;
        }

        .cp-heart {
          position: absolute;
          top: -30px;
          left: var(--left);
          font-size: var(--size);
          opacity: var(--opacity);
          color: #e11d48; /* rojo fijo */
          text-shadow: 0 1px 0 rgba(0,0,0,0.08);
          animation:
            cp-fall var(--duration) linear infinite,
            cp-drift calc(var(--duration) * 0.7) ease-in-out infinite,
            cp-spin calc(var(--duration) * 0.55) ease-in-out infinite;
          animation-delay: var(--delay);
          will-change: transform;
          user-select: none;
        }

        @keyframes cp-fall {
          from { transform: translateY(-20px); }
          to   { transform: translateY(calc(100vh + 80px)); }
        }

        @keyframes cp-drift {
          0%   { margin-left: 0; }
          50%  { margin-left: var(--drift); }
          100% { margin-left: 0; }
        }

        @keyframes cp-spin {
          0%   { filter: none; }
          50%  { filter: drop-shadow(0 2px 2px rgba(0,0,0,0.08)); }
          100% { filter: none; }
        }
      `}</style>

      <div className="cp-hearts" aria-hidden="true" data-cp-hearts="on">
        {hearts.map((h, i) => (
          <span
            key={i}
            className="cp-heart"
            style={
              {
                ["--left" as any]: h.left,
                ["--delay" as any]: h.delay,
                ["--duration" as any]: h.duration,
                ["--size" as any]: h.size,
                ["--opacity" as any]: h.opacity,
                ["--drift" as any]: h.drift,
              } as React.CSSProperties
            }
          >
            ❤
          </span>
        ))}
      </div>
    </>
  );
}
