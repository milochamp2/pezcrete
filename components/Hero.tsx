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
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--white)", paddingTop: "3.75rem" }}
    >
      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[25, 50, 75].map((x) => (
          <div key={x} className="absolute top-0 bottom-0 w-px hidden sm:block"
            style={{ left: `${x}%`, background: "rgba(0,0,0,0.04)" }} />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center w-full max-w-6xl mx-auto px-5 sm:px-8"
        style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo)",
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-10 lg:mb-14">
          <Image
            src="/logo/pezcrete%20logo.png"
            alt="Pezcrete"
            width={420}
            height={126}
            priority
            className="w-auto object-contain"
            style={{ height: "clamp(3rem, 10vw, 9rem)" }}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-10 lg:mb-14">
          <div className="h-px flex-1 max-w-16" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
          <span
            className="text-[0.65rem] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase"
            style={{ color: "var(--grey-500)" }}
          >
            Est. Melbourne, VIC
          </span>
          <div className="h-px flex-1 max-w-16" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
        </div>

        {/* Headline */}
        <h1
          className="leading-[0.87] tracking-wide mb-6 sm:mb-8 lg:mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize:   "clamp(3.25rem, 14vw, 13rem)",
          }}
        >
          <span className="block" style={{ color: "var(--black)" }}>CONCRETE.</span>
          <span className="block" style={{ color: "rgba(0,0,0,0.22)" }}>
            BUILT RIGHT.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-sm sm:text-base lg:text-lg uppercase mb-8 sm:mb-12 lg:mb-14 mx-auto"
          style={{
            color:         "var(--text-on-light-muted)",
            letterSpacing: "0.16em",
            maxWidth:      "30rem",
          }}
        >
          Melbourne&rsquo;s trusted concrete specialists
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            <span>Get a Free Quote</span>
          </Link>
          <Link href="/services" className="btn-outline w-full sm:w-auto">
            <span>Our Services</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}
      >
        <div className="w-px h-10 sm:h-14 overflow-hidden relative mx-auto"
          style={{ backgroundColor: "rgba(0,0,0,0.08)" }}>
          <div className="absolute inset-0 w-full" style={{
            background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4), transparent)",
            animation:  "scrollLine 2.4s ease-in-out infinite",
          }} />
        </div>
      </div>

      {/* Coordinates — desktop only */}
      <div
        className="absolute bottom-8 right-8 text-right hidden lg:block"
        style={{ opacity: loaded ? 0.35 : 0, transition: "opacity 1s ease 0.7s" }}
      >
        <p className="text-xs tracking-widest" style={{ color: "var(--grey-500)" }}>37°48′ S, 144°57′ E</p>
        <p className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-500)" }}>Melbourne, VIC</p>
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
