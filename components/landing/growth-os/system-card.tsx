"use client";

import type { GrowthSystem } from "../types";

interface SystemCardProps {
  system: GrowthSystem;
}

export function SystemCard({ system }: SystemCardProps) {
  const Icon = system.icon;
  const isAccent = system.color === "accent";

  const iconBgClass = isAccent ? "bg-accent/10" : "bg-primary/10";
  const iconColorClass = isAccent ? "text-accent" : "text-primary";
  const subtitleClass = isAccent ? "text-accent" : "text-primary";
  const bulletClass = isAccent ? "bg-accent" : "bg-primary";
  const hoverGradientClass = isAccent
    ? "bg-gradient-to-br from-accent/5 to-transparent"
    : "bg-gradient-to-br from-primary/5 to-transparent";

  return (
    <div className="group relative bg-card rounded-xl border p-4 lg:p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-border hover:border-primary/20 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${iconBgClass}`}
        >
          <Icon className={`w-5 h-5 ${iconColorClass}`} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base lg:text-lg font-semibold text-foreground leading-tight">
            {system.title}
          </h3>
          <p className={`text-xs font-medium ${subtitleClass}`}>
            {system.subtitle}
          </p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {system.description}
      </p>

      <ul className="space-y-1.5">
        {system.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-foreground">
            <div className={`w-1.5 h-1.5 rounded-full ${bulletClass}`} />
            {feature}
          </li>
        ))}
      </ul>

      <div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${hoverGradientClass}`}
      />
    </div>
  );
}
