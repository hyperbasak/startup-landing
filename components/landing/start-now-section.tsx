"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Zap } from "lucide-react";

import { SectionBadge } from "./common";
import { ContactForm, SuccessMessage, BenefitsList, TrustSignals } from "./start-now";
import type { ContactFormData } from "./types";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  title: "",
  company: "",
  companyUrl: "",
  email: "",
  contact: "",
  budget: "",
};

function SectionHeader() {
  return (
    <div>
      <SectionBadge icon={Zap} text="Start Now" variant="accent" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-6 text-balance [word-break:keep-all]">
        휘발되는 광고비 대신,{" "}
        <span className="text-primary">영구적인 성장 자산</span>을 구축하세요
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed [word-break:keep-all]">
        귀사의 현 상황에 맞는 시스템 설계와 운영 전략을 전문가와 상담하세요.{" "}
        <strong className="text-foreground">맞춤형 성장 진단 리포트</strong>를
        무료로 제공해드립니다.
      </p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="space-y-8">
      <SectionHeader />
      <BenefitsList />
      <TrustSignals />
    </div>
  );
}

function FormCard({
  formData,
  isSubmitted,
  isLoading,
  onChange,
  onSubmit,
}: {
  formData: ContactFormData;
  isSubmitted: boolean;
  isLoading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl border border-border shadow-2xl shadow-primary/10 p-6 sm:p-8 lg:p-10">
        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <ContactForm
            formData={formData}
            isLoading={isLoading}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        )}
      </div>

      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

export function StartNowSection() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="start-now"
      className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <LeftContent />
          <FormCard
            formData={formData}
            isSubmitted={isSubmitted}
            isLoading={isLoading}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}
