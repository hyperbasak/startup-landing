"use client";

import { AlertTriangle } from "lucide-react";

import { SectionBadge, ScrollIndicator } from "./common";
import { BARRIERS } from "./constants";
import { BarrierCard } from "./scaling-barrier";

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <SectionBadge
        icon={AlertTriangle}
        text="Scale-up을 가로막는 4가지 병목"
        variant="destructive"
      />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-6 text-balance">
        우리는 단순히 광고를 돌리는 대행사가 아닙니다.
        <br className="hidden sm:block" />
        <span className="text-primary">대표님의 밤잠을 설치게 하는 그 고민을 해결합니다.</span>
      </h2>
    </div>
  );
}

function BarriersGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
      {BARRIERS.map((barrier, index) => (
        <BarrierCard key={index} barrier={barrier} />
      ))}
    </div>
  );
}

function BottomCTA() {
  return (
    <div className="text-center mt-12 lg:mt-16">
      <p className="text-muted-foreground mb-6">
        경쟁사와의 격차가 벌어지기 전,{" "}
        <strong className="text-foreground">Growth OS가 제안하는 해결책</strong>
      </p>
      <ScrollIndicator />
    </div>
  );
}

export function ScalingBarrierSection() {
  return (
    <section id="scaling-barrier" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <BarriersGrid />
        <BottomCTA />
      </div>
    </section>
  );
}
