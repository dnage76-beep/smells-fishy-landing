// Notion's inline glyphs are 14 to 17px line icons on a 16px grid.
// Geometry only, no illustration.
type P = { className?: string };

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconText(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <path d="M2.8 4.4h10.4M2.8 8h10.4M2.8 11.6h6.6" />
    </svg>
  );
}
export function IconSelect(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <circle cx="8" cy="8" r="5.6" />
      <path d="M5.9 7.1 8 9.2l2.1-2.1" />
    </svg>
  );
}
export function IconNumber(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <path d="M6.4 2.6 4.8 13.4M11.2 2.6 9.6 13.4M3 6h10.2M2.4 10h10.2" />
    </svg>
  );
}
export function IconClock(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.6V8l2.4 1.5" />
    </svg>
  );
}
export function IconWarn(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <path d="M8 2.3 14.6 13.6H1.4z" />
      <path d="M8 6.4v3.1" />
      <circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconLock(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <rect x="3.4" y="7" width="9.2" height="6.6" rx="1.6" />
      <path d="M5.6 7V5.1a2.4 2.4 0 0 1 4.8 0V7" />
    </svg>
  );
}
export function IconCheck(p: P) {
  return (
    <svg {...base} {...p} strokeWidth={2} aria-hidden>
      <path d="M3 8.3 6.3 11.6 13 4.9" />
    </svg>
  );
}
export function IconSearch(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <circle cx="7" cy="7" r="4.4" />
      <path d="M10.3 10.3 14 14" />
    </svg>
  );
}
export function IconPhone(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <rect x="4.4" y="1.6" width="7.2" height="12.8" rx="1.8" />
      <path d="M7 3.4h2" />
    </svg>
  );
}
export function IconLink(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <path d="M6.7 9.3a2.6 2.6 0 0 0 3.7 0l2-2a2.6 2.6 0 0 0-3.7-3.7l-.8.8" />
      <path d="M9.3 6.7a2.6 2.6 0 0 0-3.7 0l-2 2a2.6 2.6 0 0 0 3.7 3.7l.8-.8" />
    </svg>
  );
}
export function IconTri(p: P) {
  return (
    <svg viewBox="0 0 12 12" {...p} aria-hidden>
      <path d="M3.5 1.6 9.4 6l-5.9 4.4z" fill="currentColor" />
    </svg>
  );
}
export function IconDoc(p: P) {
  return (
    <svg {...base} {...p} aria-hidden>
      <path d="M9 1.8H4.6a1.4 1.4 0 0 0-1.4 1.4v9.6a1.4 1.4 0 0 0 1.4 1.4h6.8a1.4 1.4 0 0 0 1.4-1.4V5.4z" />
      <path d="M9 1.8v3.6h3.8" />
    </svg>
  );
}
