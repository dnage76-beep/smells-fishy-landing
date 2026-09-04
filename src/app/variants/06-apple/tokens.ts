// Shared tokens for variant 06. Apple product pages run on a very small
// palette: near-black, two greys, white, one accent blue, and one grey for
// secondary copy. The brand's action blue takes the place of Apple's blue;
// the brand navy is kept for the device screens so the product still reads as
// Smells Phishy.
export const A = {
  black: "#000000",
  white: "#FFFFFF",
  grey: "#F5F5F7",
  onDark: "#F5F5F7",
  onDarkDim: "#86868B",
  onLight: "#1D1D1F",
  onLightDim: "#6E6E73",
  blue: "#1C5CF7",
  blueDim: "#5B8CFF",
  hairDark: "rgba(255,255,255,0.16)",
  hairLight: "rgba(0,0,0,0.13)",
  // product colours, used only inside the device screens and the logo
  navy: "#081433",
  deep: "#0D266B",
  cream: "#F5F0E1",
  coral: "#FF6B5E",
  danger: "#C81E1E",
};

// Inter Tight, already loaded by the root layout, stands in for SF Pro.
export const SANS = "var(--font-body), -apple-system, BlinkMacSystemFont, system-ui, sans-serif";
export const DISPLAY = "var(--font-display), system-ui, sans-serif";

export const BETA_MAILTO = "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";
