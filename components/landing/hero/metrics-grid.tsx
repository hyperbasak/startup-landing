"use client";

import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";

import type { Metric } from "../types";

const METRICS: Metric[] = [
  { label: "LTV", value: "₩892K", change: "+12.3%", icon: TrendingUp, positive: true },
  { label: "CAC", value: "₩45.2K", change: "-8.1%", icon: DollarSign, positive: true },
  { label: "LTV/CAC", value: "19.7x", change: "+2.4x", icon: BarChart3, positive: true },
  { label: "Active", value: "12.8K", change: "+23%", icon: Users, positive: true },
];

function MetricCard({ metric }: { metric: Metric }) {
  const Icon = metric.icon;

  return (
    <div className="bg-muted/50 rounded-xl p-2.5 lg:p-3">
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
        </div>
        <span className="text-[11px] text-muted-foreground truncate">
          {metric.label}
        </span>
      </div>
      <div className="text-base lg:text-lg font-semibold text-foreground">
        {metric.value}
      </div>
      <div
        className={`text-[11px] font-medium ${
          metric.positive ? "text-accent" : "text-destructive"
        }`}
      >
        {metric.change}
      </div>
    </div>
  );
}

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:gap-3">
      {METRICS.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  );
}
