"use client";

export function RetentionTimeline() {
  const events = [
    { day: "D+0", label: "첫 구매", type: "purchase", active: true },
    { day: "D+3", label: "리뷰 요청", type: "email", active: true },
    { day: "D+7", label: "관련 상품 추천", type: "push", active: true },
    { day: "D+14", label: "할인 쿠폰 발송", type: "coupon", active: false },
    { day: "D+30", label: "재구매 유도", type: "retarget", active: false },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "purchase":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case "email":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "push":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        );
      case "coupon":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        );
      case "retarget":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="text-xs text-muted-foreground mb-4 text-center font-medium">
        고객 리텐션 자동화 타임라인
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />

        <div className="flex justify-between relative">
          {events.map((event, index) => (
            <div key={event.day} className="flex flex-col items-center" style={{ width: "18%" }}>
              {/* Node */}
              <div
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  event.active
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-muted text-muted-foreground border-2 border-dashed border-border"
                }`}
              >
                {getIcon(event.type)}
                {event.active && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
                )}
              </div>

              {/* Labels */}
              <div className="mt-3 text-center">
                <div className={`text-[10px] font-bold ${event.active ? "text-primary" : "text-muted-foreground"}`}>
                  {event.day}
                </div>
                <div className="text-[10px] text-muted-foreground whitespace-nowrap">
                  {event.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-4">
        <span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary" />
          발송 완료
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="w-2 h-2 rounded-full border-2 border-dashed border-muted-foreground" />
          예정
        </span>
      </div>
    </div>
  );
}
