"use client";

export function OrchestrationHub() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <svg viewBox="0 0 320 195" className="w-full h-auto">
        <defs>
          <linearGradient id="hubGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C781" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00C781" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Background chaos lines (faded) */}
        <g opacity="0.15">
          <path d="M20,40 Q60,80 40,120" fill="none" stroke="#9ca3af" strokeWidth="1" />
          <path d="M30,60 Q70,50 50,100" fill="none" stroke="#9ca3af" strokeWidth="1" />
          <path d="M25,90 Q55,110 45,140" fill="none" stroke="#9ca3af" strokeWidth="1" />
          <path d="M280,35 Q250,70 270,110" fill="none" stroke="#9ca3af" strokeWidth="1" />
          <path d="M290,55 Q260,85 280,125" fill="none" stroke="#9ca3af" strokeWidth="1" />
          <path d="M285,80 Q255,100 275,145" fill="none" stroke="#9ca3af" strokeWidth="1" />
        </g>

        {/* Left side: Partners/Agencies */}
        <g transform="translate(20, 30)">
          <rect width="55" height="22" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
          <text x="27" y="15" className="fill-muted-foreground text-[8px]" textAnchor="middle">광고 대행사</text>
        </g>
        <g transform="translate(20, 60)">
          <rect width="55" height="22" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
          <text x="27" y="15" className="fill-muted-foreground text-[8px]" textAnchor="middle">콘텐츠 팀</text>
        </g>
        <g transform="translate(20, 90)">
          <rect width="55" height="22" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
          <text x="27" y="15" className="fill-muted-foreground text-[8px]" textAnchor="middle">CRM 파트너</text>
        </g>
        <g transform="translate(20, 120)">
          <rect width="55" height="22" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
          <text x="27" y="15" className="fill-muted-foreground text-[8px]" textAnchor="middle">데이터 분석</text>
        </g>

        {/* Right side: Execution outputs */}
        <g transform="translate(245, 30)">
          <rect width="55" height="22" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <text x="27" y="15" className="fill-primary text-[8px]" textAnchor="middle">캠페인 A</text>
        </g>
        <g transform="translate(245, 60)">
          <rect width="55" height="22" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <text x="27" y="15" className="fill-primary text-[8px]" textAnchor="middle">캠페인 B</text>
        </g>
        <g transform="translate(245, 90)">
          <rect width="55" height="22" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <text x="27" y="15" className="fill-primary text-[8px]" textAnchor="middle">리텐션</text>
        </g>
        <g transform="translate(245, 120)">
          <rect width="55" height="22" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <text x="27" y="15" className="fill-primary text-[8px]" textAnchor="middle">스케일업</text>
        </g>

        {/* Connecting lines to hub */}
        <path d="M75,41 Q100,41 115,75" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M75,71 Q100,71 115,80" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M75,101 Q100,101 115,95" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M75,131 Q100,131 115,105" fill="none" stroke="#d1d5db" strokeWidth="1.5" />

        {/* Lines from hub to outputs */}
        <path d="M205,75 Q220,41 245,41" fill="none" stroke="#00C781" strokeWidth="1.5" />
        <path d="M205,80 Q220,71 245,71" fill="none" stroke="#00C781" strokeWidth="1.5" />
        <path d="M205,95 Q220,101 245,101" fill="none" stroke="#00C781" strokeWidth="1.5" />
        <path d="M205,105 Q220,131 245,131" fill="none" stroke="#00C781" strokeWidth="1.5" />

        {/* Central Command Hub */}
        <rect x="110" y="55" width="100" height="80" rx="8" fill="url(#hubGlow)" stroke="#00C781" strokeWidth="2" />

        {/* Hub header */}
        <rect x="110" y="55" width="100" height="24" rx="8" fill="#00C781" />
        <rect x="110" y="71" width="100" height="8" fill="#00C781" />
        <text x="160" y="71" className="fill-white text-[9px] font-bold" textAnchor="middle">Growth OS</text>

        {/* Hub content - Strategy cards */}
        <g transform="translate(118, 88)">
          <rect width="84" height="18" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="1" />
          <circle cx="10" cy="9" r="4" fill="#00C781" />
          <text x="18" y="12" className="fill-foreground text-[7px]">통합 전략 조율 중...</text>
        </g>
        <g transform="translate(118, 110)">
          <rect width="84" height="18" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="1" />
          <circle cx="10" cy="9" r="4" fill="#6366f1" />
          <text x="18" y="12" className="fill-foreground text-[7px]">실행 스케줄 관리</text>
        </g>

        {/* Status indicator */}
        <circle cx="200" cy="65" r="4" fill="#00C781" className="animate-pulse" />

        {/* Labels */}
        <text x="47" y="158" className="fill-muted-foreground text-[8px]" textAnchor="middle">파트너사</text>
        <text x="160" y="150" className="fill-primary text-[8px] font-medium" textAnchor="middle">단일 지휘 센터</text>
        <text x="272" y="158" className="fill-muted-foreground text-[8px]" textAnchor="middle">실행 결과</text>

        {/* Legend */}
        <g transform="translate(45, 182)">
          <rect x="0" y="-4" width="8" height="8" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" rx="1" />
          <text x="12" y="3" className="fill-muted-foreground text-[8px]">개별 관리 필요</text>
          <text x="85" y="3" className="fill-muted-foreground text-[8px]">→</text>
          <rect x="100" y="-4" width="8" height="8" fill="#00C781" rx="1" />
          <text x="112" y="3" className="fill-muted-foreground text-[8px]">Growth OS 조율</text>
          <text x="175" y="3" className="fill-muted-foreground text-[8px]">→</text>
          <rect x="190" y="-4" width="8" height="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" rx="1" />
          <text x="202" y="3" className="fill-muted-foreground text-[8px]">정돈된 실행</text>
        </g>
      </svg>
    </div>
  );
}
