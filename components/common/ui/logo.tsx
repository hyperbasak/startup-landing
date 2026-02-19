"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({
  className = "",
  showText = true,
  textClassName = "text-foreground",
}: LogoProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      scroll={false}
      onClick={handleClick}
      className={`flex items-center gap-2 ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">G</span>
      </div>
      {showText && (
        <span className={`font-semibold text-lg ${textClassName}`}>
          Growth Block
        </span>
      )}
    </Link>
  );
}
