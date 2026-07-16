import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionLabel } from "@/components/site/primitives";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Srijan Consultant and Engineers" },
      {
        name: "description",
        content:
          "Get in touch with Srijan — office address, phone, WhatsApp and enquiry form.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Contact"
        title="Visit, call, or start a project online."
        crumbs={[{ to: "/", label: "Home" }, { to: "/contact", label: "Contact" }]}
      />

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionLabel n="01">Office</SectionLabel>
            <ul className="mt-10 space-y-6">
              {[
                ["Address", company.address],
                ["Phone", company.phone],
                ["WhatsApp", company.whatsapp],
                ["Email", company.email],
                ["Hours", company.hours],
              ].map(([k, v]) => (
                <li key={k as string} className="border-t border-line pt-4">
                  <div className="label-eyebrow">{k}</div>
                  <div className="mt-2 text-lg">{v}</div>
                </li>
              ))}
            </ul>
            <Link
              to="/enquiry"
              className="mt-10 inline-flex items-center gap-3 border border-ink px-6 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-ink hover:text-bone"
            >
              Start a project →
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-muted to-secondary text-center">
                <div>
                  <div className="label-eyebrow">Map</div>
                  <p className="mt-4 text-muted-foreground">
                    Google Map embed — enable once office address is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
