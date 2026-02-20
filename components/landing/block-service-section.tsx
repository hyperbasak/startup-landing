import Image from "next/image";
import beforeBlockService from "./assets/before_block_service.png";
import afterBlockService from "./assets/after_block_service.png";


function BlockServiceFlow() {
  return (
    <div className="max-w-5xl mx-auto my-12 lg:my-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
        <div className="flex-1 flex flex-col items-center">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold tracking-wide">
            🔍 사용자 여정 진단
          </span>
          <div className="rounded-2xl overflow-hidden border border-amber-200 shadow-sm">
            <Image
              src={beforeBlockService}
              alt="퍼널 진단"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-amber-700 [word-break:keep-all]">
            데이터로 유저가 새어나가는 빈틈을 정밀하게 진단합니다.
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center py-2 md:py-0">
          {/* 모바일: 아래 화살표 */}
          <svg
            className="block md:hidden w-10 h-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
          </svg>
          {/* 데스크탑: 오른쪽 화살표 */}
          <svg
            className="hidden md:block w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
          </svg>
        </div>

        {/* 마케팅 블록 배치 */}
        <div className="flex-1 flex flex-col items-center">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wide">
            🧩 마케팅 블록 배치
          </span>
          <div className="rounded-2xl overflow-hidden border border-emerald-200 shadow-sm">
            <Image
              src={afterBlockService}
              alt="마케팅 블록 배치"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-emerald-700 [word-break:keep-all]">
            찾아낸 구멍에 딱 맞는 마케팅 블록을 배치해 퍼널을 완성합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 [word-break:keep-all]">
        성장을 가로막는 퍼널의 빈틈,
        <br />
        <span className="text-primary">마케팅 블록</span>으로 빈틈없이 메웁니다.
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed [word-break:keep-all]">
        Growth Block은 유저가 새어나가는 구멍을 정확히 찾아내고, 그 자리에 딱 맞는 마케팅 블록을 배치합니다.
      </p>
    </div>
  );
}

export function BlockServiceSection() {
  return (
    <section id="service" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <BlockServiceFlow />
      </div>
    </section>
  );
}
