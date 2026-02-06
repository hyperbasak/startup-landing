import { FileText, Rocket, ShieldCheck } from "lucide-react";

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
  { icon: FileText, text: "데이터 기반 성장 진단서" },
  { icon: Rocket, text: "수익 구조 개선 액션 플랜" },
  { icon: ShieldCheck, text: "비용 부담 없는 완전 무료" },
];
