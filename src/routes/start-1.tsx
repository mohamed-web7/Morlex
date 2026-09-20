import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PackageInquiryForm } from "@/components/packages/PackageInquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { findPackage, type PackageSlug } from "@/data/packages";
import { site } from "@/config/site";

const searchSchema = z.object({
  package: z.enum(["launch-page", "roofing-booking-page-system", "growth-site"]).optional().catch(undefined),
});

const title = "Start a Project — Let's Build Something That Works | MORLEX";
const description =
  "Tell MORLEX about your business and the package you're considering. The conversation continues on WhatsApp with your details already written out.";

export const Route = createFileRoute("/start")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/start` }],
  }),
  component: StartPage,
});

function StartPage() {
  const search = Route.useSearch();
  const selected = findPackage(search.package);

  return (
    <section className="pb-20 pt-[112px] md:pb-28 md:pt-[168px]">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="eyebrow flex items-center gap-3 text-slate">
                <span aria-hidden="true" className="hidden h-px w-8 bg-gold sm:block" />
                Start a project
              </span>
              <h1 className="mt-7 text-[2.125rem] leading-[1.1] sm:text-[2.5rem] lg:text-[3.125rem]">
                Let's build something that works.
              </h1>
              <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-slate">
                Seven short fields. Nothing here is stored on the website — pressing continue opens
                WhatsApp with everything written out so we can start straight away.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10 border-l-2 border-gold bg-secondary/60 p-6">
              <span className="eyebrow text-slate">Selected package</span>
              <p className="mt-3 font-display text-xl text-ink">
                {selected ? selected.name : "Not selected yet"}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
                {selected
                  ? `${selected.price} · ${selected.support}. You can change this in the form below.`
                  : "Pick one in the form below, or leave it open and MORLEX will advise."}
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-8 flex flex-col gap-2 text-[0.9375rem]">
              <a href={`mailto:${site.email}`} className="text-slate transition-colors hover:text-ink">
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate transition-colors hover:text-ink"
              >
                Instagram
              </a>
            </Reveal>
          </div>

          <div>
            <PackageInquiryForm initialPackage={search.package as PackageSlug | undefined} />
          </div>
        </div>
      </div>
    </section>
  );
}
