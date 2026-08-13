import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";
import { Container } from "./Container";

type SectionTone = "cream" | "soft" | "white" | "navy";
type SectionSpace = "default" | "compact" | "none";
type ContainerSize = "reading" | "narrow" | "normal" | "wide";

const toneClass: Record<SectionTone, string> = {
  cream: "bg-cream text-ink",
  soft: "bg-soft-cream text-ink",
  white: "bg-white text-ink",
  navy: "bg-navy text-white",
};

// Desktop ~96px, tablet ~80px, mobile ~56px (compact trims each).
const spaceClass: Record<SectionSpace, string> = {
  default: "py-14 sm:py-16 lg:py-24",
  compact: "py-12 sm:py-14 lg:py-20",
  none: "",
};

type SectionProps = {
  tone?: SectionTone;
  space?: SectionSpace;
  /** Wrap children in a Container. Set false for full-bleed sections. */
  contained?: boolean;
  containerSize?: ContainerSize;
} & ComponentPropsWithoutRef<"section">;

/**
 * Standard section wrapper: consistent vertical rhythm, brand tone
 * background, optional centered Container. The building block every
 * homepage section will use from Phase 2 onward.
 */
export function Section({
  tone = "cream",
  space = "default",
  contained = true,
  containerSize = "normal",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn("relative", toneClass[tone], spaceClass[space], className)}
      {...rest}
    >
      {contained ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
