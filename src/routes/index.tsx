import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Approach } from "@/components/sections/Approach";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { WhyMorlex } from "@/components/sections/WhyMorlex";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/config/site";

const title = "MORLEX — Conversion-Focused Websites for Service Businesses";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: site.description },
      { property: "og:title", content: title },
      { property: "og:description", content: site.description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: site.description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <ServicesSection />
      <PackagesSection />
      <WorkSection />
      <WhyMorlex />
      <FaqSection />
      <FinalCta />
    </>
  );
}
