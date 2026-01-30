"use client";

export function FunnelDiagram() {
  const stages = [
    { label: "광고 노출", users: 10000, rate: 100, dropRate: null },
    { label: "클릭", users: 850, rate: 8.5, dropRate: 91.5 },
    { label: "상품 조회", users: 420, rate: 4.2, dropRate: 50.6 },
    { label: "장바구니", users: 180, rate: 1.8, dropRate: 57.1 },
    { label: "결제 완료", users: 95, rate: 0.95, dropRate: 47.2 },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="text-xs text-muted-foreground mb-4 text-center font-medium">
        Full-Funnel 이탈 분석
      </div>

      <div className="space-y-2">
        {stages.map((stage, index) => {
          const widthPercent = 40 + (60 * (stages.length - index)) / stages.length;
          const isHighDrop = stage.dropRate && stage.dropRate > 50;

          return (
            <div key={stage.label} className="relative">
              <div className="flex items-center gap-3">
                <div
                  className="h-10 rounded-lg flex items-center justify-between px-3 transition-all relative overflow-hidden"
                  style={{
                    width: `${widthPercent}%`,
                    backgroundColor: isHighDrop ? "rgba(239, 68, 68, 0.15)" : "rgba(0, 199, 129, 0.15)",
                    borderLeft: `3px solid ${isHighDrop ? "#EF4444" : "#00C781"}`,
                  }}
                >
                  <span className="text-xs font-medium text-foreground">{stage.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {stage.users.toLocaleString()}명
                  </span>
                </div>

                {stage.dropRate && (
                  <div className={`flex items-center gap-1 text-xs ${isHighDrop ? "text-red-500" : "text-muted-foreground"}`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="font-medium">-{stage.dropRate}%</span>
                    {isHighDrop && (
                      <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-[10px] font-medium">
                        이탈 집중
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/80 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          이탈 집중 구간 자동 감지
        </span>
      </div>
    </div>
  );
}
