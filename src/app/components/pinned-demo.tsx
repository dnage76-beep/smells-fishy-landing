"use client";

import { useEffect, useRef, useState } from "react";
import { IPhone15Pro } from "./iphone-frame";

const BEATS = [
  {
    title: "Something feels fishy.",
    caption:
      "A text hits your grandma's phone at 11 p.m. The link looks almost real.",
  },
  {
    title: "Press the Action Button.",
    caption:
      "No app to open. No decision to make. One click on the side of the phone.",
  },
  {
    title: "SmellsFishy scans it.",
    caption:
      "The screenshot is analyzed on-device and handed straight to the Factual Check engine.",
  },
  {
    title: "Grounded in real sources.",
    caption:
      "We read it, cross-reference with Google Search, and check the claims in parallel.",
  },
  {
    title: "Verdict in three seconds.",
    caption:
      "A sourced answer, explained in plain language / then share it with whoever needs to see it.",
  },
];

function usePinnedScroll(ref: React.RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    let pending = false;
    let lastP = -1;
    const compute = () => {
      const el = ref.current;
      if (!el) { pending = false; return; }
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const y = Math.min(Math.max(-r.top, 0), total);
      const next = total > 0 ? y / total : 0;
      const rounded = Math.round(next * 1000) / 1000;
      if (rounded !== lastP) {
        lastP = rounded;
        setP(rounded);
      }
      pending = false;
    };
    const on = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

function beatIndex(p: number) {
  const raw = Math.min(p * 5, 4.9999);
  const idx = Math.floor(raw);
  return { idx, localT: raw - idx };
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

function Avatar({
  color = "#1d4ed8",
  initials = "US",
}: {
  color?: string;
  initials?: string;
}) {
  return (
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        flexShrink: 0,
        background: `linear-gradient(135deg, ${color}, ${color}aa)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 600,
        fontSize: 14,
        fontFamily: "-apple-system, system-ui, sans-serif",
      }}
    >
      {initials}
    </div>
  );
}

function Beat1({ localT }: { localT: number }) {
  const pulse = 0.5 + 0.5 * Math.sin(localT * Math.PI * 2.2);
  const tapHighlight = localT > 0.72 ? Math.min(1, (localT - 0.72) * 6) : 0;
  const threads = [
    {
      n: "Mom 💕",
      t: "lunch sunday? 12pm at rosies",
      time: "11:04 AM",
      read: true,
      color: "#ff6a88",
      initials: "M",
      suspicious: false,
    },
    {
      n: "USPS",
      t: "Your package is held. Pay $2.99 redelivery fee at usps-track.co/xY4q or it will be returned to sender.",
      time: "now",
      read: false,
      suspicious: true,
      color: "#6b6b6b",
      initials: "US",
    },
    {
      n: "Chase",
      t: "Your October statement is now available",
      time: "8:12 AM",
      read: true,
      color: "#117ACA",
      initials: "CH",
      suspicious: false,
    },
    {
      n: "Dave",
      t: "did you see the game last night",
      time: "Yesterday",
      read: true,
      color: "#34c759",
      initials: "DA",
      suspicious: false,
    },
    {
      n: "Aunt Pat",
      t: "Sending love to you and the family ❤️",
      time: "Wed",
      read: true,
      color: "#af52de",
      initials: "AP",
      suspicious: false,
    },
    {
      n: "Pharmacy",
      t: "Rx ready for pickup.",
      time: "Tue",
      read: true,
      color: "#30d158",
      initials: "RX",
      suspicious: false,
    },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, background: "#000" }}>
      <div style={{ padding: "56px 16px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span style={{ color: "#1d4ed8", fontSize: 14 }}>Edit</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#1d4ed8">
            <path d="M20 5h-4.6L14 3H8a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2zm-4 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
          </svg>
        </div>
        <div
          style={{
            color: "#fff",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: -0.6,
            fontFamily: "-apple-system, system-ui",
          }}
        >
          Messages
        </div>
        <div
          style={{
            marginTop: 10,
            background: "#1c1c1e",
            borderRadius: 10,
            padding: "7px 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#8e8e93" strokeWidth="2" />
            <path
              d="M16 16l5 5"
              stroke="#8e8e93"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span style={{ color: "#8e8e93", fontSize: 13 }}>Search</span>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        {threads.map((m, i) => (
          <div
            key={i}
            style={{
              padding: "10px 16px",
              display: "flex",
              gap: 11,
              alignItems: "center",
              background: m.suspicious
                ? `rgba(255,0,64,${(0.1 + 0.12 * pulse) * (1 - tapHighlight)})`
                : "transparent",
              boxShadow: m.suspicious
                ? `inset 0 0 0 999px rgba(142,142,147,${0.28 * tapHighlight})`
                : "none",
              position: "relative",
              transition: "background 120ms linear",
            }}
          >
            <div style={{ width: 8 }}>
              {!m.read && (
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: m.suspicious ? "#ff0040" : "#1d4ed8",
                    boxShadow: m.suspicious
                      ? `0 0 ${6 + 8 * pulse}px rgba(255,0,64,${0.6 + 0.4 * pulse})`
                      : "none",
                  }}
                />
              )}
            </div>
            <Avatar color={m.color} initials={m.initials} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>
                  {m.n}
                </span>
                <span style={{ color: "#8e8e93", fontSize: 11 }}>{m.time}</span>
              </div>
              <div
                style={{
                  color: m.read ? "#8e8e93" : "#fff",
                  fontSize: 12.5,
                  lineHeight: 1.35,
                  marginTop: 2,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {m.t}
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                left: 71,
                right: 0,
                bottom: 0,
                height: 0.5,
                background: "#1c1c1e",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Beat2({ localT: _localT }: { localT: number }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000" }}>
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 0,
          right: 0,
          paddingTop: 8,
          paddingBottom: 10,
          background: "rgba(10,10,10,0.82)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6b6b6b, #4a4a4a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          US
        </div>
        <div style={{ color: "#fff", fontSize: 11, marginTop: 3 }}>USPS</div>
      </div>
      <div style={{ padding: "130px 12px 80px" }}>
        <div
          style={{
            textAlign: "center",
            color: "#8e8e93",
            fontSize: 10,
            margin: "8px 0 12px",
          }}
        >
          Today 10:47 PM
        </div>
        <div
          style={{
            background: "#3a3a3c",
            color: "#fff",
            padding: "9px 13px",
            borderRadius: 18,
            borderBottomLeftRadius: 4,
            fontSize: 13.5,
            lineHeight: 1.35,
            maxWidth: "78%",
            display: "inline-block",
          }}
        >
          USPS: Your package is held. Pay $2.99 redelivery fee at usps-track.co/xY4q or it will be returned to sender.
        </div>
        <div style={{ color: "#8e8e93", fontSize: 10, marginTop: 4 }}>
          Delivered
        </div>
      </div>
    </div>
  );
}

function Beat3({ localT }: { localT: number }) {
  const scanIn = Math.min(1, localT * 3);
  const scanPos = Math.min(1, Math.max(0, (localT - 0.1) * 1.2));

  return (
    <div style={{ position: "absolute", inset: 0, background: "#000" }}>
      <Beat2 localT={0} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${scanPos * 100}%`,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #3b82f6 50%, transparent)",
          boxShadow: "0 0 24px 6px rgba(59,130,246,0.9)",
          opacity: scanIn,
          pointerEvents: "none",
          transform: "translateY(-1px)",
          zIndex: 100,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 14,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 12px",
          background: "rgba(29,78,216,0.95)",
          borderRadius: 999,
          opacity: scanIn,
          pointerEvents: "none",
          zIndex: 100,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#fff",
            animation: "pulse 1.1s ease-in-out infinite",
          }}
        />
        <span
          style={{
            color: "#fff",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Scanning
        </span>
      </div>
    </div>
  );
}

function Beat4({ localT }: { localT: number }) {
  const STAGES = [
    "Reading text…",
    "Checking sources…",
    "Cross-referencing facts…",
  ];
  const progress = Math.min(1, localT * 1.1);
  const stageIdx = Math.min(
    STAGES.length - 1,
    Math.floor(progress * STAGES.length),
  );
  const SOURCES = [
    "ftc.gov",
    "uspis.gov",
    "reuters.com",
    "consumer.ftc.gov",
    "snopes.com",
    "bbb.org",
    "ic3.gov",
    "nyt.com",
  ];
  const dotsShown = Math.min(
    SOURCES.length,
    Math.floor(progress * (SOURCES.length + 1)),
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#EFEFF4",
        color: "#111",
        padding: "68px 12px 20px",
        fontFamily: "-apple-system, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "#1d4ed8",
          borderRadius: 14,
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2.2" />
          </svg>
        </div>
        <div style={{ lineHeight: 1.15, flex: 1 }}>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
            Factual Check
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: 11,
              marginTop: 2,
            }}
          >
            AI analysis grounded with Google Search
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "14px",
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            className="pulseDot"
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#1d4ed8",
              boxShadow: "0 0 10px rgba(29,78,216,0.6)",
            }}
          />
          <div style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>
            {STAGES[stageIdx]}
          </div>
        </div>
        <div
          style={{
            height: 3,
            background: "rgba(29,78,216,0.12)",
            borderRadius: 999,
            overflow: "hidden",
            marginTop: 10,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress * 100}%`,
              background: "#1d4ed8",
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: 12,
          background: "#fff",
          borderRadius: 14,
          padding: 14,
        }}
      >
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8a8a8e",
            marginBottom: 10,
          }}
        >
          Sources · {dotsShown}/{SOURCES.length}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {SOURCES.map((s, i) => (
            <div
              key={s}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                border: "1px solid rgba(29,78,216,0.18)",
                padding: "4px 9px",
                borderRadius: 999,
                fontSize: 11,
                color: "#1d4ed8",
                fontWeight: 500,
                opacity: i < dotsShown ? 1 : 0,
                transform: i < dotsShown ? "scale(1)" : "scale(0.85)",
                transition:
                  "opacity 260ms ease, transform 260ms cubic-bezier(.2,.9,.3,1.3)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#1d4ed8",
                }}
              />
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Beat5({ localT }: { localT: number }) {
  const chipIn = Math.min(1, localT * 2);
  const rows: { label: string; v: string }[] = [
    { label: "Real USPS domain?", v: "False" },
    { label: "Payment request legit?", v: "False" },
    { label: "Redelivery fee charged?", v: "False" },
  ];
  const shownRows = Math.min(rows.length, Math.floor((localT - 0.2) * 6));
  const btnPulse = 0.5 + 0.5 * Math.sin(localT * 6);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#EFEFF4",
        color: "#111",
        padding: "68px 12px 20px",
        fontFamily: "-apple-system, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "#1d4ed8",
          borderRadius: 14,
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#fff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ lineHeight: 1.15, flex: 1 }}>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
            Factual Check
          </div>
          <div style={{ color: "rgba(255,255,255,0.82)", fontSize: 11 }}>
            Complete · 2.8s
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 10,
          background: "#fff",
          borderRadius: 14,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            letterSpacing: "0.16em",
            color: "#8a8a8e",
            textTransform: "uppercase",
            alignSelf: "flex-start",
          }}
        >
          Verdict
        </div>
        <div
          style={{
            marginTop: 10,
            padding: "14px 26px",
            borderRadius: 999,
            background: "#ff0040",
            color: "#fff",
            fontFamily: '"Inter Tight", system-ui',
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: "-0.04em",
            transform: `scale(${0.6 + 0.4 * chipIn})`,
            opacity: chipIn,
            boxShadow: `0 0 ${30 * chipIn}px rgba(255,0,64,0.55)`,
          }}
        >
          SCAM · False
        </div>
        <div
          style={{
            marginTop: 10,
            color: "#444",
            fontSize: 12.5,
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: 260,
          }}
        >
          USPS does not request redelivery fees via SMS. The link domain is not affiliated with the postal service.
        </div>
      </div>

      <div
        style={{
          marginTop: 10,
          background: "#fff",
          borderRadius: 14,
          padding: "4px 14px 8px",
        }}
      >
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 0",
              borderBottom:
                i < rows.length - 1
                  ? "0.5px solid rgba(60,60,67,0.12)"
                  : "none",
              opacity: i < shownRows ? 1 : 0,
              transform: i < shownRows ? "translateY(0)" : "translateY(6px)",
              transition:
                "opacity 300ms ease, transform 300ms cubic-bezier(.2,.9,.3,1)",
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#ff0040",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 18 18">
                <path
                  d="M5 5l8 8M13 5l-8 8"
                  stroke="#fff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            <div style={{ fontSize: 13, color: "#111", flex: 1 }}>
              {r.label}
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#ff0040",
                fontFamily: '"JetBrains Mono", monospace',
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {r.v}
            </div>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: 16,
          width: "100%",
          padding: "14px",
          background: "#1d4ed8",
          color: "#fff",
          border: "none",
          borderRadius: 14,
          fontFamily: '"Inter Tight", system-ui',
          fontWeight: 600,
          fontSize: 15,
          boxShadow: `0 0 ${10 + 12 * btnPulse}px rgba(29,78,216,${0.35 + 0.3 * btnPulse})`,
        }}
      >
        Share with family
      </button>
    </div>
  );
}

function ScreenSwap({ idx, localT }: { idx: number; localT: number }) {
  const Beats = [Beat1, Beat2, Beat3, Beat4, Beat5];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#000" }}>
      {Beats.map((B, i) => {
        const active = i === idx;
        const adjacent = Math.abs(i - idx) <= 1;
        if (!adjacent) return null;
        const isIosSlide = (i === 0 || i === 1) && (idx === 0 || idx === 1);
        let tx = 0;
        if (isIosSlide) {
          if (i === 0) tx = idx === 1 ? -100 : 0;
          if (i === 1) tx = idx === 0 ? 100 : 0;
        }
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              background: "#000",
              opacity: active ? 1 : 0,
              transform: `translateX(${tx}%)`,
              transition: isIosSlide
                ? "transform 620ms cubic-bezier(.32,.72,0,1), opacity 380ms ease"
                : "opacity 300ms ease",
              pointerEvents: active ? "auto" : "none",
            }}
          >
            <B localT={active ? localT : 0} />
          </div>
        );
      })}
    </div>
  );
}

export function PinnedDemo() {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileDemo />;
  return <DesktopPinnedDemo />;
}

function DesktopPinnedDemo() {
  const ref = useRef<HTMLElement>(null);
  const p = usePinnedScroll(ref);
  const { idx, localT } = beatIndex(p);
  const beat = BEATS[idx];

  let pressT = 0;
  let actionRed = false;
  if (idx === 1) {
    pressT = Math.max(0, Math.min(1, (localT - 0.5) * 2.2));
    actionRed = pressT > 0.15 && localT < 0.85;
  }

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "500vh",
        background: "#000",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: 720,
            height: 720,
            background:
              "radial-gradient(circle, rgba(29,78,216,0.28), rgba(29,78,216,0.05) 50%, transparent 70%)",
            filter: "blur(30px)",
            top: "56%",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="pinned-grid"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 40,
            alignItems: "center",
            maxWidth: 1440,
            width: "100%",
            padding: "0 48px",
            marginTop: "12vh",
          }}
        >
          <div style={{ minWidth: 0, maxWidth: 440, justifySelf: "end" }}>
            <div
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "#a3a3a3",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              02 / See it in action
            </div>
            <h2
              key={"t" + idx}
              style={{
                fontFamily: '"Inter Tight", system-ui',
                fontWeight: 700,
                fontSize: "clamp(30px, 4.4vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "-0.045em",
                color: "#fff",
                margin: 0,
                animation: "beatFade 420ms ease",
              }}
            >
              {beat.title}
            </h2>
            <p
              key={"c" + idx}
              style={{
                marginTop: 24,
                maxWidth: 460,
                color: "#a3a3a3",
                fontSize: 17,
                lineHeight: 1.55,
                animation: "beatFade 420ms ease",
              }}
            >
              {beat.caption}
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                willChange: "transform",
              }}
            >
              <IPhone15Pro
                width={300}
                actionButtonRed={actionRed}
                actionButtonPressed={pressT > 0.4}
              >
                <ScreenSwap idx={idx} localT={localT} />
              </IPhone15Pro>
              {/* Press indicator / lives inside the rotation group, anchored to the action button position */}
              <div
                style={{
                  position: "absolute",
                  left: -8,
                  top: 108 + 17,
                  transform: `translate(calc(-100% + ${actionRed ? 6 : 0}px), -50%)`,
                  transformStyle: "preserve-3d",
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  pointerEvents: "none",
                  opacity: idx === 1 && localT > 0.22 && localT < 0.82 ? 1 : 0,
                  visibility: idx === 1 && localT < 0.9 ? "visible" : "hidden",
                  transition: "opacity 180ms ease, transform 260ms cubic-bezier(.2,.9,.3,1)",
                }}
              >
                <div
                  style={{
                    fontFamily: '"Inter Tight", system-ui',
                    fontSize: 12,
                    fontWeight: 500,
                    color: actionRed ? "#ff6a88" : "#d4d4d8",
                    padding: "5px 11px",
                    background: "rgba(20,20,22,0.85)",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    borderRadius: 999,
                    transition: "color 700ms ease",
                    whiteSpace: "nowrap",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Press
                </div>
                <div
                  style={{
                    width: 28,
                    height: 1,
                    background: actionRed
                      ? "rgba(255,106,136,0.85)"
                      : "rgba(163,163,163,0.7)",
                    transition: "background 700ms ease",
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: actionRed ? "#ff6a88" : "#a3a3a3",
                    boxShadow: actionRed
                      ? "0 0 10px rgba(255,106,136,0.7)"
                      : "none",
                    transition: "background 700ms ease, box-shadow 700ms ease",
                  }}
                />
              </div>
            </div>
            {/* keep old orphan container harmless */}
            <div
              style={{
                position: "absolute",
                display: "none",
              }}
            >
              <div
                style={{
                  fontFamily: '"Inter Tight", system-ui',
                  fontSize: 12,
                  fontWeight: 500,
                  color: actionRed ? "#ff6a88" : "#d4d4d8",
                  padding: "5px 11px",
                  background: "rgba(20,20,22,0.85)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  transition: "color 700ms ease",
                  whiteSpace: "nowrap",
                  backdropFilter: "blur(8px)",
                }}
              >
                Press
              </div>
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: actionRed
                    ? "rgba(255,106,136,0.85)"
                    : "rgba(163,163,163,0.7)",
                  transition: "background 700ms ease",
                }}
              />
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: actionRed ? "#ff6a88" : "#a3a3a3",
                  boxShadow: actionRed
                    ? "0 0 10px rgba(255,106,136,0.7)"
                    : "none",
                  transition: "background 700ms ease, box-shadow 700ms ease",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              alignItems: "flex-start",
              justifySelf: "start",
            }}
          >
            {BEATS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: i === idx ? "#1d4ed8" : "transparent",
                  border: `1.5px solid ${i <= idx ? "#1d4ed8" : "#2a2a2a"}`,
                  transition: "background 260ms ease, border-color 260ms ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileBeatCard({ idx, beat }: { idx: number; beat: typeof BEATS[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [localT, setLocalT] = useState(0);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            const start = performance.now();
            const tick = () => {
              const elapsed = (performance.now() - start) / 1000;
              const t = Math.min(1, elapsed / 3.5);
              setLocalT(t);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pressT = idx === 1 ? Math.max(0, Math.min(1, (localT - 0.25) * 1.7)) : 0;
  const actionRed = idx === 1 && pressT > 0.15;

  return (
    <div
      ref={cardRef}
      style={{
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        borderBottom: "1px solid #1a1a1a",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 700ms ease, transform 700ms cubic-bezier(.2,.9,.3,1)",
      }}
    >
      <div style={{ position: "relative", marginBottom: 28 }}>
        <IPhone15Pro width={240} actionButtonRed={actionRed} actionButtonPressed={pressT > 0.4}>
          <ScreenSwap idx={idx} localT={localT} />
        </IPhone15Pro>
      </div>
      <h2
        style={{
          fontFamily: '"Inter Tight", system-ui',
          fontWeight: 700,
          fontSize: "clamp(28px, 8vw, 38px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#fff",
          margin: 0,
          textAlign: "center",
          maxWidth: 340,
        }}
      >
        {beat.title}
      </h2>
      <p
        style={{
          marginTop: 16,
          maxWidth: 340,
          color: "#a3a3a3",
          fontSize: 15,
          lineHeight: 1.55,
          textAlign: "center",
        }}
      >
        {beat.caption}
      </p>
    </div>
  );
}

function MobileDemo() {
  return (
    <section
      style={{
        position: "relative",
        background: "#000",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          padding: "56px 24px 24px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 11,
            letterSpacing: "0.16em",
            color: "#a3a3a3",
            textTransform: "uppercase",
          }}
        >
          02 / See it in action
        </div>
      </div>
      {BEATS.map((beat, i) => (
        <MobileBeatCard key={i} idx={i} beat={beat} />
      ))}
    </section>
  );
}
