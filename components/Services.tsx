"use client";

const services = [
  {
    title: "Concrete Placement",
    description:
      "Expert concrete pours for driveways, slabs, footpaths, and more — delivered on time with precision.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="30" width="36" height="12" rx="1" />
        <path d="M12 30V18M36 30V18" />
        <path d="M8 18h32" />
        <path d="M16 18V12h16v6" />
      </svg>
    ),
  },
  {
    title: "Boxing & Steel Work",
    description:
      "Structural formwork and reinforcing steel set with accuracy — the foundation for every great pour.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="10" width="36" height="28" rx="1" />
        <path d="M6 20h36M6 28h36M16 10v28M32 10v28" />
      </svg>
    ),
  },
  {
    title: "Exposed Aggregate",
    description:
      "Decorative exposed aggregate finishes that combine durability with striking visual texture.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
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
    title: "Pool Surrounds",
    description:
      "Non-slip, weather-resistant pool surrounds designed for safety, style, and longevity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="14" width="32" height="22" rx="3" />
        <path d="M8 20h32M8 28h32" />
        <path d="M14 36v4M34 36v4" />
        <path d="M6 14h4M38 14h4" />
      </svg>
    ),
  },
  {
    title: "Structural Concrete Works",
    description:
      "Large-scale structural concrete for commercial and residential projects — engineered to last.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 40h36" />
        <path d="M12 40V20M36 40V20" />
        <path d="M8 20h32" />
        <path d="M24 20V10" />
        <path d="M18 10h12" />
        <path d="M20 28h8M20 34h8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--light)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 reveal">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--grey-700)" }}
          >
            What we do
          </p>
          <h2
            className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide"
            style={{ color: "var(--black)", fontFamily: "var(--font-heading)" }}
          >
            OUR SERVICES
          </h2>
          <div
            className="mt-6 w-12 h-px"
            style={{ backgroundColor: "var(--grey-500)" }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card bg-white p-8 border reveal reveal-delay-${i + 1}`}
              style={{ borderColor: "var(--grey-200)" }}
            >
              <div
                className="mb-6"
                style={{ color: "var(--grey-900)" }}
              >
                {service.icon}
              </div>
              <h3
                className="font-heading text-2xl tracking-wide mb-3"
                style={{
                  color: "var(--black)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--grey-700)" }}
              >
                {service.description}
              </p>
            </div>
          ))}

          {/* Filler card — CTA */}
          <div
            className={`service-card p-8 flex flex-col justify-between reveal reveal-delay-5`}
            style={{ backgroundColor: "var(--black)" }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--grey-500)" }}
            >
              Don&rsquo;t see what you need? We handle a wide range of concrete
              projects across Melbourne and surrounds.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 btn-primary text-center text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
