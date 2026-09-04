// Variant 04 — built on Vercel's Geist construction. See README.md in this
// folder. Black, hairlines, mono metadata, and exactly one coloured word.
import Image from "next/image";
import Link from "next/link";
import "./geist.css";
import ScrollFx from "./scroll-fx";
import {
  DiagramActionButton,
  DiagramBackTap,
  DiagramShare,
  IconArrow,
  IconFrame,
  IconLink,
  IconMail,
  IconText,
} from "./icons";

const BETA_MAILTO = "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";

const NAV = [
  ["How it works", "#press"],
  ["Deep Dive", "#deep-dive"],
  ["Privacy", "#privacy"],
] as const;

function Wordmark({ size = 15, hideOnPhone = false }: { size?: number; hideOnPhone?: boolean }) {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}>
      <Image
        src="/assets/fishy-logo.png"
        alt=""
        width={22}
        height={22}
        unoptimized
        style={{ width: 22, height: 22, borderRadius: 5, objectFit: "cover" }}
      />
      <span className={hideOnPhone ? "gs-nav-wordmark" : ""} style={{ fontSize: size, fontWeight: 500, letterSpacing: "-0.022em", color: "var(--fg)" }}>
        Smells Phishy
      </span>
    </Link>
  );
}

/* ================================= nav ================================= */

export function Nav() {
  return (
    <nav className="gs-nav">
      <div className="gs-frame">
        <div className="gs-pad gs-nav-inner">
          <Wordmark hideOnPhone />
          <div className="gs-nav-links">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className="gs-navlink">
                {label}
              </a>
            ))}
          </div>
          <a href={BETA_MAILTO} className="gs-btn gs-btn-solid gs-btn-sm gs-nav-cta" style={{ marginLeft: "auto" }}>
            Request an invite
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ================================ hero ================================= */

const SPEC: [string, string][] = [
  ["Input", "One press"],
  ["Result", "About 8 sec"],
  ["History", "On device"],
  ["Account", "Optional"],
];

