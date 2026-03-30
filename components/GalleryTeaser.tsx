import Link from "next/link";

// Preview — first 3 gallery slots shown on home page
const preview = [
  { label: "Concrete Driveway" },
  { label: "Pool Surround"     },
  { label: "Exposed Aggregate" },
];

export default function GalleryTeaser() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--black)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="reveal">
            <span className="section-label">Our Work</span>
            <h2
              className="mt-4 leading-none tracking-wide text-white"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,8vw,6rem)" }}
            >
              GALLERY
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm tracking-widest uppercase reveal reveal-delay-1 transition-colors duration-300"
            style={{ color: "var(--grey-500)" }}
          >
            View All Work →
          </Link>
        </div>

        {/* 3-col preview grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 reveal reveal-delay-1">
          {preview.map((item) => (
            <div
              key={item.label}
              className="gallery-cell"
              style={{ height: "260px" }}
            >
              <div className="gallery-placeholder-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: "var(--grey-700)" }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal reveal-delay-2">
          <Link href="/gallery" className="btn-outline">
            <span>View Full Gallery</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
