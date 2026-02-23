import { BarChart3, FileSearch, Milestone } from "lucide-react";

import type { NavItem, BudgetOption, Benefit } from "./types";

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
  { value: "under-1000", label: "1,000만원 미만" },
  { value: "1000-3000", label: "1,000만원 ~ 3,000만원" },
  { value: "3000-5000", label: "3,000만원 ~ 5,000만원" },
  { value: "5000-1억", label: "5,000만원 ~ 1억" },
  { value: "over-1억", label: "1억 이상" },
];

export const BENEFITS: Benefit[] = [
  { icon: BarChart3, text: "산업군 특화 필수 지표 분석" },
  { icon: FileSearch, text: "수익 누수 지점 및 가설 도출" },
  { icon: Milestone, text: "1순위 전략 액션 플랜 제공" },
];
