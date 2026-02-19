"use client";

import { CheckCircle2 } from "lucide-react";

export function SuccessMessage() {
  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-accent" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">
        신청이 완료되었습니다!
      </h3>
      <p className="text-muted-foreground mb-6">
        입력해주신 연락처로 48시간 내에
        <br />
        맞춤형 진단 리포트를 전달드리겠습니다.
      </p>
      <div className="bg-muted/50 rounded-xl p-4">
        <p className="text-sm text-muted-foreground">
          추가 문의: <strong className="text-foreground">contact@growth-block.kr</strong>
        </p>
      </div>
    </div>
  );
}
