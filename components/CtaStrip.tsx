import Link from "next/link";

export default function CtaStrip() {
  return (
    <section
      className="py-14 sm:py-20 lg:py-28"
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <h2
          className="leading-none tracking-wide mb-6 reveal"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem,7vw,5rem)", color: "var(--black)" }}
        >
          READY TO START?
        </h2>
        <p className="text-lg mb-10 reveal reveal-delay-1" style={{ color: "var(--text-on-light-muted)" }}>
          Get a free, no-obligation quote for your concrete project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto reveal reveal-delay-2">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            <span>Get a Free Quote</span>
          </Link>
          <a href="tel:0422340335" className="btn-outline w-full sm:w-auto">
            <span>Call 0422 340 335</span>
          </a>
        </div>
      </div>
    </section>
  );
}
