"use client";

import type { Barrier } from "../types";

interface BarrierCardProps {
  barrier: Barrier;
}

export function BarrierCard({ barrier }: BarrierCardProps) {
  const Icon = barrier.icon;

  return (
    <div className="group relative bg-card rounded-xl border border-border p-4 lg:p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/20">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Icon className="w-5 h-5 text-destructive" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base lg:text-lg font-semibold text-foreground leading-tight truncate">
            {barrier.title}
          </h3>
          <span className="text-xs text-muted-foreground">{barrier.cost}</span>
        </div>
      </div>

      <p className="text-sm lg:text-base font-medium text-foreground mb-2 leading-snug">
        {barrier.question}
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {barrier.detail}
      </p>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
