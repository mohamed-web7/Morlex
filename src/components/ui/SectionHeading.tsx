import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "ink" | "ivory";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "ink",
  align = "left",
  className,
  as: Tag = "h2",
}: Props) {
  const onInk = tone === "ivory";

  return (
    <Reveal
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center"
          ? "mx-auto items-center text-center"
          : "items-center text-center sm:items-start sm:text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow flex items-center gap-3", onInk ? "text-gold" : "text-slate")}>
          <span aria-hidden="true" className={cn("h-px w-8", onInk ? "bg-gold/60" : "bg-gold")} />
          {eyebrow}
        </span>
      ) : null}

      <Tag className={cn("heading-section", onInk ? "text-ivory" : "text-ink")}>{title}</Tag>

      {intro ? (
        <p className={cn("body-lg max-w-[50ch]", onInk ? "text-cool/85" : "text-slate")}>{intro}</p>
      ) : null}
    </Reveal>
  );
}
