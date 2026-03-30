import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about"    },
  { label: "Gallery",  href: "/gallery"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--mid)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-14">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/logo/pezcrete%20logo.png"
              alt="Pezcrete"
              width={160}
              height={48}
              className="w-auto object-contain"
              style={{ height: "clamp(2.5rem, 5vw, 3.5rem)" }}
            />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase transition-colors duration-200 hover:text-white"
                style={{ color: "var(--grey-500)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact quick links */}
          <div className="flex flex-col gap-2">
            <a href="tel:0422340335" className="text-sm hover:text-white transition-colors duration-200" style={{ color: "var(--grey-300)" }}>
              0422 340 335
            </a>
            <a href="mailto:Pezcrete@outlook.com.au" className="text-sm hover:text-white transition-colors duration-200" style={{ color: "var(--grey-300)" }}>
              Pezcrete@outlook.com.au
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs tracking-widest" style={{ color: "var(--grey-700)" }}>
            &copy; {year} Pezcrete. All rights reserved.
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "var(--grey-700)" }}>
            Melbourne &amp; Surrounds
          </p>
        </div>
      </div>
    </footer>
  );
}
