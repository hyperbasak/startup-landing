"use client";

import { MapPin, Target, Component } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface EmpathyCard {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
}

const CARDS: EmpathyCard[] = [
  {
    title: "비즈니스 단계",
    description:
      "점유율을 다투는 초기 진입과 효율을 극대화하는 성숙기의 전략은 완전히 결이 달라야 합니다.",
    icon: MapPin,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "도달할 목표",
    description:
      "즉각적인 구매 전환에 집중할지, 지속 가능한 브랜드 자산을 쌓을지에 따라 퍼널 설계와 예산 배분이 달라집니다.",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "아이템의 특성",
    description:
      "빠른 결제의 저관여 제품과 깊은 신뢰가 필요한 고관여 제품. 아이템의 본질에 맞춰 유저 여정을 재설계해야 합니다.",
    icon: Component,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

function Card({ card }: { card: EmpathyCard; }) {
  const Icon = card.icon;

  return (
    <div
      className={`rounded-2xl border ${card.borderColor} bg-white p-7 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`inline-flex items-center justify-center p-2 rounded-xl ${card.bgColor}`}>
          <Icon className={`w-5 h-5 ${card.color}`} />
        </div>
        <h3 className="text-lg font-bold text-foreground">
          {card.title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed [word-break:keep-all]">
        {card.description}
      </p>
    </div>
  );
}

export function EmpathySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 [word-break:keep-all]">
            회사마다 마케팅 전략은{" "}
            <span className="text-primary">당연히</span> 달라야 합니다.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed [word-break:keep-all]">
            남들과 똑같은 전략과 실행으로는 독보적인 성과를 기대하기 어렵습니다.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {CARDS.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
