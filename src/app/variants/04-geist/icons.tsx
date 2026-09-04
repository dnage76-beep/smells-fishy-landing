// Hairline glyphs. 1.2px stroke on a 24 grid, currentColor only. Nothing is
// filled, nothing is coloured: on this page structure is carried by rules.
type P = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const IconText = ({ size = 22 }: P) => (
  <svg {...base(size)}>
    <path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 16H9.5L5 19.5V16h-1a.5.5 0 0 1-.5-.5Z" />
    <path d="M7.5 8.5h9M7.5 11.8h5.5" />
  </svg>
);

export const IconMail = ({ size = 22 }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.6 7 7.5 5.4a1.6 1.6 0 0 0 1.8 0L20.4 7" />
  </svg>
);

export const IconLink = ({ size = 22 }: P) => (
  <svg {...base(size)}>
    <path d="M10.2 13.8a3.6 3.6 0 0 0 5.1 0l2.9-2.9a3.6 3.6 0 0 0-5.1-5.1l-1.3 1.3" />
    <path d="M13.8 10.2a3.6 3.6 0 0 0-5.1 0l-2.9 2.9a3.6 3.6 0 0 0 5.1 5.1l1.3-1.3" />
  </svg>
);

export const IconFrame = ({ size = 22 }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <path d="m3.4 15.6 4.4-4a1.6 1.6 0 0 1 2.1 0l4 3.6" />
    <path d="m13.6 13.2 2-1.7a1.6 1.6 0 0 1 2.1 0l2.9 2.6" />
    <circle cx="9" cy="9" r="1.4" />
  </svg>
);

export const IconArrow = ({ size = 14 }: P) => (
  <svg {...base(size)} strokeWidth={1.6}>
    <path d="M4 12h15" />
    <path d="m13.5 6.5 5.5 5.5-5.5 5.5" />
  </svg>
);

/* --- the three ways in, drawn rather than iconified --- */

export const DiagramActionButton = () => (
  <svg width="88" height="137" viewBox="0 0 72 112" fill="none" aria-hidden>
    <rect x="16.5" y="4.5" width="46" height="103" rx="10" stroke="#3a3a3a" strokeWidth="1" />
    <rect x="21.5" y="9.5" width="36" height="93" rx="6" stroke="#242424" strokeWidth="1" />
    <path d="M32 28h16M32 36h24M32 44h12" stroke="#3a3a3a" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="13" y="28" width="3.5" height="17" rx="1.75" fill="#ededed" />
    <rect x="13" y="52" width="3.5" height="11" rx="1.75" fill="#3a3a3a" />
    <rect x="13" y="68" width="3.5" height="11" rx="1.75" fill="#3a3a3a" />
    <path d="M11 36.5H1" stroke="#ededed" strokeWidth="1" strokeDasharray="2 3" />
  </svg>
);

export const DiagramBackTap = () => (
  <svg width="88" height="137" viewBox="0 0 72 112" fill="none" aria-hidden>
    <rect x="16.5" y="4.5" width="46" height="103" rx="10" stroke="#3a3a3a" strokeWidth="1" />
    <rect x="24.5" y="12.5" width="14" height="14" rx="4" stroke="#3a3a3a" strokeWidth="1" />
    <circle cx="31.5" cy="19.5" r="3" stroke="#3a3a3a" strokeWidth="1" />
    <circle cx="42" cy="62" r="8.5" stroke="#ededed" strokeWidth="1.2" />
    <circle cx="42" cy="62" r="15" stroke="#ededed" strokeWidth="1" strokeOpacity="0.55" />
    <circle cx="42" cy="62" r="21.5" stroke="#ededed" strokeWidth="1" strokeOpacity="0.25" />
    <circle cx="42" cy="62" r="2.6" fill="#ededed" />
  </svg>
);

export const DiagramShare = () => (
  <svg width="88" height="137" viewBox="0 0 72 112" fill="none" aria-hidden>
    <rect x="16.5" y="4.5" width="46" height="103" rx="10" stroke="#3a3a3a" strokeWidth="1" />
    <rect x="16.5" y="62.5" width="46" height="45" rx="10" fill="#131313" stroke="#3a3a3a" strokeWidth="1" />
    <path d="M26 74h27M26 82h20M26 90h24" stroke="#3a3a3a" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M39.5 46V22" stroke="#ededed" strokeWidth="1.4" strokeLinecap="round" />
    <path d="m32.5 29 7-7 7 7" stroke="#ededed" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 40v8h21v-8" stroke="#3a3a3a" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
