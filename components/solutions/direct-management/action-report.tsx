"use client";

export function ActionReport() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-xs text-muted-foreground mb-4 text-center font-medium">
        의사결정 중심 알림
      </div>

      {/* Mobile notification style */}
      <div className="w-full max-w-[260px] bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <div className="text-white text-xs font-medium">Growth Block Alert</div>
              <div className="text-white/70 text-[10px]">지금 · 의사결정 요청</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-sm font-bold text-foreground mb-2 [word-break:keep-all]">
            Meta 채널 스케일업 기회 감지
          </div>
          <div className="text-xs text-muted-foreground mb-4 [word-break:keep-all]">
            현재 ROAS 4.2 달성 중. 예산 30% 증액 시 예상 추가 수익 ₩12.5M
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-muted/50 rounded-lg p-2 text-center">
              <div className="text-[10px] text-muted-foreground">현재 ROAS</div>
              <div className="text-sm font-bold text-primary">4.2</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-2 text-center">
              <div className="text-[10px] text-muted-foreground">예상 수익</div>
              <div className="text-sm font-bold text-primary">+₩12.5M</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button className="flex-1 bg-primary text-white text-xs font-medium py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
              증액 승인
            </button>
            <button className="flex-1 bg-muted text-muted-foreground text-xs font-medium py-2.5 rounded-lg hover:bg-muted/80 transition-colors">
              검토 보류
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          읽고 결정만 하면 됩니다
        </span>
      </div>
    </div>
  );
}
