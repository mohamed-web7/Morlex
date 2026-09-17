import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Approach } from "@/components/sections/Approach";
import { CampaignCta } from "@/components/sections/CampaignCta";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/config/site";
import servicesImage from "@/assets/images/services/morlex-services.jpg";

const title = "Services — Conversion Landing Pages, Websites & Audits | MORLEX";
const description =
  "Conversion landing pages, conversion-focused websites, conversion audits and optional Conversion Care for U.S. service businesses.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="From attention to action."
        intro="Messaging, structure, design and build handled together — because a page only converts when all four agree."
        image={servicesImage}
        imageAlt="Warm plaster planes meeting a thin dark metal edge in raking natural light"
      />
      <ServicesSection detailed withHeading={false} />
      <Approach eyebrow="Approach" />
      <CampaignCta eyebrow="Conversion audit" />

      <FinalCta />
    </>
  );
}
