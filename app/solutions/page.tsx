"use client";

import { useEffect } from "react";

import { Header } from "@/components/common/header";
import { ConceptBridge } from "@/components/solutions/concept-bridge";
import { ProfitOptimizationSection } from "@/components/solutions/profit-optimization-section";
import { GrowthAccelerateSection } from "@/components/solutions/growth-accelerate-section";
import { HeroSection } from "@/components/solutions/hero-section";
import { DirectManagementSection } from "@/components/solutions/direct-management-section";
import { DataAssetsSection } from "@/components/solutions/data-assets-section";
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
      <ProfitOptimizationSection />
      <GrowthAccelerateSection />
      <DirectManagementSection />
      <DataAssetsSection />
      <ConceptBridge />
      <StartNowSection
        variant="gradient"
      />
      <Footer />
    </main>
  );
}
