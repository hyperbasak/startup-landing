import { Logo } from "./ui/logo";
import { EXTERNAL_LINKS } from "./constants";

function BrandSection() {
  return (
    <div className="space-y-4">
      <Logo textClassName="text-white" />
      <p className="text-white/60 max-w-xs leading-relaxed [word-break:keep-all]">
        성장의 병목을 해소하는 파트너 CMO. 휘발되는 비용을 멈추고 영구적인
        성장 자산을 구축하세요.
      </p>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="md:text-right">
      <div className="text-sm text-white/50 space-y-1.5 md:text-right">
        <p>주식회사 하이퍼바삭 | 대표자: 김병수</p>
        <p>사업자등록번호: 351-88-03577</p>
        <p>서울특별시 강남구 선릉로 704</p>
        <p>
          <a
            href="mailto:hello@hyperbasak.com"
            className="hover:text-white transition-colors"
          >
            hello@hyperbasak.com
          </a>
        </p>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="border-t border-white/10 mt-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-sm text-white/40">
        © 2026 HyperBasak Inc. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-sm text-white/40">
        <a
          href={EXTERNAL_LINKS.PRIVACY_POLICY}
          target="_blank"
          className="hover:text-white/60 transition-colors"
        >
          개인정보처리방침
        </a>
        <a
          href={EXTERNAL_LINKS.TERMS_OF_SERVICE}
          target="_blank"
          className="hover:text-white/60 transition-colors"
        >
          이용약관
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
          <BrandSection />
          <CompanyInfo />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}
