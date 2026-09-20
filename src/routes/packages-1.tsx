import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/config/site";

const title = "Packages & Pricing — Launch Page, Booking System, Growth Site | MORLEX";
const description =
  "Three project packages with clear scope and pricing: Launch Page, Roofing Booking Page System and Growth Site, plus optional Conversion Care.";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/packages` }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Packages"
        title="Clear scope, written down before the work starts."
        intro="Every package below states its price, what is included, what is not, how many revision rounds you get and how long support lasts. Payment is 50% at project start and 50% before launch."
      />
      <PackagesSection detailed withHeading={false} />
      <FaqSection eyebrow="Questions" />
      <FinalCta />
    </>
  );
}
