// The 2026-08-30 rebuild: the site now carries the app's own "waterline"
// identity (deep navy water on top, light surface below, cream Fredoka
// display type, coral as the second accent) and only makes claims that are
// true of the shipping beta. No fabricated awards, no store badges until
// the app is actually in a store, verdict language stays hedged.
import Image from "next/image";
import Link from "next/link";

const C = {
  heroTop: "#081433",
  heroMid: "#0D266B",
  accent: "#1C5CF7",
  accentSoft: "#E9F0FD",
  cream: "#F5F0E1",
  coral: "#FF6B5E",
  ink: "#0A1F45",
  inkSecondary: "#5C6979",
  surface: "#EFF2F8",
  card: "#FFFFFF",
  danger: "#C81E1E",
  onHeroSecondary: "#A8C1F7",
};

const display = "var(--font-display), system-ui, sans-serif";

const BETA_MAILTO =
  "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";

function CoralDash() {
  return (
    <div
      aria-hidden
      style={{
        width: 34,
        height: 4,
        borderRadius: 999,
        background: C.coral,
        margin: "18px 0 0",
      }}
    />
  );
}

function Bubbles() {
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "absolute", right: "-6%", top: "-18%", width: 420, height: 420, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", left: "4%", bottom: "8%", width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", right: "16%", bottom: "-10%", width: 240, height: 240, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.10)" }} />
      <div style={{ position: "absolute", left: "30%", top: "22%", width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
    </div>
  );
}

export function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "16px clamp(20px, 5vw, 48px)",
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(8,20,51,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <Image
          src="/assets/fishy-logo.png"
          alt=""
          width={30}
          height={30}
          style={{ width: 30, height: 30, borderRadius: 7, objectFit: "cover" }}
          unoptimized
        />
        <span style={{ fontFamily: display, fontWeight: 600, fontSize: 18, letterSpacing: "0.01em" }}>
          <span style={{ color: C.cream }}>Smells</span>{" "}
          <span style={{ color: C.coral }}>Phishy</span>
        </span>
      </Link>
      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 26 }}>
        {[
          ["How it works", "#how-it-works"],
          ["Siri", "#siri"],
          ["Privacy", "#privacy"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="nav-link"
            style={{
              color: C.onHeroSecondary,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              transition: "color 200ms ease",
            }}
          >
            {label}
          </a>
        ))}
      </div>
      <a
        href={BETA_MAILTO}
        className="nav-cta"
        style={{
          background: C.coral,
          color: C.heroTop,
          padding: "9px 18px",
          borderRadius: 999,
          fontFamily: display,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          transition: "transform 200ms ease, box-shadow 200ms ease",
        }}
      >
        Join the beta
      </a>
    </nav>
  );
}

