import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pezcrete | Concrete Construction Melbourne",
  description:
    "Pezcrete delivers premium concrete construction services across Melbourne and surrounds — concrete placement, exposed aggregate, pool surrounds, structural works, and more.",
  keywords: [
    "concrete construction Melbourne",
    "concrete placement Melbourne",
    "exposed aggregate",
    "pool surrounds",
    "structural concrete",
    "concrete contractor Melbourne",
    "Pezcrete",
  ],
  icons: {
    icon:      "/logo/pezcrete%20logo.png",
    shortcut:  "/logo/pezcrete%20logo.png",
    apple:     "/logo/pezcrete%20logo.png",
  },
  openGraph: {
    title: "Pezcrete | Concrete Construction Melbourne",
    description:
      "Premium concrete construction services across Melbourne and surrounds.",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/logo/pezcrete%20logo.png", width: 400, height: 200, alt: "Pezcrete" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${instrumentSans.variable}`}>
      <body className="font-body antialiased">
        <PageLoader />
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
