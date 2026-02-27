"use client";

import { FeatureSection } from "./common";
import AdvancedStarting from "./assets/advanced_starting.png";
import VerifiedTarget from "./assets/verified_target.png";
import OverwhelmingPerformance from "./assets/overwhelming_performance.png";
import Image from "next/image";

const POINTS = [
  {
    main: "전진 배치된 압도적 출발선",
    sub: "입증된 도메인 데이터를 즉시 수혈하여 불확실성을 제거합니다. 시행착오 없이 목표 지점까지 가장 정밀하고 빠르게 도달합니다.",
    visual: <Image
      src={AdvancedStarting}
      alt="전진 배치된 압도적 출발선"
      className="w-full h-auto"
    />,
  },
  {
    main: "불확실성을 제거한 타겟팅 정교화",
    sub: "유사 도메인에서 검증된 타겟 세그먼트를 활용하여, 마케팅 초기부터 낭비 없는 정밀 타격을 실현합니다.",
    visual: <Image
      src={VerifiedTarget}
      alt="불확실성을 제거한 타겟팅 정교화"
      className="w-full h-auto"
    />,
  },
  {
    main: "업종 표준을 압도하는 성과 도출",
    sub: "보유한 도메인별 벤치마크 데이터로 의사결정의 정밀도를 높여, 시장 평균을 훨씬 앞지르는 최상위 수준의 결과물을 도출합니다.",
    visual: <Image
      src={OverwhelmingPerformance}
      alt="업종 표준을 압도하는 성과 도출"
      className="w-full h-auto"
    />,
  },
];

export function GrowthAccelerateSection() {
  return (
    <FeatureSection
      id="growth-accelerate"
      headline="데이터 자산을 활용한 압도적 성장 속도"
      description="수만 개의 업종별 데이터를 바탕으로, 시행착오 없이 가장 빠르게 목표 지점에 도달합니다."
      points={POINTS}
      variant="gradient"
    />
  );
}
