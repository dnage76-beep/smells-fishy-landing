import "./variants/02-linear/linear.css";
import {
  Nav,
  Hero,
  Stats,
  OnePress,
  TheResult,
  DeepDive,
  Privacy,
  FinalCTA,
  Footer,
} from "./variants/02-linear/sections";

export default function Home() {
  return (
    <div className="l-page">
      <Nav />
      <Hero />
      <div className="l-mid">
        <div className="l-rules l-mid-rules" aria-hidden />
        <Stats />
        <OnePress />
        <TheResult />
        <DeepDive />
        <Privacy />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
}
