import { ArrowUpRight, Tag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { work } from "@/data/work";
import { cn } from "@/lib/utils";

export function WorkSection({
  withHeading = true,
  eyebrow = "06 — Selected work",
}: {
  withHeading?: boolean;
  eyebrow?: string;
}) {
  return (
    <section className="surface-ivory section-y">
      <div className="container-page">
        {withHeading ? (
          <SectionHeading eyebrow={eyebrow} title="Concept builds, labelled as concepts." />
        ) : null}

        <div className={cn("flex flex-col gap-8 md:gap-9 lg:gap-14", withHeading && "mt-10 md:mt-12")}>
          {work.map((item, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal
                key={item.index}
                delay={60}
                as="article"
                className="card-on-ivory group grid items-center gap-6 overflow-hidden p-4 md:gap-7 md:p-6 lg:grid-cols-12 lg:gap-8"
              >
                <figure
                  className={cn(
                    "overflow-hidden rounded-[16px] lg:col-span-7",
                    flipped && "lg:order-2",
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover md:aspect-[2/1] lg:aspect-[16/10] transition-transform duration-700 ease-[var(--ease-morlex)] group-hover:scale-[1.03]"
                  />
                </figure>

                <div
                  className={cn(
                    "flex flex-col items-center text-center sm:items-stretch sm:text-left lg:col-span-5 lg:pr-4",
                    flipped && "lg:order-1 lg:pl-4 lg:pr-0",
                  )}
                >
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                    <span className="index-num text-gold">{item.index}</span>
                    <span aria-hidden="true" className="h-px w-6 bg-hairline" />
                    <span className="rounded-[8px] border border-gold/45 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink">
                      {item.label}
                    </span>
                  </div>

                  <p className="meta-sm mt-5 uppercase tracking-[0.14em] text-slate">{item.type}</p>
                  <h3 className="heading-md mt-2.5 text-ink">{item.title}</h3>
                  <p className="body-base mt-4 max-w-[42ch] text-slate md:max-w-[62ch] lg:max-w-[42ch]">
                    {item.detail}
                  </p>

                  <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {item.focus.map((tag) => (
                      <li
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-[8px] border border-hairline bg-ivory px-3 py-1.5 text-[0.8125rem] text-ink/70"
                      >
                        <Tag aria-hidden="true" size={13} strokeWidth={1.5} className="text-slate" />
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span aria-hidden="true" className="mt-7 block h-px w-full bg-hairline" />

                  <Link
                    to="/start"
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.09em] text-ink transition-colors hover:text-slate"
                  >
                    Discuss a build like this
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      strokeWidth={2}
                      className="text-gold transition-transform duration-300 ease-[var(--ease-morlex)] group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
