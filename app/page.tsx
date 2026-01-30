import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { DataStrategySection } from "@/components/landing/data-strategy-section";
import { RevenueOptimizationSection } from "@/components/landing/revenue-optimization-section";
import { MindsetShiftSection } from "@/components/landing/mindset-shift-section";
import { UnifiedManagementSection } from "@/components/landing/unified-management-section";
import { AssetSystemSection } from "@/components/landing/asset-system-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { StartNowSection } from "@/components/landing/start-now-section";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DataStrategySection />
      <RevenueOptimizationSection />
      <MindsetShiftSection />
      <UnifiedManagementSection />
      <AssetSystemSection />
      <WhyUsSection />
      <StartNowSection />
      <Footer />
    </main>
  );
}
