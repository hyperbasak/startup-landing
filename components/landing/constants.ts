import {
  TrendingDown,
  Calculator,
  History,
  EyeOff,
  BarChart3,
  Activity,
  Network,
  Fingerprint,
  Database,
  FileText,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import type {
  NavItem,
  Barrier,
  GrowthSystem,
  Comparison,
  BudgetOption,
  Benefit,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Scaling Barrier", href: "#scaling-barrier" },
  { label: "Growth OS", href: "#growth-os" },
  { label: "Why Us?", href: "#why-us" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Scaling Barrier", href: "#scaling-barrier" },
  { label: "Growth OS", href: "#growth-os" },
  { label: "Why Us?", href: "#why-us" },
  { label: "진단 신청", href: "#start-now" },
];

export const BARRIERS: Barrier[] = [
  {
    icon: TrendingDown,
    question: "광고비를 늘리면 적자가 될까 두려우신가요?",
    title: "Scaling의 불확실성",
    detail:
      "근거 없는 증액은 성장이 아닌 매몰 비용이 됩니다. 데이터 기반 의사결정 없이는 Scale-up이 곧 Burn-rate 가속이 됩니다.",
    cost: "매월 수천만 원의 기회비용 발생",
  },
  {
    icon: Calculator,
    question: "LTV와 공헌이익을 모른 채 ROAS에만 매몰되어 있진 않나요?",
    title: "Unit Economics의 공백",
    detail:
      "ROAS 300%가 이익일까요, 손해일까요? 진짜 수익 구조를 모르면 매출이 올라도 적자가 커집니다.",
    cost: "허수 성장으로 인한 현금 흐름 악화",
  },
  {
    icon: History,
    question: "마케팅 팀이 전략 대신 엑셀 노가다에 시간을 쓰고 있진 않나요?",
    title: "운영 리소스 병목",
    detail:
      "고급 인력이 데이터 취합과 리포트 작성에 주당 20시간 이상을 소비한다면, 그것은 전략이 아닌 비용입니다.",
    cost: "핵심 인력의 70% 시간이 비전략 업무에 소모",
  },
  {
    icon: EyeOff,
    question: "공들여 데려온 고객이 어느 지점에서 이탈하는지조차 알 수 없나요?",
    title: "블랙박스 마케팅",
    detail:
      "원인 모를 데이터 누수가 귀중한 성장을 가로막고 있습니다. 퍼널의 어디서 고객이 사라지는지 보이지 않으면 개선도 불가능합니다.",
    cost: "전환율 최적화 기회 상실",
  },
];

export const GROWTH_SYSTEMS: GrowthSystem[] = [
  {
    icon: BarChart3,
    title: "Unit Economics 관리",
    subtitle: "전문가가 운영하는 수익 구조 관리",
    description:
      "실시간 LTV/CAC 추적 및 수익 보장 최대 광고 지점 도출. 전문가가 ROAS가 아닌 실제 공헌이익 기반으로 의사결정을 내립니다.",
    features: [
      "LTV/CAC 실시간 모니터링",
      "공헌이익률 전문가 분석",
      "수익 최적 광고비 운영",
    ],
    color: "primary",
  },
  {
    icon: Activity,
    title: "의사결정 시그널 대시보드",
    subtitle: "전문가가 분석하고 제안하는 실시간 액션 시그널",
    description:
      "'증액/감액'을 즉시 결정할 수 있는 경영 관제탑 구축. 전문가가 데이터로 Scale-up 타이밍을 포착하고 실행합니다.",
    features: ["스케일업 시그널 알림", "리스크 조기 경보", "전문가 의사결정 지원"],
    color: "accent",
  },
  {
    icon: Network,
    title: "실패 없는 채널 다각화",
    subtitle: "전문가가 검증하고 전파하는 성공 로직",
    description:
      "한 매체에서 검증된 성공 로직을 타 채널에 시행착오 없이 전파. 전문가가 채널 확장의 불확실성을 제거합니다.",
    features: [
      "크로스 채널 성과 분석",
      "승리 패턴 추출 및 적용",
      "신규 채널 진입 운영",
    ],
    color: "primary",
  },
  {
    icon: Fingerprint,
    title: "승리 로직의 패턴화",
    subtitle: "전문가가 정립하는 고전환 공식",
    description:
      "데이터로 검증된 고전환 소재 공식 및 콘텐츠 생산 체계 정립. 전문가가 크리에이티브 성공을 운이 아닌 시스템으로 만듭니다.",
    features: [
      "고성과 소재 DNA 분석",
      "콘텐츠 제작 가이드라인",
      "전문가 A/B 테스트 운영",
    ],
    color: "accent",
  },
  {
    icon: Database,
    title: "데이터 영구 자산화",
    subtitle: "대행 종료 후에도 귀사에 남는 데이터 자산",
    description:
      "매체 데이터를 API로 추출하여 귀사 소유의 영구 보존 DB 구축. 매체 정책 변화에도 흔들리지 않는 데이터 주권을 확보합니다.",
    features: [
      "실시간 API 데이터 수집",
      "영구 보존 데이터베이스",
      "히스토리 기반 전문 분석",
    ],
    color: "primary",
  },
];

export const COMPARISONS: Comparison[] = [
  {
    category: "데이터 보존성",
    legacy: "특정 기간 경과 후 강제 휘발",
    growthOS: "고객사 독립 DB 구축 및 영구 적재",
  },
  {
    category: "제공 방식",
    legacy: "인력 기반의 수동 대행",
    growthOS: "시스템 기반의 전담 매니지먼트팀 실무 투입",
  },
  {
    category: "성과 측정",
    legacy: "매체 리포트(ROAS) 의존",
    growthOS: "비즈니스 공헌이익 실시간 추적",
  },
  {
    category: "스케일업 결정",
    legacy: "담당자 경험과 감에 의존",
    growthOS: "데이터 시그널 + 전문가의 전략적 의사결정",
  },
  {
    category: "확장성",
    legacy: "채널별 개별 시행착오 반복",
    growthOS: "시스템 기반의 휴먼 리스크 없는 스케일업 대행",
  },
  {
    category: "종료 후 자산",
    legacy: "계약 종료 시 모든 데이터 소멸",
    growthOS: "영구적 성장 자산으로 축적",
  },
];

export const BUDGET_OPTIONS: BudgetOption[] = [
  { value: "under-1000", label: "1,000만원 미만" },
  { value: "1000-3000", label: "1,000만원 ~ 3,000만원" },
  { value: "3000-5000", label: "3,000만원 ~ 5,000만원" },
  { value: "5000-1억", label: "5,000만원 ~ 1억" },
  { value: "over-1억", label: "1억 이상" },
];

export const BENEFITS: Benefit[] = [
  { icon: FileText, text: "맞춤형 성장 진단 리포트" },
  { icon: Rocket, text: "즉시 적용 가능한 액션 플랜" },
  { icon: ShieldCheck, text: "비용 부담 없는 완전 무료" },
];

export const DASHBOARD_CHART_DATA = [40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 88, 100];
