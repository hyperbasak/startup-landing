"use client";

export function HeroSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        {/* Subtle stars effect - using fixed positions to avoid hydration mismatch */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "12%", top: "8%" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "28%", top: "15%", animationDelay: "0.5s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "45%", top: "5%", animationDelay: "1s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "67%", top: "12%", animationDelay: "1.5s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "85%", top: "8%", animationDelay: "2s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "8%", top: "35%", animationDelay: "0.3s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "92%", top: "28%", animationDelay: "1.2s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "5%", top: "65%", animationDelay: "0.8s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "18%", top: "78%", animationDelay: "2.2s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "35%", top: "85%", animationDelay: "0.7s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "55%", top: "92%", animationDelay: "1.8s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "78%", top: "82%", animationDelay: "0.4s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "95%", top: "72%", animationDelay: "1.6s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "88%", top: "55%", animationDelay: "2.5s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "3%", top: "48%", animationDelay: "1.1s" }} />
        </div>

        {/* Accent glow - warm gold tone */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(247, 215, 148, 0.08)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">

          <br />

        </h1>
        {/* Main headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 [word-break:keep-all]">
          마케팅은 소모되는 비용이 아니라,
          <br />
          불어나는 <span className="text-[#A2E3FF]">성장 자본</span>입니다.
        </h2>

        {/* Sub copy */}
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-12 mx-auto [word-break:keep-all]">
          일시적인 매출 상승은 누구나 만들 수 있습니다.
          <br className="hidden sm:block" />
          하지만 그 과정에서 얻은 인사이트가 자산으로 남지 않는다면,
          <br className="hidden sm:block" />
          그것은 성장이 아니라 소모입니다.
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#A2E3FF]/50" />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#A2E3FF", boxShadow: "0 0 8px rgba(162, 227, 255, 0.6)" }}
          />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#A2E3FF]/50" />
        </div>

        {/* Key message */}
        <div className="inline-block">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white [word-break:keep-all] leading-relaxed">
            Growth Block의 4가지 핵심 전략은
            <br className="hidden sm:block" />
            마케팅의 모든 과정을 귀사의{" "}
            <span className="relative inline-block text-[#A2E3FF]">
              자산
            </span>
            으로 전환합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
