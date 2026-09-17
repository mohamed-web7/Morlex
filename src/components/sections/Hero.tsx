import { ArrowRight, MousePointerClick, Smartphone, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ui/actions";
import { Reveal } from "@/components/ui/Reveal";
import { cta, site } from "@/config/site";
import heroImage from "@/assets/images/hero/morlex-hero-main.jpg";

const structure = [
  { icon: MousePointerClick, k: "One clear next action", v: "Call or estimate request" },
  { icon: Smartphone, k: "Mobile designed first", v: "Not a shrunken desktop page" },
];

export function Hero() {
  return (
    <section className="surface-white relative overflow-hidden pt-[92px] pb-14 md:pt-[132px] md:pb-20">
      <div
        aria-hidden="true"
        className="ambient-gold pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full"
      />
      <div
        aria-hidden="true"
        className="ambient-slate pointer-events-none absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full"
      />

      <div className="container-page relative">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* Text column ~48% */}
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            <Reveal>
              <span className="eyebrow flex items-center justify-center gap-3 text-slate lg:justify-start">
                <span aria-hidden="true" className="hidden h-px w-10 bg-gold sm:block" />
                {site.name} — {site.positioning}
              </span>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="display-hero mt-7 text-ink">
                Websites built to turn attention into{" "}
                <span className="relative whitespace-nowrap border-b-[4px] border-gold pb-1">
                  action
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="body-lg mt-7 max-w-[46ch] text-slate">{site.description}</p>
            </Reveal>

            <Reveal delay={180} className="w-full">
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <ButtonLink to="/start" size="lg" className="w-full sm:w-auto">
                  {cta.primary}
                  <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
                </ButtonLink>
                <ButtonLink to="/services" variant="outline" size="lg" className="w-full sm:w-auto">
                  {cta.secondary}
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={230} className="w-full">
              <dl className="mt-10 grid gap-5 border-t border-hairline pt-7 sm:grid-cols-2">
                {structure.map((item) => (
                  <div
                    key={item.k}
                    className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-3"
                  >
                    <item.icon
                      aria-hidden="true"
                      size={20}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-gold"
                    />
                    <div>
                      <dt className="font-display text-[0.9375rem] font-semibold text-ink">
                        {item.k}
                      </dt>
                      <dd className="meta-sm mt-1 text-slate">{item.v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Art-directed visual object — desktop only */}
          <Reveal delay={110} className="relative hidden lg:col-span-6 lg:block lg:pl-6">

            <div className="relative">
              <div className="overflow-hidden rounded-[20px] border border-hairline shadow-lift">
                <img
                  src={heroImage}
                  alt="Roofline of a modern luxury residence in warm late-afternoon light"
                  width={1600}
                  height={1920}
                  fetchPriority="high"
                  decoding="async"
                  className="h-[280px] w-full object-cover sm:h-[340px] md:h-[380px] lg:h-[440px] xl:h-[470px]"
                />
              </div>

              {/* Floating structural card */}
              <div className="card-ink absolute -bottom-8 left-4 w-[15.5rem] rounded-[16px] border-gold/22 p-5 shadow-lift sm:left-6 sm:w-[17rem] sm:p-6 md:w-[19rem] md:p-7">
                <span className="eyebrow flex items-center gap-2 text-gold">
                  <PhoneCall aria-hidden="true" size={14} strokeWidth={1.75} />
                  Clear path to inquiry
                </span>
                <p className="mt-4 font-display text-[0.9375rem] leading-snug text-ivory">
                  Message, proof and next action placed where the decision actually happens.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
