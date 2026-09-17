/**
 * MORLEX — single source of truth for brand + contact configuration.
 * Change values here; nothing else needs editing.
 */

export const site = {
  name: "MORLEX",
  positioning: "Conversion-Focused Web Agency",
  tagline: "Websites built to turn attention into action.",
  description:
    "MORLEX designs and develops conversion-focused websites and landing pages for service businesses that want a clearer path from visitor to inquiry.",
  url: "https://morlex.agency",
  email: "morlex.agency@gmail.com",
  /** Digits only, international format, no "+" — used to build wa.me links. */
  whatsappNumber: "213776819127",
  whatsappDisplay: "+213 776 819 127",
  instagram: "https://www.instagram.com/morlex_agency/",
} as const;

export const nav = [
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "Packages", to: "/packages" as const },
  { label: "About", to: "/about" as const },
];


export const cta = {
  primary: "Book a conversion audit",
  secondary: "View services",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
