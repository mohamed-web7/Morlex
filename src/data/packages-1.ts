import {
  Compass,
  Hammer,
  Target,
  Gauge,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type PackageSlug = "launch-page" | "roofing-booking-page-system" | "growth-site";

export type FeatureGroup = { label: string; items: string[] };

const groupIcons: Record<string, LucideIcon> = {
  Scope: Compass,
  Strategy: Compass,
  Build: Hammer,
  Conversion: Target,
  Technical: Gauge,
  Support: LifeBuoy,
};

export function groupIcon(label: string): LucideIcon {
  return groupIcons[label] ?? Target;
}


export type MorlexPackage = {
  slug: PackageSlug;
  index: string;
  name: string;
  /** One-line positioning shown under the name. */
  who: string;
  summary: string;
  /** Current price — displayed large and dominant. */
  price: string;
  /** Standard / future price — displayed small, muted and struck through. */
  standardPrice?: string;
  /** Small refined badge, e.g. "Early client rate". */
  badge?: string;
  emphasis?: boolean;
  /** Features grouped into categories for a structured, scannable card. */
  groups: FeatureGroup[];
  excludes?: string[];
  support: string;
  revisions: string;
  ctaLabel: string;
};

export const packages: MorlexPackage[] = [
  {
    slug: "launch-page",
    index: "01",
    name: "Launch Page",
    who: "One professional page, not a full system.",
    summary:
      "A focused landing page for one service in one area, built mobile-first around a single clear next action.",
    price: "$699",
    standardPrice: "$1,250",
    badge: "Early client rate",
    groups: [
      {
        label: "Scope",
        items: ["One landing page", "One service, one area", "Mobile-first design"],
      },
      {
        label: "Conversion",
        items: ["Direct call CTA", "Estimate request form", "Reviews section", "Project images"],
      },
      { label: "Technical", items: ["Basic speed optimization", "Pre-launch testing"] },
      { label: "Support", items: ["Two revision rounds", "7 days support"] },
    ],
    excludes: [
      "Full copywriting",
      "Marketing strategy",
      "Multiple city pages",
      "Ad management",
      "CRM implementation",
      "Monthly SEO",
      "Unlimited edits",
    ],
    support: "7 days support",
    revisions: "Two revision rounds",
    ctaLabel: "Choose Launch Page",
  },
  {
    slug: "roofing-booking-page-system",
    index: "02",
    name: "Roofing Booking Page System",
    who: "A booking system for one roofing service, one market.",
    summary:
      "Audit, messaging, wireframe, copy, design and build — a focused booking system rather than a new page.",
    price: "$1,297",
    standardPrice: "$2,000",
    badge: "Early client rate — first 3 clients",
    emphasis: true,
    groups: [
      {
        label: "Strategy",
        items: ["Conversion audit", "Messaging brief", "Conversion-focused wireframe", "Page copy"],
      },
      { label: "Build", items: ["Complete UI design", "Responsive production build"] },
      {
        label: "Conversion",
        items: [
          "Click-to-call and estimate form",
          "Reviews, licensing, insurance, warranty",
          "Services, areas, FAQ, thank-you page",
        ],
      },
      {
        label: "Technical",
        items: ["Speed optimization", "Form, call and analytics tracking", "Device testing"],
      },
      {
        label: "Support",
        items: [
          "Two revision rounds",
          "30 days support",
          "Handoff report and video",
          "One post-launch improvement",
        ],
      },
    ],
    support: "30 days support",
    revisions: "Two revision rounds",
    ctaLabel: "Choose Booking System",
  },
  {
    slug: "growth-site",
    index: "03",
    name: "Growth Site",
    who: "For multiple services or multiple areas.",
    summary:
      "A scalable conversion-focused foundation, structured so services and areas expand without a rebuild.",
    price: "$3,000",
    standardPrice: "$3,500",
    badge: "Early client rate",
    groups: [
      {
        label: "Scope",
        items: ["Homepage", "Up to 3 service pages", "One area page", "Custom copy"],
      },
      { label: "Conversion", items: ["Contact forms", "Conversion tracking"] },
      {
        label: "Technical",
        items: ["Full performance optimization", "Scalable structure", "Future improvement plan"],
      },
      { label: "Support", items: ["Two revision rounds", "60 days support"] },
    ],
    support: "60 days support",
    revisions: "Two revision rounds",
    ctaLabel: "Choose Growth Site",
  },
];

export const conversionCare = {
  name: "Conversion Care",
  optional: true,
  price: "$149 / month",
  priceNote: "Optional ongoing service. Cancel any time.",
  positioning: "Keep your website maintained, monitored and improving after launch.",
  includes: [
    "Hosting oversight",
    "Backups",
    "Technical updates",
    "Small copy changes",
    "Small image changes",
    "Form checks",
    "Call checks",
    "Tracking monitoring",
    "One CTA improvement per month",
    "Simple monthly report",
  ],
  excludes: [
    "Full new pages",
    "Google Ads management",
    "Full SEO",
    "Weekly articles",
    "Unlimited edits",
    "Advanced CRM work without additional fees",
  ],
} as const;

export const packageOptions = packages.map((p) => ({ value: p.slug, label: p.name }));

export function findPackage(slug?: string | null) {
  return packages.find((p) => p.slug === slug);
}

export function packageLabel(slug?: string | null) {
  return findPackage(slug)?.name ?? "Not selected yet";
}
