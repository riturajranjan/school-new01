import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "./cn";

type EyebrowTone =
  | "default"
  | "pre"
  | "primary"
  | "middle"
  | "secondary"
  | "senior";

const dotClass: Record<EyebrowTone, string> = {
  default: "bg-indigo",
  pre: "bg-stage-pre",
  primary: "bg-stage-primary",
  middle: "bg-stage-middle",
  secondary: "bg-stage-secondary",
  senior: "bg-stage-senior",
};

type EyebrowProps = {
  tone?: EyebrowTone;
  icon?: ReactNode;
} & ComponentPropsWithoutRef<"span">;

/**
 * Small kicker label that sits above a heading. Carries the academic
 * stage accent via a colored dot (or a supplied icon).
 */
export function Eyebrow({
  tone = "default",
  icon,
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "type-eyebrow inline-flex items-center gap-2 rounded-full",
        "border border-navy/10 bg-white/80 px-4 py-2 text-ink shadow-soft",
        "backdrop-blur-sm",
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span className="grid size-4 place-items-center" aria-hidden>
          {icon}
        </span>
      ) : (
        <span
          className={cn("size-1.5 rounded-full", dotClass[tone])}
          aria-hidden
        />
      )}
      {children}
    </span>
  );
}
