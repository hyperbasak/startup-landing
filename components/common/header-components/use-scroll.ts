"use client";

import { useState, useEffect, useRef } from "react";

export function useScroll(threshold = 20, hoverZone = 80) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseTriggered, setIsMouseTriggered] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < threshold) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && !isHeaderHovered) {
        setIsVisible(false);
        setIsMouseTriggered(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < hoverZone) {
        setIsMouseTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [threshold, hoverZone, isHeaderHovered]);

  return {
    isVisible: isVisible || isMouseTriggered || isHeaderHovered,
    setIsHeaderHovered,
  };
}
