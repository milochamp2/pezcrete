"use client";

import { useState } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet — show success state
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 grain relative"
      style={{ backgroundColor: "var(--black)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Contact info */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6 reveal"
              style={{ color: "var(--grey-700)" }}
            >
              Reach out
            </p>
            <h2
              className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide text-white mb-10 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              GET IN TOUCH
            </h2>
            <p
              className="text-base leading-relaxed mb-12 reveal reveal-delay-2"
              style={{ color: "var(--grey-500)" }}
            >
              Ready to start your project? Get in touch for a free, no-obligation quote. We work across Melbourne and all surrounding suburbs.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 reveal reveal-delay-3">
              <a
                href="tel:0422340335"
                className="flex items-center gap-4 group"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 border transition-colors duration-200"
                  style={{
                    borderColor: "var(--grey-700)",
                    color: "var(--grey-500)",
                  }}
                >
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--grey-700)" }}>
                    Phone
                  </p>
                  <p
                    className="text-base transition-colors duration-200 group-hover:text-white"
                    style={{ color: "var(--grey-200)" }}
                  >
                    0422 340 335
                  </p>
                </div>
              </a>

              <a
                href="mailto:Pezcrete@outlook.com.au"
                className="flex items-center gap-4 group"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 border transition-colors duration-200"
                  style={{
                    borderColor: "var(--grey-700)",
                    color: "var(--grey-500)",
                  }}
                >
                  <MailIcon />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--grey-700)" }}>
                    Email
                  </p>
                  <p
                    className="text-base transition-colors duration-200 group-hover:text-white"
                    style={{ color: "var(--grey-200)" }}
                  >
                    Pezcrete@outlook.com.au
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/pezcrete/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 border transition-colors duration-200"
                  style={{
                    borderColor: "var(--grey-700)",
                    color: "var(--grey-500)",
                  }}
                >
                  <InstagramIcon />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--grey-700)" }}>
                    Instagram
                  </p>
                  <p
                    className="text-base transition-colors duration-200 group-hover:text-white"
                    style={{ color: "var(--grey-200)" }}
                  >
                    @pezcrete
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-16 border"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-12 h-12 border flex items-center justify-center mb-6"
                  style={{ borderColor: "var(--grey-700)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-heading text-3xl text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message Sent
                </h3>
                <p className="text-sm" style={{ color: "var(--grey-500)" }}>
                  Thanks for reaching out. We&rsquo;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--grey-700)" }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--grey-700)" }}
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--grey-700)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--grey-700)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-2 w-full text-center"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
