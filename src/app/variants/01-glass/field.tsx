"use client";

import { useEffect, useRef } from "react";

/**
 * The environment. One field spanning the whole document, so a pane that
 * scrolls from the hero to the footer genuinely travels across a pale region
 * and a near-black one. A light parallax offset makes the field slide against
 * the content instead of riding with it, which is what sells the depth.
 */
export function Field() {
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const apply = () => {
      frame = 0;
      el.style.transform = `translate3d(0, ${window.scrollY * -0.09}px, 0)`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="g-field" aria-hidden>
      <div className="g-field-inner" ref={inner}>
        <div className="g-blob g-b1" />
        <div className="g-blob g-b2" />
        <div className="g-blob g-b3" />
        <div className="g-blob g-b4" />
        <div className="g-blob g-b5" />
        <div className="g-blob g-b6" />
        <div className="g-blob g-b7" />
        <div className="g-blob g-b8" />
      </div>
      <div className="g-grain" />
    </div>
  );
}
