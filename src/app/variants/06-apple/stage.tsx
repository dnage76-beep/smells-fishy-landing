"use client";

import { useEffect, useRef, useState } from "react";
import { A, SANS } from "./tokens";

/* --------------------------------------------------------------- motion */

function skipMotion() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return true;
  const nav = window.navigator;
  if (nav?.webdriver) return true;
  return /HeadlessChrome|Puppeteer|Playwright/i.test(nav?.userAgent ?? "");
}

/** Scroll progress of an element through the viewport, 0 to 1, rAF throttled. */
function useScrollProgress(ref: React.RefObject<HTMLElement | null>, enabled: boolean) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      if (span <= 0) return setP(0);
      const raw = -r.top / span;
      setP(raw < 0 ? 0 : raw > 1 ? 1 : raw);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, enabled]);
  return p;
}

/* -------------------------------------------------------- device screens */

const SCREEN_W = 300;
const SCREEN_H = 620;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: SCREEN_W + 24,
        borderRadius: 60,
        padding: 12,
        background: "linear-gradient(160deg, #3a3a3e, #0b0b0d 42%, #2a2a2e)",
        boxShadow: "0 40px 90px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.14) inset",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: SCREEN_W,
          height: SCREEN_H,
          borderRadius: 48,
          overflow: "hidden",
          background: A.navy,
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 92,
            height: 26,
            borderRadius: 999,
            background: "#000",
            zIndex: 5,
          }}
        />
        {children}
      </div>
    </div>
  );
}

