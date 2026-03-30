"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollRevealInit from "./ScrollRevealInit";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay slightly so page loader has started its exit
    const t = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (!el) return;
    const lenis = (window as unknown as { lenis?: { scrollTo: (el: Element, opts?: object) => void } }).lenis;
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollRevealInit />
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center grain overflow-hidden"
        style={{ backgroundColor: "var(--black)" }}
      >
        {/* Background grid lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Vertical lines */}
          <div className="absolute left-[16.66%] top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.025)" }} />
          <div className="absolute left-[33.33%] top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.025)" }} />
          <div className="absolute left-[50%]    top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.025)" }} />
          <div className="absolute left-[66.66%] top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.025)" }} />
          <div className="absolute left-[83.33%] top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.025)" }} />

          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 90% 60% at 50% 45%, rgba(100,100,100,0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Top edge line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />

        {/* Content */}
        <div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo)",
          }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/logo/pezcrete%20logo.png"
              alt="Pezcrete"
              width={220}
              height={66}
              priority
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-16" style={{ backgroundColor: "var(--grey-800, #2a2a2a)" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>
              Est. Melbourne
            </span>
            <div className="h-px flex-1 max-w-16" style={{ backgroundColor: "var(--grey-800, #2a2a2a)" }} />
          </div>

          {/* Heading */}
          <h1
            className="text-[clamp(4rem,13vw,11rem)] leading-[0.9] tracking-wide text-white mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CONCRETE.
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
              }}
            >
              BUILT RIGHT.
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-sm tracking-[0.28em] uppercase mb-14 mx-auto max-w-sm"
            style={{ color: "var(--grey-500)" }}
          >
            Melbourne&rsquo;s trusted concrete specialists
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToContact} className="btn-primary">
              <span>Get a Free Quote</span>
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline"
            >
              <span>Our Services</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s ease 0.4s",
          }}
        >
          <div
            className="w-px h-12 overflow-hidden relative"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="absolute inset-0 w-full"
              style={{
                background: "linear-gradient(to bottom, transparent, var(--grey-500), transparent)",
                animation: "scrollLine 2.2s ease-in-out infinite",
              }}
            />
          </div>
          <span
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--grey-700)" }}
          >
            Scroll
          </span>
        </div>

        {/* Corner coordinates — architectural detail */}
        <div
          className="absolute bottom-8 right-8 text-right hidden lg:block"
          style={{
            opacity: loaded ? 0.35 : 0,
            transition: "opacity 1s ease 0.6s",
          }}
        >
          <p className="text-[0.6rem] tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>
            37°48′ S, 144°57′ E
          </p>
          <p className="text-[0.6rem] tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>
            Melbourne, VIC
          </p>
        </div>

        <style>{`
          @keyframes scrollLine {
            0%   { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>
      </section>
    </>
  );
}
