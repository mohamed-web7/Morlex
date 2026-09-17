import { Link, type LinkComponentProps } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ink" | "outline" | "ghost" | "on-ink" | "outline-on-ink";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-center font-sans text-[0.8125rem] font-semibold uppercase leading-none tracking-[0.08em] rounded-[12px] transition-all duration-300 ease-[var(--ease-morlex)] select-none disabled:opacity-50 disabled:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-[var(--ease-morlex)] hover:[&_svg]:translate-x-[3px]";

const sizes: Record<Size, string> = {
  md: "min-h-[48px] px-5 py-3 sm:px-6",
  lg: "min-h-[52px] px-6 py-4 sm:min-h-[54px] sm:px-8",
};

/** primary = MORLEX Gold. Reserved for the main action on a surface. */
const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink shadow-[0_1px_2px_rgb(10_15_28/0.08)] hover:-translate-y-[2px] hover:brightness-[0.96] hover:shadow-lift",
  ink: "bg-ink text-ivory hover:-translate-y-[2px] hover:bg-ink/92 hover:shadow-lift",
  outline:
    "border border-ink/16 bg-white text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  ghost: "text-ink hover:text-slate",
  "on-ink": "bg-gold text-ink hover:-translate-y-[2px] hover:brightness-[0.96] hover:shadow-lift",
  "outline-on-ink":
    "border border-ivory/22 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, sizes[size], variants[variant], className);
}

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: SharedProps & LinkComponentProps) {
  return (
    <Link className={classes(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: SharedProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={classes(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
