"use client";

import { useEffect, useRef, useState } from "react";

export function ThreeSecondAnim() {
  const LOOP = 4200;
  const [t, setT] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    let running = false;
    let start = performance.now();
    const tick = (now: number) => {
      if (!running) return;
      setT(((now - start) % LOOP) / 1000);
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!running) { running = true; start = performance.now(); setT(0); }
          raf = requestAnimationFrame(tick);
        } else {
          running = false;
          cancelAnimationFrame(raf);
          setT(0);
        }
      },
      { rootMargin: "100px" }
    );
    if (containerRef.current) io.observe(containerRef.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  const elapsed = Math.min(t, 3);
  const counter = elapsed.toFixed(2);

  const lines = [
    { at: 0.25, kind: "cmd", text: '$ analyze --input="incoming.sms"' },
    { at: 0.55, kind: "info", text: "SOURCE   +1 (323) 555-0188  [unverified]" },
    {
      at: 0.85,
      kind: "info",
      text: 'BODY     "USPS: package held. Pay $2.99 at usps-track.co/xY4q"',
    },
    { at: 1.15, kind: "ok", text: "✓ parsing message body" },
    { at: 1.45, kind: "ok", text: "✓ domain check: usps-track.co ≠ usps.com" },
    { at: 1.75, kind: "ok", text: "✓ sender pattern: spoofed carrier" },
    { at: 2.05, kind: "ok", text: "✓ intent model: payment coercion" },
    { at: 2.35, kind: "warn", text: "! flagged: 4 scam signals matched" },
    { at: 2.65, kind: "warn", text: "! similar to USPS smishing (FTC #24-117)" },
  ];

  const showVerdict = t >= 2.9 && t <= 3.8;
  const showCursor = Math.floor(t * 3) % 2 === 0;

  return (
    <div
      ref={containerRef}
      style={{
        width: 420,
        maxWidth: "100%",
        margin: "0 auto",
        background: "#060606",
        border: "1px solid #1a1a1a",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
        fontSize: 11,
        lineHeight: 1.55,
        color: "#c4c4c4",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          borderBottom: "1px solid #141414",
          background: "#0a0a0a",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2a2a2a",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2a2a2a",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2a2a2a",
            }}
          />
        </div>
        <div style={{ color: "#6b6b6b", fontSize: 10, letterSpacing: "0.1em" }}>
          DETECTION
        </div>
        <div
          style={{
            color: "#1d4ed8",
            fontSize: 10,
            letterSpacing: "0.1em",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {counter}s
        </div>
      </div>

      <div
        style={{
          padding: "14px 16px 18px",
          minHeight: 240,
          position: "relative",
        }}
      >
        {lines
          .filter((l) => t >= l.at)
          .map((l, i) => {
            const color =
              l.kind === "cmd"
                ? "#e5e5e5"
                : l.kind === "info"
                  ? "#8a8a8a"
                  : l.kind === "ok"
                    ? "#6b7280"
                    : l.kind === "warn"
                      ? "#b45309"
                      : "#c4c4c4";
            const accent =
              l.kind === "ok" ? "#1d4ed8" : l.kind === "warn" ? "#FF8A3D" : null;
            return (
              <div
                key={i}
                style={{
                  color,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  opacity: showVerdict ? 0.4 : 1,
                  transition: "opacity 280ms ease",
                }}
              >
                {l.text.split(/(✓|!)/).map((chunk, ci) => (
                  <span
                    key={ci}
                    style={{
                      color:
                        chunk === "✓" || chunk === "!"
                          ? (accent as string)
                          : "inherit",
                    }}
                  >
                    {chunk}
                  </span>
                ))}
              </div>
            );
          })}

        {!showVerdict && (
          <div
            style={{
              display: "inline-block",
              marginTop: 2,
              width: 7,
              height: 12,
              background: showCursor ? "#1d4ed8" : "transparent",
              verticalAlign: "middle",
            }}
          />
        )}

        {showVerdict && (
          <div
            style={{
              position: "absolute",
              left: 16,
              right: 16,
              bottom: 16,
              border: "1px solid rgba(239,68,68,0.35)",
              background: "rgba(239,68,68,0.08)",
              padding: "12px 14px",
              borderRadius: 6,
              animation: "quoteFade 240ms ease both",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#ef4444",
                fontSize: 10,
                letterSpacing: "0.18em",
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#ef4444",
                }}
              />
              VERDICT · SCAM
            </div>
            <div
              style={{
                marginTop: 6,
                fontFamily: '"Inter Tight", system-ui',
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Do not tap the link.
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background: "#0d0d0d",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(elapsed / 3) * 100}%`,
            background: "#1d4ed8",
            transition: "none",
          }}
        />
      </div>
    </div>
  );
}
