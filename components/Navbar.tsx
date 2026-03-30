"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about"    },
  { label: "Gallery",  href: "/gallery"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 lg:h-22" style={{ height: "4.5rem" }}>

        {/* Logo */}
        <Link href="/" className="flex items-center opacity-95 hover:opacity-100 transition-opacity duration-300">
          <Image
            src="/logo/pezcrete%20logo.png"
            alt="Pezcrete"
            width={160}
            height={50}
            priority
            className="w-auto object-contain"
            style={{ height: "3.5rem" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-widest uppercase transition-colors duration-300 py-1"
                style={{ color: active ? "var(--white)" : "var(--grey-300)" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-px bg-white transition-all duration-300"
                  style={{ width: active ? "100%" : "0%" }}
                />
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary text-sm" style={{ padding: "0.6rem 1.5rem" }}>
            <span>Get a Quote</span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
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
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        style={{ backgroundColor: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase py-0.5 transition-colors duration-200"
                style={{ color: active ? "var(--white)" : "var(--grey-300)" }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary text-sm text-center mt-2">
            <span>Get a Quote</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
