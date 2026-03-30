/**
 * GalleryGrid — manages the photo gallery.
 *
 * HOW TO ADD PHOTOS:
 * 1. Drop your image files into /public/gallery/
 *    (supported: .jpg, .jpeg, .png, .webp)
 * 2. Add an entry to the `photos` array below:
 *    { src: "/gallery/your-filename.jpg", label: "Project Name", category: "Driveway" }
 * 3. Save — the grid updates automatically.
 *
 * Slots without a `src` show as placeholder tiles.
 */

import Image from "next/image";

interface Photo {
  src?: string;        // e.g. "/gallery/driveway-01.jpg"
  label: string;       // shown on hover
  category?: string;   // optional tag below the label
}

// ─── ADD YOUR PHOTOS HERE ───────────────────────────────────────────────── //
const photos: Photo[] = [
  // Real photos — uncomment & update src when you have images:
  // { src: "/gallery/driveway-01.jpg",   label: "Concrete Driveway",   category: "Driveway" },
  // { src: "/gallery/pool-surround.jpg", label: "Pool Surround",       category: "Pool" },
  // { src: "/gallery/aggregate-01.jpg",  label: "Exposed Aggregate",   category: "Decorative" },

  // Placeholder tiles (replace with real photos above)
  { label: "Concrete Driveway",      category: "Driveway"    },
  { label: "Pool Surround",          category: "Pool"        },
  { label: "Exposed Aggregate",      category: "Decorative"  },
  { label: "Structural Slab",        category: "Commercial"  },
  { label: "Footpath Works",         category: "Residential" },
  { label: "Feature Aggregate",      category: "Decorative"  },
  { label: "Commercial Pour",        category: "Commercial"  },
  { label: "Residential Driveway",   category: "Driveway"    },
  { label: "Pool Deck",              category: "Pool"        },
  { label: "Exposed Aggregate Path", category: "Decorative"  },
  { label: "Concrete Slab",          category: "Structural"  },
  { label: "Boxing & Steel",         category: "Structural"  },
];
// ────────────────────────────────────────────────────────────────────────── //

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" style={{ color: "var(--grey-700)" }}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export default function GalleryGrid() {
  const hasPhotos = photos.some((p) => p.src);

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--black)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`gallery-cell reveal reveal-delay-${(i % 4) + 1}`}
              style={{ height: i % 5 === 0 ? "320px" : "220px" }}
            >
              {photo.src ? (
                <>
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover"
                  />
                  <div className="gallery-cell-overlay">
                    <div>
                      <p className="text-sm text-white font-medium">{photo.label}</p>
                      {photo.category && (
                        <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--grey-300)" }}>
                          {photo.category}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="gallery-placeholder-inner w-full h-full">
                  <PlaceholderIcon />
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>
                    {photo.label}
                  </p>
                  {photo.category && (
                    <p className="text-[0.6rem] tracking-widest uppercase" style={{ color: "var(--grey-900)" }}>
                      {photo.category}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          className="mt-16 pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div>
            <p className="text-lg text-white mb-1">See more of our work</p>
            <p className="text-base" style={{ color: "var(--text-on-dark-muted)" }}>
              Follow us on Instagram for the latest projects and updates.
            </p>
          </div>
          <a
            href="https://www.instagram.com/pezcrete/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-shrink-0 inline-flex items-center gap-3"
          >
            <InstagramIcon />
            <span>@pezcrete</span>
          </a>
        </div>
      </div>
    </section>
  );
}
