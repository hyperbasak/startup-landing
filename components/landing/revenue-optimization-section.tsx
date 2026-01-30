"use client";

import { FeatureSection } from "./common";
import {
  FunnelDiagram,
  RetentionTimeline,
  ABTestComparison,
} from "./revenue-optimization";

const POINTS = [
  {
    main: "이탈로 사라지는 예산을 수익 경로로 재배치합니다.",
    sub: "광고 클릭부터 최종 결제까지, 예산이 증발하는 지점을 실시간으로 찾아내어 보수합니다. 모든 유입이 낙오 없이 결제로 이어지도록 퍼널의 연결성을 강화합니다.",
    visual: <FunnelDiagram />,
  },
  {
    main: "유입된 고객의 가치를 반복 매출로 증폭시킵니다.",
    sub: "일회성 구매에 그치지 않고 지속적인 수익을 창출하는 선순환 구조를 만듭니다. 정교한 리마케팅과 CRM 스케줄링을 통해 예산 대비 수익 효율을 극대화합니다.",
    visual: <RetentionTimeline />,
  },
  {
    main: "클릭 너머의 실제 결제를 만드는 소재에 화력을 집중합니다.",
    sub: "단순히 호기심을 끄는 메시지가 아닌, 실제 구매 전환율(CVR)이 검증된 콘텐츠를 선별합니다. 데이터가 입증한 수익 모델에 예산을 집중 투입하여 마케팅의 확실성을 높입니다.",
    visual: <ABTestComparison />,
  },
];

export function RevenueOptimizationSection() {
  return (
    <FeatureSection
      id="revenue-optimization"
      headline="마케팅 예산이 온전하게 수익으로 이어집니다."
      description={
        <>
          단순한 유입을 넘어 최종 결제까지의 모든 경로를 단단하게 연결합니다.
          <br />
          소중한 예산이 성장의 밑거름이 되도록, Growth OS가 모든 전환 과정을 정밀하게 관리합니다.
        </>
      }
      points={POINTS}
      variant="gradient"
    />
  );
}
