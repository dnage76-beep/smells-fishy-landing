"use client";

import { useEffect, useState } from "react";

const X_WORDS = ["yourself", "your parents", "your loved ones", "your family"];
const Y_WORDS = [
  "scams",
  "phishing",
  "deepfakes",
  "fake news",
  "fake USPS texts",
  "gift-card scams",
  "romance scams",
  "fake pics",
];

const ORANGE_Y = new Set([
  "deepfakes",
  "fake USPS texts",
  "gift-card scams",
  "fake pics",
]);

function CrossfadeWord({
  words,
  interval,
  initialDelay = 0,
  accentMap,
}: {
  words: string[];
  interval: number;
  initialDelay?: number;
  accentMap?: Set<string>;
}) {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(1);

  useEffect(() => {
    let t1: ReturnType<typeof setInterval> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    const start = setTimeout(() => {
      t1 = setInterval(() => {
        setFade(0);
        t2 = setTimeout(() => {
          setI((v) => (v + 1) % words.length);
          setFade(1);
        }, 360);
      }, interval);
    }, initialDelay);
    return () => {
      clearTimeout(start);
      if (t1) clearInterval(t1);
      if (t2) clearTimeout(t2);
    };
  }, [words, interval, initialDelay]);

  const widest = words.reduce((a, b) => (a.length > b.length ? a : b));
  const cur = words[i];
  const isAccent = accentMap && accentMap.has(cur);

  return (
    <span
      style={{
        display: "inline-grid",
        gridTemplateColumns: "1fr",
        verticalAlign: "baseline",
        color: "#1d4ed8",
        fontStyle: "italic",
        fontWeight: 700,
        position: "relative",
      }}
    >
      <span
        style={{
          gridColumn: 1,
          gridRow: 1,
          visibility: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {widest}
      </span>
      <span
        style={{
          gridColumn: 1,
          gridRow: 1,
          whiteSpace: "nowrap",
          opacity: fade,
          transition: "opacity 360ms ease",
          position: "relative",
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          {cur}
          {isAccent && (
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: "2%",
                right: "8%",
                bottom: "-0.08em",
                height: "0.055em",
                background: "#FF8A3D",
                borderRadius: 999,
                transformOrigin: "left center",
                animation: "underlineIn 560ms cubic-bezier(.2,.9,.3,1) both",
                animationDelay: "120ms",
              }}
            />
          )}
        </span>
      </span>
    </span>
  );
}

export function RotatingHeadline() {
  return (
    <h1
      style={{
        fontFamily: '"Inter Tight", "Space Grotesk", system-ui, sans-serif',
        fontWeight: 700,
        fontSize: "clamp(40px, 7.2vw, 108px)",
        lineHeight: 0.92,
        letterSpacing: "-0.045em",
        color: "#fff",
        margin: 0,
      }}
    >
      Protect <CrossfadeWord words={X_WORDS} interval={3000} />
      <br />
      from{" "}
      <CrossfadeWord
        words={Y_WORDS}
        interval={3600}
        initialDelay={900}
        accentMap={ORANGE_Y}
      />
      .
    </h1>
  );
}
