import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  positive: boolean;
}

export interface Barrier {
  icon: LucideIcon;
  question: string;
  title: string;
  detail: string;
  cost: string;
}

export interface GrowthSystem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: "primary" | "accent";
}

export interface Comparison {
  category: string;
  legacy: string;
  growthOS: string;
}

export interface BudgetOption {
  value: string;
  label: string;
}

export interface Benefit {
  icon: LucideIcon;
  text: string;
}

export interface ContactFormData {
  name: string;
  title: string;
  company: string;
  companyUrl: string;
  email: string;
  contact: string;
  budget: string;
}