// A truthful miniature of the app's actual result screen.
function PhoneMock() {
  return (
    <div
      style={{
        width: 300,
        borderRadius: 42,
        padding: 10,
        background: "#0a0f1e",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
        flexShrink: 0,
      }}
    >
      <div style={{ borderRadius: 34, overflow: "hidden", background: C.surface }}>
        <div
          style={{
            background: C.heroTop,
            color: C.cream,
            fontFamily: display,
            fontWeight: 600,
            fontSize: 13,
            textAlign: "center",
            padding: "16px 0 10px",
          }}
        >
          Check Result
        </div>
        <div style={{ padding: 12 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #FBEAEA, #fff)",
              border: "1px solid rgba(200,30,30,0.18)",
              borderRadius: 16,
              padding: 12,
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: C.danger,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
                flexShrink: 0,
              }}
              aria-hidden
            >
              !
            </div>
            <div>
              <div style={{ fontFamily: display, fontWeight: 700, color: C.danger, fontSize: 16, lineHeight: 1.1 }}>
                Looks like a scam
              </div>
              <div style={{ color: C.inkSecondary, fontSize: 11, marginTop: 4, lineHeight: 1.35 }}>
                This has several common scam warning signs.
              </div>
            </div>
          </div>
          <div style={{ background: C.card, borderRadius: 14, padding: 12, marginTop: 10 }}>
            <div style={{ fontFamily: display, fontWeight: 600, color: C.ink, fontSize: 12, marginBottom: 8 }}>
              What stood out
            </div>
            {["Urgency around an unexpected delivery", "A link instead of the official app"].map((t) => (
              <div key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.danger, marginTop: 4, flexShrink: 0 }} />
                <div style={{ color: C.ink, fontSize: 11, lineHeight: 1.4 }}>{t}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.card, borderRadius: 14, padding: 12, marginTop: 10 }}>
            <div style={{ fontFamily: display, fontWeight: 600, color: C.ink, fontSize: 12, marginBottom: 8 }}>
              What to do next
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: C.accent, color: "#fff", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>1</div>
              <div style={{ color: C.ink, fontSize: 11, lineHeight: 1.4 }}>Open the carrier&apos;s official app directly.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header
      style={{
        position: "relative",
        background: `linear-gradient(180deg, ${C.heroTop}, ${C.heroMid})`,
        padding: "clamp(56px, 9vw, 110px) clamp(20px, 5vw, 48px) clamp(70px, 9vw, 120px)",
        overflow: "hidden",
      }}
    >
      <Bubbles />
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              border: `1px solid rgba(255,255,255,0.25)`,
              color: C.onHeroSecondary,
              borderRadius: 999,
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            iPhone · private beta
          </div>
          <h1
            style={{
              fontFamily: display,
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 68px)",
              lineHeight: 1.05,
              color: C.cream,
              margin: "22px 0 0",
              letterSpacing: "0.005em",
            }}
          >
            Check something
            <br />
            suspicious.
          </h1>
          <CoralDash />
          <p style={{ marginTop: 22, maxWidth: 480, color: C.onHeroSecondary, fontSize: 18, lineHeight: 1.6 }}>
            Screenshot a strange text, snap a photo, or paste a message. Smells
            Phishy points out scam warning signs in seconds, in plain English,
            with a clear next step.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href={BETA_MAILTO}
              style={{
                background: C.coral,
                color: C.heroTop,
                fontFamily: display,
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 26px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              Request a beta invite
            </a>
            <a
              href="#privacy"
              style={{
                color: C.cream,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                borderBottom: `1px solid rgba(245,240,225,0.4)`,
                paddingBottom: 2,
              }}
            >
              Read the privacy promise
            </a>
          </div>
        </div>
        <div className="hero-phone" style={{ display: "flex", justifyContent: "center" }}>
          <PhoneMock />
        </div>
      </div>
    </header>
  );
}

// Real, cited numbers about the problem — never invented numbers about us.
export function StakesBand() {
  const stats = [
    ["$20.9B", "lost to internet crime in 2025"],
    ["1,008,597", "complaints to the FBI in one year"],
    ["$7.75B", "taken from people 60 and older"],
  ];
  return (
    <section
      aria-label="Scam statistics"
      style={{
        background: C.heroMid,
        color: C.cream,
        padding: "clamp(56px, 8vw, 90px) clamp(20px, 5vw, 48px) clamp(88px, 10vw, 130px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Bubbles />
      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeading dark kicker="Why this app exists" title="Scams aren't a niche problem." />
        <div
          className="card-grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 18, marginTop: 40 }}
        >
          {stats.map(([n, label]) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 22,
                padding: "26px 24px",
              }}
            >
              <div style={{ fontFamily: display, fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 46px)", color: C.coral, lineHeight: 1 }}>
                {n}
              </div>
              <div style={{ marginTop: 10, color: C.onHeroSecondary, fontSize: 15, lineHeight: 1.5 }}>{label}</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 18, fontSize: 13, color: "rgba(168,193,247,0.75)" }}>
          Source:{" "}
          <a
            href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(168,193,247,0.95)" }}
          >
            FBI IC3 2025 Internet Crime Report
          </a>
          . Reported figures. The real totals are higher, because most scams never get reported.
        </p>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, dark = false }: { kicker: string; title: string; dark?: boolean }) {
  return (
    <div style={{ maxWidth: 720 }}>
      <div
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          fontSize: 12,
          fontWeight: 600,
          color: dark ? C.onHeroSecondary : C.inkSecondary,
        }}
      >
        {kicker}
      </div>
      <h2
        style={{
          fontFamily: display,
          fontWeight: 600,
          fontSize: "clamp(28px, 4vw, 40px)",
          lineHeight: 1.15,
          color: dark ? C.cream : C.ink,
          margin: "10px 0 0",
        }}
      >
        {title}
      </h2>
      <CoralDash />
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Grab it",
      body: "Screenshot the suspicious text, snap a photo of a screen, or paste the message straight in.",
    },
    {
      n: 2,
      title: "We take a close look",
      body: "Your content is sent securely to our server and Google's Gemini AI, checked for the warning signs scammers rely on, and not stored on our server afterward.",
    },
    {
      n: 3,
      title: "Get a clear next step",
      body: "A plain-English read: what it appears to be, what stood out, and exactly what to do about it.",
    },
  ];
  return (
    <section
      id="how-it-works"
      style={{
        background: C.surface,
        color: C.ink,
        padding: "clamp(64px, 9vw, 110px) clamp(20px, 5vw, 48px)",
        borderRadius: "36px 36px 0 0",
        marginTop: -32,
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHeading kicker="How it works" title="Three steps between a weird text and a straight answer." />
        <div
          className="card-grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 18, marginTop: 44 }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: C.card,
                borderRadius: 22,
                padding: "26px 24px",
                boxShadow: "0 16px 32px rgba(10,31,69,0.08)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: C.accent,
                  color: "#fff",
                  fontFamily: display,
                  fontWeight: 600,
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden
              >
                {s.n}
              </div>
              <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: 21, margin: "16px 0 8px", color: C.ink }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, color: C.inkSecondary, fontSize: 15, lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, color: C.inkSecondary, fontSize: 14, maxWidth: 640 }}>
          Works on anything you can screenshot: texts, emails, DMs, listings,
          social posts, pop-ups. If a screen can lie to you, you can check it.
        </p>
      </div>
    </section>
  );
}

