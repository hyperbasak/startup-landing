"use client";

import { FeatureSection } from "./common";
import {
  FunnelDiagram,
  RetentionTimeline,
  ABTestComparison,
} from "./revenue-optimization";

const POINTS = [
  {
    main: "퍼널 누수 차단 및 수익 경로 보수",
    sub: "예산이 증발하는 지점을 실시간으로 찾아 결제까지 낙오 없는 퍼널을 구축합니다.",
    visual: <FunnelDiagram />,
  },
  {
    main: "유입 고객 가치의 지속적 증폭",
    sub: "일회성 구매를 넘어 지속적 수익을 만드는 정교한 CRM 스케줄링을 실행합니다.",
    visual: <RetentionTimeline />,
  },
  {
    main: "결제를 부르는 콘텐츠 운용",
    sub: "단순 클릭이 아닌 구매 전환(CVR)이 검증된 소재에 마케팅 화력을 집중합니다.",
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
