// Fine 1.5px stroke icons, drawn on a 24 grid so every terminal lands on a
// half pixel boundary at 20px. No emoji, no illustration.
type P = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const IconClock = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconLayers = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M12 3.5 3.5 8 12 12.5 20.5 8 12 3.5Z" />
    <path d="M3.5 12.5 12 17l8.5-4.5" />
    <path d="M3.5 16.5 12 21l8.5-4.5" />
  </svg>
);

export const IconPhoneLock = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <rect x="6" y="2.75" width="12" height="18.5" rx="3" />
    <path d="M10.2 12.5h3.6v3.2h-3.6z" />
    <path d="M10.9 12.5v-1.1a1.1 1.1 0 0 1 2.2 0v1.1" />
  </svg>
);

export const IconKey = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <circle cx="8" cy="12" r="3.6" />
    <path d="M11.6 12H21" />
    <path d="M17.6 12v3.2" />
    <path d="M20.2 12v2.2" />
  </svg>
);

export const IconLink = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M10.2 13.8a3.6 3.6 0 0 0 5.1 0l2.9-2.9a3.6 3.6 0 0 0-5.1-5.1l-1.3 1.3" />
    <path d="M13.8 10.2a3.6 3.6 0 0 0-5.1 0l-2.9 2.9a3.6 3.6 0 0 0 5.1 5.1l1.3-1.3" />
  </svg>
);

export const IconTrash = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M4.5 6.5h15" />
    <path d="M9.5 6.5V4.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.7" />
    <path d="M6.5 6.5 7.4 19a1.2 1.2 0 0 0 1.2 1.1h6.8a1.2 1.2 0 0 0 1.2-1.1l.9-12.5" />
    <path d="M10.4 10v6M13.6 10v6" />
  </svg>
);

export const IconShield = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M12 3 5 5.8v5.4c0 4.2 2.8 7.6 7 9.3 4.2-1.7 7-5.1 7-9.3V5.8L12 3Z" />
    <path d="m9.2 11.9 2 2 3.6-3.9" />
  </svg>
);

export const IconArrow = ({ size = 15 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <path d="M5 12h13" />
    <path d="m13 7 5 5-5 5" />
  </svg>
);

export const IconFlag = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M6 21V4" />
    <path d="M6 4.8h10.6l-1.7 3.6 1.7 3.6H6" />
  </svg>
);

export const IconEye = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M2.8 12S6.4 5.8 12 5.8 21.2 12 21.2 12 17.6 18.2 12 18.2 2.8 12 2.8 12Z" />
    <circle cx="12" cy="12" r="2.9" />
  </svg>
);
