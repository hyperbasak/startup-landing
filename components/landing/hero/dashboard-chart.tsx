"use client";

import { DASHBOARD_CHART_DATA } from "../constants";

export function DashboardChart() {
  return (
    <div className="bg-muted/30 rounded-xl p-3 h-24 lg:h-28 flex items-end gap-0.5">
      {DASHBOARD_CHART_DATA.map((height, index) => (
        <div
          key={index}
          className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm transition-all duration-500"
          style={{
            height: `${height}%`,
            animationDelay: `${index * 100}ms`,
          }}
        />
      ))}
    </div>
  );
}
