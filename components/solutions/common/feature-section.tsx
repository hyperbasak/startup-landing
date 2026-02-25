"use client";

import type { ReactNode } from "react";
import { PointCard } from "./point-card";

interface FeaturePoint {
  main: string;
  sub: string;
  visual: ReactNode;
}

interface FeatureSectionProps {
  id: string;
  headline: ReactNode;
  description: ReactNode;
  points: FeaturePoint[];
  variant?: "white" | "gradient";
}

export function FeatureSection({
  id,
  headline,
  description,
  points,
  variant = "white",
}: FeatureSectionProps) {
  const bgClass =
    variant === "gradient"
      ? "bg-gradient-to-b from-muted/50 to-white"
      : "bg-white";

  return (
    <section id={id} className={`py-20 lg:py-24 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 mt-6 leading-tight [word-break:keep-all]">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg sm:text-2xl leading-relaxed [word-break:keep-all]">
            {description}
          </p>
        </div>
        <div>
          {points.map((point, index) => (
            <PointCard
              key={index}
              main={point.main}
              sub={point.sub}
              visual={point.visual}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
