/* eslint-disable @next/next/no-img-element */
// 10-notion. Notion's construction, all the way down: 45px topbar with a
// breadcrumb, cover with the page icon overlapping it, a 708px content
// column, page properties, a table of contents, headings that read like a
// document, callouts, a toggle, to-dos, simple tables, a gallery view, a
// column list, dividers everywhere. The page teaches; layout does the work
// that illustration would do in a real Notion page.
import Link from "next/link";
import "./notion.css";
import {
  IconCheck,
  IconDoc,
  IconClock,
  IconLink,
  IconLock,
  IconNumber,
  IconPhone,
  IconSearch,
  IconSelect,
  IconText,
  IconTri,
  IconWarn,
} from "./icons";

const BETA =
  "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";

function Divider() {
  return (
    <div className="nt-div" aria-hidden>
      <span />
    </div>
  );
}

const SECTIONS: [string, string][] = [
  ["What it does", "#what"],
  ["One press", "#how"],
  ["What comes back", "#result"],
  ["Deep Dive", "#deep"],
  ["Where it works", "#where"],
  ["Privacy", "#privacy"],
  ["The problem, in numbers", "#numbers"],
];

function Sidebar() {
  return (
    <aside className="nt-side" aria-label="Pages">
      <div className="nt-side-inner">
      <Link href="/" className="nt-side-head">
        <img src="/assets/fishy-logo.png" alt="" width={20} height={20} />
        <span>Smells Phishy</span>
      </Link>
      <nav className="nt-tree">
        <Link href="/" className="active">
          <img src="/assets/fishy-logo.png" alt="" width={16} height={16} />
          Check something suspicious
        </Link>
        {SECTIONS.map(([label, href]) => (
          <a key={href} href={href} className="child">
            <IconDoc />
            {label}
          </a>
        ))}
        <div className="grp">Elsewhere</div>
        <Link href="/privacy">
          <IconLock />
          Privacy Policy
        </Link>
        <a href={BETA}>
          <IconLink />
          Contact
        </a>
      </nav>
      <div className="nt-side-foot">
        <a className="nt-btn" href={BETA}>
          Request an invite
        </a>
      </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <div className="nt-topbar">
      <Link href="/" className="nt-crumb">
        <img src="/assets/fishy-logo.png" alt="" width={16} height={16} />
        <span>Smells Phishy</span>
        <span className="sep nt-hide-sm">/</span>
        <span className="dim nt-hide-sm">Check something suspicious</span>
      </Link>
      <div className="nt-bar-right">
        <a className="nt-ghost nt-hide-sm" href="#how">
          How it works
        </a>
        <a className="nt-ghost nt-hide-sm" href="#privacy">
          Privacy
        </a>
        <a className="nt-btn" href={BETA}>
          Request an invite
        </a>
      </div>
    </div>
  );
}

function Properties() {
  const rows: [React.ReactNode, string, React.ReactNode][] = [
    [<IconPhone key="i" />, "Platform", <span key="v">iPhone</span>],
    [
      <IconSelect key="i" />,
      "Status",
      <span key="v" className="nt-pill blue">
        Private beta
      </span>,
    ],
    [
      <IconSelect key="i" />,
      "Account",
      <>
        <span key="v" className="nt-pill gray">
          Not required
        </span>
        <span key="v2" style={{ color: "var(--ink-2)" }}>
          Sign in with Apple or Google if you want to
        </span>
      </>,
    ],
    [
      <IconNumber key="i" />,
      "Cost",
      <span key="v">Free while in beta, 10 checks a day</span>,
    ],
    [
      <IconClock key="i" />,
      "Time to an answer",
      <span key="v">About 8 seconds</span>,
    ],
    [
      <IconLock key="i" />,
      "History",
      <span key="v">Saved on your iPhone only</span>,
    ],
  ];
  return (
    <div className="nt-props">
      {rows.map(([icon, k, v]) => (
        <div className="nt-prop" key={k}>
          <div className="k">
            {icon}
            {k}
          </div>
          <div className="v">{v}</div>
        </div>
      ))}
    </div>
  );
}

