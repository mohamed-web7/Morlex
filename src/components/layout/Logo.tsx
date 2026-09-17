import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/Logo-no-background.png";

/**
 * Official MORLEX logo. The supplied asset is used as-is — never recoloured,
 * stretched or redrawn. On dark surfaces the mark sits on a small ivory tile so
 * the ink shapes stay visible without altering the artwork.
 * Every header, footer and mobile menu reads from this one component.
 */

export function LogoMark({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "ivory";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px]",
          tone === "ivory" ? "bg-ivory" : "",
        )}
      >
        <img
          src={logoImage}
          alt="MORLEX"
          width={1254}
          height={1254}
          className="h-7 w-7 object-contain"
        />
      </span>
      <span className="font-display text-[1.0625rem] font-extrabold leading-none tracking-[0.3em] uppercase">
        <span className={tone === "ivory" ? "text-ivory" : "text-ink"}>Mor</span>
        <span className="text-gold">Lex</span>
      </span>
    </span>
  );
}

export function LogoLink({
  tone = "ink",
  onClick,
  className,
}: {
  tone?: "ink" | "ivory";
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="MORLEX — home"
      className={cn("inline-flex items-center pr-2 transition-opacity hover:opacity-70", className)}
    >
      <LogoMark tone={tone} />
    </Link>
  );
}
