// Variant 06 — "Apple". Construction copied from an Apple product page:
// full-bleed sections that each own the viewport, enormous centred display
// type with tight leading, one device composition as the hero cropped by the
// fold, a scroll-driven section where the device pins and the copy changes
// around it, hairline dividers doing all the separating, very short lines of
// copy set large, and a strict alternation of dark and light.
import Image from "next/image";
import Link from "next/link";
import { A, SANS, DISPLAY, BETA_MAILTO } from "./tokens";
import { HeroDevice, PinnedHowItWorks } from "./stage";

const CSS = `
.ap-root { background: ${A.black}; color: ${A.onDark}; font-family: ${SANS}; -webkit-font-smoothing: antialiased; }
.ap-shell { max-width: 1120px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 40px); width: 100%; }
.ap-narrow { max-width: 780px; margin: 0 auto; }
.ap-wide { max-width: 1040px; margin: 0 auto; }
.ap-br { display: inline; }

.ap-stage-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
  gap: clamp(30px, 5vw, 76px);
  align-items: center;
}

.ap-link { color: ${A.blue}; text-decoration: none; transition: opacity 200ms ease; }
.ap-link:hover { opacity: 0.72; }
.ap-cta { transition: background 200ms ease, transform 200ms ease; }
.ap-cta:hover { background: #1247D4; }
.ap-navlink { color: ${A.onDark}; opacity: 0.82; text-decoration: none; transition: opacity 200ms ease; }
.ap-navlink:hover { opacity: 1; }

.ap-hero { height: 100svh; min-height: 660px; overflow: hidden; }

@media (max-width: 1100px), (max-height: 800px) {
  .ap-device { transform: scale(0.8); transform-origin: center center; margin: -64px 0; }
}
@media (max-width: 900px) {
  .ap-stage-grid { grid-template-columns: 1fr; gap: 40px; justify-items: center; }
  .ap-stage-copy { text-align: center; }
  .ap-stage-copy p { margin-left: auto; margin-right: auto; }
  .ap-stage-copy > div:last-child { justify-content: center; }
  .ap-specrow { grid-template-columns: 1fr !important; gap: 6px !important; }
  .ap-numbers { grid-template-columns: 1fr !important; }
  .ap-numbers > div { border-left: none !important; border-top: 1px solid ${A.hairLight}; padding: 26px 0 !important; }
  .ap-numbers > div:first-child { border-top: none; }
}
@media (max-width: 760px) {
  .ap-br { display: none; }
}
@media (max-width: 720px) {
  .ap-navlinks { display: none !important; }
  .ap-hero { height: auto; min-height: 100svh; }
}
@media (prefers-reduced-motion: reduce) {
  .ap-cta:hover { transform: none; }
}
`;

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

/* ----------------------------------------------------------------- atoms */

function Eyebrow({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "dim" }) {
  return (
    <div
      style={{
        fontSize: "clamp(17px, 1.5vw, 21px)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        color: tone === "blue" ? A.blue : A.onDarkDim,
      }}
    >
      {children}
    </div>
  );
}

function Display({
  children,
  dark,
  max = 76,
  min = 34,
  vw = 5.4,
}: {
  children: React.ReactNode;
  dark: boolean;
  max?: number;
  min?: number;
  vw?: number;
}) {
  return (
    <h2
      style={{
        fontFamily: SANS,
        fontSize: `clamp(${min}px, ${vw}vw, ${max}px)`,
        fontWeight: 600,
        letterSpacing: "-0.032em",
        lineHeight: 1.04,
        margin: 0,
        color: dark ? A.onDark : A.onLight,
      }}
    >
      {children}
    </h2>
  );
}

