"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-36 grain relative overflow-hidden"
      style={{ backgroundColor: "var(--dark)" }}
    >
      {/* Background number */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        aria-hidden
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(12rem, 20vw, 26rem)",
          lineHeight: 1,
          color: "rgba(255,255,255,0.018)",
          letterSpacing: "-0.02em",
        }}
      >
        PEZ
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <span className="section-label reveal" style={{ color: "var(--grey-700)" }}>
              Why Pezcrete
            </span>

            <h2
              className="mt-6 text-[clamp(3rem,8vw,6.5rem)] leading-none tracking-wide text-white reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PRECISION.
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                }}
              >
                EVERY TIME.
              </span>
            </h2>

            <div className="mt-10 h-px reveal reveal-delay-2" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

            <p
              className="mt-10 text-base lg:text-lg leading-[1.85] reveal reveal-delay-2"
              style={{ color: "var(--grey-200)" }}
            >
              With years of hands-on experience across Melbourne and surrounds,
              Pezcrete delivers precision concrete work — from residential
              driveways to large-scale structural projects. We combine trade
              expertise with a relentless attention to detail, so every job is
              finished to the highest standard.
            </p>
            <p
              className="mt-5 text-base leading-relaxed reveal reveal-delay-3"
              style={{ color: "var(--grey-500)" }}
            >
              Quality materials. Clean finishes. On time, every time.
            </p>

            <div className="mt-12 reveal reveal-delay-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline"
              >
                <span>Start Your Project</span>
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col gap-0 reveal reveal-delay-2">
            {[
              { value: "10+",  label: "Years of Experience",    desc: "Hands-on trade expertise across Melbourne." },
              { value: "500+", label: "Projects Completed",     desc: "Residential, commercial, and structural works." },
              { value: "100%", label: "Melbourne Based",        desc: "Local crew, local knowledge, every time." },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-8 border-b first:border-t"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-start gap-6">
                  <p
                    className="text-5xl leading-none flex-shrink-0"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--white)", minWidth: "5rem" }}
                  >
                    {stat.value}
                  </p>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{ color: "var(--grey-500)" }}
                    >
                      {stat.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--grey-700)" }}>
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
