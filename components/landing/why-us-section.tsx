"use client";

import { ScrollIndicator } from "../common";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { COMPARISON_SETS } from "./constants";
import { LegacyCard, GrowthBlockCard } from "./why-us";
import type { ComparisonSet } from "./types";

function SectionHeader({ set }: { set: ComparisonSet; }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-6 text-balance">
        {set.mainCopy} vs <span className="text-primary">Growth Block</span>
      </h2>
      <p className="text-muted-foreground text-lg [word-break:keep-all]">
        {set.subCopy}
      </p>
    </div>
  );
}

function ComparisonCards({ set }: { set: ComparisonSet; }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      <LegacyCard
        comparisons={set.comparisons}
        title={set.legacyTitle}
        subtitle={set.legacySubtitle}
      />
      <GrowthBlockCard comparisons={set.comparisons} />
    </div>
  );
}

function ServiceNote() {
  return (
    <div className="mt-16">
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
        <strong className="text-foreground">
          무료 진단으로 직접 확인해보세요.
        </strong>
      </p>
      <ScrollIndicator />
    </div>
  );
}

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-muted/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="agency">
          <div className="flex flex-col items-center gap-2.5 mb-2">
            <TabsList className="h-auto p-1 bg-muted/60 backdrop-blur-sm border border-border/50 rounded-full w-full max-w-xl">
              {COMPARISON_SETS.map((set) => (
                <TabsTrigger
                  key={set.id}
                  value={set.id}
                  className="flex-1 px-5 py-3 text-sm font-medium rounded-full [word-break:keep-all] transition-all duration-200 data-[state=active]:bg-primary/80 data-[state=active]:text-background data-[state=active]:shadow-lg data-[state=active]:shadow-foreground/15 data-[state=inactive]:hover:text-foreground"
                >
                  {set.tabLabel}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {COMPARISON_SETS.map((set) => (
            <TabsContent key={set.id} value={set.id}>
              <SectionHeader set={set} />
              <ComparisonCards set={set} />
            </TabsContent>
          ))}
        </Tabs>

        <ServiceNote />
        <BottomCTA />
      </div>
    </section>
  );
}
