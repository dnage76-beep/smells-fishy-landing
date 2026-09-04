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

const FADE_MS = 300;
const MIN_DELAY = 2800;
const MAX_DELAY = 4800;
const MIN_GAP = 1800;

function Word({
  word,
  visible,
  accentMap,
  allWords,
}: {
  word: string;
  visible: boolean;
  accentMap?: Set<string>;
  allWords: string[];
}) {
  const widest = allWords.reduce((a, b) => (a.length > b.length ? a : b));
  const isAccent = accentMap && accentMap.has(word);

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
      <span style={{ gridColumn: 1, gridRow: 1, visibility: "hidden", whiteSpace: "nowrap" }}>
        {widest}
      </span>
      <span
        style={{
          gridColumn: 1,
          gridRow: 1,
          whiteSpace: "nowrap",
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease`,
          position: "relative",
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          {word}
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
  const [xi, setXi] = useState(0);
  const [yi, setYi] = useState(0);
  const [xVisible, setXVisible] = useState(true);
  const [yVisible, setYVisible] = useState(true);

  useEffect(() => {
    let alive = true;
    const cleanups: (() => void)[] = [];
    // scheduledAt = when the visible word-swap will happen (absolute timestamp)
    const scheduledAt = { x: Infinity, y: Infinity };

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    function schedule(
      key: "x" | "y",
      setIndex: React.Dispatch<React.SetStateAction<number>>,
      setVisible: React.Dispatch<React.SetStateAction<boolean>>,
      length: number,
      initialDelay: number
    ) {
      let idx = 0;

      const planNext = (fromNow: number) => {
        // fromNow is when we START the fade; actual swap is FADE_MS later
        const other = key === "x" ? "y" : "x";
        const otherSwap = scheduledAt[other];
        let adjusted = fromNow;
        // retry up to a few times with fresh random delays until we're clear of the other's swap
        for (let attempt = 0; attempt < 8; attempt++) {
          const mySwap = performance.now() + adjusted + FADE_MS;
          if (Math.abs(mySwap - otherSwap) >= MIN_GAP) break;
          adjusted = rand(MIN_DELAY, MAX_DELAY);
        }
        // final fallback: if still colliding, push just past the conflict with a small random jitter
        const mySwap = performance.now() + adjusted + FADE_MS;
        if (Math.abs(mySwap - otherSwap) < MIN_GAP) {
          adjusted = otherSwap + MIN_GAP + rand(0, 800) - FADE_MS - performance.now();
        }
        scheduledAt[key] = performance.now() + adjusted + FADE_MS;

        const fadeTimer = setTimeout(() => {
          if (!alive) return;
          setVisible(false);
          const swapTimer = setTimeout(() => {
            if (!alive) return;
            idx = (idx + 1) % length;
            setIndex(idx);
            setVisible(true);
            planNext(rand(MIN_DELAY, MAX_DELAY));
          }, FADE_MS);
          cleanups.push(() => clearTimeout(swapTimer));
        }, adjusted);
        cleanups.push(() => clearTimeout(fadeTimer));
      };

      const init = setTimeout(() => planNext(0), initialDelay);
      cleanups.push(() => clearTimeout(init));
    }

    schedule("x", setXi, setXVisible, X_WORDS.length, rand(MIN_DELAY, MAX_DELAY));
    schedule("y", setYi, setYVisible, Y_WORDS.length, rand(MIN_DELAY, MAX_DELAY));

    return () => { alive = false; cleanups.forEach((fn) => fn()); };
  }, []);

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
      Protect{" "}
      <Word word={X_WORDS[xi]} visible={xVisible} allWords={X_WORDS} />
      <br />
      from{" "}
      <Word word={Y_WORDS[yi]} visible={yVisible} allWords={Y_WORDS} accentMap={ORANGE_Y} />
    </h1>
  );
}

