"use client";

import { useEffect } from "react";

export default function GSAPReveal() {
  useEffect(() => {
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Animate all elements with data-gsap attribute
      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 50, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-in']").forEach((el) => {
        gsap.from(el, {
          opacity: 0, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='stagger']").forEach((container) => {
        gsap.from(container.children, {
          opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: container, start: "top 80%", once: true },
        });
      });
    })();
  }, []);

  return null;
}
