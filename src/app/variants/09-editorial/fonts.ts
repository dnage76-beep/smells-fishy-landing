import { Bodoni_Moda } from "next/font/google";

// A true Didone for the display face. The editorial construction needs
// hairline-to-stem contrast at 100px+, which Fredoka cannot give.
export const editorialSerif = Bodoni_Moda({
  variable: "--font-editorial-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
