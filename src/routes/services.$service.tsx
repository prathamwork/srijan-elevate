import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, projects, processStages } from "@/lib/site-data";
import { PageHero, SectionLabel, DiscussCTA } from "@/components/site/primitives";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const s = services.find((x) => x.key === params.service);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Srijan Consultant and Engineers` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} — Srijan` },
          { property: "og:image", content: loaderData.image },
          { property: "og:url", content: `/services/${loaderData.key}` },
        ]
      : [{ title: "Service — Srijan" }, { name: "robots", content: "noindex" }],
    links: loaderData
      ? [{ rel: "canonical", href: `/services/${loaderData.key}` }]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <p className="label-eyebrow">Service not found</p>
      <Link to="/services" className="link-underline mt-4 inline-block">
        Back to Services
      </Link>
    </div>
  ),
});

function ServiceDetail() {
  const s = Route.useLoaderData();
  const related = projects.filter(
    (p) =>
      p.category.toLowerCase().includes(s.title.split(" ")[0].toLowerCase()) ||
      p.scope.toLowerCase().includes(s.title.split(" ")[0].toLowerCase()),
  );

  return (
    <>
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden bg-ink text-bone">
        <img
          src={s.image}
          alt={s.title}
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-[100rem] flex-col justify-end px-5 pb-14 md:px-10 md:pb-20">
          <div className="label-eyebrow text-bone/60">
            / Services · {s.index}
          </div>
          <h1 className="display-serif fluid-display mt-6 max-w-5xl">{s.title}</h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70">{s.lede}</p>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionLabel n="01">Overview</SectionLabel>
          </div>
          <div className="md:col-span-7">
            <p className="display-serif text-3xl md:text-4xl">{s.description}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionLabel n="02">Scope of work</SectionLabel>
            <h2 className="display-serif mt-8 text-4xl md:text-5xl">
              What&apos;s included.
            </h2>
          </div>
          <ul className="md:col-span-7">
            {s.scope.map((sc, i) => (
              <li
                key={sc}
                className="flex items-baseline justify-between border-t border-line py-5 text-lg last:border-b"
              >
                <span className="label-eyebrow text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 pl-8">{sc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-muted/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionLabel n="03">Deliverables</SectionLabel>
            <h2 className="display-serif mt-8 text-4xl md:text-5xl">
              What you receive.
            </h2>
          </div>
          <ul className="md:col-span-7 grid gap-0">
            {s.deliverables.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline justify-between border-t border-line py-5 text-lg last:border-b"
              >
                <span className="label-eyebrow text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 pl-8">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <SectionLabel n="04">Process</SectionLabel>
          <h2 className="display-serif fluid-h2 mt-8">How a {s.title.toLowerCase()} project unfolds.</h2>
          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {processStages.slice(0, 6).map((p) => (
              <div key={p.n} className="border-t border-line py-6">
                <span className="display-serif text-3xl text-line">{p.n}</span>
                <div className="mt-4 text-lg">{p.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-b border-line py-24 md:py-32">
          <div className="mx-auto max-w-[100rem] px-5 md:px-10">
            <SectionLabel n="05">Related projects</SectionLabel>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {related.slice(0, 3).map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}` as string} className="group">
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
                  <div className="mt-4 label-eyebrow">
                    {p.category} · {p.location}
                  </div>
                  <div className="display-serif mt-2 text-2xl">{p.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <DiscussCTA />
    </>
  );
}
