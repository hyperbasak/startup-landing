"use client";

import { ScrollIndicator } from "../common";

export function ConceptBridge() {
  return (
    <section className="relative pt-16 pb-8 lg:pt-20 lg:pb-12 bg-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        {/* Subtle stars effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "10%", top: "15%" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "25%", top: "25%", animationDelay: "0.5s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "40%", top: "10%", animationDelay: "1s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "60%", top: "20%", animationDelay: "1.5s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "80%", top: "12%", animationDelay: "2s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "90%", top: "30%", animationDelay: "0.3s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "15%", top: "70%", animationDelay: "1.2s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "70%", top: "75%", animationDelay: "0.8s" }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ left: "85%", top: "65%", animationDelay: "1.8s" }} />
        </div>

        {/* Accent glow - primary color */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(0, 199, 129, 0.08)" }}
        />
      </div>

      <div className="space-y-10">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-white [word-break:keep-all] leading-relaxed">
            마케팅이 자산이 되는 경험
            <br />
            파트너 CMO와 <span className="relative inline-block text-[#A2E3FF]">성장의 토대</span>를 마련할 차례입니다.
          </p>
        </div>

        <ScrollIndicator
          classNameTextColor="text-white"
          size={7}
        />
      </div>
    </section>
  );
}
