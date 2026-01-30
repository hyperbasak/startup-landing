"use client";

import { FeatureSection } from "./common";
import {
  UnifiedDashboard,
  OrchestrationHub,
  ActionReport,
} from "./unified-management";

const POINTS = [
  {
    main: "파편화된 지표를 통합하여 명확한 성장의 지도를 그립니다.",
    sub: "실시간 통합 대시보드로 브랜드가 나아갈 방향을 확신 있게 확인하세요. 모든 지표가 하나의 기준으로 흐르며 비즈니스의 현재를 투명하게 보여줍니다.",
    visual: <UnifiedDashboard />,
  },
  {
    main: "모든 실행 단위를 유기적으로 조율하여 경영의 시야를 넓혀드립니다.",
    sub: "가장 중요한 의사결정과 비전에만 에너지를 쏟으세요. 관리의 번거로움이 사라진 자리에 더 높은 수준의 비즈니스 전략이 채워집니다.",
    visual: <OrchestrationHub />,
  },
  {
    main: "지금 바로 스케일업을 결정짓는 핵심 제안을 우선합니다.",
    sub: "정답을 찾는 수고를 덜어드립니다. 현재 성과를 바탕으로 다음 단계 도약을 위해 필요한 최적의 대안과 구체적인 방안을 가장 먼저 제시하여 성장의 속도를 높입니다.",
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
          매체별로 흩어진 데이터와 여러 대행사와의 복잡한 소통을 Growth OS 하나로 단축하세요.
          <br />
          모든 마케팅 실행이 하나의 흐름으로 정렬되어, 비즈니스의 전체 성과가 한눈에 들어옵니다.
        </>
      }
      points={POINTS}
      variant="white"
    />
  );
}
