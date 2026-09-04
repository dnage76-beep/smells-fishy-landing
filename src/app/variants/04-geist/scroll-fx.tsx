"use client";

import { useEffect } from "react";

// The only motion on this page: cells rise eight pixels and fade in once, the
// first time they enter. No parallax, no gradients moving, nothing that runs
// on a loop. A one second failsafe reveals anything an observer missed so a
// capture never records an empty cell.
export default function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".gs-rv"));
    let io: IntersectionObserver | undefined;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("gs-in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("gs-in");
              io?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
      );
      els.forEach((el) => io?.observe(el));
    }

    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".gs-rv:not(.gs-in)").forEach((el) => el.classList.add("gs-in"));
    }, 1000);

    return () => {
      window.clearTimeout(failsafe);
      io?.disconnect();
    };
  }, []);

  return null;
}
