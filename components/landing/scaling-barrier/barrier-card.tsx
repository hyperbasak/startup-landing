"use client";

import type { Barrier } from "../types";

interface BarrierCardProps {
  barrier: Barrier;
}

export function BarrierCard({ barrier }: BarrierCardProps) {
  const Icon = barrier.icon;

  return (
    <div className="group relative bg-card rounded-xl border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/20">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Icon className="w-6 h-6 text-destructive" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg lg:text-xl font-semibold text-foreground leading-snug mb-2 [word-break:keep-all]">
            {barrier.question}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed [word-break:keep-all]">
            {barrier.detail}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