export function Hero() {
  return (
    <header className="gs-section">
      <div className="gs-frame">
        <div
          className="gs-pad gs-rv gs-in"
          style={{ paddingTop: "clamp(64px, 8.5vw, 128px)", paddingBottom: "clamp(52px, 6.5vw, 92px)" }}
        >
          <p className="gs-mono">01 / Scam check · iPhone</p>
          <h1 className="gs-h1" style={{ marginTop: 30 }}>
            Check it before
            <br />
            you answer.
          </h1>
          <p className="gs-sub" style={{ marginTop: 28 }}>
            One press. About eight seconds. What stood out, and what to do next.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 38 }}>
            <a href={BETA_MAILTO} className="gs-btn gs-btn-solid">
              Request an invite
            </a>
            <a href="#press" className="gs-btn gs-btn-ghost">
              How it works
            </a>
          </div>
        </div>
        <div className="gs-cells gs-cells-4">
          {SPEC.map(([k, v], i) => (
            <div key={k} className="gs-cell gs-cell-hover gs-rv gs-in" style={{ transitionDelay: `${i * 60}ms` }}>
              <p className="gs-mono gs-mono-sm">{k}</p>
              <p style={{ margin: "12px 0 0", fontSize: 23, letterSpacing: "-0.034em", fontWeight: 500, color: "var(--fg)" }}>
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ============================ section header ============================ */

function Head({ index, name, meta }: { index: string; name: string; meta?: string }) {
  return (
    <div className="gs-pad gs-head">
      <span className="gs-mono">
        {index} / {name}
      </span>
      {meta && <span className="gs-mono gs-mono-sm">{meta}</span>}
    </div>
  );
}

/* ============================= 02 the result ============================ */

const SIGNALS: [string, string, string][] = [
  ["Signal 01", "“your package is on hold”", "Urgency about a delivery you did not order."],
  ["Signal 02", "“usps-redelivery-fee.help”", "Not the carrier’s own domain."],
  ["Signal 03", "“$2.99 redelivery fee”", "A payment on a page you have never used."],
];

const SCALE = ["Looks okay so far", "Worth a second look", "Showed warning signs"];

export function TheResult() {
  return (
    <section id="result" className="gs-section">
      <div className="gs-frame">
        <Head index="02" name="The result" meta="Example" />
        <div className="gs-split" style={{ display: "grid", gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)" }}>
          <div className="gs-pad gs-rv" style={{ paddingTop: 48, paddingBottom: 48 }}>
            <h2 className="gs-h2">
              A verdict you
              <br />
              can act on.
            </h2>
            <p className="gs-p" style={{ marginTop: 20, maxWidth: "34ch" }}>
              It names what the message looks like, quotes the lines that raised a
              flag, and gives you one thing to do next.
            </p>
            <div style={{ marginTop: 34, borderTop: "1px solid var(--line)" }}>
              {SCALE.map((s) => (
                <div key={s} style={{ padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                  <span className="gs-mono">{s}</span>
                </div>
              ))}
            </div>
            <p className="gs-p" style={{ marginTop: 18, fontSize: 13.5, color: "var(--fg-3)", maxWidth: "34ch" }}>
              The same three answers every time. It points at warning signs. It
              never claims certainty.
            </p>
          </div>

          <div
            className="gs-pad gs-rv"
            style={{ borderLeft: "1px solid var(--line)", paddingTop: 48, paddingBottom: 48, transitionDelay: "70ms" }}
          >
            <div className="gs-plate">
              <span className="gs-corner" aria-hidden />
              <div className="gs-row" style={{ alignItems: "center", background: "var(--raised)" }}>
                <span className="gs-mono">Verdict</span>
                <span
                  className="gs-accent"
                  style={{
                    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                    fontSize: 13.5,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Showed warning signs
                </span>
              </div>
              <div className="gs-row">
                <span className="gs-mono">Input</span>
                <div>
                  <p className="gs-mono gs-mono-sm" style={{ margin: 0 }}>
                    SMS · unknown number
                  </p>
                  <p className="gs-quote" style={{ margin: "9px 0 0" }}>
                    USPS: your package is on hold at the depot. Settle the $2.99
                    redelivery fee within 12h: usps-redelivery-fee.help/pay
                  </p>
                </div>
              </div>
              {SIGNALS.map(([n, quote, why]) => (
                <div key={n} className="gs-row">
                  <span className="gs-mono">{n}</span>
                  <div>
                    <p className="gs-quote" style={{ margin: 0, color: "var(--fg-2)" }}>
                      {quote}
                    </p>
                    <p className="gs-p" style={{ marginTop: 7, color: "var(--fg)" }}>
                      {why}
                    </p>
                  </div>
                </div>
              ))}
              <div className="gs-row">
                <span className="gs-mono">Next</span>
                <p className="gs-p" style={{ color: "var(--fg)" }}>
                  Open the carrier’s own app and look the tracking number up there.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "13px clamp(18px, 2.4vw, 26px)",
                  borderTop: "1px solid var(--line)",
                  background: "var(--raised)",
                }}
              >
                <span className="gs-mono gs-mono-sm">Elapsed about 8s</span>
                <span className="gs-mono gs-mono-sm">Example result</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== 03 one press ============================ */

const WAYS: [React.ReactNode, string, string, string][] = [
  [<DiagramActionButton key="a" />, "Action Button", "Press the side button", "Set it once in Settings. After that it is one press, from any app."],
  [<DiagramBackTap key="b" />, "Back Tap", "Tap the back twice", "Nothing to reach for. Works with the phone already in your hand."],
  [<DiagramShare key="c" />, "Share Sheet", "Share the screenshot", "The long way round, for anything the first two cannot reach."],
];

export function OnePress() {
  return (
    <section id="press" className="gs-section">
      <div className="gs-frame">
        <Head index="03" name="One press" meta="Three ways in" />
        <div className="gs-pad gs-rv" style={{ paddingTop: 48, paddingBottom: 40 }}>
          <h2 className="gs-h2">Three ways in. About eight seconds each.</h2>
          <p className="gs-p" style={{ marginTop: 18, maxWidth: "52ch" }}>
            Point the Action Button or a Back Tap at Smells Phishy, or share a
            screenshot from anywhere. Nothing to copy, nothing to paste.
          </p>
        </div>
        <div className="gs-cells gs-cells-3">
          {WAYS.map(([diagram, label, title, body], i) => (
            <div
              key={label}
              className="gs-cell gs-cell-hover gs-rv"
              style={{ transitionDelay: `${i * 70}ms`, paddingTop: 30, paddingBottom: 32 }}
            >
              <p className="gs-mono gs-mono-sm">{label}</p>
              <div style={{ margin: "22px 0 26px" }}>{diagram}</div>
              <h3 className="gs-h3">{title}</h3>
              <p className="gs-p" style={{ marginTop: 8 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ 04 what it reads ========================= */

const READS: [React.ReactNode, string, string][] = [
  [<IconText key="a" />, "Text", "A message from a number you do not know."],
  [<IconMail key="b" />, "Email", "The one saying your account is on hold."],
  [<IconLink key="c" />, "Link", "The address hiding behind a shortened link."],
  [<IconFrame key="d" />, "Screenshot", "A listing, a profile, a pop-up, anything on screen."],
];

export function WhatItReads() {
  return (
    <section className="gs-section">
      <div className="gs-frame">
        <Head index="04" name="What it reads" meta="If a screen can lie to you" />
        <div className="gs-cells gs-cells-4">
          {READS.map(([icon, label, body], i) => (
            <div
              key={label}
              className="gs-cell gs-cell-hover gs-rv"
              style={{ transitionDelay: `${i * 60}ms`, paddingTop: 30, paddingBottom: 32 }}
            >
              <span style={{ color: "var(--fg-2)", display: "block" }}>{icon}</span>
              <h3 className="gs-h3" style={{ marginTop: 20 }}>
                {label}
              </h3>
              <p className="gs-p" style={{ marginTop: 8 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== 05 deep dive =========================== */

const SOURCES: [string, string, string][] = [
  ["Src 01", "ftc.gov", "Consumer alert on delivery texts that ask for a small fee."],
  ["Src 02", "ic3.gov", "Reported smishing pattern using lookalike carrier domains."],
  ["Src 03", "usps.com", "Official notice: USPS does not text a payment link out of the blue."],
];

export function DeepDive() {
  return (
    <section id="deep-dive" className="gs-section">
      <div className="gs-frame">
        <Head index="05" name="Deep Dive" meta="Optional second press" />
        <div className="gs-split" style={{ display: "grid", gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)" }}>
          <div className="gs-pad gs-rv" style={{ paddingTop: 48, paddingBottom: 48 }}>
            <h2 className="gs-h2">
              When you want
              <br />
              the receipts.
            </h2>
            <p className="gs-p" style={{ marginTop: 20, maxWidth: "34ch" }}>
              One more press sends the same content back with web search on. You
              get what current public reporting says, and every source it read.
            </p>
            <div style={{ marginTop: 30 }}>
              <a href="#privacy" className="gs-textlink">
                What the app keeps
                <IconArrow />
              </a>
            </div>
          </div>
          <div
            className="gs-pad gs-rv"
            style={{ borderLeft: "1px solid var(--line)", paddingTop: 48, paddingBottom: 48, transitionDelay: "70ms" }}
          >
            <div className="gs-plate">
              <span className="gs-corner" aria-hidden />
              {SOURCES.map(([n, host, line]) => (
                <div key={n} className="gs-row">
                  <span className="gs-mono">{n}</span>
                  <div>
                    <p className="gs-quote" style={{ margin: 0 }}>
                      {host}
                    </p>
                    <p className="gs-p" style={{ marginTop: 7 }}>
                      {line}
                    </p>
                  </div>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "13px clamp(18px, 2.4vw, 26px)",
                  borderTop: "1px solid var(--line)",
                  background: "var(--raised)",
                }}
              >
                <span className="gs-mono gs-mono-sm">3 sources listed</span>
                <span className="gs-mono gs-mono-sm">Example report</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================== 06 privacy ============================ */

const PRIVACY: [string, string][] = [
  ["Before sending", "The check runs on our server and Google's Gemini. Your content is used for that check only, and the server does not keep it afterward."],
  ["On the device", "Results and the content you checked are saved on your iPhone under iOS file protection. Delete one, or delete all of it."],
  ["Account", "No account is required and everything works without one. Sign in with Apple or Google if you want to, and the provider gives us a first name and an email address."],
];

export function Privacy() {
  return (
    <section id="privacy" className="gs-section">
      <div className="gs-frame">
        <Head index="06" name="Privacy" meta="Read it in full" />
        <div className="gs-pad gs-rv" style={{ paddingTop: 48, paddingBottom: 40 }}>
          <h2 className="gs-h2">Suspicious of us too? Good instinct.</h2>
        </div>
        <div className="gs-cells gs-cells-3">
          {PRIVACY.map(([label, body], i) => (
            <div
              key={label}
              className="gs-cell gs-cell-hover gs-rv"
              style={{ transitionDelay: `${i * 70}ms`, paddingTop: 30, paddingBottom: 32 }}
            >
              <p className="gs-mono gs-mono-sm">{label}</p>
              <p className="gs-p" style={{ marginTop: 16, color: "var(--fg)" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
        <div className="gs-pad gs-rv" style={{ paddingTop: 28, paddingBottom: 30 }}>
          <Link href="/privacy" className="gs-textlink">
            Read the full privacy policy
            <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================= CTA ================================= */

export function FinalCTA() {
  return (
    <section className="gs-section">
      <div className="gs-frame">
        <div
          className="gs-pad gs-rv"
          style={{
            paddingTop: "clamp(72px, 9vw, 132px)",
            paddingBottom: "clamp(72px, 9vw, 132px)",
            textAlign: "center",
          }}
        >
          <p className="gs-mono">07 / The beta</p>
          <h2 className="gs-h2" style={{ marginTop: 26, fontSize: "clamp(34px, 5.4vw, 72px)" }}>
            Small on purpose.
          </h2>
          <p className="gs-sub" style={{ marginTop: 22, marginLeft: "auto", marginRight: "auto" }}>
            Smells Phishy is on a private iPhone beta while it gets sharper. Ask
            for an invite and a spot gets held for you.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36, justifyContent: "center" }}>
            <a href={BETA_MAILTO} className="gs-btn gs-btn-solid">
              Request an invite
            </a>
            <Link href="/privacy" className="gs-btn gs-btn-ghost">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================ footer =============================== */

export function Footer() {
  return (
    <footer className="gs-footer">
      <div className="gs-frame">
        <div
          className="gs-pad"
          style={{
            paddingTop: 46,
            paddingBottom: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 34,
          }}
        >
          <div>
            <Wordmark />
            <p className="gs-p" style={{ marginTop: 14, fontSize: 13.5, maxWidth: 220 }}>
              A second opinion on the message you were not expecting.
            </p>
          </div>
          <div>
            <p className="gs-mono gs-mono-sm" style={{ marginBottom: 10 }}>
              Product
            </p>
            <a href="#result" className="gs-footlink">
              The result
            </a>
            <a href="#press" className="gs-footlink">
              One press
            </a>
            <a href="#deep-dive" className="gs-footlink">
              Deep Dive
            </a>
          </div>
          <div>
            <p className="gs-mono gs-mono-sm" style={{ marginBottom: 10 }}>
              Legal
            </p>
            <Link href="/privacy" className="gs-footlink">
              Privacy Policy
            </Link>
            <a href="#privacy" className="gs-footlink">
              What stays on device
            </a>
          </div>
          <div>
            <p className="gs-mono gs-mono-sm" style={{ marginBottom: 10 }}>
              Contact
            </p>
            <a href={BETA_MAILTO} className="gs-footlink">
              Request an invite
            </a>
            <a href="mailto:dnage76@gmail.com" className="gs-footlink">
              dnage76@gmail.com
            </a>
          </div>
        </div>
        <div className="gs-pad" style={{ borderTop: "1px solid var(--line)", paddingTop: 22, paddingBottom: 34 }}>
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: "var(--fg-4)", maxWidth: 780 }}>
            Smells Phishy points out warning signs. It cannot guarantee that a
            message is safe or fraudulent. Always verify important requests
            through an official source. © 2026 Smells Phishy.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { ScrollFx };
