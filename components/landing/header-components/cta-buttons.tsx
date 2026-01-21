"use client";

import { Button } from "@/components/ui/button";

export function DesktopCTA() {
  return (
    <div className="hidden lg:block">
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
      >
        <a href="#start-now">무료 성장 진단 신청</a>
      </Button>
    </div>
  );
}

export function MobileCTA() {
  return (
    <Button
      asChild
      size="sm"
      className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3"
    >
      <a href="#start-now">진단 신청</a>
    </Button>
  );
}
