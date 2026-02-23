"use client";

import type { ChangeEvent, FormEvent } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { BUDGET_OPTIONS } from "../constants";
import type { ContactFormData } from "../types";

interface ContactFormProps {
  formData: ContactFormData;
  isLoading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
}: {
  id: keyof ContactFormData;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-11 bg-muted/50 border-border focus:border-primary focus:ring-primary"
      />
    </div>
  );
}

function LoadingSpinner() {
  return (
    <span className="flex items-center gap-2">
      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      신청 중...
    </span>
  );
}

export function ContactForm({
  formData,
  isLoading,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <>
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">
          무료 진단 리포트 신청
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            id="name"
            label="이름"
            placeholder="홍길동"
            value={formData.name}
            onChange={onChange}
          />
          <FormField
            id="title"
            label="직함"
            placeholder="마케팅 팀장"
            value={formData.title}
            onChange={onChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FormField
            id="company"
            label="회사명"
            placeholder="주식회사 그로스"
            value={formData.company}
            onChange={onChange}
          />
          <FormField
            id="companyUrl"
            label="회사 URL"
            type="url"
            placeholder="https://example.com"
            value={formData.companyUrl}
            onChange={onChange}
          />
        </div>

        <FormField
          id="email"
          label="이메일"
          type="email"
          placeholder="example@company.com"
          value={formData.email}
          onChange={onChange}
        />

        <FormField
          id="contact"
          label="연락처"
          type="tel"
          placeholder="010-1234-5678"
          value={formData.contact}
          onChange={onChange}
        />

        <div className="space-y-2">
          <Label htmlFor="budget" className="text-sm font-medium text-foreground">
            현재 월 광고 예산 규모 <span className="text-destructive">*</span>
          </Label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={onChange}
            required
            className="w-full h-11 px-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              선택해주세요
            </option>
            {BUDGET_OPTIONS.map((option) => (
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
            <LoadingSpinner />
          ) : (
            <span className="flex items-center gap-2">
              진단 리포트 신청하기
              <ArrowRight className="w-5 h-5" />
            </span>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground pt-1">
          문의 제출 시{" "}
          <a
            href="https://hyperbasak.notion.site/310c6eeafd3780a6be98e6b69e222352?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            개인정보 처리방침
          </a>
          에 동의하는 것으로 간주합니다.
        </p>
      </form>
    </>
  );
}