function Contents() {
  const items: [string, string, number][] = [
    ["What it does", "#what", 1],
    ["One press", "#how", 1],
    ["What comes back", "#result", 1],
    ["The verdict", "#verdict", 2],
    ["What stood out", "#stood-out", 2],
    ["What to do next", "#next", 2],
    ["Deep Dive", "#deep", 1],
    ["Where it works", "#where", 1],
    ["Privacy", "#privacy", 1],
    ["The problem, in numbers", "#numbers", 1],
    ["Get the beta", "#beta", 1],
  ];
  return (
    <nav className="nt-toc" aria-label="On this page">
      {items.map(([label, href, lvl], i) => (
        <a key={`${label}-${i}`} href={href} className={lvl === 2 ? "lvl2" : ""}>
          {label}
        </a>
      ))}
    </nav>
  );
}

function WhatItDoes() {
  return (
    <>
      <h2 className="nt-h1" id="what">
        What it does
      </h2>
      <p className="nt-p dim">
        You do not have to know what a scam looks like. The app names the signs
        it found, and you decide.
      </p>
      <ul className="nt-list">
        {[
          <>
            Reads a screenshot, a photo of a screen, a pasted message, or a
            link.
          </>,
          <>
            Answers with a hedged verdict, the signs it found, and a next step.
          </>,
          <>
            Saves the check on your iPhone. Nothing is kept on the server
            afterward.
          </>,
        ].map((n, i) => (
          <li key={i}>
            <span className="mk">
              <span className="bullet" />
            </span>
            <span>{n}</span>
          </li>
        ))}
      </ul>
      <div className="nt-callout gray">
        <span className="ic">
          <IconWarn />
        </span>
        <div>
          <p>
            <strong>It reads for signs, not for certainty.</strong> A verdict is
            always hedged, and every one of them can be wrong.
          </p>
        </div>
      </div>
    </>
  );
}

