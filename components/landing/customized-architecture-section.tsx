"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import customizedArchitectureV1 from "./assets/customized_architecture_v1.png";
import customizedArchitectureV2 from "./assets/customized_architecture_v2.png";
import customizedArchitectureV3 from "./assets/customized_architecture_v3.png";

function SectionHeader() {
  return (
    <div className="max-w-7xl text-center max-w-5xl mx-auto mb-12 lg:mb-16">
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

const len = ARCHITECTURES.length;

function wrap(index: number) {
  return ((index % len) + len) % len;
}

function ArchitectureDiagram() {
  // Clone a full set on each side for seamless infinite loop
  const extended = [
    ...ARCHITECTURES,
    ...ARCHITECTURES,
    ...ARCHITECTURES,
    ...ARCHITECTURES,
    ...ARCHITECTURES,
  ];
  const offset = len * 2;
  const totalItems = extended.length;

  const [pos, setPos] = useState(offset); // starts at first real item
  const [animate, setAnimate] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Responsive: 1 visible on mobile, 3 on sm+
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 1024 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goNext = useCallback(() => {
    setAnimate(true);
    setPos((p) => p + 1);
  }, []);

  const goPrev = useCallback(() => {
    setAnimate(true);
    setPos((p) => p - 1);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    setAnimate(false);
    setDragOffset(0);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setDragOffset(e.clientX - dragStartX.current);
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const diff = e.clientX - dragStartX.current;
      hasDragged.current = Math.abs(diff) > 5;
      setDragOffset(0);
      setAnimate(true);

      const w = (wrapperRef.current?.offsetWidth ?? 0) / visibleCount;
      if (w > 0 && Math.abs(diff) > 50) {
        const steps = Math.round(Math.abs(diff) / w) || 1;
        setPos((p) => p + (diff > 0 ? -steps : steps));
      }
    },
    [visibleCount]
  );

  // Always snap pos back to [offset, offset+len-1] after transition
  useEffect(() => {
    const canonical = wrap(pos - offset) + offset;
    if (pos === canonical || !animate) return;
    const timer = setTimeout(() => {
      setAnimate(false);
      setPos(canonical);
    }, 700);
    return () => clearTimeout(timer);
  }, [pos, animate]);

  // Auto-advance, paused while dragging
  useEffect(() => {
    if (isDragging.current) return;
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [pos, goNext, dragOffset]);

  // translateX: center the item at `pos`
  // Each item = 1/totalItems of the flex container
  // Container width = totalItems/visibleCount * 100% of visible area
  const centerIndex = Math.floor(visibleCount / 2);
  const translatePct = ((centerIndex - pos) / totalItems) * 100;

  // Compute effective fractional position for interpolated scale/opacity
  const wrapperWidth = wrapperRef.current?.offsetWidth ?? 0;
  const itemWidth = wrapperWidth / visibleCount;
  const effectivePos =
    itemWidth > 0 && dragOffset !== 0 ? pos - dragOffset / itemWidth : pos;

  return (
    <div className="w-full overflow-hidden">
      {/* Slides */}
      <div
        ref={wrapperRef}
        className="lg:p-8 touch-pan-y select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          className={`flex items-center py-2 ${animate
            ? "transition-transform duration-700 ease-in-out"
            : ""}`}
          style={{
            width: `${(totalItems / visibleCount) * 100}%`,
            transform: `translateX(calc(${translatePct}% + ${dragOffset}px))`,
          }}
        >
          {extended.map((arch, i) => {
            const dist = Math.min(Math.abs(i - effectivePos), 1);
            const isMobile = visibleCount === 1;
            const scale = isMobile ? 1 - dist * 0.2 : 1.2 - dist * 0.45;
            const opacity = isMobile ? 1 - dist : 1 - dist * 0.6;
            const isCenter = dist < 0.5;
            return (
              <div
                key={i}
                className={`flex-shrink-0 px-1 sm:px-2 ${!isCenter ? "cursor-pointer" : ""}`}
                style={{ width: `${100 / totalItems}%` }}
                onClick={() => {
                  if (hasDragged.current) {
                    hasDragged.current = false;
                    return;
                  }
                  if (i < pos) goPrev();
                  else if (i > pos) goNext();
                }}
              >
                <div
                  className={`rounded-xl p-4 ${animate ? "transition-all duration-700" : ""} ${isCenter
                    ? "ring-2 ring-primary/20"
                    : "ring-1 ring-primary/20"}`}
                  style={{ transform: `scale(${scale})`, opacity }}
                >
                  <Image
                    src={arch.src}
                    alt={arch.alt}
                    className="w-full h-auto pointer-events-none"
                    draggable={false}
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrow buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={goPrev}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 hover:text-slate-900"
          aria-label="이전"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={goNext}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-slate-600 hover:text-slate-900"
          aria-label="다음"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export function CustomizedArchitectureSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
