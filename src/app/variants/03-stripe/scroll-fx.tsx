"use client";

import { useEffect } from "react";

// Motion is deliberately small and all of it is tied to scroll position:
//   1. the nav goes from transparent on the gradient to white with a hairline
//   2. the gradient ribbon shifts a few pixels as the page moves under it
//   3. anything marked .sp-rv fades up once when it first enters the viewport
// Everything sits at its designed position at scroll 0, so a full page capture
// of the top of the document is the design, not a half finished animation.
export default function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.querySelector<HTMLElement>(".sp-nav");
    const ribbon = document.querySelector<HTMLElement>(".sp-ribbon");
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (nav) nav.classList.toggle("sp-nav-stuck", y > 96);
        if (ribbon && !reduce) ribbon.style.setProperty("--sp-shift", `${-y * 0.06}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const els = Array.from(document.querySelectorAll<HTMLElement>(".sp-rv"));
    let io: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("sp-in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("sp-in");
              io?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
      els.forEach((el) => io?.observe(el));
    }

    // Failsafe: anything still hidden after a second is shown anyway, so a
    // headless capture or a browser without a firing observer never records a
    // blank section.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".sp-rv:not(.sp-in)").forEach((el) => el.classList.add("sp-in"));
    }, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(failsafe);
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);

  return null;
}
