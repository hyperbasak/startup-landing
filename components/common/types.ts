import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
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

export interface Step2FormData {
  industry: string;
  businessModel: string;
  targetAudience: string[];
  primaryProblem: string;
  coreValuePersona: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
