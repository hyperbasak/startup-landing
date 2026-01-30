"use client";

export function LTVBarChart() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <svg viewBox="0 0 320 195" className="w-full h-auto">
        <defs>
          {/* Profit area gradient */}
          <linearGradient id="ltvProfitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00C781" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00C781" stopOpacity="0.05" />
          </linearGradient>
          {/* Loss area gradient */}
          <linearGradient id="ltvLossGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Axes */}
        <line x1="40" y1="85" x2="300" y2="85" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="40" y1="25" x2="40" y2="145" stroke="#e5e7eb" strokeWidth="1" />

        {/* Grid lines */}
        <line x1="40" y1="55" x2="300" y2="55" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="40" y1="115" x2="300" y2="115" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />

        {/* Y-axis labels */}
        <text x="30" y="58" className="fill-muted-foreground text-[8px]" textAnchor="end">+</text>
        <text x="30" y="88" className="fill-muted-foreground text-[8px]" textAnchor="end">0</text>
        <text x="30" y="118" className="fill-muted-foreground text-[8px]" textAnchor="end">-</text>

        {/* Y-axis title */}
        <text x="12" y="85" className="fill-muted-foreground text-[8px]" textAnchor="middle" transform="rotate(-90, 12, 85)">누적 수익</text>

        {/* X-axis labels */}
        <text x="60" y="155" className="fill-muted-foreground text-[7px]" textAnchor="middle">1M</text>
        <text x="100" y="155" className="fill-muted-foreground text-[7px]" textAnchor="middle">3M</text>
        <text x="140" y="155" className="fill-muted-foreground text-[7px]" textAnchor="middle">6M</text>
        <text x="200" y="155" className="fill-muted-foreground text-[7px]" textAnchor="middle">12M</text>
        <text x="280" y="155" className="fill-muted-foreground text-[7px]" textAnchor="middle">24M</text>

        {/* X-axis title */}
        <text x="170" y="168" className="fill-muted-foreground text-[9px]" textAnchor="middle">Time →</text>

        {/* Loss area (below zero line) */}
        <path
          d="M40,85 L40,120 Q60,125 80,118 Q100,105 120,90 L120,85 Z"
          fill="url(#ltvLossGradient)"
        />

        {/* Profit area (above zero line) */}
        <path
          d="M120,85 L120,90 Q140,75 160,65 Q200,45 240,35 Q270,30 290,28 L290,85 Z"
          fill="url(#ltvProfitGradient)"
        />

        {/* LTV curve */}
        <path
          d="M40,120 Q60,125 80,118 Q100,105 120,90 Q140,75 160,65 Q200,45 240,35 Q270,30 290,28"
          fill="none"
          stroke="#00C781"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* CAC line (initial investment) */}
        <line x1="40" y1="120" x2="40" y2="85" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,3" />
        <text x="50" y="125" className="fill-red-400 text-[8px]">CAC</text>

        {/* Breakeven point */}
        <circle cx="120" cy="90" r="5" fill="#00C781" />
        <circle cx="120" cy="90" r="9" fill="#00C781" opacity="0.25" />

        {/* Breakeven label */}
        <rect x="85" y="60" width="70" height="18" rx="3" fill="#00C781" />
        <polygon points="120,78 125,78 122,82" fill="#00C781" />
        <text x="120" y="72" className="fill-white text-[8px] font-medium" textAnchor="middle">Payback Point</text>

        {/* Target LTV line at 12 months */}
        <line x1="200" y1="25" x2="200" y2="145" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="6,4" />

        {/* Target LTV label */}
        <rect x="175" y="130" width="50" height="14" rx="2" fill="#6366f1" opacity="0.9" />
        <text x="200" y="140" className="fill-white text-[7px] font-medium" textAnchor="middle">Target LTV</text>

        {/* LTV value at 12 months */}
        <circle cx="200" cy="45" r="4" fill="#00C781" />
        <rect x="205" y="38" width="55" height="16" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="232" y="49" className="fill-primary text-[8px] font-bold" textAnchor="middle">LTV 3.2x CAC</text>

        {/* Safe investment zone indicator */}
        <rect x="225" y="95" width="65" height="26" rx="4" fill="#dcfce7" stroke="#00C781" strokeWidth="1" />
        <text x="257" y="106" className="fill-muted-foreground text-[7px]" textAnchor="middle">미래 가치 기준</text>
        <text x="257" y="116" className="fill-primary text-[8px] font-bold" textAnchor="middle">안전한 투자</text>

        {/* Legend */}
        <g transform="translate(55, 188)">
          <line x1="0" y1="0" x2="15" y2="0" stroke="#00C781" strokeWidth="2.5" />
          <text x="20" y="3" className="fill-muted-foreground text-[8px]">누적 LTV</text>
          <line x1="75" y1="0" x2="90" y2="0" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="95" y="3" className="fill-muted-foreground text-[8px]">Target 12M</text>
          <rect x="155" y="-4" width="8" height="8" fill="#ef4444" opacity="0.2" rx="1" />
          <text x="168" y="3" className="fill-muted-foreground text-[8px]">투자 회수 전</text>
        </g>
      </svg>
    </div>
  );
}
