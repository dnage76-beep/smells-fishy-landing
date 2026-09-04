"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Arc's motion character: content does not fade, it *arrives*. A short rise
 * with a springy overshoot curve, staggered a beat at a time.
 *
 * Three cases skip the animation entirely and render the finished state:
 *   - prefers-reduced-motion
 *   - automated capture (screenshot runs, crawlers) so a full-page shot is not
 *     a page of invisible boxes
 *   - no IntersectionObserver
 */
function shouldSkipMotion() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return true;
  const nav = window.navigator;
  if (nav?.webdriver) return true;
  if (/HeadlessChrome|Puppeteer|Playwright/i.test(nav?.userAgent ?? "")) return true;
  return typeof IntersectionObserver === "undefined";
}

export function Reveal({
  children,
  delay = 0,
  y = 30,
  style,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
  className?: string;
  as?: "div" | "section" | "li" | "header" | "footer";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (shouldSkipMotion()) {
      setInstant(true);
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate3d(0, ${y}px, 0) scale(0.985)`,
        transition: instant
          ? "none"
          : `opacity 620ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform 820ms cubic-bezier(.2,.95,.24,1.02) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
