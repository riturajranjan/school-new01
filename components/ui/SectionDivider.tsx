import { cn } from "./cn";

export type DividerVariant =
  | "wave"
  | "curve"
  | "dots"
  | "learningPath"
  | "paper"
  | "arc";

type SectionDividerProps = {
  variant?: DividerVariant;
  /** Flip vertically (point the shape the other way). */
  flip?: boolean;
  /**
   * Color of the shape via currentColor — pass a text-* utility, e.g.
   * `text-cream` to match the following section's background.
   */
  className?: string;
  /** Optional accessible decoration hook; defaults to aria-hidden. */
  height?: "sm" | "md" | "lg";
};

const heightClass = {
  sm: "h-8 sm:h-10",
  md: "h-12 sm:h-16",
  lg: "h-16 sm:h-24",
} as const;

/**
 * Original, reusable organic section transitions inspired by playful
 * educational layouts (not copied from any source). Color is driven by
 * currentColor so a divider can blend into the next section's background.
 * Rotate the deck of variants between sections — never repeat the same one
 * back to back.
 */
export function SectionDivider({
  variant = "wave",
  flip = false,
  className,
  height = "md",
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none w-full leading-[0] text-cream",
        heightClass[height],
        flip && "rotate-180",
        className,
      )}
    >
      <svg
        className="block h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === "wave" && (
          <path
            fill="currentColor"
            d="M0 40 C 180 100 360 100 600 60 C 840 20 1020 20 1200 60 L 1200 120 L 0 120 Z"
          />
        )}

        {variant === "curve" && (
          <path
            fill="currentColor"
            d="M0 70 C 300 10 900 10 1200 70 L 1200 120 L 0 120 Z"
          />
        )}

        {variant === "arc" && (
          <path
            fill="currentColor"
            d="M0 120 L0 60 A 600 90 0 0 1 1200 60 L1200 120 Z"
          />
        )}

        {variant === "paper" && (
          <>
            <path
              fill="currentColor"
              opacity="0.55"
              d="M0 58 C 220 92 420 40 620 58 C 820 76 1000 98 1200 66 L1200 120 L0 120 Z"
            />
            <path
              fill="currentColor"
              d="M0 78 C 240 104 460 66 700 80 C 900 92 1050 104 1200 84 L1200 120 L0 120 Z"
            />
          </>
        )}

        {variant === "dots" && (
          <g fill="currentColor">
            {Array.from({ length: 13 }).map((_, index) => (
              <circle
                key={index}
                cx={60 + index * 90}
                cy={index % 2 === 0 ? 66 : 54}
                r={index % 3 === 0 ? 9 : 6}
              />
            ))}
          </g>
        )}

        {variant === "learningPath" && (
          <>
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="2 18"
              d="M40 78 C 320 20 500 108 720 62 C 900 24 1040 78 1160 48"
            />
            <g fill="currentColor">
              <circle cx="40" cy="78" r="8" />
              <circle cx="720" cy="62" r="8" />
              <circle cx="1160" cy="48" r="8" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
