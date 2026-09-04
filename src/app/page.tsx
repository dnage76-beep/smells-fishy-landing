import {
  Nav,
  Hero,
  StakesBand,
  HowItWorks,
  DeeperLook,
  SiriSection,
  PrivacySection,
  FinalCTA,
  Footer,
} from "./components/site";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <StakesBand />
      <HowItWorks />
      <DeeperLook />
      <SiriSection />
      <PrivacySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
