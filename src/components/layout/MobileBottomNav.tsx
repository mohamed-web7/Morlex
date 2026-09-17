import { Link } from "@tanstack/react-router";
import { Home, FolderOpen, Layers, User, ArrowUpRight } from "lucide-react";

const items = [
  { to: "/" as const, label: "Home", Icon: Home },
  { to: "/work" as const, label: "Work", Icon: FolderOpen },
  { to: "/services" as const, label: "Services", Icon: Layers },
  { to: "/about" as const, label: "About", Icon: User },
];

const linkBase =
  "flex min-h-[46px] min-w-[44px] flex-col items-center justify-center gap-1 px-1 text-slate transition-colors duration-300 active:text-ink";

export function MobileBottomNav() {
  const left = items.slice(0, 2);
  const right = items.slice(2);

  return (
    <nav
      aria-label="Mobile quick navigation"
      className="fixed inset-x-0 bottom-0 z-50 rounded-t-[16px] border-t border-hairline bg-white/95 backdrop-blur-[12px] shadow-[0_-6px_24px_rgb(10_15_28/0.08)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative grid grid-cols-5 items-end px-1 pb-1.5 pt-2">
        {left.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className={linkBase}
            activeOptions={{ exact: to === "/" }}
            activeProps={{ className: "text-ink" }}
          >
            <Icon size={21} strokeWidth={1.6} />
            <span className="text-[0.5625rem] font-medium uppercase tracking-[0.09em]">
              {label}
            </span>
          </Link>
        ))}

        {/* Central primary action */}
        <div className="flex flex-col items-center justify-end">
          <Link
            to="/start"
            aria-label="Get started — book a conversion audit"
            className="group -mt-8 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gold bg-gold text-ink shadow-[0_10px_24px_-10px_rgb(10_15_28/0.35),0_2px_6px_rgb(10_15_28/0.12)] transition-transform duration-300 active:scale-95"
          >
            <ArrowUpRight size={22} strokeWidth={1.9} />
          </Link>
          <span className="mt-1.5 text-[0.5625rem] font-semibold uppercase tracking-[0.08em] text-ink">
            Get started
          </span>
        </div>

        {right.map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className={linkBase}
            activeProps={{ className: "text-ink" }}
          >
            <Icon size={21} strokeWidth={1.6} />
            <span className="text-[0.5625rem] font-medium uppercase tracking-[0.09em]">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
