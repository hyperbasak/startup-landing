"use client";

import Image from "next/image";
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
      <Image src="/logo.png" alt="Growth Block" width={32} height={32} />
      {showText && (
        <span className={`font-semibold text-lg ${textClassName}`}>
          Growth Block
        </span>
      )}
    </Link>
  );
}
