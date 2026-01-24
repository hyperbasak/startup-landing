"use client";

import { Zap } from "lucide-react";

import { SectionBadge } from "./common";
import { GROWTH_SYSTEMS } from "./constants";
import { SystemAccordionList, IntegrationNote } from "./growth-os";

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <SectionBadge icon={Zap} text="The 5 Core Systems" variant="primary" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-6 text-balance">
        귀사에 구축될 <span className="text-primary">5가지 핵심 시스템</span>
      </h2>
      <p className="text-muted-foreground text-lg">
        전문가가 이 시스템을 활용해 귀사의 성장을 직접 운영합니다.
      </p>
    </div>
  );
}

export function GrowthOSSection() {
  return (
    <section id="growth-os" className="py-16 lg:py-24 bg-muted/50">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader />
        <SystemAccordionList systems={GROWTH_SYSTEMS} />
        <IntegrationNote />
      </div>
    </section>
  );
}
