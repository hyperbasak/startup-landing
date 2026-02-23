import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Growth Block | 수익 구조 설계부터 운영까지",
  description:
    "단순 광고 집행을 넘어 비즈니스 맞춤형 성장 시스템을 구축합니다. 도메인 분석으로 누수 지점을 판독하고, 전략과 실행을 동시에 책임지는 파트너 CMO 팀의 1:1 맞춤 컨설팅을 경험하세요.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
        <Analytics />
      </body>
    </html>
  );
}
