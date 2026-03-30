"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about"    },
  { label: "Our Work", href: "#gallery"  },
  { label: "Contact",  href: "#contact"  },
];

function smoothTo(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const lenis = (window as unknown as { lenis?: { scrollTo: (el: Element, opts?: object) => void } }).lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active nav link
  useEffect(() => {
    const sections = ["hero", "services", "about", "gallery", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    smoothTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
          className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300"
        >
          <Image
            src="/logo/pezcrete%20logo.png"
            alt="Pezcrete"
            width={130}
            height={40}
            priority
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="relative text-xs tracking-widest uppercase transition-colors duration-300 py-1 group"
              style={{
                color: activeSection === link.href ? "var(--white)" : "var(--grey-500)",
              }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-px bg-white transition-all duration-300"
                style={{ width: activeSection === link.href ? "100%" : "0%" }}
              />
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
            className="btn-primary text-xs py-2.5 px-6"
          >
            <span>Get a Quote</span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-10"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-80" : "max-h-0"}`}
        style={{ backgroundColor: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="text-xs tracking-widest uppercase transition-colors duration-200 py-0.5"
              style={{ color: activeSection === link.href ? "var(--white)" : "var(--grey-500)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
            className="btn-primary text-xs text-center mt-2"
          >
            <span>Get a Quote</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
