import Link from "next/link";
import Image from "next/image";

const preview = [
  { src: "/gallery/img%201.jpeg", label: "Concrete Work" },
  { src: "/gallery/img%202.jpg",  label: "Concrete Work" },
  { src: "/gallery/img%203.jpg",  label: "Concrete Work" },
];

export default function GalleryTeaser() {
  return (
    <section className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: "var(--black)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

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
            className="text-sm tracking-widest uppercase reveal reveal-delay-1 transition-colors duration-300 hover:text-white"
            style={{ color: "var(--grey-500)" }}
          >
            View All Work →
          </Link>
        </div>

        {/* 3-col preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 reveal reveal-delay-1">
          {preview.map((item, i) => (
            <div key={i} className="gallery-cell" style={{ height: "280px" }}>
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
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
