"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import type { NavItem } from "../types";

function smoothScrollTo(hash: string) {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

interface DesktopNavProps {
  items: NavItem[];
}

function DropdownMenu({ item }: { item: NavItem; }) {
  const pathname = usePathname();

  const handleParentClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === item.href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleChildClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const [path, hash] = href.split("#");
    if (hash && pathname === path) {
      e.preventDefault();
      smoothScrollTo(`#${hash}`);
    }
  };

  return (
    <div className="relative group">
      <Link
        href={item.href}
        scroll={false}
        onClick={handleParentClick}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {item.label}
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="bg-white rounded-lg shadow-lg border border-border/50 py-2 min-w-[160px]">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              scroll={false}
              onClick={(e) => handleChildClick(e, child.href)}
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function NavLink({ item, className }: { item: NavItem; className: string; }) {
  const pathname = usePathname();
  const isPageRoute = item.href.startsWith("/");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPageRoute && pathname === item.href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={`${className} inline-flex items-center gap-1`}>
        {item.label}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    );
  }

  if (isPageRoute) {
    return (
      <Link href={item.href} onClick={handleClick} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className}>
      {item.label}
    </a>
  );
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8 ml-3 pl-10 border-l border-border/40">
      {items.map((item) =>
        item.children ? (
          <DropdownMenu key={item.href} item={item} />
        ) : (
          <NavLink
            key={item.href}
            item={item}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          />
        )
      )}
    </nav>
  );
}

interface MobileNavProps {
  items: NavItem[];
  onItemClick: () => void;
}

function MobileDropdown({
  item,
  onItemClick,
}: {
  item: NavItem;
  onItemClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const [path, hash] = href.split("#");
    if (hash && pathname === path) {
      e.preventDefault();
      onItemClick();
      setTimeout(() => smoothScrollTo(`#${hash}`), 100);
    } else {
      onItemClick();
    }
  };

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={handleToggleClick}
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              scroll={false}
              onClick={(e) => handleClick(e, child.href)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileNav({ items, onItemClick }: MobileNavProps) {
  const pathname = usePathname();

  const handlePageLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === href) {
      e.preventDefault();
      onItemClick();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onItemClick();
    }
  };

  return (
    <nav className="px-4 py-4 space-y-3">
      {items.map((item) => {
        if (item.children) {
          return (
            <MobileDropdown
              key={item.href}
              item={item}
              onItemClick={onItemClick}
            />
          );
        }

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {item.label}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          );
        }

        const isPageRoute = item.href.startsWith("/");

        if (isPageRoute) {
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handlePageLinkClick(e, item.href)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {item.label}
            </Link>
          );
        }

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
