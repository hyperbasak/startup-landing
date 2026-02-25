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
      <p className="text-muted-foreground mb-6 [word-break:keep-all]">
        전문가의 정밀 진단이 포함되어 있어,
        <br />
        신청 후 평균 3~5 영업일이 소요됩니다.
      </p>
      <div className="bg-muted/50 rounded-xl p-4">
        <p className="text-sm text-muted-foreground">
          추가 문의: <strong className="text-foreground">hello@hyperbasak.com</strong>
        </p>
      </div>
    </div>
  );
}
