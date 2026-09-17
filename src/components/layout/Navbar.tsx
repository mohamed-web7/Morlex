import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, cta } from "@/config/site";
import { LogoLink } from "./Logo";
import { ButtonLink } from "@/components/ui/actions";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Routes that open on a dark surface: the wordmark reads in ivory until the
  // header picks up its white background on scroll.
  const darkTopRoutes = ["/thank-you"];
  const onDarkTop = darkTopRoutes.includes(pathname);
  const logoTone = onDarkTop && !scrolled && !open ? "ivory" : "ink";


  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-morlex)]",
        scrolled || open ? "bg-white/90 border-b border-hairline backdrop-blur-md shadow-[0_1px_2px_rgb(10_15_28/0.04)]" : "bg-transparent",
      )}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-4 md:h-[72px] md:gap-6 lg:h-[80px]">
        <LogoLink tone={logoTone} onClick={() => setOpen(false)} />

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-5 md:flex lg:gap-9 xl:gap-10"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative whitespace-nowrap font-sans text-[0.875rem] text-slate transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full lg:text-[0.9375rem]"
              activeProps={{ className: "text-ink after:w-full" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 md:block">
          <ButtonLink
            to="/start"
            className="min-h-[44px] whitespace-nowrap px-4 text-[0.75rem] tracking-[0.07em] md:py-2.5 lg:min-h-[46px] lg:px-6 lg:text-[0.8125rem] lg:tracking-[0.09em]"
          >
            <span className="lg:hidden">Book audit</span>
            <span className="hidden lg:inline">{cta.primary}</span>
          </ButtonLink>
        </div>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-hairline bg-white transition-[max-height,opacity] duration-500 ease-[var(--ease-morlex)] md:hidden",
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-[52px] items-center border-b border-hairline font-display text-xl text-ink"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink to="/start" size="lg" className="mt-6 w-full">
            {cta.primary}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
