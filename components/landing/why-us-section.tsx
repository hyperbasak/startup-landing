"use client";

import { ScrollIndicator } from "../common";
import { COMPARISONS } from "./constants";
import { LegacyCard, GrowthBlockCard } from "./why-us";

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-6 text-balance">
        일반 마케팅 대행사 vs <span className="text-primary">Growth Block</span>
      </h2>
      <p className="text-muted-foreground text-lg [word-break:keep-all]">
        같은 비용, 완전히 다른 결과. 무엇이 다른지 직접 비교해보세요.
      </p>
    </div>
  );
}

function ComparisonCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
      <LegacyCard comparisons={COMPARISONS} />
      <GrowthBlockCard comparisons={COMPARISONS} />
    </div>
  );
}

function ServiceNote() {
  return (
    <div className="mt-8 max-w-5xl mx-auto">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
        <p className="text-foreground font-medium text-lg [word-break:keep-all]">
          Growth Block은 단순 대행을 넘어,{" "}
          <span className="text-primary">
            귀사의 성장 시스템을 함께 구축하는 프리미엄 파트너십 서비스
          </span>
          입니다.
        </p>
      </div>
    </div>
  );
}

function BottomCTA() {
  return (
    <div className="text-center mt-12 lg:mt-16">
      <p className="text-muted-foreground mb-6">
        여전히 고민되시나요?{" "}
        <strong className="text-foreground">무료 진단으로 직접 확인해보세요.</strong>
      </p>
      <ScrollIndicator />
    </div>
  );
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <ComparisonCards />
        <ServiceNote />
        <BottomCTA />
      </div>
    </section>
  );
}