function OnePress() {
  const steps: React.ReactNode[] = [
    <>
      Set the <code className="nt-code">Action Button</code> or a{" "}
      <code className="nt-code">Back Tap</code> once. It stays set.
    </>,
    <>
      Press it anywhere on the phone. Or say{" "}
      <code className="nt-code">Check my clipboard with Smells Phishy</code>.
    </>,
    <>About 8 seconds later, the answer is on screen.</>,
  ];
  return (
    <>
      <h2 className="nt-h1" id="how">
        One press
      </h2>
      <p className="nt-p dim">
        The whole point is that you do not open an app to use it.
      </p>
      <ol className="nt-list num">
        {steps.map((s, i) => (
          <li key={i}>
            <span className="mk">{i + 1}.</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <div className="nt-callout blue">
        <span className="ic" style={{ color: "var(--blue-tx)" }}>
          <IconLock />
        </span>
        <div>
          <p>
            <strong>Nothing is sent until you approve it.</strong> The app shows
            you what it is about to check first.
          </p>
        </div>
      </div>
    </>
  );
}

function Result() {
  const verdicts: [string, string, string, React.ReactNode][] = [
    [
      "Looks like a scam",
      "coral",
      "Several of the signs scammers rely on.",
      <IconWarn key="i" />,
    ],
    [
      "Be careful",
      "amber",
      "Something is off, but it is not conclusive.",
      <IconSearch key="i" />,
    ],
    [
      "Looks okay so far",
      "green",
      "Nothing stood out. Still your call.",
      <IconCheck key="i" />,
    ],
  ];
  return (
    <>
      <h2 className="nt-h1" id="result">
        What comes back
      </h2>
      <p className="nt-p dim">
        The same three blocks, every time, in the same order.
      </p>

      <h3 className="nt-h2" id="verdict">
        The verdict
      </h3>
      <div className="nt-callout coral">
        <span className="ic" style={{ color: "var(--coral-tx)" }}>
          <IconWarn />
        </span>
        <div>
          <p>
            <strong>Looks like a scam.</strong>
          </p>
          <p style={{ color: "var(--ink-2)" }}>
            Several of the signs scammers rely on are in this one message.
          </p>
        </div>
      </div>

      <div className="nt-cols2">
        <div>
          <h3 className="nt-h2" id="stood-out">
            What stood out
          </h3>
          <ul className="nt-list">
            {[
              "Urgency about a delivery you did not expect.",
              "A link where the official app should be.",
              "A sender address that is one character off.",
            ].map((t) => (
              <li key={t}>
                <span className="mk">
                  <span className="bullet" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="nt-h2" id="next">
            What to do next
          </h3>
          <ul className="nt-todo">
            {[
              "Open the carrier\u2019s official app and check there.",
              "Leave the link alone, then delete the message.",
            ].map((t) => (
              <li key={t}>
                <span>
                  <span className="box" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="nt-h2">Three readings</h3>
      <div className="nt-gallery">
        {verdicts.map(([name, tone, note, glyph]) => (
          <div className="nt-card" key={name}>
            <div
              className="strip"
              style={{
                background: `var(--${tone}-bg)`,
                color: `var(--${tone}-tx)`,
              }}
            >
              {glyph}
            </div>
            <div className="body">
              <h4>{name}</h4>
              <p>{note}</p>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="nt-quote">
        It points out warning signs. It does not pretend to see the future.
        <cite>The rule the app is built on</cite>
      </blockquote>
    </>
  );
}

function DeepDive() {
  return (
    <>
      <h2 className="nt-h1" id="deep">
        Deep Dive
      </h2>
      <p className="nt-p dim">
        Optional. One tap when you want the app to go further than the message
        in front of it.
      </p>
      <details className="nt-toggle" open>
        <summary>
          <span className="tri">
            <IconTri />
          </span>
          <span>What a Deep Dive adds</span>
        </summary>
        <div className="inner">
          <ul className="nt-list">
            {[
              "Checks the claim against current public reporting.",
              "Lists every source it read, with links you can open yourself.",
              "Runs only when you ask. The first answer finishes without it.",
            ].map((t) => (
              <li key={t}>
                <span className="mk">
                  <span className="bullet" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>
      <div className="nt-callout gray">
        <span className="ic">
          <IconSearch />
        </span>
        <div>
          <p>
            You can read what it read. A verdict you cannot check is just
            another stranger telling you what to think.
          </p>
        </div>
      </div>
    </>
  );
}

const CHANNELS: [string, string, string, string][] = [
  ["Messages", "imessage", "Messaging", "Screenshot or paste"],
  ["WhatsApp", "whatsapp", "Messaging", "Screenshot or paste"],
  ["Instagram", "instagram", "Social", "Screenshot the DM"],
  ["Facebook", "facebook", "Social", "Screenshot the post"],
  ["Safari", "safari", "Browser", "Paste the link"],
  ["Chrome", "chrome", "Browser", "Paste the link"],
  ["Telegram", "telegram", "Messaging", "Screenshot or paste"],
  ["LinkedIn", "linkedin", "Social", "Screenshot the message"],
];

function Where() {
  const tone: Record<string, string> = {
    Messaging: "blue",
    Social: "cream",
    Browser: "gray",
  };
  return (
    <>
      <h2 className="nt-h1" id="where">
        Where it works
      </h2>
      <p className="nt-p dim">
        Anywhere you can take a screenshot. These are the ones people bring in
        most.
      </p>
      <div className="nt-tablewrap">
        <table className="nt-table">
          <thead>
            <tr>
              <th>
                <span className="th">
                  <IconText />
                  Name
                </span>
              </th>
              <th className="col-sm">
                <span className="th">
                  <IconSelect />
                  Kind
                </span>
              </th>
              <th>
                <span className="th">
                  <IconText />
                  How you send it
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {CHANNELS.map(([name, slug, kind, how]) => (
              <tr key={name}>
                <td className="name">
                  <span>
                    <img src={`/logos/${slug}.svg`} alt="" width={16} height={16} />
                    {name}
                  </span>
                </td>
                <td className="col-sm">
                  <span className={`nt-pill ${tone[kind]}`}>{kind}</span>
                </td>
                <td>{how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="nt-cap">
        Email, listings, pop-ups and anything else on screen work the same way.
      </p>
    </>
  );
}

function Privacy() {
  return (
    <>
      <h2 className="nt-h1" id="privacy">
        Privacy
      </h2>
      <p className="nt-p dim">
        Suspicious of us too? Good instinct. Here is the whole of it.
      </p>
      <div className="nt-tablewrap">
        <table className="nt-table">
          <thead>
            <tr>
              <th>
                <span className="th">
                  <IconText />
                  What
                </span>
              </th>
              <th>
                <span className="th">
                  <IconLink />
                  Where it goes
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">The content you approve</td>
              <td>
                Our server and Google&apos;s Gemini AI, for that one check. The
                server does not keep it afterward.
              </td>
            </tr>
            <tr>
              <td className="name">Your history</td>
              <td>
                Your iPhone, protected by iOS. Delete any check, or all of them.
              </td>
            </tr>
            <tr>
              <td className="name">You, by default</td>
              <td>
                An anonymous device key in your iPhone&apos;s Keychain, so the
                daily limit works. No account required.
              </td>
            </tr>
            <tr>
              <td className="name">If you sign in</td>
              <td>
                Optional, and everything works without it. Apple or Google gives
                us a first name and an email address. Nothing else.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="nt-callout cream">
        <span className="ic" style={{ color: "var(--cream-tx)" }}>
          <IconLock />
        </span>
        <div>
          <p>
            <strong>No ads. No data sold. No tracking across other apps.</strong>
          </p>
          <p style={{ color: "var(--ink-2)" }}>
            The full policy is short, and it mirrors what the app does.{" "}
            <Link href="/privacy" className="nt-link blue">
              Read the privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

function Numbers() {
  const stats: [string, string][] = [
    ["$20.9B", "reported lost to internet crime in 2025"],
    ["1,008,597", "complaints filed with the FBI in one year"],
    ["$7.75B", "of it reported by people over 60"],
  ];
  return (
    <>
      <h2 className="nt-h1" id="numbers">
        The problem, in numbers
      </h2>
      <div className="nt-cols">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="n">{n}</div>
            <p>{l}</p>
          </div>
        ))}
      </div>
      <p className="nt-cap">
        Source:{" "}
        <a
          className="nt-link"
          href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          FBI IC3 2025 Internet Crime Report
        </a>
        . Reported figures only. The real totals are higher, because most scams
        are never reported.
      </p>
    </>
  );
}

function Beta() {
  return (
    <>
      <h2 className="nt-h1" id="beta">
        Get the beta
      </h2>
      <div className="nt-callout blue">
        <span className="ic" style={{ color: "var(--blue-tx)" }}>
          <IconPhone />
        </span>
        <div style={{ width: "100%" }}>
          <p>
            <strong>The beta is small on purpose.</strong>
          </p>
          <p style={{ color: "var(--ink-2)" }}>
            Smells Phishy is a private iPhone beta while we get it right. Ask
            for an invite and we will save you a spot.
          </p>
          <p style={{ marginTop: 12 }}>
            <a className="nt-btn lg" href={BETA}>
              Request an invite
            </a>
          </p>
        </div>
      </div>
      <ul className="nt-todo">
        {[
          "No account required.",
          "Ten free checks a day.",
          "Signing in with Apple or Google is optional.",
        ].map((t) => (
          <li key={t}>
            <span>
              <span className="box on">
                <IconCheck />
              </span>
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function Foot() {
  return (
    <footer className="nt-foot">
      <div className="nt-foot-row">
        <img src="/assets/fishy-logo.png" alt="" width={18} height={18} />
        <span style={{ color: "var(--ink)", fontWeight: 500 }}>
          Smells Phishy
        </span>
        <Link href="/privacy" className="nt-link">
          Privacy Policy
        </Link>
        <a href={BETA} className="nt-link">
          Contact
        </a>
      </div>
      <p>
        Smells Phishy points out warning signs. It cannot guarantee that content
        is safe or fraudulent. Always verify important requests through an
        official source. © 2026 Smells Phishy.
      </p>
    </footer>
  );
}

export default function NotionLanding() {
  return (
    <div className="nt">
      <Sidebar />
      <div className="nt-main">
        <Topbar />
        <div className="nt-cover" aria-hidden />
        <div className="nt-page">
        <img
          className="nt-icon"
          src="/assets/fishy-logo.png"
          alt=""
          width={78}
          height={78}
        />
        <h1 className="nt-title">Check something suspicious.</h1>
        <p className="nt-lede">
          An iPhone app that reads a suspicious text, email, link or screenshot
          and tells you what stood out. One press, about eight seconds.
        </p>
        <Properties />
        <Divider />
        <Contents />
        <Divider />
        <WhatItDoes />
        <Divider />
        <OnePress />
        <Divider />
        <Result />
        <Divider />
        <DeepDive />
        <Divider />
        <Where />
        <Divider />
        <Privacy />
        <Divider />
        <Numbers />
        <Divider />
          <Beta />
          <Foot />
        </div>
      </div>
    </div>
  );
}
