"use client";

export function DataMoat() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <svg viewBox="0 0 320 195" className="w-full h-auto">
        <defs>
          {/* Data moat gradient fill */}
          <linearGradient id="moatGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00C781" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00C781" stopOpacity="0.1" />
          </linearGradient>
          {/* Efficiency line gradient */}
          <linearGradient id="efficiencyLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C781" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00C781" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect x="15" y="10" width="290" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

        {/* Header */}
        <rect x="15" y="10" width="290" height="28" rx="8" fill="#f1f5f9" />
        <rect x="15" y="30" width="290" height="8" fill="#f1f5f9" />
        <text x="160" y="27" className="fill-muted-foreground text-[8px] font-medium" textAnchor="middle">데이터 자산 축적 현황</text>

        {/* Y-axis label */}
        <text x="25" y="55" className="fill-muted-foreground text-[7px]" textAnchor="start">효율</text>
        <text x="25" y="165" className="fill-muted-foreground text-[7px]" textAnchor="start">낮음</text>

        {/* X-axis label */}
        <text x="45" y="175" className="fill-muted-foreground text-[7px]" textAnchor="start">시작</text>
        <text x="280" y="175" className="fill-muted-foreground text-[7px]" textAnchor="end">시간</text>

        {/* Grid lines */}
        <line x1="40" y1="50" x2="40" y2="160" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="40" y1="160" x2="290" y2="160" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="40" y1="105" x2="290" y2="105" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />

        {/* Data Moat area (widening gap) */}
        <path
          d="M50,150 Q100,145 140,135 Q180,115 220,85 Q260,50 285,35
             L285,155 Q260,150 220,147 Q180,145 140,143 Q100,142 50,150 Z"
          fill="url(#moatGradient)"
        />

        {/* Competitor line (flat/slow growth) */}
        <path
          d="M50,150 Q100,148 140,145 Q180,143 220,140 Q260,138 285,135"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4,4"
        />

        {/* Our efficiency line (exponential growth) */}
        <path
          d="M50,150 Q100,145 140,135 Q180,115 220,85 Q260,50 285,35"
          fill="none"
          stroke="url(#efficiencyLine)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Data accumulation layers at bottom */}
        <g opacity="0.8">
          <rect x="50" y="155" width="30" height="5" rx="1" fill="#00C781" opacity="0.3" />
          <rect x="85" y="153" width="35" height="7" rx="1" fill="#00C781" opacity="0.4" />
          <rect x="125" y="150" width="40" height="10" rx="1" fill="#00C781" opacity="0.5" />
          <rect x="170" y="146" width="45" height="14" rx="1" fill="#00C781" opacity="0.6" />
          <rect x="220" y="140" width="50" height="20" rx="1" fill="#00C781" opacity="0.7" />
        </g>

        {/* Data point markers on our line */}
        <circle cx="100" cy="147" r="4" fill="#00C781" />
        <circle cx="150" cy="130" r="4" fill="#00C781" />
        <circle cx="200" cy="100" r="5" fill="#00C781" />
        <circle cx="250" cy="60" r="5" fill="#00C781" />
        <circle cx="285" cy="35" r="6" fill="#00C781" />
        <circle cx="285" cy="35" r="10" fill="#00C781" opacity="0.3" />

        {/* Gap indicator */}
        <line x1="250" y1="60" x2="250" y2="139" stroke="#00C781" strokeWidth="1" strokeDasharray="2,2" />
        <text x="258" y="100" className="fill-primary text-[8px] font-bold">GAP</text>

        {/* Moat label */}
        <rect x="170" y="120" width="55" height="16" rx="8" fill="#00C781" />
        <text x="197" y="131" className="fill-white text-[7px] font-medium" textAnchor="middle">Data Moat</text>

        {/* Our company label */}
        <rect x="230" y="42" width="45" height="14" rx="3" fill="white" stroke="#00C781" strokeWidth="1" />
        <text x="252" y="52" className="fill-primary text-[7px] font-medium" textAnchor="middle">Growth Block</text>

        {/* Competitor label */}
        <rect x="230" y="125" width="45" height="14" rx="3" fill="white" stroke="#9ca3af" strokeWidth="1" />
        <text x="252" y="135" className="fill-muted-foreground text-[7px]" textAnchor="middle">경쟁사</text>

        {/* Legend */}
        <g transform="translate(50, 188)">
          <line x1="0" y1="0" x2="15" y2="0" stroke="#00C781" strokeWidth="2" />
          <text x="20" y="3" className="fill-muted-foreground text-[7px]">축적된 데이터 효율</text>
          <line x1="100" y1="0" x2="115" y2="0" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4,4" />
          <text x="120" y="3" className="fill-muted-foreground text-[7px]">일반적 효율</text>
          <rect x="180" y="-4" width="8" height="8" fill="#00C781" opacity="0.5" rx="1" />
          <text x="192" y="3" className="fill-muted-foreground text-[7px]">데이터 자산</text>
        </g>
      </svg>
    </div>
  );
}
