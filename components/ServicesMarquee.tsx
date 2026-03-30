const items = [
  "Concrete Placement",
  "Boxing & Steel Work",
  "Exposed Aggregate",
  "Pool Surrounds",
  "Structural Works",
  "Driveways",
  "Footpaths & Slabs",
  "Commercial Concrete",
];

// Bullet separator between items
const Sep = () => (
  <span
    className="mx-6 flex-shrink-0 w-1.5 h-1.5 rounded-full"
    style={{ backgroundColor: "var(--grey-700)" }}
    aria-hidden
  />
);

// Duplicate for seamless infinite loop
const doubled = [...items, ...items];

interface Props {
  /** 'dark' = white text on black (default), 'light' = dark text on light bg */
  theme?: "dark" | "light";
}

export default function ServicesMarquee({ theme = "dark" }: Props) {
  const isLight = theme === "light";

  return (
    <div
      className={`py-7 border-y marquee-wrapper ${isLight ? "light" : ""}`}
      style={{
        backgroundColor:  isLight ? "var(--light)" : "var(--black)",
        borderColor:      isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center flex-shrink-0">
            <span
              className="text-sm tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.18em",
                color: isLight ? "var(--grey-700)" : "var(--grey-300)",
                fontSize: "0.95rem",
              }}
            >
              {item}
            </span>
            <Sep />
          </span>
        ))}
      </div>
    </div>
  );
}
