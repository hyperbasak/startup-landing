"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowRight, FileText, Zap, Shield } from "lucide-react";

const budgetOptions = [
  { value: "under-1000", label: "1,000만원 미만" },
  { value: "1000-3000", label: "1,000만원 ~ 3,000만원" },
  { value: "3000-5000", label: "3,000만원 ~ 5,000만원" },
  { value: "5000-1억", label: "5,000만원 ~ 1억" },
  { value: "over-1억", label: "1억 이상" },
];

const benefits = [
  { icon: FileText, text: "맞춤형 성장 병목 진단 리포트" },
  { icon: Zap, text: "즉시 적용 가능한 액션 플랜" },
  { icon: Shield, text: "비용 부담 없는 완전 무료" },
];

export function StartNowSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    budget: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="start-now" className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                Start Now
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                휘발되는 광고비 대신,{" "}
                <span className="text-primary">영구적인 성장 자산</span>을 구축하세요
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                지금 신청하시면 귀사의 현재 마케팅 현황을 분석하여{" "}
                <strong className="text-foreground">맞춤형 성장 병목 진단 리포트</strong>를 
                무료로 제공해드립니다.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>상담 후 구매 압박 없음</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>1:1 맞춤 컨설팅</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>48시간 내 리포트 전달</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-border shadow-2xl shadow-primary/10 p-6 sm:p-8 lg:p-10">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      무료 성장 병목 진단 신청
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      간단한 정보 입력으로 맞춤 진단을 받아보세요
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        이름 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="홍길동"
                        required
                        className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-foreground">
                        회사명 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="주식회사 그로스"
                        required
                        className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-sm font-medium text-foreground">
                        연락처 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact"
                        name="contact"
                        type="tel"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="010-1234-5678"
                        required
                        className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                        현재 월 광고 예산 규모 <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="" disabled>선택해주세요</option>
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base mt-4"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          신청 중...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          무료 진단 신청하기
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground pt-2">
                      신청 정보는 진단 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    신청이 완료되었습니다!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    입력해주신 연락처로 48시간 내에<br />
                    맞춤형 진단 리포트를 전달드리겠습니다.
                  </p>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">
                      추가 문의: <strong className="text-foreground">contact@growth-os.kr</strong>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
