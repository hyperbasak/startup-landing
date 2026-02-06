"use client";

import { FeatureSection } from "./common";
import {
  ContributionMarginChart,
  LTVBarChart,
  BudgetFlowDashboard,
} from "./data-strategy";

const POINTS = [
  {
    main: "영업이익 극대화 중심의 예산 운용",
    sub: "단순 매출이 아닌 실질 순이익 지점을 계산해 최적의 증액 타이밍을 확정합니다.",
    visual: <ContributionMarginChart />,
  },
  {
    main: "고객 미래 가치 기반의 공격적 확장",
    sub: "LTV 예측으로 CAC 범위를 재정의하고 데이터 확신으로 성장의 한계를 돌파합니다.",
    visual: <LTVBarChart />,
  },
  {
    main: "시장 반응에 따른 실시간 예산 배분",
    sub: "24시간 모니터링으로 효율 채널엔 집중 투입하고 낭비되는 예산은 즉각 차단합니다.",
    visual: <BudgetFlowDashboard />,
  },
];

export function DataStrategySection() {
  return (
    <FeatureSection
      id="data-strategy"
      headline="성장에 최적화된 마케팅 의사결정"
      description="데이터 분석부터 실행 판단까지 Growth OS가 책임집니다."
      points={POINTS}
      variant="white"
    />
  );
}
