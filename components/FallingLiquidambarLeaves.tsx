"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";

const leaves = [
  { left: "5%", delay: "0s", duration: "16s", size: "76px", drift: "48px", rotate: "34deg", color: "#b73522" },
  { left: "14%", delay: "3s", duration: "19s", size: "60px", drift: "-34px", rotate: "-18deg", color: "#df7b16" },
  { left: "23%", delay: "7s", duration: "17s", size: "72px", drift: "58px", rotate: "72deg", color: "#873020" },
  { left: "35%", delay: "1s", duration: "22s", size: "64px", drift: "-54px", rotate: "12deg", color: "#c94b20" },
  { left: "47%", delay: "5s", duration: "18s", size: "84px", drift: "40px", rotate: "-52deg", color: "#9f2f24" },
  { left: "59%", delay: "9s", duration: "21s", size: "62px", drift: "-44px", rotate: "26deg", color: "#e19a18" },
  { left: "70%", delay: "2s", duration: "15s", size: "78px", drift: "54px", rotate: "-34deg", color: "#b94720" },
  { left: "82%", delay: "6s", duration: "20s", size: "58px", drift: "-36px", rotate: "64deg", color: "#6f321d" },
  { left: "93%", delay: "4s", duration: "23s", size: "82px", drift: "32px", rotate: "-12deg", color: "#c72f2c" },
] as const;

export default function FallingLiquidambarLeaves() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) return null;

  return (
    <div className="cp-leaf-field" aria-hidden="true">
      {leaves.map((leaf, index) => (
        <span
          key={`${leaf.left}-${index}`}
          className="cp-liquidambar-leaf"
          style={
            {
              "--leaf-left": leaf.left,
              "--leaf-delay": leaf.delay,
              "--leaf-duration": leaf.duration,
              "--leaf-size": leaf.size,
              "--leaf-drift": leaf.drift,
              "--leaf-rotate": leaf.rotate,
              "--leaf-color": leaf.color,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
