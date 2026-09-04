// Landing variant 04 — Vercel / Geist construction.
// Source lives in src/app/variants/04-geist/ with its own README.
import { geistMono, geistSans } from "./variants/04-geist/fonts";
import {
  Nav,
  Hero,
  TheResult,
  OnePress,
  WhatItReads,
  DeepDive,
  Privacy,
  FinalCTA,
  Footer,
  ScrollFx,
} from "./variants/04-geist/sections";

export default function Home() {
  return (
    <div className={`gs-page ${geistSans.variable} ${geistMono.variable}`}>
      <Nav />
      <Hero />
      <TheResult />
      <OnePress />
      <WhatItReads />
      <DeepDive />
      <Privacy />
      <FinalCTA />
      <Footer />
      <ScrollFx />
    </div>
  );
}
