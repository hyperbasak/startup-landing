"use client";

import type { ReactNode } from "react";

interface PointCardProps {
  main: string;
  sub: string;
  visual: ReactNode;
}

export function PointCard({ main, sub, visual }: PointCardProps) {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-0 items-center lg:border-b lg:border-border lg:first:border-t mb-12 lg:mb-0">
      <div className="flex-1 space-y-3 pr-4">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight [word-break:keep-all]">
          {main}
        </h3>
        <p className="text-muted-foreground text-base sm:text-xl leading-relaxed [word-break:keep-all]">
          {sub}
        </p>
      </div>
      <div className="flex-1 w-full flex items-center lg:border-l lg:border-border">
        <div className="w-full bg-muted/50 p-5 lg:p-6 lg:aspect-[16/10] flex items-center justify-center">
          {visual}
        </div>
      </div>
    </div>
  );
}
