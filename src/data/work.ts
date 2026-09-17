import conceptRoofBooking from "@/assets/images/work/concept-roof-replacement-booking.jpg";
import conceptStormLanding from "@/assets/images/work/concept-storm-landing.jpg";
import conceptStructure from "@/assets/images/work/concept-multi-service-structure.jpg";

export type WorkItem = {
  index: string;
  title: string;
  type: string;
  label: "Concept / Demo";
  focus: string[];
  detail: string;
  image: string;
  alt: string;
};

/**
 * Demonstration work only. No client names, no results, no metrics.
 * Real case studies can be added to this array without touching components.
 */
export const work: WorkItem[] = [
  {
    index: "01",
    title: "Roof replacement booking page",
    type: "Roofing booking page system",
    label: "Concept / Demo",
    focus: ["Single service", "One metro area", "Click-to-call first"],
    detail: "One service, one area, phone and estimate request reachable at every scroll position.",
    image: conceptRoofBooking,
    alt: "Laptop, tablet and phone on a warm stone desk showing a responsive roof replacement booking page in deep navy",
  },
  {
    index: "02",
    title: "Storm damage inspection landing page",
    type: "Launch page",
    label: "Concept / Demo",
    focus: ["One offer", "Mobile-first", "Short form"],
    detail: "A single offer and a four-field estimate request built to be finished with one thumb.",
    image: conceptStormLanding,
    alt: "Laptop on a warm stone desk showing a storm damage roof inspection landing page with header and hero section",
  },
  {
    index: "03",
    title: "Multi-service contractor structure",
    type: "Growth site",
    label: "Concept / Demo",
    focus: ["Service architecture", "Area page", "Scalable"],
    detail: "A homepage that routes to the right service, with one area page ready to duplicate.",
    image: conceptStructure,
    alt: "Laptop, tablet and phone on a dark walnut desk showing a responsive multi-service contractor site with brass gold accents",
  },
];
