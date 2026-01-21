export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-lg">Growth OS</span>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed">
              데이터 기반의 스케일업 엔진을 통해 PMF를 검증한 스타트업의 
              지속 가능한 성장을 지원합니다.
            </p>
            <div className="text-sm text-white/40">
              © 2025 Growth OS. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Scaling Barrier", href: "#scaling-barrier" },
                { label: "Growth OS", href: "#growth-os" },
                { label: "Why Us?", href: "#why-us" },
                { label: "진단 신청", href: "#start-now" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="mailto:contact@growth-os.kr" className="hover:text-white transition-colors">
                  contact@growth-os.kr
                </a>
              </li>
              <li>서울특별시 강남구 테헤란로</li>
              <li>평일 10:00 - 18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white/60 transition-colors">이용약관</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Trusted by 100+ growth companies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
