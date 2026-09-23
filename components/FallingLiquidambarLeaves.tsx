"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";

const flowers = [
  { left: "4%",  delay: "0s",  duration: "18s", size: "30px", drift: "34px",  opacity: "0.46", color: "#d982a0" },
  { left: "13%", delay: "5s",  duration: "23s", size: "24px", drift: "-24px", opacity: "0.40", color: "#e8b86f" },
  { left: "22%", delay: "10s", duration: "20s", size: "34px", drift: "40px",  opacity: "0.42", color: "#e9a9b9" },
  { left: "31%", delay: "2s",  duration: "26s", size: "26px", drift: "-38px", opacity: "0.38", color: "#cf8da2" },
  { left: "42%", delay: "14s", duration: "21s", size: "22px", drift: "28px",  opacity: "0.36", color: "#efc78d" },
  { left: "53%", delay: "7s",  duration: "19s", size: "36px", drift: "-32px", opacity: "0.44", color: "#df9eaf" },
  { left: "63%", delay: "16s", duration: "24s", size: "25px", drift: "40px",  opacity: "0.38", color: "#d982a0" },
  { left: "71%", delay: "3s",  duration: "22s", size: "32px", drift: "-30px", opacity: "0.42", color: "#efc78d" },
  { left: "80%", delay: "9s",  duration: "17s", size: "27px", drift: "32px",  opacity: "0.40", color: "#e9a9b9" },
  { left: "89%", delay: "6s",  duration: "25s", size: "35px", drift: "-36px", opacity: "0.42", color: "#cf8da2" },
  { left: "95%", delay: "12s", duration: "20s", size: "24px", drift: "24px",  opacity: "0.38", color: "#e8b86f" },
  { left: "8%",  delay: "18s", duration: "22s", size: "29px", drift: "-30px", opacity: "0.40", color: "#df9eaf" },
  { left: "47%", delay: "20s", duration: "27s", size: "23px", drift: "30px",  opacity: "0.36", color: "#d982a0" },
  { left: "76%", delay: "4s",  duration: "19s", size: "33px", drift: "-24px", opacity: "0.42", color: "#e9a9b9" },
] as const;

export default function FallingSpringFlowers() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) return null;

  return (
    <div className="cp-flower-field" aria-hidden="true">
      {flowers.map((flower, index) => (
        <span
          key={index}
          className="cp-falling-flower"
          style={
            {
              "--flower-left":     flower.left,
              "--flower-delay":    flower.delay,
              "--flower-duration": flower.duration,
              "--flower-size":     flower.size,
              "--flower-drift":    flower.drift,
              "--flower-opacity":  flower.opacity,
              "--flower-color":    flower.color,
            } as CSSProperties
          }
        >
          ✿
        </span>
      ))}
    </div>
  );
}
