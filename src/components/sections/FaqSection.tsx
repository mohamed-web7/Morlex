import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/data/faq";

export function FaqSection({ eyebrow = "08 — Questions" }: { eyebrow?: string }) {
  return (
    <section className="surface-ivory section-y">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <SectionHeading
            eyebrow={eyebrow}
            title="Answers, without the sales language."
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          />

          <Reveal
            delay={80}
            className="overflow-hidden rounded-[20px] border border-hairline bg-white shadow-hair lg:col-span-8"
          >
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-hairline last:border-0">
                <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 font-display text-[1.0625rem] font-semibold text-ink transition-colors duration-300 hover:bg-ivory md:px-8 md:text-[1.1875rem]">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border border-hairline text-gold transition-transform duration-300 ease-[var(--ease-morlex)] group-open:rotate-45"
                  >
                    <Plus size={16} strokeWidth={2} />
                  </span>
                </summary>
                <p className="max-w-[68ch] px-5 pb-6 text-[1rem] leading-[1.65] text-slate md:px-8 md:pb-7">
                  {item.a}
                </p>
              </details>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
