"use client";

import { TrendingUp, DollarSign } from "lucide-react";

import { MetricsGrid } from "./metrics-grid";
import { DashboardChart } from "./dashboard-chart";
import { SignalIndicator } from "./signal-indicator";

function FloatingCard({
  icon: Icon,
  label,
  value,
  position,
  iconColorClass,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  position: "top-right" | "bottom-left";
  iconColorClass: string;
}) {
  const positionClasses =
    position === "top-right"
      ? "-top-2 -right-2 xl:-top-4 xl:-right-4 animate-float"
      : "-bottom-2 -left-2 xl:-bottom-4 xl:-left-4 animate-float-delayed";

  return (
    <div
      className={`absolute bg-white rounded-lg shadow-lg border border-border p-2 hidden lg:block ${positionClasses}`}
    >
      <div className="flex items-center gap-1.5">
        <div className={`w-6 h-6 rounded-full ${iconColorClass} flex items-center justify-center`}>
          <Icon className="w-3 h-3" />
        </div>
        <div>
          <div className="text-[10px] text-muted-foreground">{label}</div>
          <div className="font-semibold text-xs text-foreground">{value}</div>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative w-full mx-auto lg:scale-[0.85] xl:scale-100 origin-top-right">
      <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
        <DashboardHeader />
        <div className="p-4 lg:p-5 space-y-4">
          <MetricsGrid />
          <DashboardChart />
          <SignalIndicator />
        </div>
      </div>

      <FloatingCard
        icon={TrendingUp}
        label="ROAS"
        value="847%"
        position="top-right"
        iconColorClass="bg-accent/10 text-accent"
      />
      <FloatingCard
        icon={DollarSign}
        label="공헌이익률"
        value="42.3%"
        position="bottom-left"
        iconColorClass="bg-primary/10 text-primary"
      />
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="bg-foreground/[0.02] border-b border-border px-4 py-3 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-muted rounded-md px-4 py-1 text-xs text-muted-foreground flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          growth-os-dashboard.app
        </div>
      </div>
    </div>
  );
}
