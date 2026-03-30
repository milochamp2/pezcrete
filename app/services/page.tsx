import type { Metadata } from "next";
import Services from "@/components/Services";
import ServicesMarquee from "@/components/ServicesMarquee";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Services | Pezcrete — Concrete Construction Melbourne",
  description: "Concrete placement, boxing & steel, exposed aggregate, pool surrounds, and structural works across Melbourne.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 grain"
        style={{ backgroundColor: "var(--black)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <span className="section-label">What we do</span>
          <h1
            className="mt-5 leading-none tracking-wide text-white"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,12vw,9rem)" }}
          >
            OUR<br />SERVICES
          </h1>
          <p className="mt-6 text-base lg:text-lg max-w-xl" style={{ color: "var(--text-on-dark-muted)" }}>
            Every job handled with precision — residential, commercial, and structural concrete across Melbourne and surrounds.
          </p>
        </div>
      </div>

      <ServicesMarquee />
      <Services />
      <CtaStrip />
    </>
  );
}