function Lede({ children, dark, max = 620 }: { children: React.ReactNode; dark: boolean; max?: number }) {
  return (
    <p
      style={{
        fontSize: "clamp(18px, 1.7vw, 24px)",
        lineHeight: 1.45,
        letterSpacing: "-0.012em",
        color: dark ? A.onDarkDim : A.onLightDim,
        maxWidth: max,
        margin: "clamp(18px, 2vw, 26px) auto 0",
      }}
    >
      {children}
    </p>
  );
}

function BluePill({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="ap-cta"
      style={{
        display: "inline-block",
        background: A.blue,
        color: "#fff",
        fontSize: 17,
        fontWeight: 500,
        letterSpacing: "-0.01em",
        padding: "13px 26px",
        borderRadius: 999,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function Mark({ slug, label, dark }: { slug: string; label: string; dark: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 1 0",
        minWidth: 0,
        position: "relative",
        padding: "0 clamp(6px, 1.4vw, 18px)",
      }}
      title={label}
    >
      <span
        aria-hidden
        style={{
          width: 26,
          height: 26,
          display: "block",
          background: dark ? A.onDark : A.onLight,
          opacity: 0.62,
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
  );
}

/* ------------------------------------------------------------------- nav */

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 50,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: `1px solid ${A.hairDark}`,
      }}
    >
      <div
        className="ap-shell"
        style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18 }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Image
            src="/assets/fishy-logo.png"
            alt=""
            width={22}
            height={22}
            unoptimized
            style={{ width: 22, height: 22, borderRadius: 6, objectFit: "cover" }}
          />
          <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 15, color: A.onDark }}>
            Smells <span style={{ color: A.coral }}>Phishy</span>
          </span>
        </Link>
        <div className="ap-navlinks" style={{ display: "flex", gap: "clamp(20px, 3.4vw, 44px)", fontSize: 13 }}>
          {[
            ["How it works", "#how"],
            ["Deep Dive", "#dive"],
            ["Privacy", "#privacy"],
          ].map(([l, h]) => (
            <a key={l} href={h} className="ap-navlink">
              {l}
            </a>
          ))}
        </div>
        <a href={BETA_MAILTO} className="ap-link" style={{ fontSize: 13 }}>
          Request an invite ›
        </a>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  return (
    <header
      className="ap-hero"
      style={{
        background: A.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "clamp(92px, 12vh, 128px)",
        paddingBottom: 0,
      }}
    >
      <div className="ap-shell">
        <Eyebrow>Smells Phishy</Eyebrow>
        <h1
          style={{
            fontFamily: SANS,
            fontSize: "clamp(56px, 11.4vw, 146px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 0.98,
            margin: "clamp(8px, 1.2vw, 16px) 0 0",
            color: A.onDark,
          }}
        >
          Suspicious?
        </h1>
        <Lede dark max={560}>
          One press. About eight seconds. A plain answer.
        </Lede>
        <div
          style={{
            display: "flex",
            gap: 26,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "clamp(26px, 3vw, 38px)",
          }}
        >
          <BluePill href={BETA_MAILTO}>Request a beta invite</BluePill>
          <a href="#how" className="ap-link" style={{ fontSize: 17, letterSpacing: "-0.01em" }}>
            See how it works ›
          </a>
        </div>
      </div>
      <div style={{ marginTop: "clamp(24px, 3.6vh, 46px)", width: "100%" }}>
        <HeroDevice />
      </div>
    </header>
  );
}

/* ------------------------------------------------------------- statement */

