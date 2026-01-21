"use client";

import { TrendingUp, DollarSign } from "lucide-react";

import { AnimatedCounter } from "./animated-counter";

export function SocialProof() {
  return (
    <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-primary" />
        </div>
        <span>
          평균{" "}
          <strong className="text-foreground">
            <AnimatedCounter end={340} suffix="%" />
          </strong>{" "}
          ROAS 개선
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <DollarSign className="w-4 h-4 text-accent" />
        </div>
        <span>
          월{" "}
          <strong className="text-foreground">
            <AnimatedCounter end={50} suffix="억+" />
          </strong>{" "}
          광고비 운용
        </span>
      </div>
    </div>
  );
}