export function DeeperLook() {
  const items = [
    {
      title: "Honest verdicts",
      body: "“Looks like a scam.” “Be careful.” “Looks okay so far.” Hedged on purpose: we point out warning signs, we don't pretend to see the future.",
    },
    {
      title: "Deep Dive with sources",
      body: "One tap checks a suspicious claim against current public reporting and shows you exactly which sources it read.",
    },
    {
      title: "Your history, your phone",
      body: "Every check is saved on your iPhone only, with the stats to show how much you've dodged. Delete any of it, any time.",
    },
  ];
  return (
    <section style={{ background: C.surface, color: C.ink, padding: "0 clamp(20px, 5vw, 48px) clamp(64px, 9vw, 100px)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHeading kicker="What you get" title="Built to be believed, not to scare you." />
        <div
          className="card-grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 18, marginTop: 44 }}
        >
          {items.map((f) => (
            <div
              key={f.title}
              style={{
                background: C.accentSoft,
                borderRadius: 22,
                padding: "26px 24px",
              }}
            >
              <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: 21, margin: "0 0 8px", color: C.ink }}>
                {f.title}
              </h3>
              <p style={{ margin: 0, color: C.inkSecondary, fontSize: 15, lineHeight: 1.6 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiriSection() {
  const steps = [
    "Copy the suspicious message, anywhere on your iPhone.",
    "Say: “Check my clipboard with Smells Phishy.”",
    "The app opens and shows what you copied. Nothing is sent until you approve it.",
  ];
  return (
    <section
      id="siri"
      style={{
        position: "relative",
        background: `linear-gradient(180deg, ${C.heroMid}, ${C.heroTop})`,
        color: C.cream,
        padding: "clamp(64px, 9vw, 110px) clamp(20px, 5vw, 48px)",
        overflow: "hidden",
      }}
    >
      <Bubbles />
      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeading dark kicker="Hands-free" title="The Siri shortcut sets itself up." />
        <div
          className="siri-grid"
          style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 40, marginTop: 40, alignItems: "center" }}
        >
          <div>
            {steps.map((s, i) => (
              <div key={s} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginTop: i === 0 ? 0 : 18 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: C.coral,
                    color: C.heroTop,
                    fontFamily: display,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                  aria-hidden
                >
                  {i + 1}
                </div>
                <p style={{ margin: 0, color: C.onHeroSecondary, fontSize: 16, lineHeight: 1.55 }}>{s}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 22,
              padding: "26px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 13, color: C.onHeroSecondary, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
              Just say
            </div>
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: "clamp(20px, 2.4vw, 26px)", color: C.cream, marginTop: 12, lineHeight: 1.3 }}>
              “Check my clipboard
              <br />
              with Smells Phishy”
            </div>
            <div style={{ marginTop: 14, fontSize: 13, color: C.onHeroSecondary }}>
              Installed with the app. Nothing to configure.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrivacySection() {
  const promises = [
    ["You agree before anything is sent", "Checking runs on our server and Google's Gemini AI. Content is used for that check only, and our server doesn't store it afterward."],
    ["History stays on your iPhone", "Results live on your device, protected by iOS. Delete any check, or all of them."],
    ["No account, no tracking", "An anonymous device key prevents abuse. No ads, no selling data, ever."],
  ];
  return (
    <section
      id="privacy"
      style={{ background: C.surface, color: C.ink, padding: "clamp(64px, 9vw, 110px) clamp(20px, 5vw, 48px)" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHeading kicker="Privacy" title="Suspicious of us too? Good instinct." />
        <div
          className="card-grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 18, marginTop: 44 }}
        >
          {promises.map(([t, b]) => (
            <div key={t} style={{ background: C.card, borderRadius: 22, padding: "26px 24px", boxShadow: "0 16px 32px rgba(10,31,69,0.08)" }}>
              <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: 20, margin: "0 0 8px", color: C.ink }}>{t}</h3>
              <p style={{ margin: 0, color: C.inkSecondary, fontSize: 15, lineHeight: 1.6 }}>{b}</p>
            </div>
          ))}
        </div>
        <div
          className="promise-strip"
          style={{
            marginTop: 26,
            background: C.card,
            borderRadius: 22,
            padding: "22px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "18px 40px",
            boxShadow: "0 16px 32px rgba(10,31,69,0.08)",
          }}
        >
          {[
            ["10", "free checks every day"],
            ["0", "accounts required"],
            ["0", "ads, 0 data sold"],
            ["100%", "of saved checks stay on your iPhone"],
          ].map(([n, label]) => (
            <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontFamily: display, fontWeight: 600, fontSize: 30, color: C.accent, lineHeight: 1 }}>{n}</span>
              <span style={{ color: C.inkSecondary, fontSize: 14 }}>{label}</span>
            </div>
          ))}
        </div>
        <Link
          href="/privacy"
          style={{
            display: "inline-block",
            marginTop: 26,
            color: C.accent,
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          Read the full privacy policy →
        </Link>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        background: `linear-gradient(180deg, ${C.heroTop}, ${C.heroMid})`,
        color: C.cream,
        padding: "clamp(70px, 10vw, 130px) clamp(20px, 5vw, 48px)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Bubbles />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 620, margin: "0 auto" }}>
        <h2 style={{ fontFamily: display, fontWeight: 600, fontSize: "clamp(30px, 4.5vw, 46px)", lineHeight: 1.15, margin: 0 }}>
          The beta is small on purpose.
        </h2>
        <p style={{ color: C.onHeroSecondary, fontSize: 17, lineHeight: 1.6, marginTop: 18 }}>
          Smells Phishy is in a private iPhone beta while we get it right.
          Ask for an invite and we&apos;ll save you a spot.
        </p>
        <a
          href={BETA_MAILTO}
          style={{
            display: "inline-block",
            marginTop: 28,
            background: C.coral,
            color: C.heroTop,
            fontFamily: display,
            fontWeight: 600,
            fontSize: 17,
            padding: "15px 30px",
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Request a beta invite
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: C.heroTop, color: C.onHeroSecondary, padding: "36px clamp(20px, 5vw, 48px) 46px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div
        className="footer-grid"
        style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "center" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/assets/fishy-logo.png" alt="" width={24} height={24} style={{ width: 24, height: 24, borderRadius: 6 }} unoptimized />
          <span style={{ fontFamily: display, fontWeight: 600, fontSize: 15 }}>
            <span style={{ color: C.cream }}>Smells</span> <span style={{ color: C.coral }}>Phishy</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
          <Link href="/privacy" style={{ color: C.onHeroSecondary, textDecoration: "none" }}>
            Privacy Policy
          </Link>
          <a href={BETA_MAILTO} style={{ color: C.onHeroSecondary, textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>
      <p style={{ maxWidth: 1120, margin: "22px auto 0", fontSize: 12.5, lineHeight: 1.6, color: "rgba(168,193,247,0.7)" }}>
        Smells Phishy points out warning signs. It can&apos;t guarantee that
        content is safe or fraudulent. Always verify important requests
        through an official source. © 2026 Smells Phishy.
      </p>
    </footer>
  );
}
