import Link from "next/link";

import { Logo } from "./ui/logo";
import { FOOTER_LINKS } from "./constants";

function QuickLinks() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-3">
        {FOOTER_LINKS.map((link) => {
          const isPageRoute = link.href.startsWith("/");

          return (
            <li key={link.href}>
              {isPageRoute ? (
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Contact</h4>
      <ul className="space-y-3 text-sm text-white/60">
        <li>
          <a
            href="mailto:contact@growth-block.kr"
            className="hover:text-white transition-colors"
          >
            contact@growth-block.kr
          </a>
        </li>
        <li>서울특별시 강남구 테헤란로</li>
        <li>평일 10:00 - 18:00</li>
      </ul>
    </div>
  );
}

function BrandSection() {
  return (
    <div className="lg:col-span-2 space-y-4">
      <Logo textClassName="text-white" />
      <p className="text-white/60 max-w-md leading-relaxed [word-break:keep-all]">
        성장의 병목을 해소하는 파트너 CMO. 이제 소모되는 비용을 멈추고, 성장 자본을 쌓아가세요.
      </p>
      <div className="text-sm text-white/40">
        © 2026 Growth Block. All rights reserved.
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="border-t border-white/10 mt-12 pt-8 flex justify-end">
      <div className="flex items-center gap-6 text-sm text-white/40">
        <a href="#" className="hover:text-white/60 transition-colors">
          개인정보처리방침
        </a>
        <a href="#" className="hover:text-white/60 transition-colors">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <BrandSection />
          <QuickLinks />
          <ContactInfo />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}
