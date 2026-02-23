import { Logo } from "./ui/logo";

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
    <div className="space-y-3">
      <h4 className="font-semibold mb-4">Business Info</h4>
      <div className="space-y-1.5 text-sm text-white/50">
        <p>주식회사 하이퍼바삭 | 대표자: 김병수</p>
        <p>사업자등록번호: 351-88-03577</p>
        <p>서울특별시 강남구 선릉로 704</p>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold mb-4">Contact</h4>
      <div className="space-y-3 text-sm text-white/60">
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
    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-sm text-white/40">
        © 2026 HyperBasak Inc. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-sm text-white/40">
        <a
          href="https://hyperbasak.notion.site/310c6eeafd3780a6be98e6b69e222352?source=copy_link"
          className="hover:text-white/60 transition-colors"
        >
          개인정보처리방침
        </a>
        <a
          href="https://hyperbasak.notion.site/310c6eeafd3780c2a1c1d13c81855e65?source=copy_link"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <BrandSection />
          <CompanyInfo />
          <ContactSection />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}
