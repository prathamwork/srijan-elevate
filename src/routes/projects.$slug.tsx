import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/site-data";
import { SectionLabel, DiscussCTA } from "@/components/site/primitives";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — ${loaderData.category} · Srijan` },
          { name: "description", content: loaderData.brief },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.brief },
          { property: "og:image", content: loaderData.image },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/projects/${loaderData.slug}` },
        ]
      : [{ title: "Project — Srijan" }, { name: "robots", content: "noindex" }],
    links: loaderData
      ? [{ rel: "canonical", href: `/projects/${loaderData.slug}` }]
      : [],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const p = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink text-bone">
        <img
          src={p.image}
          alt={p.title}
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/85" />
        <div className="relative z-10 mx-auto flex h-full max-w-[100rem] flex-col justify-between px-5 pt-32 pb-10 md:px-10 md:pt-40">
          <Link
            to="/projects"
            className="label-eyebrow inline-flex items-center gap-2 text-bone/70 hover:text-bronze"
          >
            ← All projects
          </Link>
          <div>
            <div className="label-eyebrow text-bone/60">
              {p.category} · {p.location} · {p.year}
            </div>
            <h1 className="display-serif fluid-display mt-6 max-w-5xl text-bone">
              {p.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16">
        <div className="mx-auto grid max-w-[100rem] grid-cols-2 gap-6 px-5 md:grid-cols-6 md:px-10">
          {[
            ["Location", p.location],
            ["Category", p.category],
            ["Status", p.status],
            ["Year", p.year],
            ["Area", p.area],
            ["Scope", p.scope],
          ].map(([k, v]) => (
            <div key={k as string}>
              <div className="label-eyebrow">{k}</div>
              <div className="mt-3 text-sm">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <SectionLabel n="01">The brief</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <p className="display-serif text-3xl md:text-4xl">{p.brief}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <SectionLabel n="02">Concept</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground md:text-xl">{p.concept}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            width={1600}
            height={1100}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      <section className="border-t border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <SectionLabel n="03">Outcome</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-muted-foreground md:text-xl">{p.outcome}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-muted/40">
        <div className="mx-auto grid max-w-[100rem] grid-cols-2 divide-x divide-line px-0">
          <Link
            to={`/projects/${prev.slug}` as string}
            className="group flex flex-col gap-3 px-5 py-12 md:px-10 md:py-20"
          >
            <span className="label-eyebrow">← Previous</span>
            <span className="display-serif text-2xl md:text-4xl transition-colors group-hover:text-bronze">
              {prev.title}
            </span>
          </Link>
          <Link
            to={`/projects/${next.slug}` as string}
            className="group flex flex-col items-end gap-3 px-5 py-12 md:px-10 md:py-20 text-right"
          >
            <span className="label-eyebrow">Next →</span>
            <span className="display-serif text-2xl md:text-4xl transition-colors group-hover:text-bronze">
              {next.title}
            </span>
          </Link>
        </div>
      </section>

      <DiscussCTA />
    </>
  );
}
