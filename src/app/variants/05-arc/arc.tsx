// Variant 05 — "Arc". Construction copied from Arc Browser's marketing pages:
// a warm gradient wash that runs the whole document and bleeds through every
// section seam, oversized rounded display type with a chip set inline in the
// headline, enormous corner radii on every container, saturated full-colour
// islands floating on the wash, one idea per screenful, and soft springy
// arrival motion. Playful-premium, no cartoon.
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

const display = "var(--font-display), system-ui, sans-serif";

const C = {
  page: "#FBF7EC",
  ink: "#0A1F45",
  ink2: "#5C6979",
  navy: "#081433",
  deep: "#0D266B",
  action: "#1C5CF7",
  lum: "#48A7F8",
  cream: "#F5F0E1",
  coral: "#FF6B5E",
  danger: "#C81E1E",
  onDark: "#A8C1F7",
};

const BETA_MAILTO = "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";

const CSS = `
.arc-root { position: relative; background: ${C.page}; color: ${C.ink}; overflow-x: clip; }
.arc-wash {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    radial-gradient(75rem 50rem at 92% 1%,  rgba(255,107,94,0.62), transparent 64%),
    radial-gradient(62rem 42rem at -4% 6%,  rgba(255,183,124,0.68), transparent 66%),
    radial-gradient(58rem 40rem at 50% 13%, rgba(255,140,110,0.26), transparent 62%),
    radial-gradient(64rem 46rem at 88% 20%, rgba(72,167,248,0.50), transparent 64%),
    radial-gradient(58rem 44rem at 2% 31%,  rgba(28,92,247,0.30), transparent 66%),
    radial-gradient(66rem 48rem at 96% 45%, rgba(255,107,94,0.40), transparent 64%),
    radial-gradient(60rem 44rem at -2% 57%, rgba(72,167,248,0.44), transparent 64%),
    radial-gradient(64rem 46rem at 92% 70%, rgba(255,183,124,0.58), transparent 64%),
    radial-gradient(66rem 48rem at 4% 83%,  rgba(28,92,247,0.28), transparent 66%),
    radial-gradient(70rem 46rem at 78% 96%, rgba(72,167,248,0.36), transparent 66%);
}
.arc-shell { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; padding: 0 clamp(18px, 4vw, 40px); }
.arc-link-soft { transition: color 220ms ease, opacity 220ms ease; }
.arc-link-soft:hover { color: ${C.coral}; }
.arc-pill { transition: transform 300ms cubic-bezier(.2,.9,.25,1.05), box-shadow 300ms ease; }
.arc-pill:hover { transform: translateY(-2px) scale(1.015); }
.arc-card { transition: transform 420ms cubic-bezier(.2,.9,.25,1.05), box-shadow 420ms ease; }
.arc-card:hover { transform: translateY(-6px); box-shadow: 0 34px 60px rgba(10,31,69,0.16); }
.arc-tile { transition: transform 320ms cubic-bezier(.2,.9,.25,1.05); }
.arc-tile:hover { transform: translateY(-4px) rotate(-3deg); }

.arc-hero-grid { display: grid; grid-template-columns: 312px minmax(0, 1fr); gap: 0; align-items: center; }
.arc-verdict { margin-left: -58px; }
.arc-3 { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px; }
.arc-dive { display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr); gap: 44px; align-items: center; }
.arc-promises { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 28px; }
.arc-stats { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; }
.arc-nums { display: flex; flex-wrap: wrap; gap: 14px 34px; }

@media (max-width: 1000px) {
  .arc-hero-grid { grid-template-columns: 1fr; justify-items: center; gap: 22px; }
  .arc-verdict { margin-left: 0; max-width: 440px; }
  .arc-dive { grid-template-columns: 1fr; gap: 30px; }
}
@media (max-width: 900px) {
  .arc-navlinks { display: none !important; }
  .arc-3 { grid-template-columns: 1fr; }
  .arc-promises { grid-template-columns: 1fr; gap: 20px; }
  .arc-stats { grid-template-columns: 1fr; }
}
@media (max-width: 900px) and (min-width: 561px) {
  .arc-step { display: grid; grid-template-columns: 96px minmax(0,1fr); column-gap: 26px; align-items: start; }
  .arc-step-n { grid-row: 1 / span 2; }
  .arc-step h3 { margin-top: 0 !important; }
  .arc-stat { display: flex; align-items: baseline; gap: 22px; }
  .arc-stat-label { margin-top: 0 !important; }
}
@media (max-width: 560px) {
  .arc-chipline { display: block; }
  .arc-navcta { font-size: 14px !important; padding: 9px 15px !important; }
  .arc-navshell { padding-left: 12px !important; }
}
@media (prefers-reduced-motion: reduce) {
  .arc-pill:hover, .arc-card:hover, .arc-tile:hover { transform: none; }
}
`;

