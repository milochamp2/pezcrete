import Link from "next/link";

export default function CtaStrip() {
  return (
    <section
      className="py-20 lg:py-28 grain"
      style={{ backgroundColor: "var(--mid)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2
          className="leading-none tracking-wide text-white mb-6 reveal"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem,7vw,5rem)" }}
        >
          READY TO START?
        </h2>
        <p className="text-lg mb-10 reveal reveal-delay-1" style={{ color: "var(--text-on-dark-muted)" }}>
          Get a free, no-obligation quote for your concrete project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-2">
          <Link href="/contact" className="btn-primary">
            <span>Get a Free Quote</span>
          </Link>
          <a href="tel:0422340335" className="btn-outline">
            <span>Call 0422 340 335</span>
          </a>
        </div>
      </div>
    </section>
  );
}
