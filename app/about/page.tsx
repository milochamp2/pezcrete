import type { Metadata } from "next";
import About from "@/components/About";
import ServicesMarquee from "@/components/ServicesMarquee";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "About | Pezcrete — Concrete Construction Melbourne",
  description: "Learn about Pezcrete — Melbourne's trusted concrete specialists with years of hands-on experience.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-36 pb-20 grain" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-label">Our story</span>
          <h1
            className="mt-5 leading-none tracking-wide text-white"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(4rem,12vw,9rem)" }}
          >
            ABOUT<br />PEZCRETE
          </h1>
        </div>
      </div>

      <ServicesMarquee />
      <About />
      <CtaStrip />
    </>
  );
}
