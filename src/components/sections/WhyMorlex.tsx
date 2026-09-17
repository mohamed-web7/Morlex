import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyMorlex } from "@/data/process";
import { cn } from "@/lib/utils";

export function WhyMorlex({ eyebrow = "07 — Standards" }: { eyebrow?: string }) {
  return (
    <section className="surface-white section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title="Six standards that don't move." />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-5 lg:gap-5">
          {whyMorlex.map((item, i) => {
            const emphasized = i === 0;
            return (
              <Reveal
                key={item.title}
                delay={i * 60}
                className={cn(
                  "flex h-full flex-col items-center p-6 text-center sm:items-stretch sm:text-left md:p-7",
                  emphasized ? "card-ink" : "card-on-white card-lift",
                )}
              >
                <div className="flex w-full items-center justify-center gap-4 sm:justify-between">
                  <span className={emphasized ? "icon-frame-dark" : "icon-frame"}>
                    <item.icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </span>
                  <span
                    className={cn(
                      "hidden font-display text-[1.75rem] font-semibold leading-none sm:block",
                      emphasized ? "text-ivory/20" : "text-ink/12",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={cn(
                    "mt-6 font-display text-[1.125rem] font-semibold leading-snug md:text-[1.25rem]",
                    emphasized ? "text-ivory" : "text-ink",
                  )}
                >
                  {item.title}
                </h3>
                <p className={cn("meta-sm mt-3", emphasized ? "text-cool/70" : "text-slate")}>
                  {item.detail}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
