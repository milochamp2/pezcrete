"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(pct, 100));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position:        "fixed",
        top:             0,
        left:            0,
        zIndex:          200,
        height:          "2px",
        width:           `${progress}%`,
        backgroundColor: "rgba(255,255,255,0.7)",
        transition:      "width 0.08s linear",
        pointerEvents:   "none",
        transformOrigin: "left",
      }}
    />
  );
}
