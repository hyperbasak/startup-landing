import type { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon?: LucideIcon;
  text: string;
  variant?: "primary" | "accent" | "destructive";
}

const variantStyles = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  destructive: "bg-destructive/10 text-destructive",
};

export function SectionBadge({
  icon: Icon,
  text,
  variant = "primary",
}: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full ${variantStyles[variant]}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </div>
  );
}
