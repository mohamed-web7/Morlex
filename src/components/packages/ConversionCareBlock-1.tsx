import { ArrowRight, Check, LifeBuoy } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/actions";
import { conversionCare } from "@/data/packages";

export function ConversionCareBlock() {
  return (
    <Reveal className="grad-care relative mt-12 overflow-hidden rounded-[20px] border border-ivory/10 p-6 shadow-soft md:p-9 lg:mt-16 lg:p-10">
      <span
        aria-hidden="true"
        className="ambient-gold-dark pointer-events-none absolute -right-16 -top-20 h-[22rem] w-[22rem] rounded-full"
      />

      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-[8px] border border-gold/45 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.11em] text-gold">
            <LifeBuoy aria-hidden="true" size={14} strokeWidth={1.75} />
            Optional — ongoing, not a package
          </span>
          <h3 className="heading-md mt-6 text-ivory">{conversionCare.name}</h3>
          <p className="body-base mt-3 max-w-[36ch] text-cool/80">{conversionCare.positioning}</p>
          <p className="mt-7 font-display text-[2.5rem] font-semibold leading-none text-ivory md:text-[2.875rem]">
            {conversionCare.price}
          </p>
          <p className="meta-sm mt-2.5 text-cool/65">{conversionCare.priceNote}</p>
          <ButtonLink to="/start" variant="on-ink" size="lg" className="mt-8 w-full sm:w-auto">
            Ask about Conversion Care
            <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
          </ButtonLink>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-2 sm:grid-cols-2">
            {conversionCare.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-[12px] border border-ivory/10 bg-ink/25 px-3.5 py-2.5 text-[0.875rem] leading-snug text-ivory/85"
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

          <details className="group mt-5 border-t border-ivory/12 pt-5">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-[0.75rem] font-semibold uppercase tracking-[0.11em] text-ivory">
              Not included
              <span
                aria-hidden="true"
                className="text-gold transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {conversionCare.excludes.map((item) => (
                <li key={item} className="text-[0.875rem] leading-snug text-cool/70">
                  {item}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </Reveal>
  );
}
