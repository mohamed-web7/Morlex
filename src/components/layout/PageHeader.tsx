import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="surface-white relative overflow-hidden pt-[96px] md:pt-[136px]">
      <div
        aria-hidden="true"
        className="ambient-gold pointer-events-none absolute -right-28 -top-20 h-[26rem] w-[26rem] rounded-full"
      />
      <div className="container-page relative">
        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-12">
          <Reveal
            className={cn(
              "flex flex-col items-center text-center sm:items-start sm:text-left",
              image ? "lg:col-span-7" : "lg:col-span-9",
            )}
          >
            <span className="eyebrow flex items-center gap-3 text-slate">
              <span aria-hidden="true" className="hidden h-px w-10 bg-gold sm:block" />
              {eyebrow}
            </span>
            <h1 className="display-hero mt-6 text-ink">{title}</h1>

            {intro ? <p className="body-lg mt-6 max-w-[52ch] text-slate">{intro}</p> : null}
          </Reveal>

          {image ? (
            <Reveal delay={120} className="lg:col-span-5">
              <div className="overflow-hidden rounded-[20px] border border-hairline shadow-soft">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  width={1600}
                  height={1100}
                  decoding="async"
                  className="h-[220px] w-full object-cover sm:h-[280px] md:h-[300px] lg:h-[340px]"
                />
              </div>
            </Reveal>
          ) : null}
        </div>

        <div aria-hidden="true" className="mt-12 h-px w-full bg-hairline lg:mt-16" />
      </div>
    </section>
  );
}
