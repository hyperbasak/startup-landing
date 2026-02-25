import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, industry, businessModel, targetAudience, primaryProblem, coreValuePersona } = body;

    if (!email || !industry || !businessModel || !targetAudience?.length || !primaryProblem) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("marketing_leads")
      .update({
        industry,
        business_model: businessModel,
        target_audience: targetAudience.join(", "),
        primary_problem: primaryProblem,
        core_value: coreValuePersona || null,
        step_reached: 2,
        updated_at: new Date().toISOString(),
      })
      .eq("email", email);

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json(
        { error: "데이터 저장에 실패했습니다." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
