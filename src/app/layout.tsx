import type { Metadata } from "next";
import { Fredoka, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Fredoka({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const body = Inter_Tight({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smells Phishy — Check something suspicious",
  description:
    "Screenshot a text, snap a photo, or paste a message. Smells Phishy points out scam warning signs in plain English, with a clear next step. Private iPhone beta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body
        style={{
          margin: 0,
          background: "#081433",
          color: "#F5F0E1",
          fontFamily: "var(--font-body), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
