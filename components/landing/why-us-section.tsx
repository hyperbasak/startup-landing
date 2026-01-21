"use client";

import { X, Check, Sparkles } from "lucide-react";

const comparisons = [
  {
    category: "데이터 보존성",
    legacy: "특정 기간 경과 후 강제 휘발",
    growthOS: "귀사 소유 DB에 영구 적재",
  },
  {
    category: "운영 방식",
    legacy: "인력 기반의 수동 대행",
    growthOS: "시스템 이식 및 전략적 판단 지원",
  },
  {
    category: "성과 측정",
    legacy: "매체 리포트(ROAS) 의존",
    growthOS: "비즈니스 공헌이익 실시간 추적",
  },
  {
    category: "스케일업 결정",
    legacy: "담당자 경험과 감에 의존",
    growthOS: "데이터 시그널 기반 자동 알림",
  },
  {
    category: "채널 확장",
    legacy: "채널별 개별 시행착오 반복",
    growthOS: "검증 로직의 크로스채널 전파",
  },
  {
    category: "종료 후 자산",
    legacy: "계약 종료 시 모든 데이터 소멸",
    growthOS: "영구적 성장 자산으로 축적",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
            Strategic Difference
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            기존 마케팅 대행 vs{" "}
            <span className="text-primary">Growth OS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            같은 비용, 완전히 다른 결과. 무엇이 다른지 직접 비교해보세요.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Legacy Card */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 p-6 lg:p-8 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                <X className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-600">기존 마케팅 대행</h3>
                <p className="text-sm text-gray-500">Traditional Agency Model</p>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 mb-1">{item.category}</p>
                    <p className="text-gray-600">{item.legacy}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Overlay Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/50 to-transparent rounded-bl-full" />
          </div>

          {/* Growth OS Card */}
          <div className="relative bg-gradient-to-br from-white to-primary/5 rounded-3xl border-2 border-primary/30 p-6 lg:p-8 shadow-xl shadow-primary/10">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
            
            {/* Header */}
            <div className="relative flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Check className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Growth OS</h3>
                <p className="text-sm text-primary">Scale-up Operating System</p>
              </div>
            </div>

            {/* Items */}
            <div className="relative space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-primary/10 last:border-0 last:pb-0">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary mb-1 flex items-center gap-1.5">
                      {item.category}
                      {item.highlight && (
                        <span className="inline-flex items-center gap-1 bg-accent/20 text-accent text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          영구 자산
                        </span>
                      )}
                    </p>
                    <p className="text-foreground font-medium">{item.growthOS}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute top-8 right-8 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
            </div>

            {/* Recommended Badge */}
            <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
              RECOMMENDED
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-muted-foreground mb-6">
            여전히 고민되시나요?{" "}
            <strong className="text-foreground">무료 진단으로 직접 확인해보세요</strong>
          </p>
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 mx-auto text-primary/60" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
