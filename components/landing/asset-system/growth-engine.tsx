"use client";

export function GrowthEngine() {
  const gears = [
    { label: "데이터 수집", size: "lg", x: 50, y: 30 },
    { label: "분석", size: "md", x: 110, y: 60 },
    { label: "실행", size: "md", x: 50, y: 90 },
    { label: "최적화", size: "sm", x: 110, y: 120 },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-xs text-muted-foreground mb-4 text-center font-medium">
        지속 가능한 성장 시스템
      </div>

      <div className="relative w-full max-w-[280px] h-[180px]">
        {/* System architecture diagram */}
        <svg viewBox="0 0 280 180" className="w-full h-full">
          {/* Background connections */}
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C781" />
              <stop offset="100%" stopColor="#00C781" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Connecting arrows */}
          <path
            d="M90,45 L120,55"
            stroke="#E5E7EB"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M120,75 L90,85"
            stroke="#E5E7EB"
            strokeWidth="2"
          />
          <path
            d="M90,105 L120,115"
            stroke="#E5E7EB"
            strokeWidth="2"
          />

          {/* Large gear - 데이터 수집 */}
          <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: "60px 45px" }}>
            <circle cx="60" cy="45" r="28" fill="url(#gearGradient)" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect
                key={angle}
                x="56"
                y="15"
                width="8"
                height="12"
                rx="2"
                fill="url(#gearGradient)"
                transform={`rotate(${angle}, 60, 45)`}
              />
            ))}
            <circle cx="60" cy="45" r="12" fill="white" />
          </g>
          <text x="60" y="48" textAnchor="middle" className="fill-primary text-[8px] font-bold">수집</text>

          {/* Medium gear - 분석 */}
          <g className="animate-[spin_6s_linear_infinite_reverse]" style={{ transformOrigin: "140px 65px" }}>
            <circle cx="140" cy="65" r="22" fill="#6366F1" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <rect
                key={angle}
                x="137"
                y="41"
                width="6"
                height="10"
                rx="2"
                fill="#6366F1"
                transform={`rotate(${angle}, 140, 65)`}
              />
            ))}
            <circle cx="140" cy="65" r="9" fill="white" />
          </g>
          <text x="140" y="68" textAnchor="middle" className="fill-indigo-500 text-[8px] font-bold">분석</text>

          {/* Medium gear - 실행 */}
          <g className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: "60px 105px" }}>
            <circle cx="60" cy="105" r="22" fill="url(#gearGradient)" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <rect
                key={angle}
                x="57"
                y="81"
                width="6"
                height="10"
                rx="2"
                fill="url(#gearGradient)"
                transform={`rotate(${angle}, 60, 105)`}
              />
            ))}
            <circle cx="60" cy="105" r="9" fill="white" />
          </g>
          <text x="60" y="108" textAnchor="middle" className="fill-primary text-[8px] font-bold">실행</text>

          {/* Small gear - 최적화 */}
          <g className="animate-[spin_4s_linear_infinite_reverse]" style={{ transformOrigin: "140px 125px" }}>
            <circle cx="140" cy="125" r="18" fill="#F59E0B" />
            {[0, 72, 144, 216, 288].map((angle) => (
              <rect
                key={angle}
                x="138"
                y="105"
                width="4"
                height="8"
                rx="1"
                fill="#F59E0B"
                transform={`rotate(${angle}, 140, 125)`}
              />
            ))}
            <circle cx="140" cy="125" r="7" fill="white" />
          </g>
          <text x="140" y="128" textAnchor="middle" className="fill-amber-500 text-[7px] font-bold">최적화</text>

          {/* Output arrow */}
          <path
            d="M165,125 L200,125"
            stroke="#00C781"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M195,120 L205,125 L195,130"
            fill="#00C781"
          />

          {/* Result box */}
          <rect x="205" y="105" width="65" height="40" rx="8" fill="#00C781" opacity="0.1" stroke="#00C781" strokeWidth="2" />
          <text x="237" y="122" textAnchor="middle" className="fill-primary text-[9px] font-bold">지속 성장</text>
          <text x="237" y="135" textAnchor="middle" className="fill-primary text-[8px]">시스템</text>
        </svg>
      </div>

      <div className="mt-2 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full font-medium">
          사람이 바뀌어도 시스템은 작동합니다
        </span>
      </div>
    </div>
  );
}
