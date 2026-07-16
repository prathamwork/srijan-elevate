import { createFileRoute } from "@tanstack/react-router";
import { insights } from "@/lib/site-data";
import { PageHero } from "@/components/site/primitives";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Srijan Consultant and Engineers" },
      {
        name: "description",
        content:
          "Notes on architecture, engineering, interiors, infrastructure and turnkey execution.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Insights"
        title="Notes from the practice."
        lede="Short reads on how we think about buildings, sites and clients."
        crumbs={[{ to: "/", label: "Home" }, { to: "/insights", label: "Insights" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <ul>
            {insights.map((a, i) => (
              <li key={a.slug}>
                <a
                  href="#"
                  className="group grid grid-cols-12 items-baseline gap-6 border-t border-line py-8 transition-colors hover:bg-muted/40 last:border-b md:py-12"
                >
                  <span className="label-eyebrow col-span-1 text-line">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <div className="label-eyebrow">
                      {a.category} · {a.date}
                    </div>
                    <h3 className="display-serif mt-3 text-2xl md:text-4xl transition-colors group-hover:text-bronze">
                      {a.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                      {a.excerpt}
                    </p>
                  </div>
                  <span className="col-span-1 text-right text-2xl transition-transform group-hover:translate-x-1 md:col-span-4">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
