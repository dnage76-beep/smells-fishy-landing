"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RotatingHeadline } from "./rotating-headline";
import { IPhone15Pro, HeroPhoneStage } from "./iphone-frame";
import { AnimatedFactualCheck } from "./factual-check";
import { ThreeSecondAnim } from "./three-second-anim";

export function Eyebrow({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        textTransform: "uppercase",
        fontSize: 11,
        letterSpacing: "0.16em",
        color: "#a3a3a3",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Laurel({ side = "left" }: { side?: "left" | "right" }) {
  const flip = side === "right" ? "scaleX(-1)" : "scaleX(1)";
  return (
    <Image
      src="/assets/laurel-left.png"
      alt=""
      width={120}
      height={44}
      style={{
        height: 44,
        width: "auto",
        transform: flip,
        flexShrink: 0,
        display: "block",
      }}
      unoptimized
    />
  );
}

function LaurelAward({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff" }}
    >
      <Laurel side="left" />
      <div
        style={{
          textAlign: "center",
          fontFamily: '"Inter Tight", system-ui',
          lineHeight: 1.2,
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#a3a3a3",
          }}
        >
          {top}
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: 13,
            color: "#fff",
            letterSpacing: "-0.01em",
            marginTop: 3,
            whiteSpace: "nowrap",
          }}
        >
          {bottom}
        </div>
      </div>
      <Laurel side="right" />
    </div>
  );
}

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="store-badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "#fff",
        color: "#000",
        padding: "10px 20px",
        borderRadius: 14,
        textDecoration: "none",
        minWidth: 160,
        border: "1px solid #000",
        transition: "transform 200ms ease, box-shadow 200ms ease",
      }}
    >
      <svg width="24" height="28" viewBox="0 0 20 22" fill="#000">
        <path d="M16.5 11.3c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.2-.8 1.4 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1-.1-2.7-1-2.7-4zM14.1 4.3c.7-.8 1.1-2 1-3.1-.9.1-2.1.7-2.8 1.5-.6.7-1.2 1.9-1 3 1 .1 2.1-.5 2.8-1.4z" />
      </svg>
      <div style={{ lineHeight: 1.1, textAlign: "left" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: 0.2,
            fontFamily: "-apple-system, system-ui, sans-serif",
          }}
        >
          Download on the
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: -0.3,
            marginTop: 1,
            fontFamily: "-apple-system, system-ui, sans-serif",
          }}
        >
          App Store
        </div>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="store-badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "#fff",
        color: "#000",
        padding: "10px 20px",
        borderRadius: 14,
        textDecoration: "none",
        minWidth: 160,
        border: "1px solid #000",
        transition: "transform 200ms ease, box-shadow 200ms ease",
      }}
    >
      <svg width="24" height="28" viewBox="0 0 512 512">
        <path fill="#32BBB2" d="M325.3 234.3L104.6 13.9 375.8 169.6z" />
        <path fill="#2C9CD4" d="M104.6 13.9L325.3 234.3 104.6 454.7z" />
        <path fill="#EFC44F" d="M375.8 169.6l81.7 47-82 47.1-54.5-54.5z" />
        <path fill="#E8453C" d="M104.6 454.7L325.3 234.3 50.5 50.5z" />
      </svg>
      <div style={{ lineHeight: 1.1, textAlign: "left" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: 0.2,
            fontFamily: "-apple-system, system-ui, sans-serif",
          }}
        >
          GET IT ON
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: -0.3,
            marginTop: 1,
            fontFamily: "-apple-system, system-ui, sans-serif",
          }}
        >
          Google Play
        </div>
      </div>
    </a>
  );
}

