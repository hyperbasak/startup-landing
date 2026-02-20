"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import customizedArchitectureV1 from "./assets/customized_architecture_v1.png";
import customizedArchitectureV2 from "./assets/customized_architecture_v2.png";
import customizedArchitectureV3 from "./assets/customized_architecture_v3.png";

function SectionHeader() {
  return (
    <div className="text-center max-w-5xl mx-auto mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 [word-break:keep-all]">
        정해진 구성은 없습니다.{" "}
        <br className="hidden sm:block" />
        귀사만을 위한 <span className="text-primary">맞춤형 전략</span>을 설계합니다.
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed [word-break:keep-all]">
        귀사의 비즈니스에 맞게 퍼널별 가중치를 다시 설계하고,{" "}
        <br className="hidden sm:block" />
        최적의 서비스 블록을 조합하여 성장 병목 구간에 즉시 배치합니다.
      </p>
    </div>
  );
}

const ARCHITECTURES = [
  { src: customizedArchitectureV1, alt: "맞춤형 아키텍처 V1" },
  { src: customizedArchitectureV2, alt: "맞춤형 아키텍처 V2" },
  { src: customizedArchitectureV3, alt: "맞춤형 아키텍처 V3" },
];

function ArchitectureDiagram() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto grid [&>*]:col-start-1 [&>*]:row-start-1">
      {ARCHITECTURES.map((arch, i) => (
        <Image
          key={arch.alt}
          src={arch.src}
          alt={arch.alt}
          className="w-full h-auto transition-opacity duration-2000"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
          priority
        />
      ))}
    </div>
  );
}

export function CustomizedArchitectureSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
