"use client";

import Link from "next/link";
import { BarChart3, Filter, UserCog, Database, ChevronRight } from "lucide-react";

const COMPETENCY = [
  {
    title: "영업이익 기반의 의사결정",
    description: "순이익 중심의 예산 운용으로 실패 없는 증액 타이밍 확보",
    icon: BarChart3,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "결제 전환율을 높이는 퍼널 최적화",
    description: "퍼널 누수 차단과 구매 전환 최적화로 수익을 극대화",
    icon: Filter,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "운영 리소스를 혁신하는 전담 CMO",
    description: "CMO의 통합 관제로 리소스 제로화 및 효율 최적화",
    icon: UserCog,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    title: "경쟁력이 되는 마케팅 자산화",
    description: "모든 성과를 데이터로 자산화해 성공을 재현하는 구조",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 [word-break:keep-all]">
        맞춤형 서비스의 압도적인 성과
        <br />
        <span className="text-primary">성장의 구조</span>를 설립하는 전략에서 나옵니다.
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed [word-break:keep-all]">
        성장을 운에 맡기지 않도록, 실패가 불가능한 시스템을 이식합니다.
      </p>
    </div>
  );
}

function FeatureCard({ feature }: { feature: (typeof COMPETENCY)[number]; }) {
  const Icon = feature.icon;

  return (
    <div
      className={`rounded-2xl border ${feature.borderColor} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-3 rounded-xl ${feature.bgColor}`}>
          <Icon className={`w-6 h-6 ${feature.color}`} />
        </div>
        <h3 className={`text-lg font-bold text-slate-900`}>
          {feature.title}
        </h3>
      </div>
      <p className="text-slate-600 leading-relaxed [word-break:keep-all]">
        {feature.description}
      </p>
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
      {COMPETENCY.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  );
}

export function CoreCompetencySection() {
  return (
    <section id="competency" className="py-16 lg:py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <FeatureGrid />
      </div>
    </section>
  );
}
