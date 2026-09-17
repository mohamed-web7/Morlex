import { Check, ArrowRight, LifeBuoy, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/actions";
import { cn } from "@/lib/utils";
import { groupIcon, type MorlexPackage } from "@/data/packages";

export function PackageCard({
  pkg,
  detailed = false,
  delay = 0,
}: {
  pkg: MorlexPackage;
  detailed?: boolean;
  delay?: number;
}) {
  const flagship = Boolean(pkg.emphasis);
  const visibleGroups = detailed ? pkg.groups : pkg.groups.slice(0, flagship ? 3 : 2);
  const hiddenGroups = detailed ? [] : pkg.groups.slice(flagship ? 3 : 2);

  return (
    <Reveal
      delay={delay}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[20px]",
        flagship
          ? "card-ink border-gold/30 shadow-lift lg:-mt-5 lg:mb-[-1.25rem]"
          : "card-on-ivory card-lift shadow-soft",
      )}
    >
      {flagship ? (
        <>
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gold" />
          <span
            aria-hidden="true"
            className="ambient-gold-dark pointer-events-none absolute -top-24 left-1/2 h-[22rem] w-[26rem] -translate-x-1/2 rounded-full"
          />
        </>
      ) : null}

      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center justify-center gap-4 sm:justify-between">
          <span className="index-num text-gold">{pkg.index}</span>
          {flagship ? (
            <span className="rounded-[8px] border border-gold/45 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-gold">
              Main offer
            </span>
          ) : null}
        </div>

        <h3 className={cn("card-title mt-6 text-center sm:text-left", flagship ? "text-ivory" : "text-ink")}>
          {pkg.name}
        </h3>
        <p
          className={cn(
            "meta-sm mx-auto mt-2.5 max-w-[32ch] text-center sm:mx-0 sm:text-left",
            flagship ? "text-cool/75" : "text-slate",
          )}
        >
          {pkg.who}
        </p>

        {/* Price hierarchy: STANDARD label, struck standard price, dominant current price */}
        <div
          className={cn(
            "mt-7 border-t pt-6 text-center sm:text-left",
            flagship ? "border-ivory/12" : "border-hairline",
          )}
        >
          {pkg.standardPrice ? (
            <p className="flex items-baseline justify-center gap-2 sm:justify-start">
              <span
                className={cn(
                  "text-[0.6875rem] uppercase tracking-[0.14em]",
                  flagship ? "text-cool/50" : "text-slate/70",
                )}
              >
                Standard
              </span>
              <span
                className={cn(
                  "font-display text-[1.0625rem] line-through decoration-[1.5px]",
                  flagship ? "text-cool/55" : "text-slate/70",
                )}
              >
                {pkg.standardPrice}
              </span>
            </p>
          ) : null}

          <p
            className={cn(
              "mt-2 font-display text-[3rem] font-semibold leading-[0.95] tracking-tight md:text-[3.375rem]",
              flagship ? "text-ivory" : "text-ink",
            )}
          >
            {pkg.price}
          </p>

          {pkg.badge ? (
            <span
              className={cn(
                "mt-4 inline-block rounded-[8px] px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.11em]",
                flagship ? "bg-gold text-ink" : "border border-gold/50 text-ink",
              )}
            >
              {pkg.badge}
            </span>
          ) : null}
        </div>

        {/* Grouped features */}
        <div className="mt-7 space-y-5">
          {visibleGroups.map((group) => {
            const Icon = groupIcon(group.label);
            return (
              <div key={group.label}>
                <h4
                  className={cn(
                    "flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
                    flagship ? "text-gold" : "text-slate",
                  )}
                >
                  <Icon aria-hidden="true" size={14} strokeWidth={1.75} />
                  {group.label}
                </h4>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex items-start gap-2.5 text-[0.9375rem] leading-snug",
                        flagship ? "text-ivory/90" : "text-ink/85",
                      )}
                    >
                      <Check
                        aria-hidden="true"
                        size={15}
                        strokeWidth={2}
                        className="mt-[3px] shrink-0 text-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {hiddenGroups.length ? (
          <details className="group mt-6">
            <summary
              className={cn(
                "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 border-t pt-5 text-[0.75rem] font-semibold uppercase tracking-[0.11em]",
                flagship ? "border-ivory/12 text-ivory" : "border-hairline text-ink",
              )}
            >
              Everything else included
              <span
                aria-hidden="true"
                className="text-gold transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="mt-4 space-y-5">
              {hiddenGroups.map((group) => {
                const Icon = groupIcon(group.label);
                return (
                  <div key={group.label}>
                    <h4
                      className={cn(
                        "flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
                        flagship ? "text-gold" : "text-slate",
                      )}
                    >
                      <Icon aria-hidden="true" size={14} strokeWidth={1.75} />
                      {group.label}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "text-[0.9375rem] leading-snug",
                            flagship ? "text-ivory/85" : "text-ink/80",
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </details>
        ) : null}

        {detailed && pkg.excludes?.length ? (
          <details className="group mt-5">
            <summary
              className={cn(
                "flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 border-t pt-5 text-[0.75rem] font-semibold uppercase tracking-[0.11em]",
                flagship ? "border-ivory/12 text-ivory" : "border-hairline text-ink",
              )}
            >
              Not included
              <span
                aria-hidden="true"
                className="text-gold transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <ul className="mt-4 space-y-2">
              {pkg.excludes.map((item) => (
                <li
                  key={item}
                  className={cn("meta-sm", flagship ? "text-cool/70" : "text-slate")}
                >
                  {item}
                </li>
              ))}
            </ul>
          </details>
        ) : null}

        {/* Footer */}
        <div
          className={cn(
            "mt-auto flex flex-col gap-4 border-t pt-6",
            flagship ? "border-ivory/12" : "border-hairline",
          )}
        >
          <ul
            className={cn(
              "flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8125rem]",
              flagship ? "text-cool/70" : "text-slate",
            )}
          >
            <li className="flex items-center gap-2">
              <LifeBuoy aria-hidden="true" size={15} strokeWidth={1.5} className="text-gold" />
              {pkg.support}
            </li>
            <li className="flex items-center gap-2">
              <RefreshCw aria-hidden="true" size={15} strokeWidth={1.5} className="text-gold" />
              {pkg.revisions}
            </li>
          </ul>
          <ButtonLink
            to="/start"
            search={{ package: pkg.slug }}
            variant={flagship ? "on-ink" : "outline"}
            size="lg"
            className="w-full"
          >
            {pkg.ctaLabel}
            <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
