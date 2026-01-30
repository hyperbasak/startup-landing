"use client";

import { FeatureSection } from "./common";
import {
  ContributionMarginChart,
  LTVBarChart,
  BudgetFlowDashboard,
} from "./data-strategy";

const POINTS = [
  {
    main: "영업이익 극대화를 기준으로 예산을 운용합니다.",
    sub: "단순 매출이 아닌 실질 순이익이 남는 지점을 데이터로 정밀하게 계산합니다. 리스크 없이 이익이 가장 커지는 최적의 규모로 증액 타이밍을 확정합니다.",
    visual: <ContributionMarginChart />,
  },
  {
    main: "고객의 미래 가치를 기준으로 성장의 한계를 넓힙니다.",
    sub: "고객 1명이 가져올 장기적인 가치를 예측하여 신규 고객 획득 비용(CAC)의 허용 범위를 재정의합니다. 데이터 확신을 바탕으로 경쟁사보다 더 공격적인 확장을 실행합니다.",
    visual: <LTVBarChart />,
  },
  {
    main: "매 순간의 시장 반응을 포착해 예산 배분을 즉시 결정합니다.",
    sub: "24시간 매체별 성과를 모니터링하여 효율이 터지는 채널에는 예산을 즉시 집중 투입하고, 낭비되는 채널은 즉각 차단하여 성장의 골든타임을 사수합니다.",
    visual: <BudgetFlowDashboard />,
  },
];

export function DataStrategySection() {
  return (
    <FeatureSection
      id="data-strategy"
      headline="성장에 최적화된 마케팅 의사결정"
      description="데이터 분석부터 실행 판단까지 Growth OS가 전담합니다."
      points={POINTS}
      variant="white"
    />
  );
}
