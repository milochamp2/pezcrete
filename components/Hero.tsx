"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grain overflow-hidden pt-24"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[16.66, 33.33, 50, 66.66, 83.33].map((x) => (
          <div
            key={x}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${x}%`, background: "rgba(255,255,255,0.022)" }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 90% 60% at 50% 45%, rgba(110,110,110,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto"
        style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo)",
        }}
      >
        {/* ── Logo — hero size ─────────────────────── */}
        <div className="flex justify-center mb-14">
          <Image
            src="/logo/pezcrete%20logo.png"
            alt="Pezcrete"
            width={420}
            height={126}
            priority
            className="w-auto object-contain"
            style={{ height: "clamp(5.5rem, 12vw, 10rem)" }}
          />
        </div>

        {/* Divider row */}
        <div className="flex items-center justify-center gap-5 mb-14">
          <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--grey-500)" }}>
            Est. Melbourne, VIC
          </span>
          <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* ── Headline ─────────────────────────────── */}
        <h1
          className="leading-[0.87] tracking-wide mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize:   "clamp(4.5rem, 14vw, 13rem)",
          }}
        >
          {/* Line 1 — solid white */}
          <span className="block text-white">CONCRETE.</span>

          {/* Line 2 — visible grey (not outline) so it reads clearly */}
          <span
            className="block"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            BUILT RIGHT.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg tracking-[0.22em] uppercase mb-14 mx-auto"
          style={{ color: "var(--text-on-dark-muted)", maxWidth: "36rem" }}
        >
          Melbourne&rsquo;s trusted concrete specialists
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            <span>Get a Free Quote</span>
          </Link>
          <Link href="/services" className="btn-outline">
            <span>Our Services</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator — line only, no text */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}
      >
        <div className="w-px h-14 overflow-hidden relative mx-auto" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
          <div
            className="absolute inset-0 w-full"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.55), transparent)",
              animation:  "scrollLine 2.4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Coordinates */}
      <div
        className="absolute bottom-8 right-8 text-right hidden lg:block"
        style={{ opacity: loaded ? 0.38 : 0, transition: "opacity 1s ease 0.7s" }}
      >
        <p className="text-xs tracking-widest" style={{ color: "var(--grey-700)" }}>37°48′ S, 144°57′ E</p>
        <p className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>Melbourne, VIC</p>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
