"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Scroll-reveal is handled by app/template.tsx (re-runs on every page)

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay slightly so page-loader has started exiting
    const t = setTimeout(() => setLoaded(true), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grain overflow-hidden pt-20"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Background grid */}
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
          style={{ background: "radial-gradient(ellipse 90% 60% at 50% 45%, rgba(100,100,100,0.06) 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full"
        style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo)",
        }}
      >
        {/* Logo — large hero version */}
        <div className="flex justify-center mb-12">
          <Image
            src="/logo/pezcrete%20logo.png"
            alt="Pezcrete"
            width={300}
            height={90}
            priority
            className="w-auto object-contain"
            style={{ height: "clamp(4rem, 8vw, 7rem)" }}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-1 max-w-16" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-500)" }}>
            Est. Melbourne, VIC
          </span>
          <div className="h-px flex-1 max-w-16" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Headline */}
        <h1
          className="leading-[0.88] tracking-wide text-white mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize:   "clamp(4.5rem, 14vw, 12rem)",
          }}
        >
          CONCRETE.
          <br />
          <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}>
            BUILT RIGHT.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg tracking-widest uppercase mb-14 mx-auto"
          style={{ color: "var(--text-on-dark-muted)", letterSpacing: "0.22em", maxWidth: "36rem" }}
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

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}
      >
        <div className="w-px h-12 overflow-hidden relative" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
          <div
            className="absolute inset-0 w-full"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--grey-500), transparent)",
              animation:  "scrollLine 2.2s ease-in-out infinite",
            }}
          />
        </div>
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>
          Scroll
        </span>
      </div>

      {/* Coordinates detail */}
      <div
        className="absolute bottom-8 right-8 text-right hidden lg:block"
        style={{ opacity: loaded ? 0.4 : 0, transition: "opacity 1s ease 0.7s" }}
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