export function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 48px",
        borderBottom: "1px solid #1a1a1a",
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ position: "relative" }}>
          <Image
            src="/assets/fishy-logo.png"
            alt=""
            width={28}
            height={28}
            style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover" }}
            unoptimized
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: 10,
              background:
                "radial-gradient(circle, rgba(255,138,61,0.35), transparent 70%)",
              filter: "blur(6px)",
              zIndex: -1,
            }}
          />
        </div>
        <span
          style={{
            fontFamily: '"Inter Tight", system-ui',
            fontWeight: 700,
            fontSize: 17,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          SmellsFishy
        </span>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", gap: 36 }}
        className="nav-links"
      >
        {["How it works", "What we catch", "Press"].map((x) => (
          <a
            key={x}
            href="#"
            className="nav-link"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              textTransform: "uppercase",
              fontSize: 11,
              letterSpacing: "0.16em",
              color: "#a3a3a3",
              textDecoration: "none",
              transition: "color 200ms ease",
            }}
          >
            {x}
          </a>
        ))}
      </div>
      <a
        href="#download"
        className="nav-cta"
        style={{
          background: "#1d4ed8",
          color: "#fff",
          padding: "10px 18px",
          borderRadius: 3,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          textDecoration: "none",
          fontWeight: 500,
          transition: "background 200ms ease",
        }}
      >
        Get the App
      </a>
    </nav>
  );
}

