import type { Metadata } from "next";
import Contact from "@/components/Contact";
import ServiceArea from "@/components/ServiceArea";

export const metadata: Metadata = {
  title: "Contact | Pezcrete — Concrete Construction Melbourne",
  description: "Get a free quote from Pezcrete. Call 0422 340 335 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <span className="section-label">Reach out</span>
          <h1
            className="mt-5 leading-none tracking-wide"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,12vw,9rem)", color: "var(--black)" }}
          >
            GET IN<br />TOUCH
          </h1>
          <p className="mt-6 text-base lg:text-lg max-w-xl" style={{ color: "var(--text-on-light-muted)" }}>
            Free, no-obligation quotes. We service Melbourne and all surrounding suburbs.
          </p>
        </div>
      </div>
      <Contact />
      <ServiceArea />
    </>
  );
}
