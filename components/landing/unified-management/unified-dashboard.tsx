"use client";

export function UnifiedDashboard() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <svg viewBox="0 0 320 195" className="w-full h-auto">
        <defs>
          {/* Golden path gradient */}
          <linearGradient id="goldenPathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C781" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00C781" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00C781" stopOpacity="0.8" />
          </linearGradient>
          {/* Line gradients for each channel */}
          <linearGradient id="metaLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0668E1" />
            <stop offset="100%" stopColor="#00C781" />
          </linearGradient>
          <linearGradient id="googleLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA4335" />
            <stop offset="100%" stopColor="#00C781" />
          </linearGradient>
          <linearGradient id="naverLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#03C75A" />
            <stop offset="100%" stopColor="#00C781" />
          </linearGradient>
          <linearGradient id="kakaoLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FEE500" />
            <stop offset="100%" stopColor="#00C781" />
          </linearGradient>
        </defs>

        {/* Dashboard background */}
        <rect x="15" y="10" width="290" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

        {/* Dashboard header */}
        <rect x="15" y="10" width="290" height="28" rx="8" fill="#f1f5f9" />
        <rect x="15" y="30" width="290" height="8" fill="#f1f5f9" />
        <circle cx="30" cy="24" r="4" fill="#ef4444" />
        <circle cx="42" cy="24" r="4" fill="#fbbf24" />
        <circle cx="54" cy="24" r="4" fill="#22c55e" />
        <text x="160" y="27" className="fill-muted-foreground text-[8px] font-medium" textAnchor="middle">Unified Growth Dashboard</text>

        {/* Grid lines */}
        <line x1="30" y1="60" x2="30" y2="160" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="30" y1="160" x2="290" y2="160" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="30" y1="110" x2="290" y2="110" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="30" y1="85" x2="290" y2="85" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4,4" />

        {/* Golden path area (convergence zone) */}
        <path
          d="M140,140 Q180,120 200,95 Q230,60 280,45 L280,160 L140,160 Z"
          fill="url(#goldenPathGradient)"
        />

        {/* Channel source nodes */}
        {/* Meta */}
        <rect x="35" y="130" width="24" height="24" rx="4" fill="#0668E1" />
        <text x="47" y="146" className="fill-white text-[10px] font-bold" textAnchor="middle">M</text>

        {/* Google */}
        <rect x="35" y="100" width="24" height="24" rx="4" fill="#EA4335" />
        <text x="47" y="116" className="fill-white text-[10px] font-bold" textAnchor="middle">G</text>

        {/* Naver */}
        <rect x="35" y="70" width="24" height="24" rx="4" fill="#03C75A" />
        <text x="47" y="86" className="fill-white text-[10px] font-bold" textAnchor="middle">N</text>

        {/* Kakao */}
        <rect x="35" y="45" width="24" height="24" rx="4" fill="#FEE500" />
        <text x="47" y="61" className="fill-slate-800 text-[10px] font-bold" textAnchor="middle">K</text>

        {/* Converging lines from channels to golden path */}
        <path d="M59,142 Q100,142 140,130 Q170,115 200,95" fill="none" stroke="url(#metaLine)" strokeWidth="2" strokeLinecap="round" />
        <path d="M59,112 Q100,115 140,120 Q170,110 200,95" fill="none" stroke="url(#googleLine)" strokeWidth="2" strokeLinecap="round" />
        <path d="M59,82 Q100,90 140,100 Q170,100 200,95" fill="none" stroke="url(#naverLine)" strokeWidth="2" strokeLinecap="round" />
        <path d="M59,57 Q100,65 140,80 Q170,90 200,95" fill="none" stroke="url(#kakaoLine)" strokeWidth="2" strokeLinecap="round" />

        {/* Convergence point */}
        <circle cx="200" cy="95" r="6" fill="#00C781" />
        <circle cx="200" cy="95" r="10" fill="#00C781" opacity="0.3" />

        {/* Golden path line (upward trend after convergence) */}
        <path
          d="M200,95 Q230,70 260,50 Q275,42 285,38"
          fill="none"
          stroke="#00C781"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* End point with glow */}
        <circle cx="285" cy="38" r="5" fill="#00C781" />
        <circle cx="285" cy="38" r="9" fill="#00C781" opacity="0.3" />
        <circle cx="285" cy="38" r="13" fill="#00C781" opacity="0.15" />

        {/* Golden Path label */}
        <rect x="215" y="50" width="60" height="18" rx="9" fill="#00C781" />
        <text x="245" y="62" className="fill-white text-[8px] font-medium" textAnchor="middle">Golden Path</text>

        {/* Convergence label */}
        <rect x="135" y="105" width="55" height="14" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="162" y="115" className="fill-muted-foreground text-[7px]" textAnchor="middle">통합 지점</text>

        {/* Legend */}
        <g transform="translate(30, 182)">
          <rect x="0" y="-4" width="8" height="8" fill="#0668E1" rx="1" />
          <rect x="10" y="-4" width="8" height="8" fill="#EA4335" rx="1" />
          <rect x="20" y="-4" width="8" height="8" fill="#03C75A" rx="1" />
          <rect x="30" y="-4" width="8" height="8" fill="#FEE500" rx="1" />
          <text x="43" y="3" className="fill-muted-foreground text-[8px]">채널 데이터</text>
          <text x="95" y="3" className="fill-muted-foreground text-[8px]">→</text>
          <circle cx="115" cy="0" r="4" fill="#00C781" />
          <text x="125" y="3" className="fill-muted-foreground text-[8px]">통합 성장 경로</text>
        </g>
      </svg>
    </div>
  );
}
