import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/actions";
import { packageOptions, packageLabel, type PackageSlug } from "@/data/packages";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a phone number we can reach you on.")
    .max(30)
    .regex(/^[0-9+()\-.\s]+$/, "Use digits, spaces and + ( ) - only."),
  company: z.string().trim().min(2, "Please enter your company name.").max(120),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .refine((v) => !v || /^([a-z]+:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(v), "Please enter a valid website address."),
  selectedPackage: z.string().max(60),
  message: z.string().trim().max(1200).optional(),
});

type FormValues = z.infer<typeof schema>;
type FieldName = keyof FormValues;

const emptyValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  selectedPackage: "",
  message: "",
};

export const WHATSAPP_STORAGE_KEY = "morlex:whatsapp-handoff";

export function PackageInquiryForm({ initialPackage }: { initialPackage?: PackageSlug | undefined }) {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    ...emptyValues,
    selectedPackage: initialPackage ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setValues((v) => (v.selectedPackage ? v : { ...v, selectedPackage: initialPackage }));
    }
  }, [initialPackage]);

  const set = (field: FieldName) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  };

  function buildMessage(data: FormValues) {
    const selected = data.selectedPackage
      ? packageLabel(data.selectedPackage)
      : "Not selected — happy to be advised";

    return [
      "Hello MORLEX,",
      "",
      "I'd like to discuss a project.",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Company: ${data.company}`,
      `Website: ${data.website?.trim() ? data.website.trim() : "—"}`,
      "",
      "Selected Package:",
      selected,
      "",
      "Message:",
      data.message?.trim() ? data.message.trim() : "—",
      "",
      "I'd like to continue the conversation about this project.",
    ].join("\n");
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = schema.safeParse(values);

    if (!result.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const firstKey = Object.keys(next)[0];
      if (firstKey) document.getElementById(firstKey)?.focus();
      return;
    }

    setSubmitting(true);
    const link = whatsappLink(buildMessage(result.data));
    try {
      sessionStorage.setItem(WHATSAPP_STORAGE_KEY, link);
    } catch {
      /* private mode — the thank-you page shows a manual fallback */
    }
    navigate({ to: "/thank-you" });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-10 md:mt-12">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="company"
          label="Company name"
          value={values.company}
          onChange={set("company")}
          error={errors.company}
          autoComplete="organization"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          inputMode="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          inputMode="tel"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          autoComplete="tel"
        />
        <Field
          id="website"
          label="Website"
          optional
          type="url"
          inputMode="url"
          placeholder="example.com"
          value={values.website ?? ""}
          onChange={set("website")}
          error={errors.website}
          autoComplete="url"
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="selectedPackage" className="eyebrow text-slate">
            Selected package
          </label>
          <select
            id="selectedPackage"
            value={values.selectedPackage}
            onChange={(e) => set("selectedPackage")(e.target.value)}
            className="min-h-[54px] w-full appearance-none rounded-[12px] border border-hairline bg-ivory px-4 font-sans text-[1rem] text-ink transition-colors focus:border-ink focus:outline-none"
          >
            <option value="">I'm not sure yet — advise me</option>
            {packageOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <p className="text-[0.8125rem] text-slate">
            Pre-filled from the package you chose. You can change it here.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow text-slate">
          Additional message <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message ?? ""}
          onChange={(e) => set("message")(e.target.value)}
          placeholder="The service and area you want to focus on, and anything already in place."
          className="rounded-[12px] w-full resize-y border border-hairline bg-ivory px-4 py-3.5 font-sans text-[1rem] leading-relaxed text-ink transition-colors focus:border-ink focus:outline-none"
        />
      </div>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "One moment…" : "Continue"}
        </Button>
        <p className="max-w-[42ch] text-[0.8125rem] leading-relaxed text-slate">
          Pressing continue opens WhatsApp with your details already written out. Nothing is stored
          on this site.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  id: FieldName;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  optional?: boolean | undefined;
  type?: string | undefined;
  inputMode?: "text" | "email" | "tel" | "url" | undefined;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  optional,
  type = "text",
  inputMode,
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-slate">
        {label}
        {optional ? <span className="normal-case tracking-normal"> (optional)</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "min-h-[54px] w-full rounded-[12px] border bg-ivory px-4 font-sans text-[1rem] text-ink transition-colors focus:outline-none",
          error ? "border-destructive focus:border-destructive" : "border-hairline focus:border-ink",
        )}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-[0.8125rem] text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
