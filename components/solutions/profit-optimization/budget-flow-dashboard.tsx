"use client";

export function BudgetFlowDashboard() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <svg viewBox="0 0 320 195" className="w-full h-auto">
        {/* Header */}
        <rect x="20" y="10" width="280" height="24" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="32" cy="22" r="4" fill="#00C781" className="animate-pulse" />
        <text x="42" y="26" className="fill-foreground text-[9px] font-medium">Real-time Channel Monitor</text>
        <text x="280" y="26" className="fill-muted-foreground text-[8px]" textAnchor="end">Allowable CAC: ₩18,000</text>

        {/* Channel rows */}
        {/* Meta - Under limit, scaled up */}
        <g transform="translate(20, 45)">
          <rect width="280" height="36" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <rect x="8" y="8" width="20" height="20" rx="4" fill="#0668E1" />
          <text x="18" y="22" className="fill-white text-[8px] font-bold" textAnchor="middle">M</text>
          <text x="38" y="18" className="fill-foreground text-[10px] font-medium">Meta Ads</text>
          <text x="38" y="28" className="fill-muted-foreground text-[8px]">CAC ₩12,400</text>

          {/* CAC bar */}
          <rect x="110" y="12" width="80" height="12" rx="2" fill="#e5e7eb" />
          <rect x="110" y="12" width="55" height="12" rx="2" fill="#00C781" />
          <line x1="180" y1="10" x2="180" y2="26" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2" />

          {/* Status badge */}
          <rect x="200" y="10" width="72" height="16" rx="8" fill="#00C781" />
          <text x="236" y="21" className="fill-white text-[7px] font-medium" textAnchor="middle">Budget Scaled Up</text>
        </g>

        {/* Google - Under limit, scaled up */}
        <g transform="translate(20, 86)">
          <rect width="280" height="36" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <rect x="8" y="8" width="20" height="20" rx="4" fill="#EA4335" />
          <text x="18" y="22" className="fill-white text-[8px] font-bold" textAnchor="middle">G</text>
          <text x="38" y="18" className="fill-foreground text-[10px] font-medium">Google Ads</text>
          <text x="38" y="28" className="fill-muted-foreground text-[8px]">CAC ₩15,200</text>

          {/* CAC bar */}
          <rect x="110" y="12" width="80" height="12" rx="2" fill="#e5e7eb" />
          <rect x="110" y="12" width="67" height="12" rx="2" fill="#00C781" />
          <line x1="180" y1="10" x2="180" y2="26" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2" />

          {/* Status badge */}
          <rect x="200" y="10" width="72" height="16" rx="8" fill="#00C781" />
          <text x="236" y="21" className="fill-white text-[7px] font-medium" textAnchor="middle">Budget Scaled Up</text>
        </g>

        {/* Naver - Over limit, optimizing */}
        <g transform="translate(20, 127)">
          <rect width="280" height="36" rx="4" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
          <rect x="8" y="8" width="20" height="20" rx="4" fill="#03C75A" />
          <text x="18" y="22" className="fill-white text-[8px] font-bold" textAnchor="middle">N</text>
          <text x="38" y="18" className="fill-foreground text-[10px] font-medium">Naver Ads</text>
          <text x="38" y="28" className="fill-muted-foreground text-[8px]">CAC ₩22,800</text>

          {/* CAC bar - exceeds limit */}
          <rect x="110" y="12" width="80" height="12" rx="2" fill="#e5e7eb" />
          <rect x="110" y="12" width="80" height="12" rx="2" fill="#fbbf24" />
          <line x1="180" y1="10" x2="180" y2="26" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2" />

          {/* Status badge */}
          <rect x="200" y="10" width="72" height="16" rx="8" fill="#f59e0b" />
          <circle cx="212" cy="18" r="3" fill="white" className="animate-pulse" />
          <text x="240" y="21" className="fill-white text-[7px] font-medium" textAnchor="middle">Optimizing...</text>
        </g>

        {/* Legend */}
        <g transform="translate(30, 180)">
          <rect x="0" y="-4" width="8" height="8" fill="#00C781" rx="1" />
          <text x="12" y="3" className="fill-muted-foreground text-[8px]">허용 CAC 이하</text>
          <line x1="75" y1="0" x2="85" y2="0" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2" />
          <text x="90" y="3" className="fill-muted-foreground text-[8px]">허용 한도선</text>
          <rect x="145" y="-4" width="8" height="8" fill="#fbbf24" rx="1" />
          <text x="157" y="3" className="fill-muted-foreground text-[8px]">최적화 필요</text>
        </g>
      </svg>
    </div>
  );
}
