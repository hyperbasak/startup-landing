"use client";

import { CheckCircle2 } from "lucide-react";

import { BENEFITS } from "../constants";

export function BenefitsList() {
  return (
    <div className="space-y-4">
      {BENEFITS.map((benefit, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <benefit.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <span className="text-foreground font-medium">{benefit.text}</span>
        </div>
      ))}
    </div>
  );
}

export function TrustSignals() {
  const signals = [
    "부담 없는 무료 리포트",
    "개별 비즈니스 맞춤 설계",
    "48시간 내 리포트 발송",
  ];

  return (
    <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
      {signals.map((signal, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span>{signal}</span>
        </div>
      ))}
    </div>
  );
}
