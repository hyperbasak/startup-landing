"use client";

export function SignalIndicator() {
  return (
    <div className="flex items-center justify-between bg-accent/10 rounded-xl p-3 border border-accent/20">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
        <span className="text-xs lg:text-sm font-medium text-foreground">
          스케일업 시그널
        </span>
      </div>
      <div className="text-right">
        <div className="text-sm lg:text-base font-bold text-accent">증액 가능</div>
        <div className="text-[10px] lg:text-xs text-muted-foreground">
          안전 마진 +34%
        </div>
      </div>
    </div>
  );
}
