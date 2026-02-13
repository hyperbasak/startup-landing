"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import customizedArchitectureV1 from "./assets/customized_architecture_v1.png";
import customizedArchitectureV2 from "./assets/customized_architecture_v2.png";

const SERVICE_BLOCKS = [
  {
    stage: "Acquisition",
    label: "고객 획득",
    color: "#90CAF9",
    borderColor: "#BBDEFB",
    bgColor: "#E3F2FD",
    services: [
      "클릭을 만드는 소재 제작",
      "고효율 매체 믹스/집행",
      "커뮤니티 및 여론 확산",
      "이탈 유저 재유입 설계",
    ],
  },
  {
    stage: "Activation",
    label: "첫 경험 활성화",
    color: "#1976D2",
    borderColor: "#BBDEFB",
    bgColor: "#E3F2FD",
    services: [
      "구간별 이탈 지점 최적화",
      "고전환 전용 페이지 구축",
      "첫 서비스 경험 설계",
      "실시간 구매 알림/팝업",
    ],
  },
  {
    stage: "Retention",
    label: "재방문 유도",
    color: "#673AB7",
    borderColor: "#D1C4E9",
    bgColor: "#EDE7F6",
    services: [
      "알림톡/푸시 자동화",
      "충성 고객용 콘텐츠 발행",
      "재방문 유도 챌린지",
      "기존 고객 전용 혜택 관리",
    ],
  },
  {
    stage: "Revenue",
    label: "매출 전환",
    color: "#303F9F",
    borderColor: "#C5CAE9",
    bgColor: "#E8EAF6",
    services: [
      "번들 및 업셀링 기획",
      "정기 결제 모델 이식",
      "마진 기반 예산 재배분",
      "장바구니 결제 완결",
    ],
  },
  {
    stage: "Referral",
    label: "추천 유도",
    color: "#4DB6AC",
    borderColor: "#B2DFDB",
    bgColor: "#E0F2F1",
    services: [
      "친구 초대 보상 설계",
      "베스트 후기 콘텐츠화",
      "타겟 커뮤니티 여론 형성",
      "추천 경로 및 성과 분석",
    ],
  },
];


function ServiceBlocks() {
  return (
    <div className="max-w-5xl mx-auto my-12 lg:my-16">
      <div className="flex flex-wrap justify-center gap-6">
        {SERVICE_BLOCKS.map((block) => (
          <div
            key={block.stage}
            className="rounded-xl border p-5 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            style={{ backgroundColor: block.bgColor, borderColor: block.borderColor }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: block.color }} />
              <span className="text-sm font-semibold text-black">{block.stage}</span>
              <span className="text-sm text-slate-1000">·</span>
              <span className="text-sm font-medium text-black">{block.label}</span>
            </div>
            <ul className="space-y-2">
              {block.services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-black flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: block.color }} />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 [word-break:keep-all]">
        귀사의 비즈니스 성장을 책임질
        <br />
        맞춤형 <span className="text-primary">CMO</span> 서비스
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed [word-break:keep-all]">
        퍼널 전체를 진단하여 성장을 가로막는 병목 지점을 찾아내고, 이에 딱 맞는 서비스 블록을 제공합니다.
        <br className="hidden sm:block" />
        막혀있던 비즈니스 성장을 즉시 가속화할 최적의 조각을 지금 확인해 보세요.
      </p>
    </div>
  );
}

function Bridge() {
  return (
    <div className="text-center max-w-5xl mx-auto mt-16 lg:mt-24 mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 [word-break:keep-all]">
        정해진 구성은 없습니다.{" "}
        <br className="hidden sm:block" />
        빈 도화지에서 귀사 맞춤형 설계를 시작합니다.
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed [word-break:keep-all]">
        귀사의 현황에 맞게 퍼널별 가중치를 다시 설계하고,{" "}
        <br className="hidden sm:block" />
        최적의 서비스 블록을 조합하여 성장 병목 구간에 즉시 배치합니다.
      </p>
    </div>
  );
}

function ArchitectureDiagram() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto grid [&>*]:col-start-1 [&>*]:row-start-1">
      <Image
        src={customizedArchitectureV1}
        alt="맞춤형 아키텍처 V1"
        className="w-full h-auto transition-opacity duration-2000"
        style={{ opacity: showFirst ? 1 : 0 }}
        priority
      />
      <Image
        src={customizedArchitectureV2}
        alt="맞춤형 아키텍처 V2"
        className="w-full h-auto transition-opacity duration-2000"
        style={{ opacity: showFirst ? 0 : 1 }}
        priority
      />
    </div>
  );
}

export function BlockServiceSection() {
  return (
    <section id="service" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <ServiceBlocks />
        <Bridge />
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
