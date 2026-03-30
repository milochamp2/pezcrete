export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-36 grain relative overflow-hidden"
      style={{ backgroundColor: "var(--dark)" }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute -top-6 left-6 lg:left-16 pointer-events-none select-none"
        style={{
          fontSize: "clamp(12rem, 22vw, 28rem)",
          lineHeight: 1,
          color: "rgba(255,255,255,0.025)",
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
        }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl">
          {/* Label */}
          <p
            className="text-xs tracking-widest uppercase mb-8 reveal"
            style={{ color: "var(--grey-500)" }}
          >
            Why Pezcrete
          </p>

          {/* Heading */}
          <h2
            className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide text-white mb-10 reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PRECISION.
            <br />
            <span style={{ color: "var(--grey-500)" }}>EVERY TIME.</span>
          </h2>

          {/* Body copy */}
          <p
            className="text-base lg:text-lg leading-relaxed mb-8 reveal reveal-delay-2"
            style={{ color: "var(--grey-200)" }}
          >
            With years of hands-on experience across Melbourne and surrounds,
            Pezcrete delivers precision concrete work — from residential
            driveways to large-scale structural projects. We combine trade
            expertise with a relentless attention to detail, so every job is
            finished to the highest standard.
          </p>
          <p
            className="text-base lg:text-lg leading-relaxed reveal reveal-delay-3"
            style={{ color: "var(--grey-500)" }}
          >
            Quality materials. Clean finishes. On time, every time.
          </p>

          {/* Divider */}
          <div
            className="mt-12 w-16 h-px reveal reveal-delay-4"
            style={{ backgroundColor: "var(--grey-700)" }}
          />

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap gap-12">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Melbourne Local" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-delay-${i + 2}`}
              >
                <p
                  className="font-heading text-4xl text-white leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--grey-500)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
