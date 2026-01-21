"use client";

import { Check } from "lucide-react";

import type { Comparison } from "../types";

interface GrowthOSCardProps {
  comparisons: Comparison[];
}

export function GrowthOSCard({ comparisons }: GrowthOSCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-white to-primary/5 rounded-3xl border-2 border-primary/30 p-6 lg:p-8 shadow-xl shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />

      <div className="relative flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
          <Check className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Growth OS</h3>
          <p className="text-sm text-primary">Scale-up Operating System</p>
        </div>
      </div>

      <div className="relative space-y-4">
        {comparisons.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 pb-4 border-b border-primary/10 last:border-0 last:pb-0"
          >
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-accent" />
            </div>
            <div>
              <p className="text-xs font-medium text-primary mb-1 flex items-center gap-1.5">
                {item.category}
              </p>
              <p className="text-foreground font-medium">{item.growthOS}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute top-8 right-8 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
      </div>

      <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
        RECOMMENDED
      </div>
    </div>
  );
}
