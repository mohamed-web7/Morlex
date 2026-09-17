import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/packages/PackageCard";
import { ConversionCareBlock } from "@/components/packages/ConversionCareBlock";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

export function PackagesSection({
  detailed = false,
  withHeading = true,
  eyebrow = "05 — Packages",
}: {
  detailed?: boolean;
  withHeading?: boolean;
  eyebrow?: string;
}) {
  return (
    <section className="surface-white section-y relative overflow-hidden">
      <div
        aria-hidden="true"
        className="ambient-gold pointer-events-none absolute left-1/2 top-24 h-[32rem] w-[42rem] -translate-x-1/2 rounded-full"
      />
      <div className="container-page relative">
        {withHeading ? (
          <SectionHeading
            eyebrow={eyebrow}
            title="Three packages. One optional service."
            intro="Fixed scope, written down before the work starts. Payment is 50% at project start and 50% before launch."
          />
        ) : null}

        <div
          className={cn(
            "grid gap-5 md:grid-cols-2 md:items-start md:gap-6 lg:grid-cols-3 lg:items-start",
            withHeading && "mt-10 md:mt-12",
          )}
        >
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} detailed={detailed} delay={i * 80} />
          ))}
        </div>

        <ConversionCareBlock />
      </div>
    </section>
  );
}
