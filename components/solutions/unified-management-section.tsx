"use client";

import { FeatureSection } from "./common";
import {
  UnifiedDashboard,
  OrchestrationHub,
  ActionReport,
} from "./unified-management";

const POINTS = [
  {
    main: "파편화된 지표의 통합 및 시각화",
    sub: "파편화된 지표를 하나로 연결해 비즈니스의 현재를 투명하게 시각화합니다.",
    visual: <UnifiedDashboard />,
  },
  {
    main: "유기적 실행 조율 및 관리 리소스 절감",
    sub: "불필요한 실무 관리를 최소화하고 더 높은 수준의 비즈니스 전략에만 집중하세요.",
    visual: <OrchestrationHub />,
  },
  {
    main: "도약을 결정짓는 최적의 대안 제시",
    sub: "현재 성과를 바탕으로 다음 단계 성장에 필요한 핵심 대안을 선제적으로 제시합니다.",
    visual: <ActionReport />,
  },
];

export function UnifiedManagementSection() {
  return (
    <FeatureSection
      id="unified-management"
      headline="흩어진 마케팅이 하나로 연결됩니다."
      description={
        <>
          매체별로 흩어진 데이터와 여러 대행사와의 복잡한 소통을 Growth Block 하나로 단축하세요.
          <br />
          모든 마케팅 실행이 하나의 흐름으로 정렬되어, 비즈니스의 전체 성과가 한눈에 들어옵니다.
        </>
      }
      points={POINTS}
      variant="gradient"
    />
  );
}
