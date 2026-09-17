import { ArrowRight, Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/actions";
import { Reveal } from "@/components/ui/Reveal";
import campaignImage from "@/assets/images/cta/morlex-campaign.jpg";

/** Image-led campaign module. Large art-directed image + dark information panel. */
export function CampaignCta({ eyebrow = "Conversion audit" }: { eyebrow?: string }) {
  return (
    <section className="surface-white section-y">
      <div className="container-page">
        <Reveal className="grid overflow-hidden rounded-[20px] border border-hairline shadow-lift lg:grid-cols-12">
          <div className="relative hidden lg:col-span-7 lg:block">
            <img
              src={campaignImage}
              alt="Entrance of a premium modern home where warm plaster meets a dark door"
              width={1920}
              height={1088}
              loading="lazy"
              decoding="async"
              className="h-full w-full min-h-[26rem] object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent_62%,rgb(10_15_28/0.45)_100%)]"
            />
          </div>

          <div className="grad-ink-panel flex flex-col justify-center p-7 md:p-11 lg:col-span-5">
            <span className="eyebrow flex items-center gap-2 text-gold">
              <Search aria-hidden="true" size={14} strokeWidth={1.75} />
              {eyebrow}
            </span>
            <h2 className="heading-md mt-6 max-w-[20ch] text-ivory">
              Find the friction before spending on design.
            </h2>
            <p className="body-base mt-5 max-w-[36ch] text-cool/75">
              Speed, mobile experience, offer clarity, phone visibility, forms and trust — ordered by
              impact.
            </p>
            <div className="mt-9">
              <ButtonLink to="/start" size="lg" className="w-full sm:w-auto">
                Book a conversion audit
                <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
