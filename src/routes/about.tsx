import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { WhyMorlex } from "@/components/sections/WhyMorlex";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Target, Scale, Minimize2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import { site } from "@/config/site";
import studioImage from "@/assets/images/about/morlex-studio.jpg";

const title = "About MORLEX — A Conversion-Focused Web Studio";
const description =
  "MORLEX is a web studio focused on what happens after someone reaches your website: clarity, trust and a next action that is easy to take.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/about` }],
  }),
  component: AboutPage,
});

const principles = [
  {
    index: "01",
    icon: Target,
    title: "A website should not simply exist.",
    detail: "It should guide a visitor toward one meaningful next action.",
  },
  {
    index: "02",
    icon: Scale,
    title: "MORLEX controls the experience, not the market.",
    detail:
      "Demand and pricing are yours. The page a visitor lands on is the studio's responsibility.",
  },
  {
    index: "03",
    icon: Minimize2,
    title: "Restraint is a design decision.",
    detail: "A page that says one thing clearly outperforms a page that says six at once.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built around one question: what happens after the click?"
        intro="Conversion-focused websites and landing pages for U.S. service businesses, with a current specialization in residential roofing contractors."
        image={studioImage}
        imageAlt="Designer's desk in warm daylight with layout sketches and a laptop showing a wireframe"
      />

      <section className="surface-white section-y">
        <div className="container-page">
          <Reveal className="card-ink relative overflow-hidden p-7 md:p-12">
            <span
              aria-hidden="true"
              className="ambient-gold-dark pointer-events-none absolute -right-20 -top-24 h-[24rem] w-[24rem] rounded-full"
            />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-6">
                <span className="eyebrow flex items-center gap-3 text-gold">
                  <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
                  Positioning
                </span>
                <h2 className="heading-section mt-6 text-ivory">Not an advertising agency.</h2>
              </div>
              <p className="body-lg max-w-[44ch] text-cool/80 lg:col-span-6">
                No ad accounts, no SEO retainers, no guaranteed leads. The work is the website
                experience your traffic arrives on.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid items-start gap-4 md:mt-12 md:grid-cols-3 lg:gap-5">
            {principles.map((p, i) => (
              <Reveal
                key={p.index}
                delay={i * 80}
                className="card-on-white card-lift flex h-full flex-col p-6 md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="icon-frame">
                    <p.icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-[2rem] font-semibold leading-none text-ink/12">
                    {p.index}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[1.1875rem] font-semibold leading-snug text-ink md:text-[1.3125rem]">
                  {p.title}
                </h3>
                <p className="meta-sm mt-3 text-slate">{p.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyMorlex eyebrow="Standards" />
      <ProcessSection eyebrow="Process" />
      <FinalCta />
    </>
  );
}

