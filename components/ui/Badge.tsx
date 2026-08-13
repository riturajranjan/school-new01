import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "./cn";

type BadgeTone =
  | "navy"
  | "indigo"
  | "blue"
  | "teal"
  | "orange"
  | "coral"
  | "yellow";
type BadgeVariant = "solid" | "soft";

const solidClass: Record<BadgeTone, string> = {
  navy: "bg-navy text-white",
  indigo: "bg-indigo text-white",
  blue: "bg-blue text-white",
  teal: "bg-teal text-white",
  orange: "bg-orange text-white",
  coral: "bg-coral text-white",
  yellow: "bg-yellow text-ink",
};

const softClass: Record<BadgeTone, string> = {
  navy: "bg-navy/10 text-navy",
  indigo: "bg-indigo/10 text-indigo",
  blue: "bg-blue/10 text-blue",
  teal: "bg-teal/10 text-teal",
  orange: "bg-orange/10 text-orange",
  coral: "bg-coral/10 text-coral",
  yellow: "bg-yellow/20 text-ink",
};

type BadgeProps = {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  icon?: ReactNode;
} & ComponentPropsWithoutRef<"span">;

/** Compact dimensional label used for stage / status tags. */
export function Badge({
  tone = "indigo",
  variant = "soft",
  icon,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "type-eyebrow inline-flex items-center gap-1.5 rounded-full px-3 py-1.5",
        variant === "solid" ? solidClass[tone] : softClass[tone],
        variant === "solid" && "shadow-soft",
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span className="grid size-3.5 place-items-center" aria-hidden>
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  );
}
