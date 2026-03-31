import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | Pezcrete — Concrete Construction Melbourne",
  description: "What our clients say about Pezcrete. Real reviews from Melbourne homeowners and businesses.",
};

export default function TestimonialsPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center grain"
      style={{ backgroundColor: "var(--black)" }}
    >
      <div className="text-center px-5">
        <span className="section-label mb-6 inline-flex">Client Reviews</span>

        <h1
          className="mt-6 leading-none tracking-wide text-white"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,12vw,8rem)" }}
        >
          COMING<br />SOON
        </h1>

        <p
          className="mt-8 text-base max-w-sm mx-auto leading-relaxed"
          style={{ color: "var(--text-on-dark-muted)" }}
        >
          We&rsquo;re collecting reviews from our clients. Check back soon.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/gallery" className="btn-primary">
            <span>View Our Work</span>
          </Link>
          <Link href="/contact" className="btn-outline">
            <span>Get a Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
