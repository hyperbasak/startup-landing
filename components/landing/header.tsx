"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Logo } from "./common";
import { NAV_ITEMS } from "./constants";
import {
  DesktopNav,
  MobileNav,
  MobileMenuButton,
  DesktopCTA,
  MobileCTA,
  useScroll,
} from "./header-components";

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "lg:hidden overflow-hidden transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-border/50",
        isOpen ? "max-h-64" : "max-h-0"
      )}
    >
      <MobileNav items={NAV_ITEMS} onItemClick={onClose} />
    </div>
  );
}

export function Header() {
  const { isScrolled, isVisible } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <div className="flex items-center">
            <Logo />
            <DesktopNav items={NAV_ITEMS} />
          </div>

          <DesktopCTA />

          <div className="flex items-center gap-3 lg:hidden">
            <MobileCTA />
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}
