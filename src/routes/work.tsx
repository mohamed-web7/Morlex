import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { WorkSection } from "@/components/sections/WorkSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/config/site";

const title = "Selected Work — Concept Builds | MORLEX";
const description =
  "Demonstration builds showing how MORLEX structures conversion-focused pages for service businesses. Clearly labelled concepts — no client names, no invented results.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/work` }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Concept builds, labelled as concepts."
        intro="MORLEX is a young studio. Rather than dress up demonstration work as client results, every item here is marked Concept / Demo."
      />
      <WorkSection withHeading={false} />
      <FinalCta />
    </>
  );
}
