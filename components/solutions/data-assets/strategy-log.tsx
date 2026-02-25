"use client";

export function StrategyLog() {
  const logs = [
    {
      date: "2024.01.15",
      hypothesis: "CTA 버튼 색상 변경 (파랑→초록)",
      result: "success",
      insight: "CVR +18% 상승, 긴급성 인지 효과",
    },
    {
      date: "2024.01.08",
      hypothesis: "랜딩페이지 영상 자동재생",
      result: "fail",
      insight: "이탈률 +12%, 로딩 속도 저하 영향",
    },
    {
      date: "2024.01.02",
      hypothesis: "가격 앵커링 문구 추가",
      result: "success",
      insight: "객단가 +23% 상승, 프리미엄 인식",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="text-xs text-muted-foreground mb-4 text-center font-medium">
        전략 히스토리 로그
      </div>

      <div className="space-y-2">
        {logs.map((log, index) => (
          <div
            key={index}
            className={`rounded-lg border p-3 ${
              log.result === "success"
                ? "bg-primary/5 border-primary/20"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground font-mono">
                  {log.date}
                </span>
                <span
                  className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    log.result === "success"
                      ? "bg-primary/20 text-primary"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {log.result === "success" ? "SUCCESS" : "FAIL"}
                </span>
              </div>
            </div>
            <div className="text-xs font-medium text-foreground mb-1 [word-break:keep-all]">
              {log.hypothesis}
            </div>
            <div className="flex items-start gap-1">
              <svg className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[10px] text-muted-foreground [word-break:keep-all]">
                {log.insight}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/80 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary" />
          총 127건의 테스트 기록 보유
        </span>
      </div>
    </div>
  );
}
