import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ScalingBarrierSection } from "@/components/landing/scaling-barrier-section";
import { GrowthOSSection } from "@/components/landing/growth-os-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { StartNowSection } from "@/components/landing/start-now-section";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ScalingBarrierSection />
      <GrowthOSSection />
      <WhyUsSection />
      <StartNowSection />
      <Footer />
    </main>
  );
}
