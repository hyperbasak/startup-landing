import type { ComparisonSet } from "./types";

export const COMPARISON_SETS: ComparisonSet[] = [
  {
    id: "agency",
    tabLabel: "마케팅 대행사를 고민 중이라면?",
    mainCopy: "기성 마케팅 대행사",
    subCopy:
      "매체 운영을 넘어, 귀사만의 성장 전략을 정교하게 설계합니다.",
    legacyTitle: "기성 마케팅 대행사",
    legacySubtitle: "General Marketing Agency",
    comparisons: [
      {
        category: "전략 수립",
        legacy: "업계 공통의 범용 매뉴얼 기반 실행",
        growthBlock: "귀사 비즈니스 모델에 최적화된 맞춤 전략"
      },
      {
        category: "데이터 분석",
        legacy: "광고 매체의 성과 수치에 집중",
        growthBlock: "실질적 영업이익과 고객 가치 중심의 분석"
      },
      {
        category: "비용 성격",
        legacy: "성과 확인 후 사라지는 소모성 광고비",
        growthBlock: "비즈니스 가치를 높이는 자본적 투자"
      },
      {
        category: "최종 결과",
        legacy: "일회성 매출 상승과 운영 리포트",
        growthBlock: "지속 가능한 성장을 위한 데이터 자산화"
      },
    ],
  },
  {
    id: "inhouse",
    tabLabel: "내부 인력 채용을 고민 중이라면?",
    mainCopy: "인하우스 마케터",
    subCopy:
      "시행착오의 시간을 줄이고, 검증된 데이터로 성과를 앞당깁니다.",
    legacyTitle: "인하우스 마케터",
    legacySubtitle: "In-house Marketer",
    comparisons: [
      {
        category: "도메인 지식",
        legacy: "자사 경험에 국한된 시각",
        growthBlock: "해당 산업군 성공 데이터를 통한 전문 인사이트",
      },
      {
        category: "성장 속도",
        legacy: "시행착오를 거치며 느리게 학습",
        growthBlock: "이미 검증된 가설을 바탕으로 즉각적인 성과",
      },
      {
        category: "운영 기반",
        legacy: "담당자 개인의 역량과 주관에 의존",
        growthBlock: "객관적 지표에 근거한 정밀한 최적화 시스템",
      },
      {
        category: "지속 가능성",
        legacy: "퇴사 시 데이터 및 히스토리 단절 리스크",
        growthBlock: "인적 의존 없는 영구적인 운영 프로세스 구축",
      },
    ],
  },
];
