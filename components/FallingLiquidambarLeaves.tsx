"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";

const snowflakes = [
  { left: "4%",  delay: "0s",  duration: "14s", size: "58px", drift: "38px",  opacity: "0.90", color: "#ffffff" },
  { left: "13%", delay: "4s",  duration: "19s", size: "46px", drift: "-28px", opacity: "0.82", color: "#ffffff" },
  { left: "22%", delay: "8s",  duration: "16s", size: "68px", drift: "46px",  opacity: "0.88", color: "#ffffff" },
  { left: "31%", delay: "1s",  duration: "22s", size: "50px", drift: "-42px", opacity: "0.80", color: "#ffffff" },
  { left: "42%", delay: "11s", duration: "17s", size: "40px", drift: "30px",  opacity: "0.78", color: "#ffffff" },
  { left: "53%", delay: "6s",  duration: "15s", size: "72px", drift: "-36px", opacity: "0.92", color: "#ffffff" },
  { left: "63%", delay: "13s", duration: "20s", size: "44px", drift: "44px",  opacity: "0.80", color: "#ffffff" },
  { left: "71%", delay: "2s",  duration: "18s", size: "64px", drift: "-32px", opacity: "0.88", color: "#ffffff" },
  { left: "80%", delay: "7s",  duration: "13s", size: "52px", drift: "36px",  opacity: "0.84", color: "#ffffff" },
  { left: "89%", delay: "5s",  duration: "21s", size: "70px", drift: "-40px", opacity: "0.90", color: "#ffffff" },
  { left: "95%", delay: "9s",  duration: "16s", size: "48px", drift: "28px",  opacity: "0.82", color: "#ffffff" },
  { left: "8%",  delay: "15s", duration: "18s", size: "56px", drift: "-34px", opacity: "0.86", color: "#ffffff" },
  { left: "47%", delay: "17s", duration: "23s", size: "42px", drift: "32px",  opacity: "0.78", color: "#ffffff" },
  { left: "76%", delay: "3s",  duration: "15s", size: "62px", drift: "-26px", opacity: "0.88", color: "#ffffff" },
] as const;

export default function FallingLiquidambarLeaves() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) return null;

  return (
    <div className="cp-snow-field" aria-hidden="true">
      {snowflakes.map((flake, index) => (
        <span
          key={index}
          className="cp-snowflake"
          style={
            {
              "--snow-left":     flake.left,
              "--snow-delay":    flake.delay,
              "--snow-duration": flake.duration,
              "--snow-size":     flake.size,
              "--snow-drift":    flake.drift,
              "--snow-opacity":  flake.opacity,
              "--snow-color":    flake.color,
            } as CSSProperties
          }
        >
          ❄
        </span>
      ))}
    </div>
  );
}
