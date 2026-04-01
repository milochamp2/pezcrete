"use client";

import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Background watermark — desktop only */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        aria-hidden
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(12rem, 20vw, 26rem)",
          lineHeight: 1,
          color: "rgba(0,0,0,0.04)",
        }}
      >
        PEZ
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <span className="section-label reveal" style={{ color: "var(--grey-500)" }}>Why Pezcrete</span>

            <h2
              className="mt-5 leading-none tracking-wide reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize:   "clamp(2.75rem, 8vw, 6.5rem)",
                color: "var(--black)",
              }}
            >
              PRECISION.
              <br />
              <span style={{ color: "rgba(0,0,0,0.22)" }}>EVERY TIME.</span>
            </h2>

            <div className="mt-8 h-px reveal reveal-delay-2" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />

            <p className="mt-8 text-base lg:text-lg leading-relaxed reveal reveal-delay-2" style={{ color: "var(--text-on-light)" }}>
              With years of hands-on experience across Melbourne and surrounds,
              Pezcrete delivers precision concrete work — from residential
              driveways to large-scale structural projects. We combine trade
              expertise with a relentless attention to detail, so every job is
              finished to the highest standard.
            </p>
            <p className="mt-4 text-base leading-relaxed reveal reveal-delay-3" style={{ color: "var(--text-on-light-muted)" }}>
              Quality materials. Clean finishes. On time, every time.
            </p>

            <div className="mt-10 reveal reveal-delay-3">
              <Link href="/contact" className="btn-dark w-full sm:w-auto text-center sm:text-left">
                <span>Start Your Project</span>
              </Link>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col reveal reveal-delay-2">
            {[
              { value: "10+",  label: "Years of Experience",  desc: "Hands-on trade expertise across Melbourne." },
              { value: "500+", label: "Projects Completed",   desc: "Residential, commercial, and structural works." },
              { value: "100%", label: "Melbourne Based",      desc: "Local crew, local knowledge, every time." },
            ].map((stat) => (
              <div
                key={stat.label}
                className="py-6 sm:py-8 border-b first:border-t"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  <p
                    className="leading-none flex-shrink-0"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem,6vw,3.5rem)", minWidth: "4.5rem", color: "var(--black)" }}
                  >
                    {stat.value}
                  </p>
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--grey-500)" }}>
                      {stat.label}
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: "var(--text-on-light-muted)" }}>
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
