import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, title, company, companyUrl, email, contact, budget } = body;

    if (!name || !title || !company || !companyUrl || !email || !contact || !budget) {
      return NextResponse.json(
        { error: "모든 필수 항목을 입력해주세요." },
        { status: 400 },
      );
    }

    const { error } = await supabase.from("marketing_leads").upsert(
      {
        name,
        job_title: title,
        company_name: company,
        company_url: companyUrl,
        email,
        phone: contact,
        ad_budget: budget,
        step_reached: 1,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("Supabase insert error:", error);
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
