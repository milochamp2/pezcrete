import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";

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
  metadataBase: new URL("https://pezcrete.com.au"),
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
  openGraph: {
    title: "Pezcrete | Concrete Construction Melbourne",
    description:
      "Premium concrete construction services across Melbourne and surrounds.",
    type: "website",
    locale: "en_AU",
    url: "https://pezcrete.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${instrumentSans.variable}`}>
      <body className="font-body antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18067254282"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18067254282');
        `}</Script>
        <PageLoader />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
