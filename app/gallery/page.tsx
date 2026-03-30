import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Pezcrete — Concrete Construction Melbourne",
  description: "View Pezcrete's completed concrete projects across Melbourne — driveways, pool surrounds, exposed aggregate, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="pt-36 pb-20 grain" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-label">Portfolio</span>
          <h1
            className="mt-5 leading-none tracking-wide text-white"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(4rem,12vw,9rem)" }}
          >
            OUR<br />WORK
          </h1>
          <p className="mt-8 text-lg max-w-xl" style={{ color: "var(--text-on-dark-muted)" }}>
            A selection of completed projects across Melbourne and surrounds.
          </p>
        </div>
      </div>
      <GalleryGrid />
    </>
  );
}
