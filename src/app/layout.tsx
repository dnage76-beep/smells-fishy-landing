import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmellsFishy — Protect your family from scams.",
  description:
    "SmellsFishy protects you and the people you love from scams, phishing texts, deepfakes, misinformation, and fake headlines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body style={{ margin: 0, background: "#000", color: "#fff", fontFamily: '"Inter Tight", system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
