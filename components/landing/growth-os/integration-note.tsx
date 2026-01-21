"use client";

import { GROWTH_SYSTEMS } from "../constants";

export function IntegrationNote() {
  return (
    <div className="mt-12 text-center">
      <div className="inline-flex items-center gap-4 bg-white rounded-2xl border border-border px-6 py-4 shadow-sm">
        <div className="flex -space-x-2">
          {GROWTH_SYSTEMS.map((system, index) => (
            <div
              key={index}
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
  );
}
