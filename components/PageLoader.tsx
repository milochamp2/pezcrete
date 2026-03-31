"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">("visible");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const leaveTimer = setTimeout(() => setPhase("leaving"), 2000);
    const goneTimer  = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
    }, 2900);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  const leaving = phase === "leaving";

  return (
    <>
      {/* Top split panel */}
      <div
        className="fixed inset-x-0 top-0 z-[200]"
        style={{
          height: "50vh",
          backgroundColor: "var(--black)",
          transform: leaving ? "translateY(-101%)" : "translateY(0)",
          transition: leaving ? "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
        }}
      />

      {/* Bottom split panel */}
      <div
        className="fixed inset-x-0 bottom-0 z-[200]"
        style={{
          height: "calc(50vh + 2px)",
          backgroundColor: "var(--black)",
          transform: leaving ? "translateY(101%)" : "translateY(0)",
          transition: leaving ? "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
        }}
      />

      {/* Center content */}
      <div
        className="fixed inset-0 z-[201] flex flex-col items-center justify-center"
        style={{
          opacity: leaving ? 0 : 1,
          transition: leaving ? "opacity 0.2s ease" : "none",
          pointerEvents: "none",
        }}
      >
        {/* Logo */}
        <div style={{ animation: "loaderLogoRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
          <Image
            src="/logo/pezcrete%20logo.png"
            alt="Pezcrete"
            width={240}
            height={72}
            priority
            className="w-auto object-contain"
            style={{ height: "clamp(4rem, 14vw, 7rem)" }}
          />
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: "220px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            marginTop: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "var(--grey-500)",
              transformOrigin: "left",
              animation: "loaderBarFill 1.9s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--grey-700)",
            marginTop: "1.25rem",
            animation: "loaderFadeUp 0.6s ease 0.5s both",
          }}
        >
          Melbourne &amp; Surrounds
        </p>
      </div>

      <style>{`
        @keyframes loaderLogoRise {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes loaderBarFill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes loaderFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
