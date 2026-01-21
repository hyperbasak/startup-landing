"use client";

import { Zap } from "lucide-react";

import { SectionBadge } from "./common";
import { GROWTH_SYSTEMS } from "./constants";
import { SystemCard, IntegrationNote } from "./growth-os";

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <SectionBadge icon={Zap} text="The 5 Core Systems" variant="primary" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-6 text-balance">
        귀사에 구축될 <span className="text-primary">5가지 핵심 시스템</span>
      </h2>
      <p className="text-muted-foreground text-lg">
        우리는 도구만 드리지 않습니다.{" "}
        <span className="text-foreground font-semibold">
          전문가가 이 시스템을 활용해 귀사의 성장을 직접 운전합니다.
        </span>
        <br className="hidden sm:block" />
        각 모듈은 유기적으로 연결되어 통합 성장 엔진으로 작동합니다.
      </p>
    </div>
  );
}

function SystemsGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
      {GROWTH_SYSTEMS.map((system, index) => (
        <SystemCard key={index} system={system} />
      ))}
    </div>
  );
}

export function GrowthOSSection() {
  return (
    <section id="growth-os" className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <SystemsGrid />
        <IntegrationNote />
      </div>
    </section>
  );
}
