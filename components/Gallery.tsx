"use client";

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// Placeholder gallery items — client will replace with real photos
const galleryItems = [
  { label: "Concrete Driveway", aspect: "aspect-square" },
  { label: "Pool Surround", aspect: "aspect-[4/5]" },
  { label: "Exposed Aggregate", aspect: "aspect-square" },
  { label: "Structural Slab", aspect: "aspect-[4/5]" },
  { label: "Footpath Works", aspect: "aspect-square" },
  { label: "Commercial Pour", aspect: "aspect-square" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--black)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div className="reveal">
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--grey-700)" }}
            >
              Portfolio
            </p>
            <h2
              className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              OUR WORK
            </h2>
          </div>

          <a
            href="https://www.instagram.com/pezcrete/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase reveal reveal-delay-1 transition-colors duration-200"
            style={{ color: "var(--grey-500)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--grey-200)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--grey-500)")
            }
          >
            <InstagramIcon />
            Follow us on Instagram
            <span>→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`gallery-placeholder ${item.aspect} reveal reveal-delay-${(i % 5) + 1}`}
              style={{ minHeight: "180px" }}
            >
              <div className="text-center px-4">
                <p className="mb-1">{item.label}</p>
                <p style={{ color: "var(--grey-700)", fontSize: "0.7rem" }}>
                  Project Photo
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center reveal">
          <a
            href="https://www.instagram.com/pezcrete/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3"
          >
            <InstagramIcon />
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
