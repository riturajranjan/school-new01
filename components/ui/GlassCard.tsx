import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "./cn";

type Surface = "solid" | "light" | "dark";
type Radius = "md" | "lg" | "xl";

// Three standardized surfaces (per the design system): one solid premium
// card, one light glass, one dark glass. Same shadow/border family.
const surfaceClass: Record<Surface, string> = {
  solid: "bg-white border border-navy/8 shadow-card text-ink",
  light:
    "bg-white/70 border border-white/60 shadow-card text-ink backdrop-blur-md",
  dark: "bg-navy/60 border border-white/12 shadow-elevated text-white backdrop-blur-md",
};

const radiusClass: Record<Radius, string> = {
  md: "rounded-[var(--radius-md)]",
  lg: "rounded-[var(--radius-lg)]",
  xl: "rounded-[var(--radius-xl)]",
};

type GlassCardProps<T extends ElementType> = {
  as?: T;
  surface?: Surface;
  radius?: Radius;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Surface primitive: solid | light glass | dark glass. */
export function GlassCard<T extends ElementType = "div">({
  as,
  surface = "solid",
  radius = "lg",
  className,
  ...rest
}: GlassCardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn(surfaceClass[surface], radiusClass[radius], className)}
      {...rest}
    />
  );
}
