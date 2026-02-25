"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  INDUSTRY_OPTIONS,
  BUSINESS_MODEL_OPTIONS,
  TARGET_AUDIENCE_OPTIONS,
  PRIMARY_PROBLEM_OPTIONS,
} from "../constants";
import type { Step2FormData, SelectOption } from "../types";

interface Step2FormProps {
  formData: Step2FormData;
  isLoading: boolean;
  onChange: (data: Partial<Step2FormData>) => void;
  onSubmit: (e: FormEvent) => void;
}

const selectClass =
  "w-full h-11 px-3 bg-muted/50 border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

const etcInputClass =
  "w-full h-11 px-3 bg-muted/50 border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

function SelectField({
  label,
  value,
  options,
  onChange,
  hasEtc = false,
  placeholder = "선택해주세요",
}: {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  hasEtc?: boolean;
  placeholder?: string;
}) {
  const [etcText, setEtcText] = useState("");
  const isEtcSelected = value === "__etc__" || (hasEtc && value !== "" && !options.some((o) => o.value === value));

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-foreground">
        {label} <span className="text-destructive">*</span>
      </Label>
      <select
        value={isEtcSelected ? "__etc__" : value}
        onChange={(e) => {
          if (e.target.value === "__etc__") {
            onChange("__etc__");
            setEtcText("");
          } else {
            onChange(e.target.value);
          }
        }}
        required
        className={selectClass}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
        {hasEtc && <option value="__etc__">기타 (직접 입력)</option>}
      </select>
      {hasEtc && (
        <div
          className={`overflow-hidden transition-all duration-300 ${isEtcSelected ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <input
            type="text"
            placeholder="직접 입력해주세요"
            value={etcText}
            onChange={(e) => {
              setEtcText(e.target.value);
              onChange(e.target.value || "__etc__");
            }}
            className={etcInputClass}
          />
        </div>
      )}
    </div>
  );
}

function MultiSelectField({
  label,
  values,
  options,
  onChange,
  hasEtc = false,
}: {
  label: string;
  values: string[];
  options: SelectOption[];
  onChange: (values: string[]) => void;
  hasEtc?: boolean;
}) {
  const [etcText, setEtcText] = useState("");
  const etcValues = values.filter((v) => !options.some((o) => o.value === v));
  const hasEtcChecked = etcValues.length > 0;

  const toggle = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-foreground">
        {label} <span className="text-destructive">*</span>
        <span className="text-muted-foreground font-normal ml-1">(복수 선택)</span>
      </Label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => toggle(o.value)}
            className={`px-4 py-2 rounded-lg border text-sm transition-colors ${values.includes(o.value)
              ? "border-primary bg-primary/10 text-primary font-medium"
              : "border-border bg-muted/50 text-foreground hover:border-primary/30"
              }`}
          >
            {o.label}
          </button>
        ))}
        {hasEtc && (
          <button
            type="button"
            onClick={() => {
              if (hasEtcChecked) {
                onChange(values.filter((v) => options.some((opt) => opt.value === v)));
                setEtcText("");
              } else {
                onChange([...values, " "]);
              }
            }}
            className={`px-4 py-2 rounded-lg border text-sm transition-colors ${hasEtcChecked
              ? "border-primary bg-primary/10 text-primary font-medium"
              : "border-border bg-muted/50 text-foreground hover:border-primary/30"
              }`}
          >
            기타
          </button>
        )}
      </div>
      {hasEtc && (
        <div
          className={`overflow-hidden transition-all duration-300 ${hasEtcChecked ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <input
            type="text"
            placeholder="직접 입력해주세요"
            value={etcText}
            onChange={(e) => {
              const newEtc = e.target.value;
              setEtcText(newEtc);
              const filtered = values.filter((v) => options.some((opt) => opt.value === v));
              onChange([...filtered, newEtc || " "]);
            }}
            className={etcInputClass}
          />
        </div>
      )}
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
      제출 중...
    </span>
  );
}

export function Step2Form({
  formData,
  isLoading,
  onChange,
  onSubmit,
}: Step2FormProps) {
  return (
    <>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
          신청 완료
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          30초만 더 투자해주세요
        </h3>
        <p className="text-sm text-muted-foreground [word-break:keep-all] text-left">
          추가 정보를 입력해 주시면, 귀사에 딱 맞는{" "}
          <strong className="text-foreground">&lsquo;맞춤형 마케팅 설계도&rsquo;</strong>를
          준비해 드릴 수 있습니다.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <SelectField
            label="주요 산업군"
            options={INDUSTRY_OPTIONS}
            value={formData.industry}
            onChange={(v) => onChange({ industry: v })}
            hasEtc
          />
          <SelectField
            label="비즈니스 모델"
            options={BUSINESS_MODEL_OPTIONS}
            value={formData.businessModel}
            onChange={(v) => onChange({ businessModel: v })}
            hasEtc
          />
        </div>

        <MultiSelectField
          label="핵심 타겟"
          options={TARGET_AUDIENCE_OPTIONS}
          values={formData.targetAudience}
          onChange={(v) => onChange({ targetAudience: v })}
          hasEtc
        />

        <SelectField
          label="1순위 해결 과제"
          options={PRIMARY_PROBLEM_OPTIONS}
          value={formData.primaryProblem}
          onChange={(v) => onChange({ primaryProblem: v })}
          hasEtc
        />

        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">
            서비스 핵심 가치 & 페르소나
          </Label>
          <p className="text-xs text-muted-foreground -mt-1">
            &quot;우리 서비스를 한 문장으로 정의한다면?&quot; 또는 &quot;가장 만나고 싶은 고객은 어떤 사람인가요?&quot;
          </p>
          <textarea
            value={formData.coreValuePersona}
            onChange={(e) => onChange({ coreValuePersona: e.target.value.slice(0, 200) })}
            placeholder="예: 바쁜 직장인을 위한 15분 홈트레이닝 플랫폼, 30대 여성 직장인이 주요 고객입니다."
            rows={3}
            maxLength={200}
            className="w-full px-3 py-3 bg-muted/50 border border-border rounded-lg text-sm text-foreground resize-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <p className="text-xs text-muted-foreground text-right">
            {formData.coreValuePersona.length} / 200
          </p>
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
              진단 리포트 신청 완료
              <ArrowRight className="w-5 h-5" />
            </span>
          )}
        </Button>
      </form>
    </>
  );
}
