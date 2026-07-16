import { createFileRoute } from "@tanstack/react-router";
import { processStages } from "@/lib/site-data";
import { PageHero, DiscussCTA } from "@/components/site/primitives";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Srijan Consultant and Engineers" },
      {
        name: "description",
        content:
          "Our nine-stage design-to-delivery process — from first site visit to post-completion support.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const stageDetail: Record<string, string[]> = {
  "01": ["Initial consultation", "Understanding constraints", "Preliminary brief"],
  "02": ["Site studies", "Regulatory review", "Cost benchmarking"],
  "03": ["Design intent options", "Massing & planning tests", "Client review"],
  "04": ["Design development", "Interior coordination", "Detail resolution"],
  "05": ["Structural analysis", "MEP coordination", "Constructability review"],
  "06": ["Budget planning", "Schedule", "Procurement plan"],
  "07": ["Site management", "Vendor coordination", "Progress reporting"],
  "08": ["Quality inspection", "Snagging", "Testing & commissioning"],
  "09": ["Handover documentation", "As-built drawings", "Post-completion support"],
};

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Process"
        title="Nine stages, one team, on every project."
        lede="A single principal leads each project from brief to handover. The stages below define what happens between."
        crumbs={[{ to: "/", label: "Home" }, { to: "/process", label: "Process" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          {processStages.map((s, i) => (
            <div
              key={s.n}
              className="grid grid-cols-12 gap-4 border-t border-line py-10 md:gap-8 md:py-16 last:border-b"
            >
              <div className="col-span-12 md:col-span-3">
                <div className="display-serif text-6xl text-line md:text-7xl">
                  {s.n}
                </div>
                <div className="label-eyebrow mt-4">
                  {i < 3 ? "Discovery" : i < 6 ? "Design" : "Delivery"}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="display-serif text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-4 text-muted-foreground">{s.note}</p>
              </div>
              <ul className="col-span-12 space-y-2 md:col-span-4">
                {(stageDetail[s.n] ?? []).map((d) => (
                  <li key={d} className="border-t border-line py-3 text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <DiscussCTA />
    </>
  );
}
