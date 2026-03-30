"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  // Re-initialise scroll-reveal for every page navigation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-enter">
      {children}
    </div>
  );
}
