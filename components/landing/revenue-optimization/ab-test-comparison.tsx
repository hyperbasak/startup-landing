"use client";

export function ABTestComparison() {
  const variants = [
    {
      name: "A",
      headline: "지금 바로 시작하세요",
      ctr: 3.2,
      cvr: 1.8,
      winner: false,
    },
    {
      name: "B",
      headline: "무료 체험으로 확인하세요",
      ctr: 2.8,
      cvr: 2.9,
      winner: true,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="text-xs text-muted-foreground mb-4 text-center font-medium">
        A/B 테스트 실시간 성과 비교
      </div>

      <div className="grid grid-cols-2 gap-4">
        {variants.map((variant) => (
          <div
            key={variant.name}
            className={`relative rounded-xl p-4 border-2 transition-all ${
              variant.winner
                ? "border-primary bg-primary/5"
                : "border-border bg-muted/30"
            }`}
          >
            {variant.winner && (
              <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                WINNER
              </div>
            )}

            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  variant.winner
                    ? "bg-primary text-white"
                    : "bg-muted-foreground/20 text-muted-foreground"
                }`}
              >
                {variant.name}
              </span>
              <span className="text-[10px] text-muted-foreground truncate">
                {variant.headline}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground">CTR</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${variant.ctr * 20}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-foreground w-10 text-right">
                    {variant.ctr}%
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[10px] text-muted-foreground">CVR</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${variant.winner ? "bg-primary" : "bg-gray-400"}`}
                      style={{ width: `${variant.cvr * 20}%` }}
                    />
                  </div>
                  <span className={`text-xs font-medium w-10 text-right ${variant.winner ? "text-primary" : "text-foreground"}`}>
                    {variant.cvr}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full font-medium">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          CVR 기준 최적 소재 자동 선별
        </span>
      </div>
    </div>
  );
}
