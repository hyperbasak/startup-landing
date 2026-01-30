"use client";

import { FeatureSection } from "./common";
import {
  StrategyLog,
  GrowthEngine,
  DataMoat,
} from "./asset-system";

const POINTS = [
  {
    main: "필승 전략을 데이터로 보존합니다.",
    sub: "왜 성공했는지에 대한 분석이 기록되어 영구적인 자산으로 남습니다. 반복되는 시행착오를 줄이고, 이미 검증된 데이터를 바탕으로 마케팅의 확실성을 높여갑니다.",
    visual: <StrategyLog />,
  },
  {
    main: "사람이 바뀌어도 흔들리지 않는 전략 시스템을 구축합니다.",
    sub: "실무자의 교체와 상관없이 일관된 운영 퀄리티를 유지합니다. 특정 개인의 경험에 의존하지 않고 시스템으로 작동하여, 누적된 인사이트 위에서 더 높은 지점의 성장을 시작합니다.",
    visual: <GrowthEngine />,
  },
  {
    main: "광고비 지출을 시장 점유를 위한 '데이터 권력'으로 치환합니다.",
    sub: "귀사만을 위한 독보적인 성장 데이터를 쌓아갑니다. 축적된 데이터는 시간이 갈수록 압도적인 효율을 만드는 핵심 무기가 되어 시장을 장악하는 힘이 됩니다.",
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
