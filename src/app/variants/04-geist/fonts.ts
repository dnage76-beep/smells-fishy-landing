// Geist and Geist Mono are Vercel's own faces and are on Google Fonts, so the
// variant can load them itself rather than editing the shared root layout.
// They are scoped to this page by putting the two variables on its root div.
import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
