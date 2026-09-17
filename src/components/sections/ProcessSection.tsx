import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/data/process";

export function ProcessSection({ eyebrow = "Process" }: { eyebrow?: string }) {
  return (
    <section className="surface-ivory section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow={eyebrow}
          title="Eight steps, in order."
          intro="You approve the messaging direction and structure before any visual design begins."
        />

        <div className="mt-10 grid items-start gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:mt-14 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal
              key={step.index}
              delay={i * 50}
              className="card-on-ivory card-lift flex h-full flex-col items-center rounded-[12px] p-5 text-center sm:items-stretch sm:text-left md:p-6"
            >
              <div className="flex w-full items-center justify-center gap-3 sm:justify-between">
                <step.icon aria-hidden="true" size={20} strokeWidth={1.5} className="text-gold" />
                <span className="index-num hidden text-ink/20 sm:block">{step.index}</span>
              </div>
              <h3 className="mt-5 font-display text-[1.0625rem] font-semibold text-ink">
                {step.name}
              </h3>
              <p className="meta-sm mt-2.5 text-slate">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
