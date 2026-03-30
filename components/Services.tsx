"use client";

const services = [
  {
    num: "01",
    title: "Concrete Placement",
    description:
      "Expert concrete pours for driveways, slabs, footpaths, and more — delivered on time with precision.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="6" y="30" width="36" height="12" rx="1" />
        <path d="M12 30V18M36 30V18" />
        <path d="M8 18h32" />
        <path d="M16 18V12h16v6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Boxing & Steel Work",
    description:
      "Structural formwork and reinforcing steel set with accuracy — the foundation for every great pour.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="6" y="10" width="36" height="28" rx="1" />
        <path d="M6 20h36M6 28h36M16 10v28M32 10v28" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Exposed Aggregate",
    description:
      "Decorative exposed aggregate finishes that combine durability with striking visual texture.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <circle cx="16" cy="16" r="2.5" />
        <circle cx="24" cy="14" r="2" />
        <circle cx="32" cy="17" r="2.5" />
        <circle cx="13" cy="26" r="2" />
        <circle cx="22" cy="24" r="3" />
        <circle cx="31" cy="27" r="2" />
        <circle cx="18" cy="34" r="2.5" />
        <circle cx="30" cy="34" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Pool Surrounds",
    description:
      "Non-slip, weather-resistant pool surrounds designed for safety, style, and longevity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <rect x="8" y="14" width="32" height="22" rx="3" />
        <path d="M8 20h32M8 28h32M14 36v4M34 36v4M6 14h4M38 14h4" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Structural Concrete",
    description:
      "Large-scale structural concrete for commercial and residential projects — engineered to last.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
        <path d="M6 40h36M12 40V20M36 40V20M8 20h32M24 20V10M18 10h12M20 28h8M20 34h8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="reveal">
            <span className="section-label" style={{ color: "var(--grey-700)" }}>
              What we do
            </span>
            <h2
              className="mt-4 text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide"
              style={{ color: "var(--black)", fontFamily: "var(--font-heading)" }}
            >
              OUR SERVICES
            </h2>
          </div>
          <p
            className="max-w-xs text-sm leading-relaxed reveal reveal-delay-2"
            style={{ color: "var(--grey-700)" }}
          >
            Every project handled with trade expertise and precision — on time, every time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card p-8 border bg-white reveal reveal-delay-${i + 1}`}
              style={{ borderColor: "var(--grey-200)" }}
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-xs tracking-widest"
                  style={{ color: "var(--grey-200)", fontFamily: "var(--font-heading)", fontSize: "0.7rem", letterSpacing: "0.2em" }}
                >
                  {service.num}
                </span>
                <div style={{ color: "var(--grey-700)" }}>
                  {service.icon}
                </div>
              </div>

              <h3
                className="text-2xl tracking-wide mb-3 leading-tight"
                style={{ color: "var(--black)", fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--grey-700)" }}>
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="service-card service-card-dark p-8 flex flex-col justify-between reveal reveal-delay-5"
            style={{ backgroundColor: "var(--black)" }}
          >
            <div>
              <span
                className="text-xs tracking-widest"
                style={{ color: "var(--grey-700)", fontFamily: "var(--font-heading)", fontSize: "0.7rem", letterSpacing: "0.2em" }}
              >
                06
              </span>
              <p className="mt-8 text-sm leading-relaxed" style={{ color: "var(--grey-500)" }}>
                Don&rsquo;t see what you need? We handle a wide range of concrete
                projects across Melbourne and surrounds.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-10 btn-primary text-center text-xs"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
