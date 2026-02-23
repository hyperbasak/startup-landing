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
  title: "Growth Block | 폭발적 성장을 위한 파트너 CMO",
  description:
    "성장의 병목을 해소하는 파트너 CMO. Growth Block 하나로 스케일업에 필요한 모든 전략과 실행을 끝내세요. 수익 구조를 직접 설계하고 운영하는 CMO 팀이 귀사만의 독보적인 성장 시스템을 완성합니다.",
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
