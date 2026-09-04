// Landing variant 03 — Stripe.com construction.
// Source lives in src/app/variants/03-stripe/ with its own README.
import {
  Nav,
  Hero,
  Channels,
  TheAnswer,
  OnePress,
  DeepDive,
  Features,
  Privacy,
  FinalCTA,
  Footer,
  ScrollFx,
} from "./variants/03-stripe/sections";

export default function Home() {
  return (
    <div className="sp-page">
      <Nav />
      <Hero />
      <Channels />
      <TheAnswer />
      <OnePress />
      <DeepDive />
      <Features />
      <Privacy />
      <FinalCTA />
      <Footer />
      <ScrollFx />
    </div>
  );
}
