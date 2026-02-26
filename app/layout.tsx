import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { OrganizationJsonLd } from "@/components/seo/json-ld";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hyperbasak.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Growth Block | 수익 구조 설계부터 운영까지",
    template: "%s | Growth Block",
  },
  description:
    "단순 광고 집행을 넘어 비즈니스 맞춤형 성장 시스템을 구축합니다. 도메인 분석으로 누수 지점을 판독하고, 전략과 실행을 동시에 책임지는 파트너 CMO 팀의 1:1 맞춤 컨설팅을 경험하세요.",
  keywords: [
    "그로스 마케팅",
    "CMO 대행",
    "마케팅 컨설팅",
    "퍼포먼스 마케팅",
    "성장 전략",
    "Growth Block",
    "수익 구조 설계",
    "LTV 최적화",
    "마케팅 대행사",
    "스타트업 마케팅",
  ],
  authors: [{ name: "HyperBasak Inc." }],
  creator: "HyperBasak Inc.",
  publisher: "HyperBasak Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "Growth Block",
    title: "Growth Block | 수익 구조 설계부터 운영까지",
    description:
      "단순 광고 집행을 넘어 비즈니스 맞춤형 성장 시스템을 구축합니다. 파트너 CMO 팀의 1:1 맞춤 컨설팅을 경험하세요.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growth Block - 수익 구조 설계부터 운영까지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Block | 수익 구조 설계부터 운영까지",
    description:
      "단순 광고 집행을 넘어 비즈니스 맞춤형 성장 시스템을 구축합니다. 파트너 CMO 팀의 1:1 맞춤 컨설팅을 경험하세요.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <OrganizationJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
