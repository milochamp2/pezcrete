import Link from "next/link";

const stats = [
  { value: "10+",  label: "Years Experience"    },
  { value: "500+", label: "Projects Completed"  },
  { value: "100%", label: "Melbourne Local"      },
];

export default function AboutTeaser() {
  return (
    <section className="py-24 lg:py-36 grain" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <span className="section-label reveal">Why Pezcrete</span>
            <h2
              className="mt-5 leading-none tracking-wide text-white reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,8vw,6rem)" }}
            >
              PRECISION.
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                EVERY TIME.
              </span>
            </h2>

            <div className="mt-10 h-px reveal reveal-delay-2" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />

            <p className="mt-10 text-lg leading-relaxed reveal reveal-delay-2" style={{ color: "var(--text-on-dark)" }}>
              With years of hands-on experience across Melbourne and surrounds,
              Pezcrete delivers precision concrete work — from residential
              driveways to large-scale structural projects.
            </p>
            <p className="mt-4 text-base leading-relaxed reveal reveal-delay-3" style={{ color: "var(--text-on-dark-muted)" }}>
              Quality materials. Clean finishes. On time, every time.
            </p>

            <div className="mt-12 reveal reveal-delay-3">
              <Link href="/about" className="btn-outline">
                <span>About Pezcrete</span>
              </Link>
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col reveal reveal-delay-2">
            {stats.map((s) => (
              <div key={s.label} className="py-8 border-b first:border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-6">
                  <p className="text-5xl leading-none flex-shrink-0 text-white" style={{ fontFamily: "var(--font-heading)", minWidth: "5rem" }}>
                    {s.value}
                  </p>
                  <p className="text-base tracking-widest uppercase" style={{ color: "var(--text-on-dark-muted)" }}>
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
