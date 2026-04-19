"use client";

import { useEffect, useRef, useState } from "react";

const BRAND_COLORS: Record<string, string> = {
  imessage: "#34C759",
  whatsapp: "#25D366",
  messenger: "#006AFF",
  telegram: "#26A5E4",
  signal: "#3A76F0",
  discord: "#5865F2",
  facebook: "#1877F2",
  instagram: "#E4405F",
  tiktok: "#FFFFFF",
  x: "#FFFFFF",
  snapchat: "#FFFC00",
  reddit: "#FF4500",
  linkedin: "#0A66C2",
  youtube: "#FF0000",
  chrome: "#4285F4",
  safari: "#1E88E5",
  edge: "#0FA4D4",
  firefox: "#FF7139",
  brave: "#FF2000",
};

const LOGO_ORDER = [
  "imessage",
  "whatsapp",
  "messenger",
  "telegram",
  "signal",
  "discord",
  "facebook",
  "instagram",
  "tiktok",
  "x",
  "snapchat",
  "reddit",
  "youtube",
  "chrome",
  "safari",
  "firefox",
  "brave",
];

const LOGO_LABELS: Record<string, string> = {
  imessage: "iMessage",
  whatsapp: "WhatsApp",
  messenger: "Messenger",
  telegram: "Telegram",
  signal: "Signal",
  discord: "Discord",
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
  snapchat: "Snapchat",
  reddit: "Reddit",
  youtube: "YouTube",
  chrome: "Chrome",
  safari: "Safari",
  firefox: "Firefox",
  brave: "Brave",
};

function LogoMark({ slug }: { slug: string }) {
  const [svg, setSvg] = useState("");
  useEffect(() => {
    fetch(`/logos/${slug}.svg`)
      .then((r) => r.text())
      .then(setSvg)
      .catch(() => setSvg(""));
  }, [slug]);
  const color = BRAND_COLORS[slug] || "#fff";
  return (
    <div
      className="logo-mark"
      data-slug={slug}
      style={
        {
          "--brand": color,
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        } as React.CSSProperties
      }
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function LogoMarquee() {
  const doubled = [...LOGO_ORDER, ...LOGO_ORDER];
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 0",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto 32px",
          padding: "0 48px",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            textTransform: "uppercase",
            fontSize: 11,
            letterSpacing: "0.16em",
            color: "#a3a3a3",
          }}
        >
          It works everywhere scams arrive
        </div>
        <div
          style={{
            color: "#6b6b6b",
            fontSize: 13,
            fontFamily: '"JetBrains Mono", monospace',
            letterSpacing: "0.12em",
          }}
        >
          IT WORKS EVERYWHERE
        </div>
      </div>

      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: 64,
          width: "max-content",
          animation: "marqueeScroll 50s linear infinite",
          animationPlayState: visible ? "running" : "paused",
        }}
      >
        {doubled.map((slug, i) => (
          <div
            key={`${slug}-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "8px 0",
            }}
          >
            <LogoMark slug={slug} />
            <span
              className="logo-label"
              style={{
                color: "#737373",
                fontSize: 15,
                fontFamily: '"Inter Tight", system-ui',
                fontWeight: 500,
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              {LOGO_LABELS[slug]}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 120,
          background: "linear-gradient(to right, #000 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 120,
          background: "linear-gradient(to left, #000 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </section>
  );
}
