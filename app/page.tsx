import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import AboutTeaser from "@/components/AboutTeaser";
import GalleryTeaser from "@/components/GalleryTeaser";
import CtaStrip from "@/components/CtaStrip";

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
