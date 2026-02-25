"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Clock, Zap } from "lucide-react";

import { SectionBadge } from "./section-badge";
import { ContactForm, Step2Form, SuccessMessage, BenefitsList, TrustSignals } from "./start-now";
import type { ContactFormData, Step2FormData } from "./types";

type FormStep = "step1" | "step2" | "done";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  title: "",
  company: "",
  companyUrl: "",
  email: "",
  contact: "",
  budget: "",
};

const INITIAL_STEP2_DATA: Step2FormData = {
  industry: "",
  businessModel: "",
  targetAudience: [],
  primaryProblem: "",
  coreValuePersona: "",
};

function SectionHeader() {
  return (
    <div>
      <SectionBadge icon={Zap} text="Start Now" variant="accent" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 mt-6 text-balance [word-break:keep-all]">
        휘발되는 광고비 지출을 멈추고,{" "}
        <span className="text-primary">영구적인 성장 자산</span>을 구축하세요.
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed [word-break:keep-all]">
        귀사 비즈니스 산업군에 특화된 표준 지표와 추정되는 수익 누수 지점을 판독합니다.
        Growth Block의 전략적 가설이 담긴 <strong className="text-foreground">진단 리포트</strong>를 무료로 제공합니다.
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
      <div className="flex items-start gap-3 rounded-2xl bg-primary/5 border border-primary/10 px-5 py-4">
        <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-foreground font-medium [word-break:keep-all]">
          리포트의 완성도를 위해 주간 단 2곳의 기업에게만 분석 리소스를 할당합니다.
        </p>
      </div>
    </div>
  );
}

function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl border border-border shadow-2xl shadow-primary/10 p-6 sm:p-8 lg:p-10">
        {children}
      </div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

export function StartNowSection({
  variant = "white",
}: {
  variant?: "white" | "gradient";
}) {
  const [step, setStep] = useState<FormStep>("step1");
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [step2Data, setStep2Data] = useState<Step2FormData>(INITIAL_STEP2_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const bgClass =
    variant === "gradient"
      ? "bg-gradient-to-b from-muted/50 to-white"
      : "bg-white";

  const handleStep1Submit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "제출에 실패했습니다.");
      }

      setStep("step2");
    } catch (err) {
      alert(err instanceof Error ? err.message : "제출에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep2Submit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact/step2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, ...step2Data }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "제출에 실패했습니다.");
      }

      setStep("done");
    } catch (err) {
      alert(err instanceof Error ? err.message : "제출에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStep2Change = (data: Partial<Step2FormData>) => {
    setStep2Data((prev) => ({ ...prev, ...data }));
  };

  return (
    <section
      id="start-now"
      className={`py-16 lg:py-24 ${bgClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <LeftContent />
          <FormCard>
            {step === "step1" && (
              <ContactForm
                formData={formData}
                isLoading={isLoading}
                onChange={handleChange}
                onSubmit={handleStep1Submit}
              />
            )}
            {step === "step2" && (
              <Step2Form
                formData={step2Data}
                isLoading={isLoading}
                onChange={handleStep2Change}
                onSubmit={handleStep2Submit}
              />
            )}
            {step === "done" && <SuccessMessage />}
          </FormCard>
        </div>
      </div>
    </section>
  );
}
