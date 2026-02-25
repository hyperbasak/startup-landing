interface ScrollIndicatorProps {
  classNameTextColor?: string;
  className?: string;
}

export function ScrollIndicator({
  classNameTextColor = "text-primary/60",
  className = "w-6 h-6",
}: ScrollIndicatorProps) {
  return (
    <div className="animate-bounce">
      <svg
        className={`mx-auto ${className} ${classNameTextColor}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}
