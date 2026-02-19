"use client";

import { Activity, AlertCircle, BarChart3, FlaskConical, Sparkles } from "lucide-react";

type FeedType = "decision" | "status" | "hypothesis" | "insight";

interface FeedItem {
  type: FeedType;
  content: string;
  time: string;
  hideOnMobile?: boolean;
}

const feedItems: FeedItem[] = [
  {
    type: "decision",
    content: "메타 소재 B 클릭률 하락 감지 → 소재 C로 즉시 교체 완료",
    time: "12분 전",
  },
  {
    type: "insight",
    content: "전반적인 획득 단가 하락세 유지 중, 차주 채널 확장 예정",
    time: "1시간 전",
  },
  {
    type: "hypothesis",
    content: "경쟁사 프로모션 대응 → 신규 랜딩페이지 A/B 테스트 세팅",
    time: "2시간 전",
  },
  {
    type: "status",
    content: "구글 검색 광고 CPA 목표치 안착 → 주말 예산 20% 증액 예약",
    time: "3시간 전",
    hideOnMobile: true,
  },
];

const feedConfig: Record<
  FeedType,
  { label: string; icon: typeof AlertCircle; color: string; bg: string; }
> = {
  decision: {
    label: "즉시조치",
    icon: AlertCircle,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  status: {
    label: "안정운영",
    icon: BarChart3,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  hypothesis: {
    label: "가설수립",
    icon: FlaskConical,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  insight: {
    label: "CMO 인사이트",
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/10",
  },
};

function FeedTypeBadge({ type }: { type: FeedType; }) {
  const { label, icon: Icon, color, bg } = feedConfig[type];

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${bg}`}>
      <Icon className={`w-3 h-3 ${color}`} />
      <span className={`text-[10px] font-semibold ${color}`}>{label}</span>
    </div>
  );
}

function FeedRow({ item, isLast }: { item: FeedItem; isLast: boolean; }) {
  const isInsight = item.type === "insight";

  return (
    <div
      className={`py-3 ${isInsight
        ? "bg-gradient-to-r from-primary/5 to-emerald-50/30 -mx-3 px-3 rounded-lg"
        : "border-b border-gray-100"
        } ${isLast ? "border-b-0" : ""} ${item.hideOnMobile ? "hidden lg:block" : ""}`}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <FeedTypeBadge type={item.type} />
        <span className="text-[10px] text-gray-300">{item.time}</span>
      </div>
      <p
        className={`text-sm leading-relaxed ${isInsight ? "text-gray-800 font-medium" : "text-gray-700"}`}
      >
        {item.content}
      </p>
    </div>
  );
}

export function StrategyReport() {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-[370px] relative overflow-hidden">
      <div className="px-5 py-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Activity className="w-4 h-4 text-primary" />
              <p className="text-xs text-gray-500 font-medium">Growth Block</p>
            </div>
            <h3 className="text-base font-bold text-gray-900">실시간 피드</h3>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </div>
        </div>

        <div className="space-y-0">
          {feedItems.map((item, index) => (
            <FeedRow
              key={index}
              item={item}
              isLast={index === feedItems.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-25 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none rounded-b-2xl" />
    </div>
  );
}
