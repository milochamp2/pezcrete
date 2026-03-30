"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollRevealInit from "./ScrollRevealInit";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollRevealInit />
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center grain overflow-hidden"
        style={{ backgroundColor: "var(--black)" }}
      >
        {/* Subtle radial gradient for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(80,80,80,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Geometric accent lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute left-0 top-0 w-px h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 w-px h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.svg"
              alt="Pezcrete"
              width={200}
              height={60}
              priority
              className="h-14 w-auto object-contain opacity-90"
            />
          </div>

          {/* Divider */}
          <div
            className="w-12 h-px mx-auto mb-10"
            style={{ backgroundColor: "var(--grey-700)" }}
          />

          {/* Heading */}
          <h1
            className="font-heading text-7xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] leading-none tracking-wider text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CONCRETE.
            <br />
            <span style={{ color: "var(--grey-500)" }}>BUILT RIGHT.</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-base sm:text-lg tracking-widest uppercase mb-12"
            style={{ color: "var(--grey-500)", letterSpacing: "0.25em" }}
          >
            Melbourne&rsquo;s trusted concrete specialists
          </p>

          {/* CTA */}
          <button onClick={scrollToContact} className="btn-primary">
            Get a Free Quote
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: loaded ? 0.4 : 0,
            transition: "opacity 1.2s ease 0.8s",
          }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--grey-500)" }}
          >
            Scroll
          </span>
          <div className="w-px h-10 overflow-hidden" style={{ backgroundColor: "var(--grey-700)" }}>
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(to bottom, transparent, white, transparent)",
                animation: "scrollLine 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>
      </section>
    </>
  );
}
