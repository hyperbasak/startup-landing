"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Scaling Barrier", href: "#scaling-barrier" },
    { label: "Growth OS", href: "#growth-os" },
    { label: "Why Us?", href: "#why-us" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-foreground text-lg">
                Growth OS
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 ml-3 pl-10 border-l border-border/40">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
            >
              <a href="#start-now">성장 가속 진단 신청</a>
            </Button>
          </div>

          {/* Mobile: CTA + Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3"
            >
              <a href="#start-now">진단 신청</a>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-border/50",
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
