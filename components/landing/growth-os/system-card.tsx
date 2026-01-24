"use client";

import { ChevronRight, ChevronDown } from "lucide-react";

import type { GrowthSystem } from "../types";

interface SystemCardProps {
  system: GrowthSystem;
}

function SystemCard({ system }: SystemCardProps) {
  const Icon = system.icon;
  const isAccent = system.color === "accent";

  const iconBgClass = isAccent ? "bg-accent/10" : "bg-primary/10";
  const iconColorClass = isAccent ? "text-accent" : "text-primary";
  const bulletClass = isAccent ? "bg-accent" : "bg-primary";

  return (
    <div className="group bg-card rounded-xl border border-border p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 relative">

      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${iconBgClass}`}
        >
          <Icon className={`w-5 h-5 ${iconColorClass}`} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-base lg:text-lg font-semibold text-foreground leading-tight">
            {system.title}
          </h3>
          <p className="text-xs text-muted-foreground">{system.subtitle}</p>
        </div>
      </div>

      <ul className="space-y-2">
        {system.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <div className={`w-1 h-1 rounded-full shrink-0 ${bulletClass}`} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowArrow({ isLast }: { isLast: boolean; }) {
  if (isLast) return null;

  return (
    <>
      {/* Desktop: horizontal arrow */}
      <div className="hidden lg:flex items-center justify-center">
        <ChevronRight className="w-6 h-6 text-primary/40" />
      </div>
      {/* Mobile: vertical arrow */}
      <div className="flex lg:hidden items-center justify-center py-2">
        <ChevronDown className="w-6 h-6 text-primary/40" />
      </div>
    </>
  );
}

interface SystemGridProps {
  systems: GrowthSystem[];
}

export function SystemAccordionList({ systems }: SystemGridProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-0 lg:gap-2">
      {systems.map((system, index) => (
        <div key={index} className="flex flex-col lg:flex-row lg:items-center lg:flex-1">
          <div className="lg:flex-1">
            <SystemCard system={system} />
          </div>
          <FlowArrow isLast={index === systems.length - 1} />
        </div>
      ))}
    </div>
  );
}
