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
  { label: "데이터 전략", href: "#data-strategy" },
  { label: "수익 최적화", href: "#revenue-optimization" },
  { label: "통합 관리", href: "#unified-management" },
  { label: "자산화 시스템", href: "#asset-system" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "데이터 전략", href: "#data-strategy" },
  { label: "수익 최적화", href: "#revenue-optimization" },
  { label: "통합 관리", href: "#unified-management" },
  { label: "자산화 시스템", href: "#asset-system" },
  { label: "진단 신청", href: "#start-now" },
];

export const BARRIERS: Barrier[] = [
  {
    icon: TrendingDown,
    question: "광고비를 늘려도 성과가 날까요?",
    title: "Scaling의 불확실성",
    detail: "데이터 기반 의사결정 없이는 Scale-up이 리스크가 됩니다.",
    cost: "기회비용 발생",
  },
  {
    icon: Calculator,
    question: "매출은 오르는데 이익은 그대로인가요?",
    title: "Unit Economics의 공백",
    detail: "진짜 수익 구조를 알아야 건강한 성장이 가능합니다.",
    cost: "현금 흐름 악화",
  },
  {
    icon: History,
    question: "리포트 작성에 너무 많은 시간을 쓰고 있나요?",
    title: "운영 리소스 병목",
    detail: "핵심 인력이 전략이 아닌 단순 업무에 묶여 있습니다.",
    cost: "비전략 업무 과다",
  },
  {
    icon: EyeOff,
    question: "고객이 어디서 이탈하는지 파악되고 있나요?",
    title: "블랙박스 마케팅",
    detail: "퍼널의 누수 지점을 모르면 개선도 불가능합니다.",
    cost: "전환율 최적화 기회 상실",
  },
];

export const GROWTH_SYSTEMS: GrowthSystem[] = [
  {
    icon: Database,
    title: "데이터 수집",
    subtitle: "영구 보존 DB 구축",
    description: "",
    features: ["실시간 API 데이터 수집", "영구 보존 데이터베이스", "히스토리 기반 분석"],
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "수익 분석",
    subtitle: "Unit Economics 관리",
    description: "",
    features: ["LTV/CAC 실시간 모니터링", "공헌이익 기반 의사결정", "수익 최적 광고비 운영"],
    color: "accent",
  },
  {
    icon: Activity,
    title: "시그널 감지",
    subtitle: "실시간 액션 시그널",
    description: "",
    features: ["스케일업 타이밍 포착", "리스크 조기 경보", "증액/감액 즉시 판단"],
    color: "primary",
  },
  {
    icon: Network,
    title: "채널 확장",
    subtitle: "성공 로직 전파",
    description: "",
    features: ["크로스 채널 성과 분석", "승리 패턴 추출", "신규 채널 무리스크 진입"],
    color: "accent",
  },
  {
    icon: Fingerprint,
    title: "패턴 자산화",
    subtitle: "고전환 공식 정립",
    description: "",
    features: ["고성과 소재 DNA 분석", "콘텐츠 제작 가이드", "A/B 테스트 자동화"],
    color: "primary",
  },
];

export const COMPARISONS: Comparison[] = [
  {
    category: "성과 측정",
    legacy: "ROAS 리포트 의존",
    growthOS: "공헌이익 실시간 추적",
  },
  {
    category: "의사결정",
    legacy: "담당자 경험과 감",
    growthOS: "데이터 시그널 + 전문가 판단",
  },
  {
    category: "운영 방식",
    legacy: "인력 기반 수동 대행",
    growthOS: "시스템 + 전담팀 운영",
  },
  {
    category: "데이터 자산",
    legacy: "계약 종료 시 소멸",
    growthOS: "영구 보존 DB 구축",
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
