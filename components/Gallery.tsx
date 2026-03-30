"use client";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const galleryItems = [
  { label: "Concrete Driveway",   span: "row-span-2" },
  { label: "Pool Surround",       span: "" },
  { label: "Exposed Aggregate",   span: "" },
  { label: "Structural Slab",     span: "" },
  { label: "Footpath Works",      span: "" },
  { label: "Commercial Pour",     span: "row-span-2" },
  { label: "Residential Slab",    span: "" },
  { label: "Feature Aggregate",   span: "" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--black)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div className="reveal">
            <span className="section-label" style={{ color: "var(--grey-700)" }}>
              Portfolio
            </span>
            <h2
              className="mt-4 text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              OUR WORK
            </h2>
          </div>

          <a
            href="https://www.instagram.com/pezcrete/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase reveal reveal-delay-1 group transition-colors duration-300"
            style={{ color: "var(--grey-700)" }}
          >
            <InstagramIcon />
            <span className="group-hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>
              Follow on Instagram
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
          </a>
        </div>

        {/* Grid — uniform on mobile, masonry-style on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-2 lg:gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`gallery-placeholder ${item.span} reveal reveal-delay-${(i % 5) + 1} cursor-pointer`}
            >
              {/* Hover overlay */}
              <div className="gallery-overlay">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--grey-200)", fontFamily: "var(--font-heading)", letterSpacing: "0.2em" }}
                >
                  {item.label}
                </span>
              </div>
              {/* Default label */}
              <div className="relative z-0 text-center px-3">
                <p className="text-[0.65rem] tracking-widest" style={{ color: "var(--grey-700)" }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-sm reveal" style={{ color: "var(--grey-500)" }}>
            See our latest projects and completed works on Instagram.
          </p>
          <a
            href="https://www.instagram.com/pezcrete/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3 reveal reveal-delay-1 flex-shrink-0"
          >
            <InstagramIcon />
            <span>@pezcrete</span>
          </a>
        </div>
      </div>
    </section>
  );
}
