"use client";

import { FeatureSection } from "./common";
import {
  FunnelDiagram,
  RetentionTimeline,
  ABTestComparison,
} from "./growth-accelerate";

const POINTS = [
  {
    main: "도메인 맞춤형 승리 방정식 적용",
    sub: "해당 업종에 특화된 축적된 성과 데이터를 즉시 투입하여, 성과가 검증된 경로로 바로 진입합니다.",
    visual: <FunnelDiagram />,
  },
  {
    main: "불확실성을 제거한 타겟팅 정교화",
    sub: "유사 도메인에서 검증된 타겟 세그먼트를 활용하여, 마케팅 초기부터 낭비 없는 정밀 타격을 실현합니다.",
    visual: <RetentionTimeline />,
  },
  {
    main: "업종 표준을 앞지르는 성과 도출",
    sub: "보유한 도메인별 벤치마크 데이터를 의사결정 기준으로 삼아, 시장 평균보다 압도적으로 빠른 성장을 만듭니다.",
    visual: <ABTestComparison />,
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
