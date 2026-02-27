"use client";

import { FeatureSection } from "./common";
import ProfitBasedIncrease from "./assets/profit_based_increase.png";
import FunnelLeak from "./assets/funnel_leak.png";
import MaximizeLTV from "./assets/maximize-ltv.png";
import Image from "next/image";

const POINTS = [
  {
    main: "영업이익 중심 예산 운용",
    sub: "실질 이익 지점을 정밀하게 판독하여 비즈니스가 도약할 최적의 증액 타이밍을 확정합니다.",
    visual: <Image
      src={ProfitBasedIncrease}
      alt="영업이익 중심 예산 운용"
      className="w-full h-auto"
    />,
  },
  {
    main: "퍼널 누수 및 수익 경로 보수",
    sub: "결제까지 낙오 없는 퍼널을 구축하여 투입된 마케팅 예산이 낭비 없이 수익으로 전환되게 합니다.",
    visual: <Image
      src={FunnelLeak}
      alt="퍼널 누수 및 수익 경로 보수"
      className="w-full h-auto"
    />,
  },
  {
    main: "고객 생애 가치(LTV) 극대화",
    sub: "다각도의 수익 선순환 구조를 설계하여 고객 한 명당 창출하는 비즈니스 가치를 극대화합니다.",
    visual: <Image
      src={MaximizeLTV}
      alt="고객 생애 가치(LTV) 극대화"
      className="w-full h-auto"
    />,
  },
];

export function ProfitOptimizationSection() {
  return (
    <FeatureSection
      id="profit-optimization"
      headline="성장에 최적화된 수익 구조 설계"
      description="단순한 매출 상승을 넘어, 영업이익이 함께 커지는 지속 가능한 성장을 주도합니다."
      points={POINTS}
      variant="white"
    />
  );
}
