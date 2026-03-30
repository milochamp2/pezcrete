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
      <div className="pt-36 pb-20 grain" style={{ backgroundColor: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-label">Reach out</span>
          <h1
            className="mt-5 leading-none tracking-wide text-white"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(4rem,12vw,9rem)" }}
          >
            GET IN<br />TOUCH
          </h1>
          <p className="mt-8 text-lg max-w-xl" style={{ color: "var(--text-on-dark-muted)" }}>
            Free, no-obligation quotes. We service Melbourne and all surrounding suburbs.
          </p>
        </div>
      </div>
      <Contact />
      <ServiceArea />
    </>
  );
}
