import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/actions";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import featuredImage from "@/assets/images/services/service-landing-page.jpg";

export function ServicesSection({
  detailed = false,
  withHeading = true,
  eyebrow = "04 — Services",
}: {
  detailed?: boolean;
  withHeading?: boolean;
  eyebrow?: string;
}) {
  const [featured, ...rest] = services;

  return (
    <section className="surface-ivory section-y">
      <div className="container-page">
        {withHeading ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={eyebrow} title="Four ways MORLEX works on conversion." />
            <Reveal delay={120} className="shrink-0">
              <ButtonLink to="/services" variant="outline">
                All services
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
              </ButtonLink>
            </Reveal>
          </div>
        ) : null}

        <div className={cn("grid gap-4 md:gap-5 lg:grid-cols-12", withHeading && "mt-10 md:mt-12")}>
          {/* Featured service — image + dark content area */}
          {featured ? (
            <Reveal className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-hairline bg-white shadow-lift lg:col-span-7">
              <div className="relative overflow-hidden lg:flex-1">
                <img
                  src={featuredImage}
                  alt="Smartphone on a warm limestone ledge showing a minimal ivory and ink landing page with a gold accent"
                  width={1600}
                  height={1104}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover transition-transform duration-700 ease-[var(--ease-morlex)] group-hover:scale-[1.04] md:h-[22rem] lg:h-full lg:min-h-[24rem]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_15_28/0.25)_0%,transparent_35%,rgb(10_15_28/0.55)_100%)]"
                />
                <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-[8px] border border-ivory/25 bg-ink/45 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.11em] text-ivory backdrop-blur-sm md:left-9 md:top-9">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Most requested
                </span>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 md:bottom-9 md:left-9 md:right-9">
                  <h3 className="heading-md max-w-[18ch] text-ivory">{featured.name}</h3>
                  <span className="index-num shrink-0 text-ivory/45">{featured.index}</span>
                </div>
              </div>
              <div className="card-ink flex flex-1 flex-col rounded-none border-0 p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <span className="icon-frame-dark">
                    <featured.icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </span>
                  <span aria-hidden="true" className="gold-rule h-px flex-1" />
                </div>

                <p className="body-base mt-6 max-w-[42ch] text-cool/75">{featured.purpose}</p>

                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {featured.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 meta-sm text-ivory/85">
                      <Check
                        aria-hidden="true"
                        size={15}
                        strokeWidth={2}
                        className="mt-[3px] shrink-0 text-gold"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {detailed ? (
                  <p className="body-base mt-7 max-w-[62ch] text-cool/70">{featured.detail}</p>
                ) : null}

                <Link
                  to="/start"
                  className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.09em] text-ivory transition-colors hover:text-gold"
                >
                  Explore service
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    strokeWidth={2}
                    className="text-gold"
                  />
                </Link>
              </div>
            </Reveal>
          ) : null}

          {/* Supporting services */}
          <div className="grid content-start gap-4 md:grid-cols-2 md:gap-5 lg:col-span-5 lg:grid-cols-1">
            {rest.map((service, i) => (
              <Reveal
                key={service.index}
                delay={i * 80}
                className="card-on-ivory card-lift group flex flex-col items-center p-6 text-center sm:items-stretch sm:text-left md:p-7"
              >
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <span className="icon-frame shrink-0 bg-ivory">
                    <service.icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center justify-center gap-3 sm:justify-start">
                      <span className="index-num text-gold">{service.index}</span>
                      <span aria-hidden="true" className="h-px w-6 bg-hairline" />
                    </div>
                    <h3 className="mt-3 font-display text-[1.1875rem] font-semibold leading-snug text-ink md:text-[1.3125rem]">
                      {service.name}
                    </h3>
                    <p className="meta-sm mt-2.5 text-slate">{service.purpose}</p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.5}
                    className="hidden shrink-0 text-ink/25 transition-all duration-300 ease-[var(--ease-morlex)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold sm:ml-auto sm:block"
                  />
                </div>

                <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {service.points.slice(0, 3).map((point) => (
                    <li
                      key={point}
                      className="rounded-[8px] border border-hairline bg-ivory px-3 py-1.5 text-[0.8125rem] leading-snug text-ink/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {detailed ? (
                  <p className="meta-sm mt-6 border-t border-hairline pt-5 text-slate">
                    {service.detail}
                  </p>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
