import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/lib/site-data";
import { PageHero } from "@/components/site/primitives";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Architecture",
  "Structural",
  "Interior",
  "Infrastructure",
  "Turnkey",
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Srijan Consultant and Engineers" },
      {
        name: "description",
        content:
          "A selection of completed and ongoing projects across architecture, structural engineering, interiors, infrastructure and turnkey execution.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="/ Projects"
        title="Selected work across five disciplines."
        lede="Filter by discipline, or scroll the full archive. Every project shown was delivered by the same team you would work with."
        crumbs={[{ to: "/", label: "Home" }, { to: "/projects", label: "Projects" }]}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6 py-6">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition ${
                    active === f
                      ? "border-ink bg-ink text-bone"
                      : "border-line hover:border-ink"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span>{filtered.length} projects</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setView("grid")}
                  className={`border px-3 py-2 ${view === "grid" ? "border-ink text-ink" : "border-line"}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`border px-3 py-2 ${view === "list" ? "border-ink text-ink" : "border-line"}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="label-eyebrow">No matching projects</p>
              <p className="display-serif mt-6 text-3xl">Try another filter.</p>
            </div>
          )}

          {view === "grid" ? (
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}` as string}
                  className="group"
                >
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1600}
                      height={1100}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <div>
                      <div className="label-eyebrow">
                        {String(i + 1).padStart(2, "0")} — {p.category}
                      </div>
                      <div className="display-serif mt-2 text-2xl">{p.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {p.location} · {p.year}
                      </div>
                    </div>
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <ul>
              {filtered.map((p, i) => (
                <li key={p.slug}>
                  <Link
                    to={`/projects/${p.slug}` as string}
                    className="group grid grid-cols-12 items-baseline gap-6 border-t border-line py-6 transition-colors hover:bg-muted/40 last:border-b"
                  >
                    <span className="label-eyebrow col-span-1 text-line">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display-serif col-span-5 text-2xl">{p.title}</span>
                    <span className="col-span-2 text-sm text-muted-foreground">{p.category}</span>
                    <span className="col-span-2 text-sm text-muted-foreground">{p.location}</span>
                    <span className="col-span-1 text-sm text-muted-foreground">{p.year}</span>
                    <span className="col-span-1 text-right text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
