"use client";

import { FeatureSection } from "./common";
import AssetBuilding from "./assets/asset_building.png";
import SystemBuilding from "./assets/system_building.png";
import DataGap from "./assets/data_gap.png";
import Image from "next/image";

const POINTS = [
  {
    main: "성공을 공식화한 데이터 자산 구축",
    sub: "모든 성과를 정밀한 데이터로 기록하고 자산화하여, 운에 기대지 않는 재현 가능한 비즈니스 정답지를 확보합니다.",
    visual: <Image
      src={AssetBuilding}
      alt="성공을 공식화한 데이터 자산 구축"
      className="w-full h-auto"
    />,
  },
  {
    main: "인적 의존도를 탈피한 전략 시스템 구축",
    sub: "실무자 개인의 경험이 아닌 시스템으로 작동하는 성장 구조를 설계하여 어떤 상황에도 일관된 성과를 유지합니다.",
    visual: <Image
      src={SystemBuilding}
      alt="인적 의존도를 탈피한 전략 시스템 구축"
      className="w-full h-auto"
    />,
  },
  {
    main: "압도적 우위를 점하는 데이터 권력 확보",
    sub: "축적된 데이터는 시간이 흐를수록 경쟁사가 도달할 수 없는 귀사만의 강력한 무기이자 실질적인 자산이 됩니다.",
    visual: <Image
      src={DataGap}
      alt="압도적 우위를 점하는 데이터 권력 확보"
      className="w-full h-auto"
    />,
  },
];

export function DataAssetsSection() {
  return (
    <FeatureSection
      id="data-assets"
      headline="기업의 가치를 높이는 마케팅 데이터 자산화"
      description="일회성 광고 집행을 넘어, 지속 가능한 성장을 보장하는 고유의 데이터 자산을 구축합니다."
      points={POINTS}
      variant="gradient"
    />
  );
}
