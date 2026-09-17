import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/actions";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/config/site";
import ctaImage from "@/assets/images/cta/morlex-final-cta.jpg";

/** Full-background image composition — the strongest visual moment on the site. */
export function FinalCta() {
  return (
    <section className="surface-white relative overflow-hidden pb-16 pt-4 md:pb-24">
      <div className="container-page">
        <div className="relative">
          <span
            aria-hidden="true"
            className="ambient-gold pointer-events-none absolute -inset-6 rounded-[32px]"
          />

          <Reveal className="relative isolate overflow-hidden rounded-[20px] shadow-lift">
            <img
              src={ctaImage}
              alt="Warm architectural facade of a premium residence at the end of the day"
              width={1920}
              height={1088}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div aria-hidden="true" className="grad-image-ink absolute inset-0" />

            <div className="relative flex flex-col items-center px-6 py-20 text-center md:px-12 md:py-28 lg:py-32">
              <span className="eyebrow flex items-center gap-3 text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
                Next step
                <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
              </span>

              <h2 className="heading-section mt-7 max-w-[22ch] text-ivory">
                Your website should earn the next click.
              </h2>

              <p className="body-lg mt-6 max-w-[46ch] text-cool/80">
                Tell MORLEX about the service, the market and the current site.
              </p>

              <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <ButtonLink to="/start" size="lg" className="w-full sm:w-auto">
                  {cta.primary}
                  <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
                </ButtonLink>
                <ButtonLink
                  to="/packages"
                  variant="outline-on-ink"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View packages
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
