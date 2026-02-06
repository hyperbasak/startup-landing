"use client";

import { useEffect } from "react";

import { Header } from "@/components/common/header";
import { HeroSection } from "@/components/landing/hero-section";
import { BlockServiceSection } from "@/components/landing/block-service-section";
import { CoreCompetencySection } from "@/components/landing/core-competency-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { StartNowSection } from "@/components/common/start-now-section";
import { Footer } from "@/components/common/footer";

function ScrollToTopHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return null;
}

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <ScrollToTopHandler />
      <Header />
      <HeroSection />
      <BlockServiceSection />
      <CoreCompetencySection />
      <WhyUsSection />
      <StartNowSection />
      <Footer />
    </main>
  );
}
