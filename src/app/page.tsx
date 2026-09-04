import "./variants/01-glass/glass.css";
import { Field } from "./variants/01-glass/field";
import {
  Nav,
  Hero,
  StatRail,
  OnePress,
  TheAnswer,
  DeepDive,
  Privacy,
  FinalCTA,
  Footer,
} from "./variants/01-glass/sections";

export default function Home() {
  return (
    <div className="g-page">
      <Field />
      <div className="g-content">
        <Nav />
        <Hero />
        <StatRail />
        <OnePress />
        <TheAnswer />
        <DeepDive />
        <Privacy />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
