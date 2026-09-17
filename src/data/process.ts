import {
  Eye,
  Compass,
  ShieldCheck,
  MousePointerClick,
  Search,
  Stethoscope,
  PenLine,
  PaintRoller,
  Code2,
  TestTube2,
  Rocket,
  TrendingUp,
  Target,
  Smartphone,
  FileText,
  Scale,
  Gauge,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

export const process: { index: string; name: string; detail: string; icon: LucideIcon }[] = [
  {
    index: "01",
    name: "Discover",
    detail: "Business, audience, service, market and current website.",
    icon: Search,
  },
  {
    index: "02",
    name: "Diagnose",
    detail: "Identify real conversion friction — not invented problems.",
    icon: Stethoscope,
  },
  {
    index: "03",
    name: "Strategize",
    detail: "Define messaging, offer, CTA and page structure.",
    icon: PenLine,
  },
  {
    index: "04",
    name: "Design",
    detail: "Build the visual interface on the approved structure.",
    icon: PaintRoller,
  },
  { index: "05", name: "Develop", detail: "Build the production website, mobile first.", icon: Code2 },
  {
    index: "06",
    name: "Test",
    detail: "Mobile, desktop, forms, links, performance, interactions.",
    icon: TestTube2,
  },
  {
    index: "07",
    name: "Launch",
    detail: "Deploy the final experience with tracking in place.",
    icon: Rocket,
  },
  {
    index: "08",
    name: "Improve",
    detail: "Post-launch improvements where they are included.",
    icon: TrendingUp,
  },
];

export const approach: { index: string; name: string; detail: string; icon: LucideIcon }[] = [
  {
    index: "01",
    name: "Attention",
    detail: "The visitor arrives with a problem and very little patience.",
    icon: Eye,
  },
  {
    index: "02",
    name: "Clarity",
    detail: "One service, one promise, one next action — understood in seconds.",
    icon: Compass,
  },
  {
    index: "03",
    name: "Trust",
    detail: "Licensing, warranty, real projects and reviews, shown where doubt appears.",
    icon: ShieldCheck,
  },
  {
    index: "04",
    name: "Action",
    detail: "Call, request an estimate or send an inquiry — without friction.",
    icon: MousePointerClick,
  },
];

export const whyMorlex: { title: string; detail: string; icon: LucideIcon }[] = [
  {
    title: "Conversion first, decoration second",
    detail: "Every layout decision answers one question: does this make the next action clearer?",
    icon: Target,
  },
  {
    title: "Mobile treated as the real experience",
    detail: "The mobile version is designed on its own terms, not shrunk from desktop.",
    icon: Smartphone,
  },
  {
    title: "Transparent scope and pricing",
    detail: "Inclusions, exclusions, revisions and support — written down before the project starts.",
    icon: FileText,
  },
  {
    title: "Honest positioning",
    detail: "MORLEX controls the website experience. No guaranteed leads, bookings or revenue.",
    icon: Scale,
  },
  {
    title: "Technical quality as a standard",
    detail: "Fast loading, semantic markup, accessible forms, clean tracking. Not an upsell.",
    icon: Gauge,
  },
  {
    title: "Built to be handed over",
    detail: "A handoff report and short video so you know what you have and how to use it.",
    icon: PackageCheck,
  },
];
