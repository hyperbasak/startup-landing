"use client";

import { FeatureSection } from "./common";
import {
  StrategyLog,
  GrowthEngine,
  DataMoat,
} from "./asset-system";

const POINTS = [
  {
    main: "성공의 이유를 데이터로 보존",
    sub: "모든 성공 사례를 데이터로 기록하여 영구적인 비즈니스 자산으로 보존합니다.",
    visual: <StrategyLog />,
  },
  {
    main: "실무자 교체와 상관없는 전략 시스템",
    sub: "개인의 경험에 의존하지 않고 시스템으로 작동하는 일관된 성장 구조를 만듭니다.",
    visual: <GrowthEngine />,
  },
  {
    main: "압도적 효율을 만드는 데이터 권력 확보",
    sub: "축적된 데이터는 시간이 갈수록 압도적 효율을 만드는 귀사만의 강력한 무기가 됩니다.",
    visual: <DataMoat />,
  },
];

export function AssetSystemSection() {
  return (
    <FeatureSection
      id="asset-system"
      headline="영구적인 성장 자산이 되는 마케팅"
      description={
        <>
          성공과 실패의 모든 기록을 구조화하여 사람에 의존하지 않는 전략 시스템을 만듭니다.
          <br />
          투입된 모든 예산은 성장을 위한 독보적인 매뉴얼로 축적됩니다.
        </>
      }
      points={POINTS}
      variant="gradient"
    />
  );
}
