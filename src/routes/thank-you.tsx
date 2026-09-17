import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ButtonAnchor, ButtonLink } from "@/components/ui/actions";
import { WHATSAPP_STORAGE_KEY } from "@/components/packages/PackageInquiryForm";
import { site } from "@/config/site";

const title = "You're All Set — MORLEX";
const description = "Your details are ready. WhatsApp is opening so the conversation can continue.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/thank-you` }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(WHATSAPP_STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (!stored) return;
    setLink(stored);

    const timer = window.setTimeout(() => {
      window.location.href = stored as string;
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="flex min-h-[80vh] items-center bg-ink pb-20 pt-[112px] md:pt-[140px]">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3 text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
            Inquiry ready
          </span>
          <h1 className="mt-7 text-[2rem] leading-[1.12] text-ivory sm:text-[2.5rem] lg:text-[3.125rem]">
            {link ? "You're all set. Opening WhatsApp…" : "You're all set."}
          </h1>
          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-cool/85">
            {link
              ? "Your details are already written into the message. If WhatsApp doesn't open on its own, use the button below."
              : "If WhatsApp didn't open, send your details directly and MORLEX will reply from there."}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonAnchor
              href={link ?? `https://wa.me/${site.whatsappNumber}`}
              variant="on-ink"
              size="lg"
              className="w-full sm:w-auto"
            >
              Open WhatsApp
            </ButtonAnchor>
            <ButtonLink to="/" variant="outline-on-ink" size="lg" className="w-full sm:w-auto">
              Back to home
            </ButtonLink>
          </div>

          <p className="mt-10 text-[0.9375rem] text-cool/70">
            Prefer email?{" "}
            <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-4">
              {site.email}
            </a>
            {link ? null : (
              <>
                {" · "}
                <Link to="/start" className="text-gold underline underline-offset-4">
                  Fill in the form again
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
