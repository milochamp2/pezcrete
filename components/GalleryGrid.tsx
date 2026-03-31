/**
 * GalleryGrid
 *
 * HOW TO ADD MORE PHOTOS:
 * 1. Drop image files into /public/gallery/
 * 2. Add an entry to the `photos` array below.
 * 3. Save — done.
 */

import Image from "next/image";

interface Photo {
  src: string;
  label: string;
  category?: string;
}

// All filenames URL-encoded so spaces work correctly with next/image
const photos: Photo[] = [
  { src: "/gallery/img%201.jpeg",  label: "Concrete Project",       category: "Residential"  },
  { src: "/gallery/img%202.jpg",   label: "Concrete Project",       category: "Residential"  },
  { src: "/gallery/img%203.jpg",   label: "Concrete Project",       category: "Structural"   },
  { src: "/gallery/img%204.jpg",   label: "Concrete Project",       category: "Driveway"     },
  { src: "/gallery/img%205.jpg",   label: "Concrete Project",       category: "Commercial"   },
  { src: "/gallery/img%206.jpg",   label: "Concrete Project",       category: "Driveway"     },
  { src: "/gallery/img%207.jpg",   label: "Concrete Project",       category: "Pool"         },
  { src: "/gallery/img%208.jpg",   label: "Concrete Project",       category: "Decorative"   },
  { src: "/gallery/img%209.jpg",   label: "Concrete Project",       category: "Structural"   },
  { src: "/gallery/img%2010.jpg",  label: "Concrete Project",       category: "Residential"  },
  { src: "/gallery/img%2011.jpg",  label: "Concrete Project",       category: "Commercial"   },
  { src: "/gallery/img%2012.jpg",  label: "Concrete Project",       category: "Driveway"     },
  { src: "/gallery/img%2013.jpg",  label: "Concrete Project",       category: "Pool"         },
  { src: "/gallery/img%2014.jpg",  label: "Concrete Project",       category: "Decorative"   },
  { src: "/gallery/img%2015.jpg",  label: "Concrete Project",       category: "Structural"   },
  { src: "/gallery/img%2016.jpg",  label: "Concrete Project",       category: "Residential"  },
  { src: "/gallery/img%2017.jpg",  label: "Concrete Project",       category: "Commercial"   },
  { src: "/gallery/img%2018.jpg",  label: "Concrete Project",       category: "Driveway"     },
  { src: "/gallery/img%2019.jpg",  label: "Concrete Project",       category: "Pool"         },
  { src: "/gallery/img%2020.jpg",  label: "Concrete Project",       category: "Decorative"   },
  { src: "/gallery/img%2021.jpg",  label: "Concrete Project",       category: "Structural"   },
  { src: "/gallery/img%2022.jpg",  label: "Concrete Project",       category: "Residential"  },
  { src: "/gallery/img%2023.jpg",  label: "Concrete Project",       category: "Commercial"   },
  { src: "/gallery/img%2024.jpg",  label: "Concrete Project",       category: "Driveway"     },
  { src: "/gallery/img%2025.jpg",  label: "Concrete Project",       category: "Pool"         },
  { src: "/gallery/img%2026.jpg",  label: "Concrete Project",       category: "Decorative"   },
  { src: "/gallery/img%2027.jpg",  label: "Concrete Project",       category: "Structural"   },
  { src: "/gallery/img%2029.jpg",  label: "Concrete Project",       category: "Residential"  },
  { src: "/gallery/img%2030.jpg",  label: "Concrete Project",       category: "Commercial"   },
  { src: "/gallery/img%2031.jpg",  label: "Concrete Project",       category: "Driveway"     },
  { src: "/gallery/img%2032.jpg",  label: "Concrete Project",       category: "Pool"         },
  { src: "/gallery/img%2033.jpg",  label: "Concrete Project",       category: "Decorative"   },
  { src: "/gallery/img%2034.jpg",  label: "Concrete Project",       category: "Structural"   },
  { src: "/gallery/img%2035.jpg",  label: "Concrete Project",       category: "Residential"  },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function GalleryGrid() {
  return (
    <section className="py-8 sm:py-12 lg:py-20" style={{ backgroundColor: "var(--black)" }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-10">

        {/* Uniform grid — 2 cols mobile, 3 md, 4 lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="gallery-cell reveal reveal-delay-1"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500"
                style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
              />
              <div className="gallery-cell-overlay" />
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
