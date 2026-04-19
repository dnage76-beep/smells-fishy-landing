import { Nav, Hero, HowItWorks, SocialProof, Privacy, FinalCTA, Footer } from "./components/sections";
import { PinnedDemo } from "./components/pinned-demo";
import { LogoMarquee } from "./components/logo-marquee";

export default function Home() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <Nav />
      <Hero />
      <PinnedDemo />
      <LogoMarquee />
      <HowItWorks />
      <SocialProof />
      <Privacy />
      <FinalCTA />
      <Footer />
    </div>
  );
}
