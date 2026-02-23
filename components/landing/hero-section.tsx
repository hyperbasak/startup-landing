"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "./assets/hero.png";
import Image from "next/image";

function HeroBadge() {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        폭발적 성장을 위한 Growth Partner
      </div>
    </div>
  );
}

function HeroHeadline() {
  return (
    <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.4] [word-break:keep-all]">
      이제 귀사에도{" "}
      <span className="relative inline-block text-primary">
        CMO
        <svg
          className="absolute -bottom-1 left-0 w-full"
          viewBox="0 0 200 8"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M2 6C40 2 120 2 198 6"
            stroke="#00C781"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </span>
      가 합류합니다.
      <br className="block" />
      <span className="relative inline-block text-primary">
        Growth Block
        <svg
          className="absolute -bottom-1 left-0 w-full"
          viewBox="0 0 200 8"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M2 6C40 2 120 2 198 6"
            stroke="#00C781"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </span>
      과 함께,
      <br className="block" />
      막힘없는 성장의 궤도에 올라타세요.
    </h1>
  );
}

function HeroSubheadline() {
  return (
    <p className="text-lg text-muted-foreground leading-[1.4] [word-break:keep-all]">
      <span>
        Growth Block 하나로 스케일업에 필요한 모든 전략과 실행을 끝내세요.
        <br />
        수익 구조를 직접 설계하고 운영하는 CMO 팀이, 귀사만의 독보적인 성장 시스템을 완성합니다.
      </span>
    </p>
  );
}

function HeroCTAButtons() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold !pl-5 !pr-4 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
        >
          <a href="#start-now">
            무료 진단 리포트 신청
            <ChevronRight />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-border/60 hover:border-border hover:bg-muted/50 font-medium !pl-5 !pr-4 py-6 text-base bg-transparent text-muted-foreground hover:text-foreground transition-all"
        >
          <a href="/solutions">
            CMO 전략 확인하기
            <ChevronRight />
          </a>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        도메인 분석으로 수익 누수 지점을 추론합니다. 전략적 가설이 담긴 리포트를 먼저 받아보세요.
      </p>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="space-y-8">
      <HeroBadge />
      <HeroHeadline />
      <HeroSubheadline />
      <HeroCTAButtons />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[800px] flex flex-col justify-center py-24 lg:py-32 overflow-hidden bg-[#f0f1f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 lg:max-w-[70%]">
            <HeroContent />
          </div>
          <div className="lg:max-w-[30%]">
            <Image
              src={hero}
              alt="hero image"
              className="w-full h-auto transition-opacity duration-2000 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
