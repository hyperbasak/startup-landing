"use client";

import { Button } from "@/components/ui/button";

import { DashboardMockup } from "./hero";

function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      폭발적 성장을 위한 Growth Partner
    </div>
  );
}

function HeroHeadline() {
  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-foreground leading-[1.25] lg:max-w-[60vw] xl:max-w-none [word-break:keep-all]">
      검증된 제품력을 넘어,
      <br className="hidden sm:block" />
      <span className="relative inline-block text-primary">
        Growth OS
        <svg
          className="absolute -bottom-1 left-0 w-full"
          viewBox="0 0 200 8"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 6C40 2 120 2 198 6"
            stroke="#00C781"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      로 귀사의 마케팅을 직접 빌드업해 드립니다.
    </h1>
  );
}

function HeroSubheadline() {
  return (
    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl [word-break:keep-all]">
      <span className="text-foreground font-semibold">
        데이터 기반의 스케일업 엔진
      </span>
      을 전문가가 직접 구축하고 운영합니다.
    </p>
  );
}

function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-14 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
      >
        <a href="#start-now">무료 성장 진단 신청</a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="border-border/60 hover:border-border hover:bg-muted/50 font-medium px-8 h-14 text-base bg-transparent text-muted-foreground hover:text-foreground transition-all"
      >
        <a href="#growth-os">Growth OS 살펴보기</a>
      </Button>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="space-y-8 lg:col-span-7 xl:col-span-7">
      <HeroBadge />
      <HeroHeadline />
      <HeroSubheadline />
      <HeroCTAButtons />
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="relative lg:col-span-5 xl:col-span-5">
      <DashboardMockup />
      <p className="text-[11px] text-muted-foreground text-center mt-3 px-4">
        전담 전문가가 실시간 모니터링하며 공유해 드리는 운영 현황 보드입니다
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <HeroContent />
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
