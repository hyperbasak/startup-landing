import { BarChart3, FileSearch, Milestone } from "lucide-react";

import type { NavItem, BudgetOption, Benefit, SelectOption } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "데이터 전략", href: "/solutions#data-strategy" },
      { label: "수익 최적화", href: "/solutions#revenue-optimization" },
      { label: "통합 관리", href: "/solutions#unified-management" },
      { label: "자산화 시스템", href: "/solutions#asset-system" },
    ],
  },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
];

export const BUDGET_OPTIONS: BudgetOption[] = [
  { value: "100-500", label: "100만원 - 500만원" },
  { value: "500-1000", label: "500만원 - 1,000만원" },
  { value: "1000-2000", label: "1,000만원 - 2,000만원" },
  { value: "2000-5000", label: "2,000만원 - 5,000만원" },
  { value: "5000-1억", label: "5,000만원 - 1억원" },
  { value: "over-1억", label: "1억 이상" },
];

export const BENEFITS: Benefit[] = [
  { icon: BarChart3, text: "산업군 특화 필수 지표 분석" },
  { icon: FileSearch, text: "수익 누수 지점 및 가설 도출" },
  { icon: Milestone, text: "1순위 전략 액션 플랜 제공" },
];

export const INDUSTRY_OPTIONS: SelectOption[] = [
  { value: "커머스", label: "커머스 (패션/뷰티/식품 등)" },
  { value: "SaaS", label: "IT Solution / SaaS" },
  { value: "플랫폼", label: "플랫폼 (매칭/커뮤니티 등)" },
  { value: "전문 서비스", label: "전문 서비스 (의료/법률/교육 등)" },
  { value: "교육", label: "교육" },
];

export const BUSINESS_MODEL_OPTIONS: SelectOption[] = [
  { value: "단건 판매", label: "단건 판매 (물품/서비스 구매)" },
  { value: "정기 구독", label: "구독형 (정기 결제)" },
  { value: "리드 제너레이션", label: "리드 제너레이션 (상담/견적/예약 유도)" },
  { value: "광고 및 수수료 수익", label: "광고 / 수수료 기반" },
];

export const TARGET_AUDIENCE_OPTIONS: SelectOption[] = [
  { value: "B2C", label: "B2C (개인)" },
  { value: "B2B", label: "B2B (기업)" },
  { value: "B2G", label: "B2G (정부)" },
];

export const PRIMARY_PROBLEM_OPTIONS: SelectOption[] = [
  { value: "인지도 부족", label: "인지도 부족" },
  { value: "이탈률 높음", label: "이탈률 높음" },
  { value: "구매 전환 미흡", label: "구매 전환 미흡" },
  { value: "재구매 저조", label: "재구매 저조" },
  { value: "바이럴 부재", label: "바이럴 부재" },
];
