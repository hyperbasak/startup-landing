"use client";

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-foreground"
      aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}
