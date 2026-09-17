import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approach } from "@/data/process";

export function Approach({ eyebrow = "03 — Approach" }: { eyebrow?: string }) {
  return (
    <section className="surface-white section-y relative overflow-hidden">
      <div
        aria-hidden="true"
        className="ambient-slate pointer-events-none absolute -left-32 top-10 h-[24rem] w-[24rem] rounded-full"
      />
      <div className="container-page relative">
        <SectionHeading eyebrow={eyebrow} title="Attention. Clarity. Trust. Action." />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-4">
          {approach.map((step, i) => (
            <Reveal key={step.index} delay={i * 80} className="relative">
              <div className="card-on-white card-lift flex h-full flex-col items-center p-6 text-center sm:items-stretch sm:text-left md:p-7">
                <div className="flex w-full items-start justify-center gap-4 sm:justify-between">
                  <span className="icon-frame">
                    <step.icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </span>
                  <span className="hidden font-display text-[2rem] font-semibold leading-none text-ink/12 sm:block">
                    {step.index}
                  </span>
                </div>
                <h3 className="card-title mt-7 text-ink">{step.name}</h3>
                <p className="meta-sm mt-3 text-slate">{step.detail}</p>
              </div>

              {i < approach.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-[1.35rem] top-1/2 hidden -translate-y-1/2 text-gold lg:block"
                >
                  <ArrowRight size={18} strokeWidth={1.5} />
                </span>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
