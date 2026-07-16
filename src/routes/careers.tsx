import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DiscussCTA, SectionLabel } from "@/components/site/primitives";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Srijan Consultant and Engineers" },
      {
        name: "description",
        content:
          "Join Srijan — an integrated consultancy for architecture, structural engineering, interior design, infrastructure and turnkey execution.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Careers"
        title="Work at the intersection of design and delivery."
        lede="We hire architects, engineers, designers and project managers who want to see their drawings built."
        crumbs={[{ to: "/", label: "Home" }, { to: "/careers", label: "Careers" }]}
      />

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionLabel n="01">Culture</SectionLabel>
            <h2 className="display-serif mt-8 text-4xl md:text-5xl">
              A small, senior team.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground">
            <p>
              We work in flat, senior teams that stay with a project from brief
              to handover. That means less handoff, more responsibility, and a
              close view of how buildings actually get built.
            </p>
            <p>
              Most of our staff are architects and engineers who chose this
              practice because they wanted to remain hands-on across a project&apos;s
              whole life.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <SectionLabel n="02">Open roles</SectionLabel>
          <h2 className="display-serif fluid-h2 mt-8">Current openings.</h2>

          <div className="mt-14 border-t border-line py-16 text-center">
            <p className="label-eyebrow">No current openings</p>
            <p className="display-serif mt-6 text-3xl md:text-4xl">
              We don&apos;t have live vacancies right now.
            </p>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              We still welcome spontaneous applications from strong
              architects, engineers and interior designers.
            </p>
            <a
              href="mailto:careers@srijan.example"
              className="mt-8 inline-flex items-center gap-3 border border-ink px-6 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-ink hover:text-bone"
            >
              Send a spontaneous application →
            </a>
          </div>
        </div>
      </section>

      <DiscussCTA />
    </>
  );
}
