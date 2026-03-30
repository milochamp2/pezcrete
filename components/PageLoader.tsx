"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">("visible");

  useEffect(() => {
    // Block scroll while loader is up
    document.body.style.overflow = "hidden";

    // Progress bar fills for 1.8s, then we exit
    const leaveTimer = setTimeout(() => {
      setPhase("leaving");
    }, 1800);

    const goneTimer = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "var(--black)",
        transition: "transform 0.65s cubic-bezier(0.76, 0, 0.24, 1)",
        transform: phase === "leaving" ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: phase === "leaving" ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <Image
          src="/logo/pezcrete%20logo.png"
          alt="Pezcrete"
          width={180}
          height={54}
          priority
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full"
          style={{
            backgroundColor: "var(--grey-500)",
            width: "100%",
            transformOrigin: "left",
            animation: "loaderBar 1.75s cubic-bezier(0.4,0,0.2,1) forwards",
          }}
        />
      </div>

      {/* Corner text */}
      <p
        className="absolute bottom-6 right-8 text-xs tracking-widest uppercase"
        style={{ color: "var(--grey-700)" }}
      >
        Melbourne &amp; Surrounds
      </p>

      <style>{`
        @keyframes loaderBar {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
