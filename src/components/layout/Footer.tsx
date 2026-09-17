import { Link, type LinkProps } from "@tanstack/react-router";
import { site } from "@/config/site";
import { packages } from "@/data/packages";
import { LogoMark } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
          <div className="max-w-sm">
            <LogoMark tone="ivory" />
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-cool/80">
              A conversion-focused web agency building websites and landing pages for service
              businesses that want a clearer path from visitor to inquiry.
            </p>
          </div>

          <FooterCol title="Navigate">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/packages">Packages</FooterLink>
            <FooterLink to="/work">Work</FooterLink>
            <FooterLink to="/about">About</FooterLink>
          </FooterCol>

          <FooterCol title="Packages">
            {packages.map((p) => (
              <Link
                key={p.slug}
                to="/start"
                search={{ package: p.slug }}
                className="text-[0.9375rem] text-cool/80 transition-colors hover:text-gold"
              >
                {p.name}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <a
              href={`mailto:${site.email}`}
              className="text-[0.9375rem] break-words text-cool/80 transition-colors hover:text-gold"
            >
              {site.email}
            </a>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] text-cool/80 transition-colors hover:text-gold"
            >
              WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] text-cool/80 transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <Link
              to="/start"
              className="text-[0.9375rem] text-cool/80 transition-colors hover:text-gold"
            >
              Start a project
            </Link>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cool/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-cool/60">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="eyebrow text-cool/50">{site.positioning}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow text-gold">{title}</h2>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: NonNullable<LinkProps["to"]>;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-[0.9375rem] text-cool/80 transition-colors hover:text-gold"
    >
      {children}
    </Link>
  );
}
