"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services",     href: "/services"     },
  { label: "About",        href: "/about"        },
  { label: "Gallery",      href: "/gallery"      },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact",      href: "/contact"      },
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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome ? "nav-scrolled" : "bg-transparent"
        }`}
      >
        {/* Main bar */}
        <div
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between"
          style={{ height: "3.75rem" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 opacity-95 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/logo/pezcrete%20logo.png"
              alt="Pezcrete"
              width={180}
              height={56}
              priority
              className="w-auto object-contain"
              style={{ height: "clamp(2.75rem, 6vw, 3.75rem)" }}
            />
            <span
              className="hidden sm:block"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.18em",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                color: "var(--white)",
                lineHeight: 1,
              }}
            >
              PEZCRETE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-widest uppercase transition-colors duration-300 py-1"
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
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: "0.75rem", padding: "0.55rem 1.35rem" }}
            >
              <span>Get a Quote</span>
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px]"
            style={{ width: "44px", height: "44px" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer — sibling of header, outside backdrop-filter stacking context */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#0A0A0A", top: "3.75rem" }}
      >
        <nav className="flex flex-col px-6 pt-8 pb-10 gap-1 h-full overflow-y-auto">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center text-2xl tracking-widest uppercase transition-colors duration-200 border-b"
                style={{
                  color: active ? "var(--white)" : "var(--grey-300)",
                  borderColor: "rgba(255,255,255,0.05)",
                  minHeight: "64px",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "0.15em",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/contact" className="btn-primary text-center">
              <span>Get a Quote</span>
            </Link>
            <a href="tel:0422340335" className="btn-outline text-center">
              <span>0422 340 335</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
