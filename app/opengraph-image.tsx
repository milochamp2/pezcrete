import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pezcrete | Concrete Construction Melbourne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo + Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px" }}>
          <img
            src="https://pezcrete.com.au/logo/pezcrete%20logo.png"
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "12px",
            }}
          >
            PEZCRETE
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: "120px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)", marginBottom: "32px" }} />

        {/* Tagline */}
        <p
          style={{
            color: "#888888",
            fontSize: "22px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Concrete Construction · Melbourne &amp; Surrounds
        </p>
      </div>
    ),
    { ...size }
  );
}
