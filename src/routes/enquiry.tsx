import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/primitives";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Project Enquiry — Srijan Consultant and Engineers" },
      {
        name: "description",
        content:
          "Tell us about your project. Our team will come back within two working days.",
      },
      { property: "og:url", content: "/enquiry" },
    ],
    links: [{ rel: "canonical", href: "/enquiry" }],
  }),
  component: EnquiryPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional(),
  location: z.string().trim().max(120).optional(),
  category: z.string().min(1),
  service: z.string().min(1),
  budget: z.string().optional(),
  status: z.string().optional(),
  message: z.string().trim().min(1).max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue." }) }),
});

function EnquiryPage() {
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      company: fd.get("company") || undefined,
      location: fd.get("location") || undefined,
      category: fd.get("category"),
      service: fd.get("service"),
      budget: fd.get("budget") || undefined,
      status: fd.get("status") || undefined,
      message: fd.get("message"),
      consent: fd.get("consent") === "on" ? true : false,
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      setState("error");
      return;
    }
    setErrors({});
    setState("sent");
    // Backend submission will be wired to Lovable Cloud in a follow-up.
  };

  return (
    <>
      <PageHero
        eyebrow="/ Enquiry"
        title="Tell us about your project."
        lede="Fill in what you can. Any field marked optional can be left blank — we&apos;ll ask what we need when we come back to you."
        crumbs={[{ to: "/", label: "Home" }, { to: "/enquiry", label: "Enquiry" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          {state === "sent" ? (
            <div className="border border-line p-12 text-center">
              <div className="label-eyebrow">Thank you</div>
              <p className="display-serif mt-6 text-3xl">
                Your enquiry has been received.
              </p>
              <p className="mt-4 text-muted-foreground">
                We&apos;ll be in touch within two working days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full name *" name="name" error={errors.name} />
                <Field label="Phone number *" name="phone" error={errors.phone} type="tel" />
                <Field label="Email *" name="email" type="email" error={errors.email} />
                <Field label="Company (optional)" name="company" />
                <Field label="Project location (optional)" name="location" />
                <Select
                  label="Project category *"
                  name="category"
                  options={[
                    "Residential",
                    "Commercial",
                    "Industrial",
                    "Institutional",
                    "Hospitality",
                    "Infrastructure",
                    "Other",
                  ]}
                  error={errors.category}
                />
                <Select
                  label="Primary service *"
                  name="service"
                  options={services.map((s) => s.title)}
                  error={errors.service}
                />
                <Select
                  label="Budget range (optional)"
                  name="budget"
                  options={["< 25 L", "25 – 75 L", "75 L – 2 Cr", "2 – 10 Cr", "10 Cr +"]}
                />
                <Select
                  label="Project status (optional)"
                  name="status"
                  options={["Concept", "Design", "Approvals", "Construction", "Not started"]}
                />
              </div>

              <div>
                <label className="label-eyebrow">Message *</label>
                <textarea
                  name="message"
                  rows={6}
                  className="mt-3 w-full border border-line bg-transparent px-4 py-3 text-base focus:border-ink focus:outline-none focus:ring-1 focus:ring-bronze"
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" name="consent" className="mt-1" />
                <span>
                  I agree to Srijan contacting me about my enquiry. See the{" "}
                  <a href="/privacy" className="link-underline text-ink">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-destructive">{errors.consent}</p>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-3 border border-ink bg-ink px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-bone transition hover:bg-bronze hover:border-bronze"
              >
                Send enquiry →
              </button>
              <p className="text-xs text-muted-foreground">
                Enquiry submission storage & email notification will be wired to
                Lovable Cloud in the next build phase.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="label-eyebrow">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-3 w-full border-b border-line bg-transparent py-3 text-base focus:border-ink focus:outline-none"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label className="label-eyebrow">{label}</label>
      <select
        name={name}
        className="mt-3 w-full border-b border-line bg-transparent py-3 text-base focus:border-ink focus:outline-none"
        defaultValue=""
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
