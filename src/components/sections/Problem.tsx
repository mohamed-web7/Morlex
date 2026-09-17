import { MessageSquareOff, MousePointerBan, Smartphone, PhoneOff } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const frictions = [
  {
    index: "01",
    icon: MessageSquareOff,
    title: "Unclear messaging",
    detail: "What you do isn't obvious in three seconds.",
  },
  {
    index: "02",
    icon: MousePointerBan,
    title: "Weak calls to action",
    detail: "Nothing states the next step.",
  },
  {
    index: "03",
    icon: Smartphone,
    title: "Friction on mobile",
    detail: "The phone gets a shrunken desktop page.",
  },
  {
    index: "04",
    icon: PhoneOff,
    title: "Difficult contact paths",
    detail: "Calling or asking for an estimate takes effort.",
  },
];

export function Problem() {
  return (
    <section className="surface-ink relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="ambient-gold-dark pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[46rem] -translate-x-1/2 -translate-y-1/3 rounded-full"
      />

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-5">
            <span className="eyebrow flex items-center gap-3 text-gold">
              <span aria-hidden="true" className="hidden h-px w-10 bg-gold/60 sm:block" />
              02 — Diagnosis
            </span>
            <h2 className="heading-section mt-6 text-ivory">
              Traffic is not the whole journey.
            </h2>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-6 lg:col-start-7">
            <p className="body-base mx-auto max-w-[40ch] text-center text-cool/75 sm:mx-0 sm:text-left">
              Four points where service-business websites lose the visitor they already paid to
              reach.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {frictions.map((item, i) => (
            <Reveal
              key={item.index}
              delay={i * 70}
              className="card-on-ink flex h-full flex-col items-center p-6 text-center sm:items-stretch sm:text-left md:p-7"
            >
              <div className="flex w-full items-center justify-center gap-4 sm:justify-between">
                <span className="icon-frame-dark">
                  <item.icon aria-hidden="true" size={20} strokeWidth={1.5} />
                </span>
                <span className="index-num hidden text-cool/40 sm:block">{item.index}</span>
              </div>
              <h3 className="mt-6 font-display text-[1.125rem] font-semibold leading-snug text-ivory">
                {item.title}
              </h3>
              <p className="meta-sm mt-3 text-cool/70">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
