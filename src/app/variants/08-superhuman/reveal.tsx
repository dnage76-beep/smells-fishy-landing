"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. Elements carry `.sh-reveal` and arrive
 * with a 1.5s ease as they enter the viewport, which is most of what makes
 * this page feel slow and expensive.
 *
 * Two cases skip the animation entirely by putting `.sh-ready` on the root:
 * reduced motion, and headless capture. A full-page screenshot never
 * scrolls, so without the second case nothing below the fold would ever
 * intersect and the shot would come back blank.
 */
export default function RevealController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".sh");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || navigator.webdriver) {
      root.classList.add("sh-ready");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.04 }
    );

    root.querySelectorAll(".sh-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
