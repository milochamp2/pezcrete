import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{
        backgroundColor: "var(--mid)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Pezcrete"
          width={90}
          height={28}
          className="h-7 w-auto object-contain opacity-70"
        />

        {/* Legal */}
        <p
          className="text-xs tracking-widest text-center"
          style={{ color: "var(--grey-700)" }}
        >
          &copy; {year} Pezcrete. All rights reserved.
        </p>

        {/* Location */}
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--grey-700)" }}
        >
          Melbourne &amp; Surrounds
        </p>
      </div>
    </footer>
  );
}
