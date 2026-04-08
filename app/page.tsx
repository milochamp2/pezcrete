import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import AboutTeaser from "@/components/AboutTeaser";
import GalleryTeaser from "@/components/GalleryTeaser";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <AboutTeaser />
      <GalleryTeaser />
      <CtaStrip />
    </>
  );
}
