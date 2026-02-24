import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "솔루션",
  description:
    "Growth Block의 4가지 핵심 전략 솔루션. 데이터 기반 의사결정, 수익 최적화, 통합 운영 관리, 전략 자산화 시스템으로 마케팅의 모든 과정을 귀사의 자산으로 전환합니다.",
  openGraph: {
    title: "Growth Block 솔루션 | 마케팅을 성장 자산으로 전환",
    description:
      "데이터 기반 의사결정, 수익 최적화, 통합 운영 관리, 전략 자산화. Growth Block의 4가지 핵심 전략으로 마케팅 비용을 성장 자본으로 전환하세요.",
    url: "/solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growth Block 솔루션",
      },
    ],
  },
  twitter: {
    title: "Growth Block 솔루션 | 마케팅을 성장 자산으로 전환",
    description:
      "데이터 기반 의사결정, 수익 최적화, 통합 운영 관리, 전략 자산화. Growth Block의 4가지 핵심 전략.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return children;
}
