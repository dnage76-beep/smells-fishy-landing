/* eslint-disable @next/next/no-img-element */
// 09-editorial. A magazine feature about a suspicious message that happens
// to sell an app. Construction copied from print: masthead + Oxford rule,
// asymmetric 12-column grid, real column rules, drop cap, hanging indents,
// keyed plate annotation, oversized italic pull quote, dark centre spread,
// a bound-in reply card, colophon.
import Link from "next/link";
import "./editorial.css";
import { editorialSerif } from "./fonts";

const BETA =
  "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";

const CHANNELS = [
  "imessage",
  "whatsapp",
  "messenger",
  "instagram",
  "facebook",
  "telegram",
  "signal",
  "x",
  "linkedin",
  "reddit",
  "safari",
  "chrome",
];

function Masthead() {
  return (
    <header className="ed-masthead">
      <div className="ed-wrap">
        <div className="ed-mast-top">
          <span className="ed-label meta-l">No. 01 &nbsp;·&nbsp; Field report</span>
          <Link href="/" className="ed-wordmark">
            <img src="/assets/fishy-logo.png" alt="" width={28} height={28} />
            <span>Smells Phishy</span>
          </Link>
          <a className="ed-navlink cta meta-r" href={BETA}>
            Request an invite
          </a>
        </div>
      </div>
      <div className="ed-wrap">
        <div className="ed-oxford" />
      </div>
      <div className="ed-wrap">
        <nav className="ed-mast-nav">
          <a className="ed-navlink" href="#problem">
            The problem
          </a>
          <a className="ed-navlink" href="#how">
            One press
          </a>
          <a className="ed-navlink" href="#result">
            The result
          </a>
          <a className="ed-navlink" href="#privacy">
            Privacy
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionHead({
  num,
  title,
  aside,
}: {
  num: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="ed-sechead" style={{ gridColumn: "1 / span 12" }}>
      <span className="num">{num}</span>
      <h2>{title}</h2>
      <span className="rule" />
      {aside ? <span className="aside">{aside}</span> : null}
    </div>
  );
}

/* The device in the opening spread: a truthful miniature of the result. */
function ResultPhone() {
  return (
    <div className="ed-phone">
      <div className="ed-screen">
        <div className="ed-screen-bar">Check result</div>
        <div style={{ padding: "14px 14px 18px", background: "#FBF9F2" }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(10,31,69,0.12)",
              padding: "13px 14px",
            }}
          >
            <div className="ed-label" style={{ fontSize: 9 }}>
              Verdict
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                lineHeight: 1.05,
                marginTop: 6,
                color: "#0A1F45",
              }}
            >
              Looks like a scam.
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 11.5,
                lineHeight: 1.4,
                color: "#5C6979",
              }}
            >
              Several common warning signs.
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(10,31,69,0.12)",
              borderTop: 0,
              padding: "13px 14px",
            }}
          >
            <div className="ed-label" style={{ fontSize: 9 }}>
              What stood out
            </div>
            <ul className="ed-evi" style={{ marginTop: 6 }}>
              {[
                "Urgency about a delivery you did not expect.",
                "A link where the official app should be.",
              ].map((t) => (
                <li key={t} style={{ fontSize: 11.5, padding: "4px 0" }}>
                  <span className="dot" style={{ marginTop: 6 }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(10,31,69,0.12)",
              borderTop: 0,
              padding: "13px 14px",
            }}
          >
            <div className="ed-label" style={{ fontSize: 9 }}>
              What to do next
            </div>
            <ol className="ed-todo" style={{ marginTop: 6 }}>
              <li style={{ fontSize: 11.5, padding: "4px 0" }}>
                Open the carrier’s official app directly.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Opening() {
  return (
    <section className="ed-hero">
      <div className="ed-wrap ed-grid">
        <div className="ed-hero-head">
          <div className="ed-kicker">
            <span className="ed-label">Field report</span>
            <span className="bar" />
            <span className="ed-label">iPhone · private beta</span>
          </div>
          <h1 className="ed-h1">
            Eight seconds
            <br className="ed-br-lg" /> with a <em>suspicious</em>
            <br className="ed-br-lg" /> message.
          </h1>
        </div>

        <p className="ed-deck">
          One press reads a text, an email, a link or a screenshot, then says
          what stood out and what to do next.
        </p>

        <div className="ed-byline">
          <span className="ed-label">Smells Phishy</span>
          <span className="ed-label" style={{ color: "var(--coral)" }}>
            ·
          </span>
          <span className="ed-label">No account required</span>
          <span className="ed-label" style={{ color: "var(--coral)" }}>
            ·
          </span>
          <span className="ed-label">Free while in beta</span>
        </div>

        <div className="ed-cta-row">
          <a className="ed-cta" href={BETA}>
            Request an invite →
          </a>
          <a className="ed-cta-alt" href="#privacy">
            Read the privacy promise
          </a>
        </div>

        <figure className="ed-plate">
          <div className="ed-plate-bg" aria-hidden />
          <div className="ed-plate-inner">
            <ResultPhone />
          </div>
          <figcaption>
            <span className="ed-fignum">Fig. 1</span>{" "}
            <span className="ed-cap">
              The answer: a hedged verdict, the signs it found, the next step.
              Saved on the phone, not on a server.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Problem() {
  const stats: [string, string][] = [
    ["$20.9B", "reported lost to internet crime in 2025"],
    ["1,008,597", "complaints filed with the FBI in one year"],
    ["$7.75B", "of it reported by people over 60"],
  ];
  return (
    <section id="problem" className="ed-article">
      <div className="ed-wrap ed-grid">
        <SectionHead num="I." title="Why the good ones work" aside="Field notes" />
        <div className="ed-colwrap">
          <p className="ed-standfirst">
            A scam message does not look like a scam. It looks like a delivery
            notice.
          </p>
          <div className="ed-cols">
            <p>
              It arrives while you are busy. A package you half remember. A bank
              you actually use. A tone that sounds like a person with a job to
              do and a queue behind them.
            </p>
            <p>
              The tell is never the whole message. It is the small pressure to
              act now, a link where the official app should be, a sender address
              that is one character wrong.
            </p>
            <p>
              Reading for those signs is a skill, and a slow one. Smells Phishy
              does the reading and hands back what it found, in the words you
              would have used yourself.
            </p>
          </div>
        </div>

        <aside className="ed-side">
          <div className="ed-label" style={{ marginBottom: 8 }}>
            By the numbers
          </div>
          <div className="ed-side-box">
            {stats.map(([n, l]) => (
              <div className="ed-stat" key={l}>
                <span className="n">{n}</span>
                <span className="l">{l}</span>
              </div>
            ))}
          </div>
          <p className="ed-src">
            Source:{" "}
            <a
              href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              FBI IC3 2025 Internet Crime Report
            </a>
            . Reported figures only. The real totals are higher, because most
            scams are never reported.
          </p>
        </aside>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="ed-pq">
      <div className="ed-wrap ed-grid">
        <div className="ed-pq-inner">
          <blockquote>
            “It points out warning signs. It does not pretend to see the
            future.”
          </blockquote>
          <cite>The rule the app is built on</cite>
        </div>
      </div>
    </section>
  );
}

function OnePress() {
  const steps: [string, React.ReactNode][] = [
    [
      "Press",
      <>
        Set the <code>Action Button</code> or a <code>Back Tap</code> once.
        After that, one press starts a check from anywhere on the phone.
      </>,
    ],
    [
      "Read",
      <>
        Screenshot it, snap a photo of a screen, or paste it in. The content
        goes securely to the check, and the server does not keep it afterward.
      </>,
    ],
    [
      "Answer",
      <>
        About eight seconds later: a hedged verdict, the signs it found, and
        what to do next.
      </>,
    ],
  ];
  return (
    <section id="how" className="ed-press">
      <div className="ed-wrap ed-grid">
        <SectionHead num="II." title="One press, about eight seconds" aside="Fig. 2" />
        <div className="ed-press-left">
          <svg
            className="ed-draw"
            viewBox="-10 0 370 452"
            role="img"
            aria-label="Diagram: an iPhone with the Action Button and Back Tap marked as the two ways to start a check."
          >
            {/* body and screen */}
            <rect className="st" x="178" y="12" width="170" height="400" rx="30" />
            <rect className="hair" x="186" y="20" width="154" height="384" rx="23" />
            <rect className="fillink" x="241" y="30" width="44" height="12" rx="6" />
            {/* side controls */}
            <rect className="fillcoral" x="172" y="88" width="7" height="40" rx="3.5" />
            <rect className="hair" x="174" y="148" width="5" height="30" rx="2.5" />
            <rect className="hair" x="174" y="186" width="5" height="30" rx="2.5" />
            <rect className="hair" x="347" y="128" width="5" height="54" rx="2.5" />
            {/* the eight seconds */}
            <circle
              className="hair"
              cx="263"
              cy="212"
              r="46"
              strokeDasharray="2 5"
            />
            <text className="big" x="263" y="216" textAnchor="middle">
              ≈8s
            </text>
            <text className="tick" x="263" y="238" textAnchor="middle">
              TO AN ANSWER
            </text>
            {/* annotation, hanging in the outer margin */}
            <line className="lead" x1="168" y1="108" x2="136" y2="108" />
            <text className="lbl" x="128" y="105" textAnchor="end">
              ACTION BUTTON
            </text>
            <text className="sub" x="128" y="122" textAnchor="end">
              One press, anywhere.
            </text>
            <line className="lead" x1="178" y1="266" x2="136" y2="266" />
            <circle className="fillcoral" cx="178" cy="266" r="3" />
            <text className="lbl" x="128" y="263" textAnchor="end">
              BACK TAP
            </text>
            <text className="sub" x="128" y="280" textAnchor="end">
              Two taps on the back.
            </text>
            {/* dimension line */}
            <line className="lead" x1="178" y1="430" x2="348" y2="430" />
            <line className="lead" x1="178" y1="424" x2="178" y2="436" />
            <line className="lead" x1="348" y1="424" x2="348" y2="436" />
            <text className="tick" x="263" y="448" textAnchor="middle">
              SET ONCE, THEN FORGOTTEN
            </text>
          </svg>
        </div>
        <div className="ed-press-right">
          {steps.map(([t, body], i) => (
            <div className="ed-step" key={t}>
              <span className="n">{i + 1}</span>
              <div>
                <h3>{t}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="ed-strip">
          <span className="ed-label" style={{ whiteSpace: "nowrap" }}>
            Anything you can screenshot
          </span>
          <div className="marks">
            {CHANNELS.map((c) => (
              <span key={c}>
                <img src={`/logos/${c}.svg`} alt="" width={17} height={17} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Anatomy() {
  const legend: [string, string, string][] = [
    [
      "A",
      "Hedged on purpose",
      "Three readings: looks like a scam, be careful, looks okay so far. Never a promise.",
    ],
    [
      "B",
      "The evidence trail",
      "The signs it found, named in plain English, so you can weigh them yourself.",
    ],
    [
      "C",
      "A next step",
      "What to do now, in order. Usually: go to the official app, not the link.",
    ],
  ];
  return (
    <section id="result" className="ed-anat">
      <div className="ed-wrap ed-grid">
        <SectionHead num="III." title="What comes back" aside="Plate, keyed" />
        <figure className="ed-anat-fig">
          <div className="ed-card">
            <div className="ed-card-head">
              <span className="ed-label">Check result</span>
              <span className="ed-label">Saved on this iPhone</span>
            </div>
            <div className="ed-card-sec">
              <span className="ed-key">A</span>
              <div className="ed-label" style={{ marginBottom: 9 }}>
                Verdict
              </div>
              <p className="ed-verdict">Looks like a scam.</p>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 14.5,
                  color: "#5C6979",
                  lineHeight: 1.5,
                }}
              >
                Several of the signs scammers rely on are in this one message.
              </p>
            </div>
            <div className="ed-card-sec">
              <span className="ed-key">B</span>
              <div className="ed-label" style={{ marginBottom: 8 }}>
                What stood out
              </div>
              <ul className="ed-evi">
                {[
                  "Urgency about a delivery you did not expect.",
                  "A link where the official app should be.",
                  "A sender address that is one character off.",
                ].map((t) => (
                  <li key={t}>
                    <span className="dot" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ed-card-sec">
              <span className="ed-key">C</span>
              <div className="ed-label" style={{ marginBottom: 8 }}>
                What to do next
              </div>
              <ol className="ed-todo">
                <li>Open the carrier’s official app and check there.</li>
                <li>Leave the link alone. Delete the message.</li>
              </ol>
            </div>
          </div>
          <figcaption style={{ marginTop: 14 }}>
            <span className="ed-fignum">Fig. 3</span>{" "}
            <span className="ed-cap">
              A result at full size. Every check is written to the phone, and to
              nowhere else.
            </span>
          </figcaption>
        </figure>
        <div className="ed-anat-legend">
          {legend.map(([k, t, b]) => (
            <div className="ed-note" key={k}>
              <span className="k">{k}</span>
              <div>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spread() {
  return (
    <section className="ed-spread">
      <div className="ed-wrap ed-grid">
        <SectionHead num="IV." title="The Deep Dive" aside="Optional" />
        <div className="ed-spread-h">
          <h3>
            One tap, and it <em>shows its work.</em>
          </h3>
          <p>
            A Deep Dive checks the claim against current public reporting and
            lists every source it read.
          </p>
        </div>
        <ol className="ed-endnotes">
          <li>
            <strong>Optional.</strong> The first read finishes without it.
          </li>
          <li>
            <strong>Linked.</strong> Each source is listed, and you can open
            every one yourself.
          </li>
          <li>
            <strong>Current.</strong> It reads what is being reported now, not a
            cached opinion.
          </li>
        </ol>
      </div>
    </section>
  );
}

function PrivacyNote() {
  const cols: [string, string][] = [
    [
      "You agree before anything is sent.",
      "Checking runs on our server and Google’s Gemini AI. The content is used for that check only, and the server does not keep it.",
    ],
    [
      "History stays on your iPhone.",
      "Results live on the device, protected by iOS. Delete any check, or all of them.",
    ],
    [
      "No account required.",
      "An anonymous device key enforces the daily limit. Signing in with Apple or Google is optional, and gives us only a first name and an email address.",
    ],
  ];
  const ledger: [string, string][] = [
    ["10", "free checks a day"],
    ["0", "ads, 0 data sold"],
    ["0", "tracking across other apps"],
    ["100%", "of saved checks stay on the phone"],
  ];
  return (
    <section id="privacy" className="ed-privacy">
      <div className="ed-wrap ed-grid">
        <SectionHead num="V." title="What leaves your phone" aside="A note on privacy" />
        <div className="ed-editorsnote">
          <span className="tag ed-label">Suspicious of us too? Good instinct.</span>
          <div className="ed-pcols">
            {cols.map(([t, b]) => (
              <div className="ed-pcol" key={t}>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <div className="ed-ledger">
            {ledger.map(([n, l]) => (
              <div key={l}>
                <span className="n">{n}</span>
                <span className="l">{l}</span>
              </div>
            ))}
          </div>
          <Link
            href="/privacy"
            className="ed-cta-alt"
            style={{ display: "inline-block", marginTop: 22 }}
          >
            Read the full privacy policy →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReplyCard() {
  return (
    <section className="ed-cardcta">
      <div className="ed-wrap ed-grid">
        <div className="ed-insert">
          <span className="ed-endmark" aria-hidden />
          <h2>
            The beta is <em>small on purpose.</em>
          </h2>
          <p>
            Smells Phishy is a private iPhone beta while we get it right. Ask
            for an invite and we will save you a spot.
          </p>
          <a className="ed-btn" href={BETA}>
            Request an invite
          </a>
          <p className="fine">Ten checks a day. No account required. Sign in only if you want to.</p>
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="ed-foot">
      <div className="ed-wrap">
        <div className="ed-foot-row">
          <Link href="/" className="ed-wordmark" style={{ justifyContent: "flex-start" }}>
            <img src="/assets/fishy-logo.png" alt="" width={22} height={22} />
            <span style={{ fontSize: 15 }}>Smells Phishy</span>
          </Link>
          <span className="ed-folio">· 1 ·</span>
          <div className="ed-foot-links">
            <Link className="ed-navlink" href="/privacy">
              Privacy policy
            </Link>
            <a className="ed-navlink" href={BETA}>
              Contact
            </a>
          </div>
        </div>
        <p className="ed-colophon">
          Note. Smells Phishy points out warning signs. It cannot guarantee that
          content is safe or fraudulent. Always verify important requests
          through an official source. © 2026 Smells Phishy.
        </p>
      </div>
    </footer>
  );
}

export default function EditorialLanding() {
  return (
    <div className={`ed ${editorialSerif.variable}`}>
      <Masthead />
      <Opening />
      <Problem />
      <PullQuote />
      <OnePress />
      <Anatomy />
      <Spread />
      <PrivacyNote />
      <ReplyCard />
      <Colophon />
    </div>
  );
}
