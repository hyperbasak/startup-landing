"use client";

export function ContributionMarginChart() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <svg viewBox="0 0 320 195" className="w-full h-auto">
        <defs>
          {/* Profit area gradient */}
          <linearGradient id="profitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00C781" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00C781" stopOpacity="0.05" />
          </linearGradient>
          {/* Danger zone gradient */}
          <linearGradient id="dangerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Axes */}
        <line x1="40" y1="145" x2="300" y2="145" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="40" y1="25" x2="40" y2="145" stroke="#e5e7eb" strokeWidth="1" />

        {/* Grid lines */}
        <line x1="40" y1="85" x2="300" y2="85" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="40" y1="55" x2="300" y2="55" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="40" y1="115" x2="300" y2="115" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />

        {/* Y-axis label */}
        <text x="12" y="100" className="text-[9px]" textAnchor="middle" transform="rotate(-90, 12, 85)">영업이익</text>

        {/* X-axis label */}
        <text x="170" y="162" className="text-[9px]" textAnchor="middle">Target CAC →</text>

        {/* Profit zone area (left of max point) */}
        <path
          d="M40,140 Q80,130 120,90 Q160,55 190,45 L190,145 L40,145 Z"
          fill="url(#profitGradient)"
        />

        {/* Danger zone area (right of max point) */}
        <path
          d="M190,45 Q220,50 250,75 Q280,105 295,130 L295,145 L190,145 Z"
          fill="url(#dangerGradient)"
        />

        {/* Max profit vertical line */}
        <line x1="190" y1="45" x2="190" y2="145" stroke="#00C781" strokeWidth="1.5" strokeDasharray="4,3" />

        {/* Profit curve (bell-shaped) */}
        <path
          d="M40,140 Q80,130 120,90 Q160,55 190,45 Q220,50 250,75 Q280,105 295,130"
          fill="none"
          stroke="#00C781"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Max profit point */}
        <circle cx="190" cy="45" r="4" fill="#00C781" />
        <circle cx="190" cy="45" r="8" fill="#00C781" opacity="0.25" />

        {/* Max Profit Point label */}
        <rect x="145" y="18" width="90" height="20" rx="4" fill="#00C781" />
        <polygon points="185,38 190,38 192,43" fill="#00C781" />
        <text x="190" y="32" className="fill-white text-[9px] font-medium" textAnchor="middle">Max Profit Point</text>

        {/* Zone labels */}
        <text x="115" y="135" className="fill-primary text-[8px] font-medium" textAnchor="middle">수익 증가 구간</text>
        <text x="250" y="135" className="fill-red-400 text-[8px] font-medium" textAnchor="middle">수익 감소 구간</text>

        {/* Warning message box */}
        <rect x="208" y="70" width="85" height="28" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="247" y="82" className="fill-muted-foreground text-[7px]" textAnchor="middle">이 지점을 넘으면</text>
        <text x="247" y="92" className="fill-red-500 text-[7px] font-medium" textAnchor="middle">매출↑ but 이익↓</text>

        {/* Arrow pointing to danger zone */}
        <path
          d="M190,85 L208,85"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.5"
          markerEnd="url(#grayArrow)"
        />
        <defs>
          <marker id="grayArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#9ca3af" />
          </marker>
        </defs>

        {/* Legend */}
        <g transform="translate(55, 188)">
          <line x1="0" y1="0" x2="15" y2="0" stroke="#00C781" strokeWidth="2.5" />
          <text x="20" y="3" className="fill-muted-foreground text-[8px]">영업이익 곡선</text>
          <rect x="95" y="-4" width="8" height="8" fill="#00C781" opacity="0.3" rx="1" />
          <text x="108" y="3" className="fill-muted-foreground text-[8px]">최적 구간</text>
          <rect x="160" y="-4" width="8" height="8" fill="#ef4444" opacity="0.2" rx="1" />
          <text x="173" y="3" className="fill-muted-foreground text-[8px]">비효율 구간</text>
        </g>
      </svg>
    </div>
  );
}
