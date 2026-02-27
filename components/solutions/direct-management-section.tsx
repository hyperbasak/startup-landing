"use client";

import { FeatureSection } from "./common";
import IntegratedManagement from "./assets/integrated_management.png";
import UnifiedChannel from "./assets/unified_channel.png";
import RiskManagement from "./assets/risk_management.png";
import Image from "next/image";

const POINTS = [
  {
    main: "복잡한 실무를 종결하는 통합 관리",
    sub: "기획부터 실행까지 마케팅의 전 과정을 책임지고 수행하여 실질적인 비즈니스 성과를 만듭니다.",
    visual: <Image
      src={IntegratedManagement}
      alt="복잡한 실무를 종결하는 통합 관리"
      className="w-full h-auto"
    />,
  },
  {
    main: "단일 채널을 통한 압도적 통제력",
    sub: "여러 파트너사를 관리하는 번거로움 없이, 우리 팀과의 단일화된 소통으로 모든 상황을 장악합니다.",
    visual: <Image
      src={UnifiedChannel}
      alt="단일 채널을 통한 압도적 통제력"
      className="w-full h-auto"
    />,
  },
  {
    main: "리스크를 방어하는 선제적 매니지먼트",
    sub: "현장의 이슈를 먼저 파악하고 대안을 제시하여, 귀사가 고민해야 할 문제의 양 자체를 근본적으로 줄입니다.",
    visual: <Image
      src={RiskManagement}
      alt="리스크를 방어하는 선제적 매니지먼트"
      className="w-full h-auto"
    />,
  },
];

export function DirectManagementSection() {
  return (
    <FeatureSection
      id="direct-management"
      headline="비즈니스 성장을 이끄는 전담 마케팅 본부"
      description="운영의 모든 부담은 덜어내고, 귀사의 시간과 자원을 오직 성장에만 투입하세요."
      points={POINTS}
      variant="gradient"
    />
  );
}
