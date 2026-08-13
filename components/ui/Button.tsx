import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-body font-bold " +
  "transition-[transform,box-shadow,background-color,color] duration-200 ease-premium " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-indigo focus-visible:ring-offset-cream disabled:opacity-60 " +
  "disabled:pointer-events-none";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-white shadow-card hover:-translate-y-0.5 hover:shadow-elevated",
  secondary:
    "bg-white text-ink border border-navy/10 shadow-soft hover:-translate-y-0.5 hover:shadow-card",
  ghost:
    "bg-transparent text-ink hover:bg-navy/5",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-[0.8125rem]",
  md: "min-h-11 px-5 type-small",
  lg: "min-h-12 px-7 text-[0.9375rem]",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  disabled?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

/**
 * Brand button / link. Renders an <a> when `href` is given, otherwise a
 * <button>. Icon on the right nudges forward on hover (premium micro-move).
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  iconRight,
  children,
  className,
  type = "button",
  target,
  rel,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variantClass[variant], sizeClass[size], className);
  const inner = (
    <>
      {children}
      {iconRight ? (
        <span
          className="inline-flex transition-transform duration-200 ease-premium group-hover:translate-x-0.5"
          aria-hidden
        >
          {iconRight}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} {...rest}>
      {inner}
    </button>
  );
}
