"use client";

import { BarChart3, Gauge, GitBranch, Zap, Database } from "lucide-react";

const systems = [
  {
    icon: BarChart3,
    title: "Unit Economics 관리",
    subtitle: "실시간 수익 구조 파악",
    description: "실시간 LTV/CAC 추적 및 수익 보장 최대 광고 지점 도출. ROAS가 아닌 실제 공헌이익 기반으로 의사결정합니다.",
    features: ["LTV/CAC 실시간 모니터링", "공헌이익률 자동 계산", "수익 최적 광고비 산출"],
    color: "primary",
  },
  {
    icon: Gauge,
    title: "의사결정 시그널 대시보드",
    subtitle: "경영 관제탑",
    description: "'증액/감액'을 즉시 결정할 수 있는 경영 관제탑 구축. 감이 아닌 데이터로 Scale-up 타이밍을 포착합니다.",
    features: ["스케일업 시그널 알림", "리스크 조기 경보", "자동 의사결정 지원"],
    color: "accent",
  },
  {
    icon: GitBranch,
    title: "실패 없는 채널 다각화",
    subtitle: "검증된 로직 전파",
    description: "Meta에서 검증된 성공 로직을 Google, Youtube 등 타 채널에 시행착오 없이 전파. 채널 확장의 불확실성을 제거합니다.",
    features: ["크로스 채널 성과 분석", "승리 패턴 자동 추출", "신규 채널 진입 가이드"],
    color: "primary",
  },
  {
    icon: Zap,
    title: "승리 로직의 패턴화",
    subtitle: "고전환 공식 정립",
    description: "데이터로 검증된 고전환 소재 공식 및 콘텐츠 생산 체계 정립. 크리에이티브 성공을 운이 아닌 시스템으로 만듭니다.",
    features: ["고성과 소재 DNA 분석", "콘텐츠 제작 가이드라인", "A/B 테스트 자동화"],
    color: "accent",
  },
  {
    icon: Database,
    title: "데이터 영구 자산화",
    subtitle: "데이터 주권 확보",
    description: "매체 데이터를 API로 추출하여 귀사 소유의 영구 보존 DB 구축. 매체 정책 변화에도 흔들리지 않는 데이터 주권을 확보합니다.",
    features: ["실시간 API 데이터 수집", "영구 보존 데이터베이스", "히스토리 기반 분석"],
    color: "primary",
  },
];

export function GrowthOSSection() {
  return (
    <section id="growth-os" className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            The 5 Core Systems
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            귀사에 이식될{" "}
            <span className="text-primary">5가지 핵심 시스템</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            단순 대행이 아닌, 귀사의 성장 DNA가 될 운영체제를 구축합니다.
            <br className="hidden sm:block" />
            각 모듈은 유기적으로 연결되어 통합 성장 엔진으로 작동합니다.
          </p>
        </div>

        {/* Systems Grid - Bento Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {systems.map((system, index) => {
            const isHighlight = system.highlight;
            const colorClass = system.color === "accent" ? "accent" : "primary";
            
            return (
              <div
                key={index}
                className={`group relative bg-card rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isHighlight
                    ? "md:col-span-2 lg:col-span-1 border-primary/30 shadow-lg shadow-primary/5"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {/* Module Tag */}
                {isHighlight && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    핵심 모듈
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  colorClass === "accent" ? "bg-accent/10" : "bg-primary/10"
                }`}>
                  <system.icon className={`w-7 h-7 ${colorClass === "accent" ? "text-accent" : "text-primary"}`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-1">
                      {system.title}
                    </h3>
                    <p className={`text-sm font-medium ${colorClass === "accent" ? "text-accent" : "text-primary"}`}>
                      {system.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {system.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    {system.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${colorClass === "accent" ? "bg-accent" : "bg-primary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  colorClass === "accent" 
                    ? "bg-gradient-to-br from-accent/5 to-transparent"
                    : "bg-gradient-to-br from-primary/5 to-transparent"
                }`} />
              </div>
            );
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl border border-border px-6 py-4 shadow-sm">
            <div className="flex -space-x-2">
              {systems.slice(0, 4).map((system, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center"
                >
                  <system.icon className="w-4 h-4 text-primary" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">5개 시스템 통합 운영</p>
              <p className="text-xs text-muted-foreground">평균 도입 기간: 2-4주</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
