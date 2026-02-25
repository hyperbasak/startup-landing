"use client";

import { BarChart3, UserCog, Database, Gauge, FastForward } from "lucide-react";

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
    title: "업종 데이터를 통한 성장 가속",
    description: "검증된 도메인 데이터를 즉시 투입하여 목표 도달 시간을 단축",
    icon: FastForward,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "실무를 완벽히 책임지는 전담 본부",
    description: "모든 운영 프로세스를 직접 수행하여 귀사의 관리 리소스를 제거",
    icon: UserCog,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    title: "자산화되는 독점적 데이터 권력",
    description: "성공 공식을 시스템화하여 인적 의존도 없는 영구적 자산을 구축",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

function SectionHeader() {
  return (
    <div className="text-center mb-12 lg:mb-16">
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
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {COMPETENCY.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  );
}

export function CoreCompetencySection() {
  return (
    <section id="competency" className="py-16 lg:py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <FeatureGrid />
      </div>
    </section>
  );
}
