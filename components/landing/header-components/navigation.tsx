"use client";

import type { NavItem } from "../types";

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-6 ml-3 pl-10 border-l border-border/40">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

interface MobileNavProps {
  items: NavItem[];
  onItemClick: () => void;
}

export function MobileNav({ items, onItemClick }: MobileNavProps) {
  return (
    <nav className="px-4 py-4 space-y-3">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
