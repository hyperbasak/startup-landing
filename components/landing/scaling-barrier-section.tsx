"use client";

import { AlertTriangle, Calculator, TrendingDown, History, EyeOff } from "lucide-react";

const barriers = [
  {
    icon: TrendingDown,
    question: "광고비를 늘리면 적자가 될까 두려우신가요?",
    title: "Scaling의 불확실성",
    detail: "근거 없는 증액은 성장이 아닌 매몰 비용이 됩니다. 데이터 기반 의사결정 없이는 Scale-up이 곧 Burn-rate 가속이 됩니다.",
    cost: "매월 수천만 원의 기회비용 발생",
  },
  {
    icon: Calculator,
    question: "LTV와 공헌이익을 모른 채 ROAS에만 매몰되어 있진 않나요?",
    title: "Unit Economics의 공백",
    detail: "ROAS 300%가 이익일까요, 손해일까요? 진짜 수익 구조를 모르면 매출이 올라도 적자가 커집니다.",
    cost: "허수 성장으로 인한 현금 흐름 악화",
  },
  {
    icon: History,
    question: "마케팅 팀이 전략 대신 엑셀 노가다에 시간을 쓰고 있진 않나요?",
    title: "운영 리소스 병목",
    detail: "고급 인력이 데이터 취합과 리포트 작성에 주당 20시간 이상을 소비한다면, 그것은 전략이 아닌 비용입니다.",
    cost: "핵심 인력의 70% 시간이 비전략 업무에 소모",
  },
  {
    icon: EyeOff,
    question: "공들여 데려온 고객이 어느 지점에서 이탈하는지조차 알 수 없나요?",
    title: "블랙박스 마케팅",
    detail: "원인 모를 데이터 누수가 귀중한 성장을 가로막고 있습니다. 퍼널의 어디서 고객이 사라지는지 보이지 않으면 개선도 불가능합니다.",
    cost: "전환율 최적화 기회 상실",
  },
];

export function ScalingBarrierSection() {
  return (
    <section id="scaling-barrier" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive text-sm font-medium px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            Scale-up을 가로막는 4가지 병목
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            이 중 하나라도 해당된다면,
            <br className="hidden sm:block" />
            <span className="text-primary">지금 당장 Growth OS가 필요합니다</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            PMF를 검증한 후에도 Scale-up에 실패하는 이유는 대부분 아래 병목에 있습니다.
          </p>
        </div>

        {/* Barrier Cards - Compact Grid */}
        <div className="grid md:grid-cols-2 gap-3 lg:gap-4">
          {barriers.map((barrier, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl border border-border p-4 lg:p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/20"
            >
              {/* Header: Icon + Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <barrier.icon className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base lg:text-lg font-semibold text-foreground leading-tight truncate">
                    {barrier.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{barrier.cost}</span>
                </div>
              </div>

              {/* Question */}
              <p className="text-sm lg:text-base font-medium text-foreground mb-2 leading-snug">
                {barrier.question}
              </p>

              {/* Detail */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {barrier.detail}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Visual Cue */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-muted-foreground mb-6">
            경쟁사와의 격차가 벌어지기 전,{" "}
            <strong className="text-foreground">Growth OS가 제안하는 해결책</strong>
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
