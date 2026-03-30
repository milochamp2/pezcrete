import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "var(--mid)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <Image
            src="/logo/pezcrete%20logo.png"
            alt="Pezcrete"
            width={100}
            height={30}
            className="h-7 w-auto object-contain opacity-60"
          />

          <p
            className="text-[0.65rem] tracking-widest text-center"
            style={{ color: "var(--grey-700)" }}
          >
            &copy; {year} Pezcrete. All rights reserved.
          </p>

          <p
            className="text-[0.65rem] tracking-widest uppercase"
            style={{ color: "var(--grey-700)" }}
          >
            Melbourne &amp; Surrounds
          </p>
        </div>
      </div>
    </footer>
  );
}
