import Link from "next/link";

const stats = [
  { value: "10+",  label: "Years Experience"   },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Melbourne Local"    },
];

export default function AboutTeaser() {
  return (
    <section className="py-16 sm:py-24 lg:py-36 grain" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <span className="section-label reveal">Why Pezcrete</span>
            <h2
              className="mt-5 leading-none tracking-wide text-white reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.75rem,8vw,6rem)" }}
            >
              PRECISION.
              <br />
              <span style={{ color: "rgba(255,255,255,0.38)" }}>EVERY TIME.</span>
            </h2>

            <div className="mt-8 h-px reveal reveal-delay-2" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />

            <p className="mt-8 text-base lg:text-lg leading-relaxed reveal reveal-delay-2" style={{ color: "var(--text-on-dark)" }}>
              With years of hands-on experience across Melbourne and surrounds,
              Pezcrete delivers precision concrete work — from residential
              driveways to large-scale structural projects.
            </p>
            <p className="mt-4 text-base leading-relaxed reveal reveal-delay-3" style={{ color: "var(--text-on-dark-muted)" }}>
              Quality materials. Clean finishes. On time, every time.
            </p>

            <div className="mt-10 reveal reveal-delay-3">
              <Link href="/about" className="btn-outline w-full sm:w-auto text-center sm:text-left">
                <span>About Pezcrete</span>
              </Link>
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col reveal reveal-delay-2">
            {stats.map((s) => (
              <div key={s.label} className="py-6 sm:py-8 border-b first:border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-5 sm:gap-6">
                  <p
                    className="leading-none flex-shrink-0 text-white"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem,6vw,3.5rem)", minWidth: "4.5rem" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm sm:text-base tracking-widest uppercase" style={{ color: "var(--text-on-dark-muted)" }}>
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