/* ---------------------------------------------------------------- pieces */

function Wordmark({ size = 19, light = false }: { size?: number; light?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Image
        src="/assets/fishy-logo.png"
        alt=""
        width={32}
        height={32}
        unoptimized
        style={{ width: size * 1.68, height: size * 1.68, borderRadius: size * 0.5, objectFit: "cover" }}
      />
      <span style={{ fontFamily: display, fontWeight: 600, fontSize: size, letterSpacing: "0.005em" }}>
        <span style={{ color: light ? C.cream : C.ink }}>Smells</span>{" "}
        <span style={{ color: C.coral }}>Phishy</span>
      </span>
    </span>
  );
}

function Chip({
  children,
  bg,
  color,
  size = 13,
}: {
  children: React.ReactNode;
  bg: string;
  color: string;
  size?: number;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        background: bg,
        color,
        borderRadius: 999,
        padding: `${Math.round(size * 0.46)}px ${Math.round(size * 1.05)}px`,
        fontSize: size,
        fontWeight: 600,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function CoralPill({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="arc-pill"
      style={{
        display: "inline-block",
        background: C.coral,
        color: C.navy,
        fontFamily: display,
        fontWeight: 600,
        fontSize: 17,
        padding: "16px 30px",
        borderRadius: 999,
        textDecoration: "none",
        boxShadow: "0 16px 34px rgba(255,107,94,0.38)",
      }}
    >
      {children}
    </a>
  );
}

function GhostPill({ children, href, light = false }: { children: React.ReactNode; href: string; light?: boolean }) {
  return (
    <a
      href={href}
      className="arc-pill"
      style={{
        display: "inline-block",
        border: `1.5px solid ${light ? "rgba(245,240,225,0.35)" : "rgba(10,31,69,0.18)"}`,
        color: light ? C.cream : C.ink,
        fontFamily: display,
        fontWeight: 600,
        fontSize: 17,
        padding: "15px 28px",
        borderRadius: 999,
        textDecoration: "none",
        background: light ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      {children}
    </a>
  );
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div
      style={{
        fontFamily: display,
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: "0.02em",
        color: light ? C.lum : C.coral,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function BigHead({
  children,
  light = false,
  max = 62,
  align = "left",
}: {
  children: React.ReactNode;
  light?: boolean;
  max?: number;
  align?: "left" | "center";
}) {
  return (
    <h2
      style={{
        fontFamily: display,
        fontWeight: 600,
        fontSize: `clamp(30px, 5.4vw, ${max}px)`,
        lineHeight: 0.98,
        letterSpacing: "-0.018em",
        color: light ? C.cream : C.ink,
        margin: 0,
        textAlign: align,
      }}
    >
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------- nav */

function Nav() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50, padding: "14px 0 0" }}>
      <div className="arc-shell">
        <nav
          className="arc-navshell"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            background: "rgba(255,252,246,0.72)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
            border: "1px solid rgba(10,31,69,0.09)",
            borderRadius: 999,
            padding: "10px 12px 10px 18px",
            boxShadow: "0 14px 40px rgba(10,31,69,0.10)",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Wordmark size={18} />
          </Link>
          <div className="arc-navlinks" style={{ display: "flex", gap: 28 }}>
            {[
              ["One press", "#press"],
              ["Deep Dive", "#dive"],
              ["Privacy", "#privacy"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                className="arc-link-soft"
                style={{ color: C.ink2, textDecoration: "none", fontSize: 15, fontWeight: 500 }}
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href={BETA_MAILTO}
            className="arc-pill arc-navcta"
            style={{
              background: C.navy,
              color: C.cream,
              fontFamily: display,
              fontWeight: 600,
              fontSize: 15,
              padding: "10px 20px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Join the beta
          </a>
        </nav>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ hero panel */

function PhoneMessage() {
  return (
    <div
      style={{
        width: 292,
        borderRadius: 44,
        padding: 9,
        background: "#050a17",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "0 44px 90px rgba(3,8,24,0.55)",
        flexShrink: 0,
      }}
    >
      <div style={{ borderRadius: 36, overflow: "hidden", background: "#EFF2F8" }}>
        <div style={{ position: "relative", background: "#fff", padding: "12px 16px 12px" }}>
          <div
            aria-hidden
            style={{
              width: 84,
              height: 22,
              borderRadius: 999,
              background: "#050a17",
              margin: "0 auto 12px",
            }}
          />
          <div style={{ fontSize: 12, fontWeight: 600, color: C.ink2, textAlign: "center" }}>Unknown number</div>
        </div>
        <div style={{ padding: "16px 14px 30px", minHeight: 320 }}>
          <div
            style={{
              background: "#E4E8F0",
              color: C.ink,
              borderRadius: "20px 20px 20px 6px",
              padding: "13px 15px",
              fontSize: 13.5,
              lineHeight: 1.5,
              maxWidth: 232,
            }}
          >
            Your parcel is on hold. Confirm the delivery address in 24 hours or it goes back to the sender:
            <span style={{ color: C.action, wordBreak: "break-all" }}> parcel-redelivery-fee.co/x9d</span>
          </div>
          <div style={{ marginTop: 10, fontSize: 11, color: C.ink2 }}>Today 9:14 AM</div>

          <div
            style={{
              marginTop: 26,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: C.navy,
              borderRadius: 18,
              padding: "12px 14px",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 26,
                height: 26,
                borderRadius: 9,
                background: "rgba(255,107,94,0.18)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ width: 5, height: 13, borderRadius: 999, background: C.coral, display: "block" }} />
            </span>
            <span style={{ color: C.cream, fontSize: 12.5, fontWeight: 600, fontFamily: display }}>
              Action Button pressed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerdictCard() {
  return (
    <div
      className="arc-verdict"
      style={{
        background: "#FFFDF8",
        borderRadius: 34,
        padding: "26px 26px 22px",
        boxShadow: "0 40px 80px rgba(3,8,24,0.42)",
        border: "1px solid rgba(255,255,255,0.7)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          aria-hidden
          style={{
            width: 42,
            height: 42,
            borderRadius: 15,
            background: `linear-gradient(150deg, ${C.coral}, ${C.danger})`,
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: display,
            fontWeight: 700,
            fontSize: 21,
            flexShrink: 0,
          }}
        >
          !
        </span>
        <div>
          <div style={{ fontFamily: display, fontWeight: 600, fontSize: 25, color: C.danger, lineHeight: 1.05 }}>
            Showed warning signs
          </div>
          <div style={{ fontSize: 13.5, color: C.ink2, marginTop: 3 }}>Worth a second look before you tap.</div>
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(10,31,69,0.10)", margin: "20px 0 18px" }} />

      <div style={{ fontFamily: display, fontWeight: 600, fontSize: 14, color: C.ink, marginBottom: 10 }}>
        What stood out
      </div>
      {["A 24 hour deadline on something you did not order.", "A link, instead of the carrier's own app."].map((t) => (
        <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 9 }}>
          <span
            aria-hidden
            style={{ width: 8, height: 8, borderRadius: 999, background: C.coral, marginTop: 6, flexShrink: 0 }}
          />
          <span style={{ fontSize: 14, lineHeight: 1.45, color: C.ink }}>{t}</span>
        </div>
      ))}

      <div
        style={{
          marginTop: 16,
          background: "#EEF3FE",
          borderRadius: 20,
          padding: "14px 16px",
          display: "flex",
          gap: 11,
          alignItems: "flex-start",
        }}
      >
        <span
          aria-hidden
          style={{
            width: 22,
            height: 22,
            borderRadius: 999,
            background: C.action,
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          1
        </span>
        <div>
          <div style={{ fontFamily: display, fontWeight: 600, fontSize: 14, color: C.ink }}>What to do next</div>
          <div style={{ fontSize: 13.5, color: C.ink2, marginTop: 3, lineHeight: 1.45 }}>
            Open the carrier&apos;s official app and check the parcel there.
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header style={{ position: "relative", zIndex: 1, padding: "clamp(44px, 8vw, 92px) 0 clamp(10px, 3vw, 34px)" }}>
      <div className="arc-shell" style={{ textAlign: "center" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 26 }}>
            <Chip bg="rgba(10,31,69,0.06)" color={C.ink}>
              iPhone private beta
            </Chip>
            <Chip bg="rgba(10,31,69,0.06)" color={C.ink}>
              No account required
            </Chip>
            <Chip bg="rgba(10,31,69,0.06)" color={C.ink}>
              History stays on the phone
            </Chip>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1
            style={{
              fontFamily: display,
              fontWeight: 600,
              fontSize: "clamp(46px, 9.4vw, 122px)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: C.ink,
              margin: 0,
            }}
          >
            Feels off?
            <br />
            <span className="arc-chipline" style={{ display: "inline-block", marginTop: "0.14em" }}>
              <span
                style={{
                  display: "inline-block",
                  background: C.coral,
                  color: C.navy,
                  borderRadius: "0.28em",
                  padding: "0.02em 0.2em 0.1em",
                  transform: "rotate(-1.4deg)",
                  boxShadow: "0 18px 44px rgba(255,107,94,0.36)",
                }}
              >
                Press once.
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={130}>
          <p
            style={{
              maxWidth: 560,
              margin: "clamp(24px, 3.4vw, 38px) auto 0",
              fontSize: "clamp(18px, 1.6vw, 22px)",
              lineHeight: 1.55,
              color: C.ink2,
            }}
          >
            About eight seconds later you know what stood out in that message, and what to do next.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 32,
            }}
          >
            <CoralPill href={BETA_MAILTO}>Request a beta invite</CoralPill>
            <GhostPill href="#press">See one press</GhostPill>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

function HeroPanel() {
  return (
    <div className="arc-shell" style={{ paddingTop: "clamp(34px, 5vw, 60px)" }}>
      <Reveal delay={120} y={44}>
        <div
          style={{
            position: "relative",
            background: `linear-gradient(155deg, ${C.deep} 0%, ${C.navy} 62%, #050d24 100%)`,
            borderRadius: "clamp(30px, 4vw, 54px)",
            padding: "clamp(34px, 5.4vw, 76px) clamp(22px, 5vw, 66px) clamp(46px, 6vw, 86px)",
            overflow: "hidden",
            boxShadow: "0 50px 100px rgba(8,20,51,0.34)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(30rem 22rem at 12% 8%, rgba(72,167,248,0.34), transparent 66%), radial-gradient(28rem 22rem at 92% 92%, rgba(255,107,94,0.30), transparent 66%)",
            }}
          />
          <div className="arc-hero-grid" style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <PhoneMessage />
              <div style={{ position: "absolute", left: 18, bottom: -18, zIndex: 3 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: C.cream,
                    color: C.navy,
                    fontFamily: display,
                    fontWeight: 600,
                    fontSize: 14,
                    padding: "9px 16px",
                    borderRadius: 999,
                    boxShadow: "0 18px 40px rgba(3,8,24,0.4)",
                    transform: "rotate(-3deg)",
                  }}
                >
                  about 8 seconds
                </span>
              </div>
            </div>
            <VerdictCard />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* --------------------------------------------------------- channel strip */

const CHANNELS = [
  ["imessage", "iMessage"],
  ["whatsapp", "WhatsApp"],
  ["instagram", "Instagram"],
  ["facebook", "Facebook"],
  ["messenger", "Messenger"],
  ["telegram", "Telegram"],
  ["reddit", "Reddit"],
  ["safari", "Safari"],
];

function Channels() {
  return (
    <section className="arc-shell" style={{ padding: "clamp(72px, 10vw, 130px) clamp(18px, 4vw, 40px) 0" }}>
      <Reveal>
        <BigHead align="center" max={68}>
          If a screen can lie to you,
          <br />
          you can check it.
        </BigHead>
      </Reveal>
      <Reveal delay={80}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            marginTop: 44,
          }}
        >
          {CHANNELS.map(([slug, label], i) => (
            <span
              key={slug}
              className="arc-tile"
              title={label}
              style={{
                width: 74,
                height: 74,
                borderRadius: 24,
                background: "rgba(255,255,255,0.66)",
                border: "1px solid rgba(10,31,69,0.08)",
                boxShadow: "0 10px 26px rgba(10,31,69,0.08)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 31,
                  height: 31,
                  display: "block",
                  background: C.ink,
                  opacity: 0.72,
                  WebkitMaskImage: `url(/logos/${slug}.svg)`,
                  maskImage: `url(/logos/${slug}.svg)`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                {label}
              </span>
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={140}>
        <p
          style={{
            textAlign: "center",
            color: C.ink2,
            fontSize: 16,
            marginTop: 26,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Texts, emails, DMs, listings, pop-ups. Screenshot it, snap it, or paste it in.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------- one press */

const STEPS = [
  {
    n: "01",
    tint: "#FFFDF8",
    accent: C.coral,
    title: "Grab it",
    body: "Screenshot the message, snap a photo of a screen, or paste the text straight in.",
  },
  {
    n: "02",
    tint: "#EEF3FE",
    accent: C.action,
    title: "One press",
    body: "The Action Button or a Back Tap starts the check. Nothing is sent until you say so.",
  },
  {
    n: "03",
    tint: "#FFEFEC",
    accent: C.danger,
    title: "A straight answer",
    body: "A hedged verdict, the specific things that stood out, and the one move to make next.",
  },
];

function OnePress() {
  return (
    <section id="press" className="arc-shell" style={{ padding: "clamp(84px, 11vw, 150px) clamp(18px, 4vw, 40px) 0" }}>
      <Reveal>
        <Kicker>How it goes</Kicker>
        <BigHead max={58}>
          One press,
          <br />
          start to finish.
        </BigHead>
      </Reveal>
      <div className="arc-3" style={{ marginTop: 46 }}>
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <div
              className="arc-card arc-step"
              style={{
                background: s.tint,
                borderRadius: 34,
                padding: "clamp(28px, 3.4vw, 44px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 20px 44px rgba(10,31,69,0.10)",
                height: "100%",
              }}
            >
              <div
                className="arc-step-n"
                style={{
                  fontFamily: display,
                  fontWeight: 600,
                  fontSize: 70,
                  lineHeight: 0.85,
                  color: "transparent",
                  WebkitTextStroke: `1.6px ${s.accent}`,
                  letterSpacing: "-0.03em",
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: display,
                  fontWeight: 600,
                  fontSize: 30,
                  margin: "26px 0 12px",
                  color: C.ink,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p style={{ margin: 0, color: C.ink2, fontSize: 16.5, lineHeight: 1.62 }}>{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- deep dive */

const SOURCE_ROWS = [
  ["Public news reporting", "read"],
  ["Consumer protection notice", "read"],
  ["The company's own page", "read"],
];

function DeepDive() {
  return (
    <section id="dive" className="arc-shell" style={{ padding: "clamp(84px, 11vw, 150px) clamp(18px, 4vw, 40px) 0" }}>
      <Reveal y={40}>
        <div
          style={{
            position: "relative",
            borderRadius: "clamp(30px, 4vw, 54px)",
            background: `linear-gradient(140deg, ${C.deep}, ${C.navy} 70%, #050d24)`,
            padding: "clamp(32px, 5vw, 68px)",
            overflow: "hidden",
            boxShadow: "0 50px 100px rgba(8,20,51,0.30)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(34rem 26rem at 96% 6%, rgba(72,167,248,0.36), transparent 64%), radial-gradient(28rem 22rem at -6% 96%, rgba(255,107,94,0.26), transparent 66%)",
            }}
          />
          <div className="arc-dive" style={{ position: "relative" }}>
            <div>
              <Kicker light>Deep Dive</Kicker>
              <BigHead light max={56}>
                Still not sure?
                <br />
                Dig further.
              </BigHead>
              <p style={{ color: C.onDark, fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: 400 }}>
                One tap checks the claim against current public reporting, and shows you every source it read.
              </p>
              <div style={{ marginTop: 30 }}>
                <GhostPill href={BETA_MAILTO} light>
                  Try it in the beta
                </GhostPill>
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 34,
                padding: "clamp(20px, 2.4vw, 30px)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
                <span style={{ fontFamily: display, fontWeight: 600, fontSize: 17, color: C.cream }}>
                  Sources it read
                </span>
                <Chip bg="rgba(72,167,248,0.20)" color={C.lum} size={12}>
                  linked
                </Chip>
              </div>
              <div style={{ marginTop: 18 }}>
                {SOURCE_ROWS.map(([label, tag], i) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 20,
                      padding: "15px 17px",
                      marginTop: i === 0 ? 0 : 10,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 11,
                        background: `linear-gradient(140deg, ${C.lum}, ${C.action})`,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ flex: 1, color: C.cream, fontSize: 15 }}>{label}</span>
                    <span style={{ color: C.onDark, fontSize: 12.5, fontWeight: 600 }}>{tag}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: C.onDark, fontSize: 13, lineHeight: 1.55, margin: "18px 2px 0" }}>
                Every source is a real link you can open yourself.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------- stats */

// Every figure and its wording is fixed by VERIFIED_CLAIMS.md.
const STATS: [string, string][] = [
  ["$20.9B", "reported lost to internet crime in 2025"],
  ["1,008,597", "complaints filed with the FBI in one year"],
  ["$7.75B", "of it reported by people over 60"],
];

function Stakes() {
  return (
    <section className="arc-shell" style={{ padding: "clamp(84px, 11vw, 150px) clamp(18px, 4vw, 40px) 0" }}>
      <Reveal>
        <Kicker>Why it exists</Kicker>
        <BigHead max={58}>Not a niche problem.</BigHead>
      </Reveal>
      <div className="arc-stats" style={{ marginTop: 44 }}>
        {STATS.map(([n, label], i) => (
          <Reveal key={label} delay={i * 90}>
            <div
              className="arc-card arc-stat"
              style={{
                background: "rgba(255,255,255,0.62)",
                border: "1px solid rgba(10,31,69,0.08)",
                borderRadius: 34,
                padding: "clamp(28px, 3.4vw, 42px)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: display,
                  fontWeight: 600,
                  fontSize: "clamp(40px, 5vw, 62px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  color: C.coral,
                }}
              >
                {n}
              </div>
              <div className="arc-stat-label" style={{ marginTop: 14, color: C.ink2, fontSize: 16, lineHeight: 1.5 }}>
                {label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <p style={{ marginTop: 22, fontSize: 13.5, color: C.ink2 }}>
          Source:{" "}
          <a
            href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="arc-link-soft"
            style={{ color: C.ink, textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            FBI IC3 2025 Internet Crime Report
          </a>
          . Reported figures only. The real totals are higher, because most scams never get reported.
        </p>
      </Reveal>
    </section>
  );
}

/* --------------------------------------------------------------- privacy */

const PROMISES: [string, string][] = [
  ["You approve every send", "The check runs on our server and Google's Gemini. Content is used for that check, then not kept."],
  ["History stays on the phone", "Results live on your iPhone, protected by iOS. Delete one, or delete all of them."],
  [
    "No account required",
    "An anonymous device key stops abuse. Signing in with Apple or Google is optional; do it and the provider gives us a first name and an email address. No ads. Nothing sold.",
  ],
];

const NUMS: [string, string][] = [
  ["10", "free checks a day"],
  ["0", "accounts required"],
  ["0", "ads or data sold"],
  ["100%", "of saved checks on your iPhone"],
];

function Privacy() {
  return (
    <section id="privacy" className="arc-shell" style={{ padding: "clamp(84px, 11vw, 150px) clamp(18px, 4vw, 40px) 0" }}>
      <Reveal y={40}>
        <div
          style={{
            background: "rgba(255,253,248,0.82)",
            border: "1px solid rgba(255,255,255,0.9)",
            borderRadius: "clamp(30px, 4vw, 54px)",
            padding: "clamp(32px, 5vw, 68px)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 40px 90px rgba(10,31,69,0.12)",
          }}
        >
          <Kicker>Privacy</Kicker>
          <BigHead max={58}>Suspicious of us too? Good.</BigHead>

          <div className="arc-promises" style={{ marginTop: 44 }}>
            {PROMISES.map(([t, b], i) => (
              <Reveal key={t} delay={i * 80}>
                <div>
                  <div
                    aria-hidden
                    style={{ width: 30, height: 4, borderRadius: 999, background: C.coral, marginBottom: 16 }}
                  />
                  <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: 21, margin: "0 0 9px", color: C.ink }}>
                    {t}
                  </h3>
                  <p style={{ margin: 0, color: C.ink2, fontSize: 15.5, lineHeight: 1.6 }}>{b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div
            className="arc-nums"
            style={{
              marginTop: 44,
              paddingTop: 30,
              borderTop: "1px solid rgba(10,31,69,0.10)",
              alignItems: "baseline",
            }}
          >
            {NUMS.map(([n, l]) => (
              <span key={l} style={{ display: "inline-flex", alignItems: "baseline", gap: 9 }}>
                <span style={{ fontFamily: display, fontWeight: 600, fontSize: 38, color: C.action, lineHeight: 1 }}>
                  {n}
                </span>
                <span style={{ color: C.ink2, fontSize: 14.5 }}>{l}</span>
              </span>
            ))}
          </div>

          <Link
            href="/privacy"
            className="arc-link-soft"
            style={{
              display: "inline-block",
              marginTop: 30,
              color: C.action,
              fontFamily: display,
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            Read the full privacy policy →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------- cta */

function FinalCTA() {
  return (
    <section
      className="arc-shell"
      style={{ padding: "clamp(84px, 11vw, 150px) clamp(18px, 4vw, 40px) clamp(26px, 4vw, 44px)" }}
    >
      <Reveal y={40}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "clamp(30px, 4vw, 54px)",
            background: `linear-gradient(142deg, #FFC7A6 0%, ${C.coral} 52%, #F0574F 100%)`,
            padding: "clamp(52px, 9vw, 128px) clamp(24px, 5vw, 60px) clamp(56px, 9vw, 130px)",
            textAlign: "center",
            boxShadow: "0 50px 100px rgba(255,107,94,0.30)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(30rem 22rem at 8% 4%, rgba(255,255,255,0.42), transparent 62%), radial-gradient(28rem 22rem at 96% 96%, rgba(28,92,247,0.24), transparent 64%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: display,
                fontWeight: 600,
                fontSize: "clamp(38px, 7.2vw, 92px)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: C.navy,
                margin: 0,
              }}
            >
              The beta is
              <br />
              small on purpose.
            </h2>
            <p
              style={{
                maxWidth: 460,
                margin: "26px auto 0",
                fontSize: 18,
                lineHeight: 1.55,
                color: "rgba(8,20,51,0.72)",
              }}
            >
              Ask for an invite and we will save you a spot.
            </p>
            <a
              href={BETA_MAILTO}
              className="arc-pill"
              style={{
                display: "inline-block",
                marginTop: 36,
                background: C.navy,
                color: C.cream,
                fontFamily: display,
                fontWeight: 600,
                fontSize: 17,
                padding: "16px 32px",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 18px 40px rgba(8,20,51,0.28)",
              }}
            >
              Request a beta invite
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------------- footer */

function Foot() {
  return (
    <div className="arc-shell" style={{ paddingBottom: 22 }}>
      <footer
        style={{
          background: C.navy,
          color: C.onDark,
          borderRadius: "clamp(28px, 3.4vw, 44px)",
          padding: "clamp(28px, 4vw, 46px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Wordmark size={17} light />
          <div style={{ display: "flex", gap: 26, fontSize: 15 }}>
            <Link href="/privacy" className="arc-link-soft" style={{ color: C.onDark, textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <a href={BETA_MAILTO} className="arc-link-soft" style={{ color: C.onDark, textDecoration: "none" }}>
              Contact
            </a>
          </div>
        </div>
        <p style={{ margin: "26px 0 0", fontSize: 13, lineHeight: 1.65, color: "rgba(168,193,247,0.72)", maxWidth: 720 }}>
          Smells Phishy points out warning signs. It cannot guarantee that content is safe or fraudulent. Always verify
          important requests through an official source. © 2026 Smells Phishy.
        </p>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ page */

export default function ArcLanding() {
  return (
    <div className="arc-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="arc-wash" aria-hidden />
      <Nav />
      <Hero />
      <HeroPanel />
      <Channels />
      <OnePress />
      <DeepDive />
      <Stakes />
      <Privacy />
      <FinalCTA />
      <Foot />
    </div>
  );
}