export function Hero() {
  return (
    <section
      data-screen-label="01 Hero"
      style={{ padding: "88px 48px 128px", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden
        className="hero-backdrop"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          fontFamily: '"Inter Tight", system-ui',
          fontWeight: 700,
          fontSize: "clamp(180px, 26vw, 400px)",
          letterSpacing: "-0.06em",
          lineHeight: 0.8,
          color: "#0a0a0a",
          whiteSpace: "nowrap",
          top: 40,
          left: -40,
          userSelect: "none",
        }}
      >
        FISHY
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: 48,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          margin: "0 auto",
        }}
        className="hero-grid"
      >
        <div style={{ minWidth: 0 }}>
          <div
            className="hero-laurels"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 28,
              marginBottom: 36,
              flexWrap: "nowrap",
            }}
          >
            <LaurelAward top="App Store" bottom="Editors' Choice · 2026" />
            <LaurelAward top="Google Play" bottom="Essential App · 2026" />
          </div>

          <RotatingHeadline />

          <p
            style={{
              marginTop: 40,
              maxWidth: 520,
              color: "#a3a3a3",
              fontSize: 18,
              lineHeight: 1.55,
              fontFamily: '"Inter Tight", system-ui',
            }}
          >
            Press the Action Button on anything that feels fishy / a text, a
            screenshot, a social post. In three seconds, you&apos;ll know
            what&apos;s real, with sources.
          </p>

          <div id="download" style={{ marginTop: 44 }}>
            <Eyebrow style={{ marginBottom: 14 }}>Download for free</Eyebrow>
            <div
              className="store-row"
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </div>

        <div
          className="hero-phone"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <HeroPhoneStage>
            <IPhone15Pro width={380}>
              <AnimatedFactualCheck />
            </IPhone15Pro>
          </HeroPhoneStage>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const VisInstall = (
    <svg viewBox="0 0 220 140" width="100%" style={{ maxWidth: 260 }}>
      <rect x="76" y="14" width="68" height="118" rx="12" fill="none" stroke="#1d4ed8" strokeWidth="1.4" />
      <rect x="82" y="22" width="56" height="92" rx="3" fill="#0a0a0a" stroke="#1a1a1a" />
      <rect x="95" y="50" width="30" height="30" rx="7" fill="#FF8A3D" />
      <circle cx="110" cy="65" r="6" fill="#0a0a0a" />
      <circle cx="110" cy="65" r="3" fill="#FF8A3D" />
      <rect x="93" y="48" width="34" height="34" rx="9" fill="none" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <path d="M155 70 Q170 60 160 85" fill="none" stroke="#a3a3a3" strokeWidth="1.2" strokeDasharray="2 3" />
      <circle cx="160" cy="86" r="4" fill="#a3a3a3" />
      <rect x="30" y="60" width="40" height="20" rx="10" fill="none" stroke="#1a1a1a" />
      <text x="50" y="73" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#6b6b6b">5 MIN</text>
    </svg>
  );

  const VisDetect = (
    <svg viewBox="0 0 220 140" width="100%" style={{ maxWidth: 260 }}>
      <g transform="translate(60 10) rotate(-8 50 60)">
        <rect x="0" y="0" width="100" height="120" rx="14" fill="none" stroke="#1d4ed8" strokeWidth="1.4" />
        <rect x="6" y="8" width="88" height="100" rx="4" fill="#0a0a0a" />
        <rect x="14" y="22" width="66" height="18" rx="4" fill="#3a3a3c" />
        <rect x="18" y="28" width="50" height="2" rx="1" fill="#8e8e93" />
        <rect x="18" y="33" width="36" height="2" rx="1" fill="#8e8e93" />
        <rect x="20" y="54" width="60" height="16" rx="8" fill="#1d4ed8" />
        <text x="50" y="65" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#fff" letterSpacing="1">SCAM</text>
        <rect x="-3" y="30" width="3" height="16" rx="1" fill="#FF8A3D" />
      </g>
      <circle cx="56" cy="52" r="8" fill="none" stroke="#FF8A3D" strokeWidth="1.2" opacity="0.7" />
      <circle cx="56" cy="52" r="14" fill="none" stroke="#FF8A3D" strokeWidth="1" opacity="0.3" />
      <text x="190" y="75" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#1d4ed8" letterSpacing="1">3S</text>
      <circle cx="190" cy="75" r="16" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M190 59 A16 16 0 0 1 204 80" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
    </svg>
  );

  const VisLoopIn = (
    <svg viewBox="0 0 220 140" width="100%" style={{ maxWidth: 260 }}>
      <rect x="24" y="22" width="62" height="100" rx="10" fill="none" stroke="#1d4ed8" strokeWidth="1.4" />
      <rect x="30" y="30" width="50" height="82" rx="3" fill="#0a0a0a" />
      <circle cx="55" cy="71" r="14" fill="none" stroke="#a3a3a3" strokeWidth="1" />
      <text x="55" y="75" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#a3a3a3" fontWeight="600">D</text>
      <text x="55" y="102" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#6b6b6b" letterSpacing="1">MOM</text>
      <path d="M86 72 C 110 72, 110 52, 134 52" fill="none" stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="110" cy="62" r="3" fill="#FF8A3D" />
      <path d="M110 62 l-2 -5 l4 0 z" fill="#FF8A3D" />
      <rect x="134" y="12" width="62" height="100" rx="10" fill="none" stroke="#1d4ed8" strokeWidth="1.4" />
      <rect x="140" y="20" width="50" height="82" rx="3" fill="#0a0a0a" />
      <rect x="144" y="30" width="42" height="22" rx="4" fill="#1d4ed8" />
      <rect x="148" y="35" width="20" height="2" rx="1" fill="#fff" />
      <rect x="148" y="40" width="30" height="2" rx="1" fill="#fff" opacity="0.7" />
      <rect x="148" y="44" width="24" height="2" rx="1" fill="#fff" opacity="0.7" />
      <text x="165" y="98" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#6b6b6b" letterSpacing="1">YOU</text>
    </svg>
  );

  const steps = [
    { n: "01", verb: "Install", vis: VisInstall, body: "Takes five minutes. We walk them through it, even if they've never side-loaded anything." },
    { n: "02", verb: "Detect", vis: VisDetect, body: "One press of the Action Button. Screenshot or message / we read it in three seconds." },
    { n: "03", verb: "Loop in", vis: VisLoopIn, body: "Add yourself as a guardian. If something lands on the red line, your phone gets the alert too." },
  ];

  return (
    <section
      data-screen-label="03 How it works"
      style={{
        padding: "clamp(80px, 12vw, 160px) 48px",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            alignItems: "center",
          }}
          className="how-head"
        >
          <div>
            <ThreeSecondAnim />
            <div
              style={{
                marginTop: 20,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "#6b6b6b",
                textAlign: "center",
              }}
            >
              03 / HOW IT WORKS
            </div>
          </div>
          <div>
            <h2
              style={{
                fontFamily: '"Inter Tight", system-ui',
                fontWeight: 700,
                fontSize: "clamp(40px, 7vw, 120px)",
                lineHeight: 0.92,
                letterSpacing: "-0.05em",
                color: "#fff",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              Three seconds{" "}
              <span style={{ color: "#1d4ed8", fontStyle: "italic" }}>between</span>{" "}
              them
              <br />
              and the scam.
            </h2>
          </div>
        </div>

        <div
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #1a1a1a",
          }}
          className="how-grid"
        >
          {steps.map((s, i) => (
            <div
              key={s.verb}
              style={{
                padding: "44px 36px 48px",
                borderRight: i < 2 ? "1px solid #1a1a1a" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  color: "#1d4ed8",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  marginTop: 28,
                  marginBottom: 4,
                  height: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {s.vis}
              </div>
              <div
                style={{
                  marginTop: 20,
                  fontFamily: '"Inter Tight", system-ui',
                  fontWeight: 600,
                  fontSize: "clamp(28px, 3.6vw, 52px)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.95,
                  color: "#fff",
                }}
              >
                {s.verb}.
              </div>
              <p
                style={{
                  marginTop: 20,
                  color: "#a3a3a3",
                  fontSize: 15,
                  lineHeight: 1.6,
                  maxWidth: 320,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const quotes = [
    { text: "Once I got the hang of it, I use it almost every day. It's become second nature now.", name: "Diane Engelhardt", meta: "Mom · Chicago, IL", initials: "DE" },
    { text: "I set it up on my mom's phone in ten minutes. Last week it caught a gift-card scam I would have missed.", name: "Maya Reyes", meta: "Daughter · Denver, CO", initials: "MR" },
    { text: "Got a text that looked exactly like my bank. One press told me it was fake. Would've clicked it otherwise.", name: "Robert Chen", meta: "Retired teacher · Austin, TX", initials: "RC" },
    { text: "My dad almost wired money to a 'grandson in jail.' This app stopped him. I don't know what we'd do without it.", name: "Sarah Whitfield", meta: "Guardian · Portland, OR", initials: "SW" },
    { text: "I'm 71 and not great with phones. But this button? I can handle this. And it's saved me more than once.", name: "Harold Brennan", meta: "Grandfather · Phoenix, AZ", initials: "HB" },
    { text: "It caught a fake Facebook investment scheme my mom was about to join. That alone paid for itself forever.", name: "Nicole Alvarez", meta: "Daughter · Miami, FL", initials: "NA" },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, [quotes.length]);
  const q = quotes[idx];

  return (
    <section data-screen-label="04 Social proof" style={{ padding: "clamp(72px, 10vw, 120px) 48px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Eyebrow>04 / Why people install it</Eyebrow>
          <div style={{ display: "flex", gap: 6 }}>
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Quote ${i + 1}`}
                style={{
                  width: i === idx ? 24 : 8,
                  height: 4,
                  borderRadius: 2,
                  background: i === idx ? "#FF8A3D" : "#2a2a2a",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 280ms ease, background 280ms ease",
                }}
              />
            ))}
          </div>
        </div>

        <svg viewBox="0 0 100 80" width="80" height="64" style={{ display: "block", marginBottom: 8 }}>
          <path d="M20 10 Q10 10 10 25 Q10 35 20 35 Q30 35 30 25 Q30 35 20 50 Q15 55 10 58 L15 68 Q30 62 40 48 Q45 40 45 28 Q45 10 28 10 Q23 10 20 10 Z" fill="#FF8A3D" opacity="0.9" />
          <path d="M65 10 Q55 10 55 25 Q55 35 65 35 Q75 35 75 25 Q75 35 65 50 Q60 55 55 58 L60 68 Q75 62 85 48 Q90 40 90 28 Q90 10 73 10 Q68 10 65 10 Z" fill="#FF8A3D" opacity="0.9" />
        </svg>

        <div style={{ position: "relative", minHeight: 240 }}>
          <blockquote
            key={idx}
            style={{
              margin: 0,
              maxWidth: 1100,
              fontFamily: '"Inter Tight", system-ui',
              fontWeight: 400,
              fontSize: "clamp(22px, 3.3vw, 54px)",
              lineHeight: 1.18,
              letterSpacing: "-0.025em",
              color: "#d4d4d4",
              animation: "quoteFade 600ms cubic-bezier(.2,.9,.3,1) both",
            }}
          >
            {q.text}
          </blockquote>

          <div
            key={"who" + idx}
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              gap: 16,
              animation: "quoteFade 600ms cubic-bezier(.2,.9,.3,1) both",
              animationDelay: "80ms",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #2a2a2a, #141414)",
                border: "1px solid #2a2a2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: '"Inter Tight", system-ui',
                fontWeight: 600,
                fontSize: 14,
                color: "#d4d4d4",
              }}
            >
              {q.initials}
            </div>
            <div>
              <div style={{ color: "#e5e5e5", fontSize: 15, fontWeight: 500 }}>
                {q.name}
              </div>
              <div style={{ color: "#6b6b6b", fontSize: 13, marginTop: 2 }}>
                {q.meta}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  return (
    <section
      data-screen-label="04b Privacy"
      className="privacy-section"
      style={{
        background: "#000",
        borderTop: "1px solid #1a1a1a",
        padding: "clamp(80px, 12vw, 160px) clamp(20px, 5vw, 64px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 900,
          height: 900,
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle, rgba(29,78,216,0.22), rgba(29,78,216,0.04) 45%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 24,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 11,
            letterSpacing: "0.16em",
            color: "#a3a3a3",
            textTransform: "uppercase",
          }}
        >
          04b // Privacy
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: 56,
          }}
        >
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "clamp(14px, 1.6vw, 18px)",
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Our Commitment:
          </div>

          <div
            aria-hidden
            style={{
              width: 64,
              height: 2,
              background: "#1d4ed8",
              marginBottom: 44,
              boxShadow: "0 0 14px rgba(29,78,216,0.7)",
            }}
          />

          <h2
            style={{
              fontFamily: '"Inter Tight", system-ui',
              fontWeight: 700,
              fontSize: "clamp(44px, 9vw, 140px)",
              lineHeight: 0.9,
              letterSpacing: "-0.055em",
              color: "#fff",
              margin: 0,
              maxWidth: 1100,
              wordBreak: "break-word",
            }}
          >
            We{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 800,
                color: "#1d4ed8",
                textShadow: "0 0 40px rgba(29,78,216,0.55)",
              }}
            >
              never
            </span>{" "}
            store
            <br />
            your data.
          </h2>

          <p
            style={{
              marginTop: 44,
              maxWidth: 600,
              color: "#d4d4d8",
              fontSize: 17,
              lineHeight: 1.6,
            }}
          >
            Not your texts. Not your screenshots. Not your contacts. No account,
            no tracking, no training data. What you send gets checked. Then
            it&apos;s gone.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section
      data-screen-label="05 Final CTA"
      style={{
        padding: "clamp(100px, 14vw, 200px) 48px",
        borderTop: "1px solid #1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(255,138,61,0.09), transparent 70%)",
          filter: "blur(40px)",
          bottom: -200,
          right: -100,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <Eyebrow style={{ marginBottom: 40 }}>05 / The install that mattered</Eyebrow>
        <h2
          style={{
            fontFamily: '"Inter Tight", system-ui',
            fontWeight: 700,
            fontSize: "clamp(40px, 7.6vw, 132px)",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            color: "#fff",
            margin: 0,
            wordBreak: "break-word",
          }}
        >
          The text{" "}
          <span style={{ color: "#1d4ed8", fontStyle: "italic" }}>could</span>
          <br />
          arrive today.
        </h2>
        <p
          style={{
            marginTop: 36,
            maxWidth: 580,
            color: "#a3a3a3",
            fontSize: 17,
            lineHeight: 1.55,
          }}
        >
          Install SmellsFishy on the phone of someone you love. You&apos;ll both
          sleep better tonight.
        </p>
        <div
          className="store-row"
          style={{ marginTop: 56, display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1a1a1a", padding: "48px" }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image
            src="/assets/fishy-logo.png"
            alt=""
            width={24}
            height={24}
            style={{ width: 24, height: 24, borderRadius: 5, objectFit: "cover" }}
            unoptimized
          />
          <span style={{ color: "#a3a3a3", fontSize: 13 }}>
            © 2026 SmellsFishy / AI-generated. Verify facts independently.
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {["Privacy", "Terms", "Support", "Press"].map((x) => (
            <a
              key={x}
              href="#"
              className="footer-link"
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#6b6b6b",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              {x}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