function ScreenMessage() {
  return (
    <div style={{ height: "100%", background: "#EFF2F8", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#fff", padding: "52px 16px 12px", borderBottom: `1px solid ${A.hairLight}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: A.onLightDim, textAlign: "center" }}>Unknown number</div>
      </div>
      <div style={{ padding: 16, flex: 1 }}>
        <div
          style={{
            background: "#E3E7EF",
            color: A.onLight,
            borderRadius: "20px 20px 20px 6px",
            padding: "13px 15px",
            fontSize: 14,
            lineHeight: 1.5,
            maxWidth: 240,
          }}
        >
          Your parcel is on hold. Confirm the delivery address in 24 hours or it goes back to the sender:
          <span style={{ color: A.blue, wordBreak: "break-all" }}> parcel-redelivery-fee.co/x9d</span>
        </div>
        <div style={{ marginTop: 8, fontSize: 11.5, color: A.onLightDim }}>Today 9:14 AM</div>
      </div>
      <div style={{ padding: "0 16px 26px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#fff",
            border: `1px solid ${A.hairLight}`,
            borderRadius: 16,
            padding: "12px 14px",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "rgba(28,92,247,0.12)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ width: 4, height: 13, borderRadius: 999, background: A.blue, display: "block" }} />
          </span>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: A.onLight }}>Screenshot ready to check</span>
        </div>
      </div>
    </div>
  );
}

function ScreenChecking({ progress }: { progress: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const done = Math.max(0.06, Math.min(1, progress));
  return (
    <div
      style={{
        height: "100%",
        background: `linear-gradient(180deg, ${A.deep}, ${A.navy})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
        padding: "60px 24px 30px",
      }}
    >
      <svg width={140} height={140} viewBox="0 0 140 140" aria-hidden>
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="6" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="#48A7F8"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - done)}
          transform="rotate(-90 70 70)"
        />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 19, fontWeight: 600, color: A.cream, letterSpacing: "-0.01em" }}>Checking</div>
        <div style={{ fontSize: 13.5, color: "#A8C1F7", marginTop: 6 }}>About eight seconds.</div>
      </div>
      <div style={{ width: "100%" }}>
        {["Sender", "Links", "Language", "Urgency"].map((t, i) => (
          <div
            key={t}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "11px 2px",
              borderTop: i === 0 ? "none" : `1px solid ${A.hairDark}`,
              fontSize: 13,
              color: "#A8C1F7",
            }}
          >
            <span>{t}</span>
            <span style={{ color: done > (i + 1) / 5 ? "#48A7F8" : "rgba(168,193,247,0.35)" }}>
              {done > (i + 1) / 5 ? "read" : "…"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenVerdict() {
  return (
    <div style={{ height: "100%", background: "#EFF2F8", overflow: "hidden" }}>
      <div style={{ background: A.navy, padding: "50px 16px 14px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: A.cream, textAlign: "center" }}>Check result</div>
      </div>
      <div style={{ padding: 14 }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: 14,
            display: "flex",
            gap: 11,
            alignItems: "flex-start",
            border: "1px solid rgba(200,30,30,0.16)",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              background: `linear-gradient(150deg, ${A.coral}, ${A.danger})`,
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            !
          </span>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600, color: A.danger, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
              Showed warning signs
            </div>
            <div style={{ fontSize: 12.5, color: A.onLightDim, marginTop: 3 }}>Worth a second look before you tap.</div>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 18, padding: 14, marginTop: 10 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: A.onLight, marginBottom: 9 }}>What stood out</div>
          {["A 24 hour deadline on something you did not order.", "A link, instead of the carrier's own app."].map(
            (t) => (
              <div key={t} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginTop: 7 }}>
                <span
                  aria-hidden
                  style={{ width: 6, height: 6, borderRadius: 999, background: A.coral, marginTop: 5, flexShrink: 0 }}
                />
                <span style={{ fontSize: 12.5, lineHeight: 1.45, color: A.onLight }}>{t}</span>
              </div>
            ),
          )}
        </div>

        <div style={{ background: "#fff", borderRadius: 18, padding: 14, marginTop: 10 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: A.onLight, marginBottom: 9 }}>What to do next</div>
          <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
            <span
              aria-hidden
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: A.blue,
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              1
            </span>
            <span style={{ fontSize: 12.5, lineHeight: 1.45, color: A.onLight }}>
              Open the carrier&apos;s official app and check the parcel there.
            </span>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: "13px 14px",
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 12.5, fontWeight: 600, color: A.blue }}>Deep Dive</span>
          <span style={{ fontSize: 11.5, color: A.onLightDim }}>Check the sources ›</span>
        </div>

        <div style={{ marginTop: 14, textAlign: "center", fontSize: 11, color: A.onLightDim }}>
          Saved on this iPhone only.
        </div>
      </div>
    </div>
  );
}

function Screen({ index, progress }: { index: number; progress: number }) {
  if (index === 0) return <ScreenMessage />;
  if (index === 1) return <ScreenChecking progress={progress} />;
  return <ScreenVerdict />;
}

/* ------------------------------------------------------------ hero device */

export function HeroDevice() {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  useEffect(() => setLive(!skipMotion()), []);
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!live) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      const h = window.innerHeight || 1;
      const raw = y / h;
      setP(raw > 1 ? 1 : raw);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [live]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        transform: live ? `translate3d(0, ${-p * 46}px, 0) scale(${1 + p * 0.07})` : "none",
        transformOrigin: "50% 0%",
        willChange: live ? "transform" : "auto",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "6%",
          width: "min(760px, 120%)",
          height: "70%",
          transform: "translateX(-50%)",
          background: "radial-gradient(closest-side, rgba(28,92,247,0.42), transparent 72%)",
          filter: "blur(10px)",
        }}
      />
      <div style={{ position: "relative" }}>
        <Frame>
          <ScreenVerdict />
        </Frame>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ pinned stage */

const STEPS = [
  {
    n: "01",
    title: "Grab it.",
    body: "Screenshot the message, snap a photo of a screen, or paste the text straight in.",
  },
  {
    n: "02",
    title: "Press once.",
    body: "The Action Button or a Back Tap starts the check. Nothing is sent until you approve it.",
  },
  {
    n: "03",
    title: "See what stood out.",
    body: "A hedged verdict, the specific things that stood out, and the one move to make next.",
  },
];

export function PinnedHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  useEffect(() => {
    // Pinning needs both motion and room: below 760px the two columns stack
    // and the stage would not fit a viewport, so the static layout is used.
    const decide = () => setLive(!skipMotion() && window.innerWidth >= 760);
    decide();
    window.addEventListener("resize", decide);
    return () => window.removeEventListener("resize", decide);
  }, []);
  const p = useScrollProgress(sectionRef, live);

  const raw = p * STEPS.length;
  const index = Math.min(STEPS.length - 1, Math.max(0, Math.floor(raw)));
  const within = raw - index;

  if (!live) {
    // prefers-reduced-motion, or automated capture: the same two columns,
    // unpinned, with every step shown at once.
    return (
      <section
        id="how"
        style={{ background: A.grey, color: A.onLight, padding: "clamp(72px, 10vw, 130px) 0" }}
      >
        <div className="ap-shell">
          <SectionEyebrow>How one press works</SectionEyebrow>
          <div className="ap-stage-grid" style={{ marginTop: 46 }}>
            <div className="ap-device" style={{ display: "flex", justifyContent: "center" }}>
              <Frame>
                <ScreenVerdict />
              </Frame>
            </div>
            <div style={{ width: "100%", maxWidth: 580, margin: "0 auto" }}>
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  style={{
                    padding: "26px 0",
                    borderTop: i === 0 ? "none" : `1px solid ${A.hairLight}`,
                  }}
                >
                  <StepBlock step={s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="how" ref={sectionRef} style={{ background: A.grey, color: A.onLight, height: "340svh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100svh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="ap-shell" style={{ width: "100%" }}>
          <div className="ap-stage-grid">
            <div className="ap-device" style={{ display: "flex", justifyContent: "center" }}>
              <Frame>
                <Screen index={index} progress={index === 1 ? within : 1} />
              </Frame>
            </div>
            <div className="ap-stage-copy">
              <SectionEyebrow>How one press works</SectionEyebrow>
              <div style={{ position: "relative", marginTop: 26, minHeight: 240 }}>
                {STEPS.map((s, i) => {
                  const active = i === index;
                  return (
                    <div
                      key={s.n}
                      aria-hidden={!active}
                      style={{
                        position: i === 0 ? "relative" : "absolute",
                        inset: i === 0 ? undefined : 0,
                        opacity: active ? 1 : 0,
                        transform: active ? "none" : "translate3d(0, 18px, 0)",
                        transition: "opacity 480ms ease, transform 620ms cubic-bezier(.22,1,.3,1)",
                        pointerEvents: active ? "auto" : "none",
                      }}
                    >
                      <StepBlock step={s} />
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 34 }}>
                {STEPS.map((s, i) => (
                  <span
                    key={s.n}
                    aria-hidden
                    style={{
                      height: 3,
                      width: 46,
                      borderRadius: 999,
                      background: i <= index ? A.blue : "rgba(0,0,0,0.14)",
                      transition: "background 380ms ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: SANS, fontSize: 19, fontWeight: 600, color: A.blue, letterSpacing: "-0.01em" }}>
      {children}
    </div>
  );
}

function StepBlock({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div>
      <div style={{ fontSize: 14, fontWeight: 600, color: A.onLightDim, letterSpacing: "0.06em" }}>{step.n}</div>
      <h3
        style={{
          fontFamily: SANS,
          fontSize: "clamp(32px, 4.4vw, 64px)",
          fontWeight: 600,
          letterSpacing: "-0.028em",
          lineHeight: 1.05,
          margin: "12px 0 0",
          color: A.onLight,
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          margin: "16px 0 0",
          fontSize: "clamp(17px, 1.5vw, 21px)",
          lineHeight: 1.5,
          color: A.onLightDim,
          maxWidth: 500,
        }}
      >
        {step.body}
      </p>
    </div>
  );
}
