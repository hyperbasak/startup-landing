"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";

function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span id={`counter-${end}`} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full mx-auto lg:scale-[0.85] xl:scale-100 origin-top-right">
      {/* Dashboard Container */}
      <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
        {/* Header Bar */}
        <div className="bg-foreground/[0.02] border-b border-border px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-muted rounded-md px-4 py-1 text-xs text-muted-foreground flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              growth-os-dashboard.app
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 lg:p-5 space-y-4">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 lg:gap-3">
            {[
              { label: "LTV", value: "₩892K", change: "+12.3%", icon: TrendingUp, positive: true },
              { label: "CAC", value: "₩45.2K", change: "-8.1%", icon: DollarSign, positive: true },
              { label: "LTV/CAC", value: "19.7x", change: "+2.4x", icon: BarChart3, positive: true },
              { label: "Active", value: "12.8K", change: "+23%", icon: Users, positive: true },
            ].map((metric, i) => (
              <div key={i} className="bg-muted/50 rounded-xl p-2.5 lg:p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <metric.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] text-muted-foreground truncate">{metric.label}</span>
                </div>
                <div className="text-base lg:text-lg font-semibold text-foreground">{metric.value}</div>
                <div className={`text-[11px] font-medium ${metric.positive ? 'text-accent' : 'text-destructive'}`}>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-muted/30 rounded-xl p-3 h-24 lg:h-28 flex items-end gap-0.5">
            {[40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 88, 100].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm transition-all duration-500"
                style={{ 
                  height: `${height}%`,
                  animationDelay: `${i * 100}ms`
                }}
              />
            ))}
          </div>

          {/* Signal Indicator */}
          <div className="flex items-center justify-between bg-accent/10 rounded-xl p-3 border border-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs lg:text-sm font-medium text-foreground">스케일업 시그널</span>
            </div>
            <div className="text-right">
              <div className="text-sm lg:text-base font-bold text-accent">증액 가능</div>
              <div className="text-[10px] lg:text-xs text-muted-foreground">안전 마진 +34%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 xl:-top-4 xl:-right-4 bg-white rounded-lg shadow-lg border border-border p-2 hidden lg:block animate-float">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-accent" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">ROAS</div>
            <div className="font-semibold text-xs text-foreground">847%</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 -left-2 xl:-bottom-4 xl:-left-4 bg-white rounded-lg shadow-lg border border-border p-2 hidden lg:block animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-3 h-3 text-primary" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">공헌이익률</div>
            <div className="font-semibold text-xs text-foreground">42.3%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-7 xl:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              폭발적 성장을 위한 Growth Partner
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-foreground leading-[1.25] lg:max-w-[60vw] xl:max-w-none [word-break:keep-all]">
              검증된 제품력을 넘어,
              <br className="hidden sm:block" />
              이제는 압도적 확장을 위한{" "}
              <span className="relative inline-block text-primary">
                Growth OS
                <svg className="absolute -bottom-2.5 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path d="M2 6C40 2 120 2 198 6" stroke="#00C781" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              를 이식할 때입니다.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl [word-break:keep-all]">
              더 이상 감에 의존하는 Burn-rate는 그만하십시오.{" "}
              <span className="text-foreground font-semibold">10억을 태워도 무너지지 않는 데이터 기반의 스케일업 엔진</span>을 
              귀사의 비즈니스에 즉시 이식합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-14 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a href="#start-now">무료 성장 병목 진단 받기</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/60 hover:border-border hover:bg-muted/50 font-medium px-8 h-14 text-base bg-transparent text-muted-foreground hover:text-foreground transition-all"
              >
                <a href="#growth-os">Growth OS 살펴보기</a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span>평균 <strong className="text-foreground"><AnimatedCounter end={340} suffix="%" /></strong> ROAS 개선</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-accent" />
                </div>
                <span>월 <strong className="text-foreground"><AnimatedCounter end={50} suffix="억+" /></strong> 광고비 운용</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative lg:col-span-5 xl:col-span-5">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
