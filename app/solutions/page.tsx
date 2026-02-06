"use client";

import { useEffect } from "react";

import { Header } from "@/components/common/header";
import { ConceptBridge } from "@/components/solutions/concept-bridge";
import { DataStrategySection } from "@/components/solutions/data-strategy-section";
import { RevenueOptimizationSection } from "@/components/solutions/revenue-optimization-section";
import { HeroSection } from "@/components/solutions/hero-section";
import { UnifiedManagementSection } from "@/components/solutions/unified-management-section";
import { AssetSystemSection } from "@/components/solutions/asset-system-section";
import { StartNowSection } from "@/components/common/start-now-section";
import { Footer } from "@/components/common/footer";

function ScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "instant" });
        }, 0);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return null;
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <ScrollHandler />
      <Header />
      <HeroSection />
      <DataStrategySection />
      <RevenueOptimizationSection />
      <UnifiedManagementSection />
      <AssetSystemSection />
      <ConceptBridge />
      <StartNowSection
        variant="gradient"
      />
      <Footer />
    </main>
  );
}
