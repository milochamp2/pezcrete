"use client";

import { useState } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const contactItems = [
  { icon: <PhoneIcon />, label: "Phone", value: "0422 340 335", href: "tel:0422340335" },
  { icon: <MailIcon />,  label: "Email", value: "Pezcrete@outlook.com.au", href: "mailto:Pezcrete@outlook.com.au" },
  { icon: <InstaIcon />, label: "Instagram", value: "@pezcrete", href: "https://www.instagram.com/pezcrete/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-36 grain relative"
      style={{ backgroundColor: "var(--black)" }}
    >
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Contact info */}
          <div className="reveal reveal-delay-1">
            <p
              className="text-lg leading-relaxed mb-12"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              Ready to start your project? Get in touch for a free,
              no-obligation quote. We service Melbourne and all surrounding suburbs.
            </p>

            <div className="flex flex-col gap-0">
              {contactItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 py-6 border-b group transition-colors duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="flex items-center justify-center w-8 h-8 border flex-shrink-0 transition-colors duration-300 group-hover:border-white/30"
                    style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--grey-500)" }}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--grey-700)" }}>
                      {item.label}
                    </p>
                    <p
                      className="text-base truncate transition-colors duration-300 group-hover:text-white"
                      style={{ color: "var(--grey-200)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                  <span
                    className="ml-auto text-xs transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 inline-block"
                    style={{ color: "var(--grey-500)" }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-16 border"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-10 h-10 border flex items-center justify-center mb-6"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="text-3xl text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message Sent
                </h3>
                <p className="text-sm" style={{ color: "var(--grey-500)" }}>
                  Thanks for reaching out. We&rsquo;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: "var(--grey-700)" }}>
                      Name *
                    </label>
                    <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: "var(--grey-700)" }}>
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="04xx xxx xxx" value={form.phone} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: "var(--grey-700)" }}>
                    Email *
                  </label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} className="form-input" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: "var(--grey-700)" }}>
                    Message *
                  </label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project…" value={form.message} onChange={handleChange} className="form-input resize-none" />
                </div>
                <button type="submit" className="btn-primary mt-3 w-full text-xs">
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
