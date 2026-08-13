import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "./cn";

type ContainerSize = "reading" | "narrow" | "normal" | "wide";

const sizeClass: Record<ContainerSize, string> = {
  reading: "max-w-reading",
  narrow: "max-w-narrow",
  normal: "max-w-normal",
  wide: "max-w-wide",
};

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: ContainerSize;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Centered content column with the standard responsive page gutters
 * (20px mobile -> 24px tablet -> 32px desktop). Keeps content centered
 * and never edge-to-edge on very wide screens.
 */
export function Container<T extends ElementType = "div">({
  as,
  size = "normal",
  className,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizeClass[size],
        className,
      )}
      {...rest}
    />
  );
}
