import { Compass, Layers, Search, LifeBuoy, type LucideIcon } from "lucide-react";

export type Service = {
  index: string;
  name: string;
  purpose: string;
  detail: string;
  points: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    index: "01",
    name: "Conversion Landing Pages",
    purpose: "One page, one service, one decision.",
    detail:
      "A single page built for one service in one area, matched to where the traffic comes from. The offer, the phone number and the estimate request stay within reach at every scroll position.",
    points: [
      "Message matched to the traffic source",
      "Click-to-call above the fold on mobile",
      "Short estimate form with real validation",
    ],
    icon: Compass,
  },
  {
    index: "02",
    name: "Conversion-Focused Websites",
    purpose: "A structure that holds more than one service.",
    detail:
      "For businesses that need several services or areas covered without losing the path to the inquiry. Navigation, page structure and internal linking are designed around how customers actually choose a contractor.",
    points: [
      "Service and area page architecture",
      "One conversion pattern across pages",
      "Room to expand without a rebuild",
    ],
    icon: Layers,
  },
  {
    index: "03",
    name: "Conversion Audits",
    purpose: "Find the friction before spending on design.",
    detail:
      "A structured review of the current site: speed, mobile experience, offer clarity, phone visibility, form quality, reviews, project photos, trust elements and CTA clarity.",
    points: [
      "Speed and mobile UX review",
      "Offer, CTA and phone visibility review",
      "Written findings, ordered by impact",
    ],
    icon: Search,
  },
  {
    index: "04",
    name: "Conversion Care",
    purpose: "Maintained, monitored, improving after launch.",
    detail:
      "An optional monthly service. Hosting oversight, backups, technical updates, small content changes, form and call checks, tracking monitoring and one CTA improvement each month.",
    points: [
      "Backups and technical updates",
      "Form, call and tracking checks",
      "One CTA improvement per month",
    ],
    icon: LifeBuoy,
  },
];