function Statement() {
  return (
    <section style={{ background: A.white, color: A.onLight, padding: "clamp(84px, 13vw, 170px) 0" }}>
      <div className="ap-shell" style={{ textAlign: "center" }}>
        <div className="ap-wide">
          <Display dark={false} max={74} vw={5.6}>
            If a screen can lie to you,
            <br className="ap-br" />
            you can check it.
          </Display>
          <Lede dark={false} max={520}>
            Texts, emails, DMs, listings, pop-ups. Screenshot it, snap it, or paste it in.
          </Lede>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "clamp(46px, 6vw, 76px)",
            borderTop: `1px solid ${A.hairLight}`,
            borderBottom: `1px solid ${A.hairLight}`,
            padding: "26px 0",
          }}
        >
          {CHANNELS.map(([slug, label], i) => (
            <span
              key={slug}
              style={{
                display: "flex",
                flex: "1 1 0",
                minWidth: 0,
                justifyContent: "center",
                borderLeft: i === 0 ? "none" : `1px solid ${A.hairLight}`,
              }}
            >
              <Mark slug={slug} label={label} dark={false} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- deepdive */

const SOURCES = ["Public news reporting", "Consumer protection notice", "The company's own page"];

function DeepDive() {
  return (
    <section
      id="dive"
      style={{
        background: A.black,
        color: A.onDark,
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(90px, 12vw, 150px) 0",
      }}
    >
      <div className="ap-shell" style={{ textAlign: "center" }}>
        <Eyebrow>Deep Dive</Eyebrow>
        <div style={{ marginTop: 14 }}>
          <Display dark max={92} min={38} vw={6.6}>
            Not sure?
            <br />
            Go deeper.
          </Display>
        </div>
        <Lede dark max={560}>
          One tap checks the claim against current public reporting, and shows every source it read.
        </Lede>
        <div style={{ maxWidth: 620, margin: "clamp(46px, 6vw, 78px) auto 0", textAlign: "left" }}>
          {SOURCES.map((s, i) => (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                padding: "20px 4px",
                borderTop: i === 0 ? `1px solid ${A.hairDark}` : "none",
                borderBottom: `1px solid ${A.hairDark}`,
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 16, minWidth: 0 }}>
                <span
                  aria-hidden
                  style={{ width: 8, height: 8, borderRadius: 999, background: A.blueDim, flexShrink: 0 }}
                />
                <span style={{ fontSize: "clamp(16px, 1.4vw, 19px)", letterSpacing: "-0.01em" }}>{s}</span>
              </span>
              <span style={{ fontSize: 14, color: A.onDarkDim, flexShrink: 0 }}>read</span>
            </div>
          ))}
          <p style={{ margin: "22px 4px 0", fontSize: 15, color: A.onDarkDim, lineHeight: 1.5 }}>
            Every source is a real link you can open yourself.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- privacy */

const SPECS: [string, string][] = [
  ["Before it leaves", "Nothing is sent until you approve it."],
  ["During the check", "It runs on our server and Google's Gemini, for that check only."],
  ["After the check", "Our server does not keep what you sent."],
  ["Your history", "Saved on your iPhone, protected by iOS. Delete one, or delete all of them."],
  ["Your identity", "No account. An anonymous device key stops abuse. No ads, nothing sold."],
];

function Privacy() {
  return (
    <section id="privacy" style={{ background: A.white, color: A.onLight, padding: "clamp(90px, 13vw, 170px) 0" }}>
      <div className="ap-shell">
        <div style={{ textAlign: "center" }}>
          <Eyebrow>Privacy</Eyebrow>
          <div style={{ marginTop: 14 }}>
            <Display dark={false} max={84} vw={6.2}>
              What happens to
              <br />
              what you send.
            </Display>
          </div>
        </div>
        <div style={{ maxWidth: 900, margin: "clamp(50px, 7vw, 88px) auto 0" }}>
          {SPECS.map(([k, v], i) => (
            <div
              key={k}
              className="ap-specrow"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 250px) minmax(0, 1fr)",
                gap: 30,
                alignItems: "baseline",
                padding: "24px 2px",
                borderTop: i === 0 ? `1px solid ${A.hairLight}` : "none",
                borderBottom: `1px solid ${A.hairLight}`,
              }}
            >
              <div style={{ fontSize: "clamp(17px, 1.5vw, 21px)", fontWeight: 600, letterSpacing: "-0.015em" }}>
                {k}
              </div>
              <div
                style={{
                  fontSize: "clamp(16px, 1.4vw, 19px)",
                  lineHeight: 1.5,
                  color: A.onLightDim,
                  letterSpacing: "-0.01em",
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/privacy" className="ap-link" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>
            Read the full privacy policy ›
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- numbers */

const NUMBERS: [string, string][] = [
  ["$20.9B", "lost to internet crime in 2025"],
  ["1,008,597", "complaints to the FBI in one year"],
  ["$7.75B", "taken from people 60 and older"],
];

function Numbers() {
  return (
    <section style={{ background: A.grey, color: A.onLight, padding: "clamp(80px, 11vw, 140px) 0" }}>
      <div className="ap-shell">
        <div style={{ textAlign: "center" }}>
          <Display dark={false} max={64} min={30} vw={4.6}>
            Not a niche problem.
          </Display>
        </div>
        <div
          className="ap-numbers"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            marginTop: "clamp(44px, 6vw, 76px)",
          }}
        >
          {NUMBERS.map(([n, l], i) => (
            <div
              key={l}
              style={{
                padding: "8px clamp(16px, 3vw, 40px)",
                borderLeft: i === 0 ? "none" : `1px solid ${A.hairLight}`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 5.2vw, 68px)",
                  fontWeight: 600,
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  color: A.blue,
                }}
              >
                {n}
              </div>
              <div style={{ marginTop: 14, fontSize: 16, color: A.onLightDim, lineHeight: 1.45 }}>{l}</div>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "clamp(34px, 4vw, 52px) auto 0",
            fontSize: 13.5,
            lineHeight: 1.6,
            color: A.onLightDim,
          }}
        >
          Source:{" "}
          <a
            href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ap-link"
          >
            FBI IC3 2025 Internet Crime Report
          </a>
          . Reported figures only. The real totals are higher, because most scams never get reported.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- cta */

function FinalCTA() {
  return (
    <section
      style={{
        background: A.black,
        color: A.onDark,
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(90px, 12vw, 150px) 0",
        textAlign: "center",
      }}
    >
      <div className="ap-shell">
        <Display dark max={104} min={40} vw={7.2}>
          The beta is
          <br />
          small on purpose.
        </Display>
        <Lede dark max={520}>
          Ask for an invite and we will save you a spot.
        </Lede>
        <div style={{ marginTop: "clamp(30px, 3.4vw, 44px)" }}>
          <BluePill href={BETA_MAILTO}>Request a beta invite</BluePill>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- footer */

function Footer() {
  return (
    <footer style={{ background: A.grey, color: A.onLightDim, padding: "34px 0 46px" }}>
      <div className="ap-shell">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 28px",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
            borderBottom: `1px solid ${A.hairLight}`,
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Image
              src="/assets/fishy-logo.png"
              alt=""
              width={20}
              height={20}
              unoptimized
              style={{ width: 20, height: 20, borderRadius: 5, objectFit: "cover" }}
            />
            <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 14, color: A.onLight }}>
              Smells <span style={{ color: A.coral }}>Phishy</span>
            </span>
          </span>
          <span style={{ display: "flex", gap: 26, fontSize: 13 }}>
            <Link href="/privacy" style={{ color: A.onLightDim, textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <a href={BETA_MAILTO} style={{ color: A.onLightDim, textDecoration: "none" }}>
              Contact
            </a>
          </span>
        </div>
        <p style={{ margin: "20px 0 0", fontSize: 12.5, lineHeight: 1.65, maxWidth: 760 }}>
          Smells Phishy points out warning signs. It cannot guarantee that content is safe or fraudulent. Always verify
          important requests through an official source. © 2026 Smells Phishy.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ page */

export default function AppleLanding() {
  return (
    <div className="ap-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Nav />
      <Hero />
      <Statement />
      <PinnedHowItWorks />
      <DeepDive />
      <Privacy />
      <Numbers />
      <FinalCTA />
      <Footer />
    </div>
  );
}
