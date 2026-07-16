import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/site-data";
import { PageHero, DiscussCTA } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Architecture, Structural, Interior, Infrastructure, Turnkey" },
      {
        name: "description",
        content:
          "Five disciplines under one team: architecture, structural engineering, interior design, infrastructure planning and turnkey project execution.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesOverview,
});

function ServicesOverview() {
  return (
    <>
      <PageHero
        eyebrow="/ Services"
        title="Five disciplines. One accountable team."
        lede="Every service is delivered by the same practice — with shared drawings, shared meetings and shared responsibility."
        crumbs={[{ to: "/", label: "Home" }, { to: "/services", label: "Services" }]}
      />

      {services.map((s, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={s.key}
            className={`relative border-b border-line py-24 md:py-40 ${
              dark ? "bg-ink text-bone" : ""
            }`}
          >
            <div className="mx-auto grid max-w-[100rem] gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
              <div className={`md:col-span-5 ${dark ? "" : ""}`}>
                <div className="display-serif text-[7rem] leading-none opacity-20 md:text-[10rem]">
                  {s.index}
                </div>
                <h2 className="display-serif fluid-h1 mt-8">{s.title}</h2>
                <p className="mt-8 max-w-md text-lg opacity-70">{s.lede}</p>
                <Link
                  to={`/services/${s.key}` as string}
                  className="mt-12 inline-flex items-center gap-3 border border-current px-6 py-4 text-[12px] uppercase tracking-[0.2em] transition hover:bg-current hover:text-background"
                >
                  Explore {s.title} →
                </Link>
              </div>
              <div className="md:col-span-7">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1600}
                  height={1100}
                  className="aspect-[4/3] w-full object-cover"
                />
                <ul className="mt-8 grid gap-0 md:grid-cols-2">
                  {s.scope.slice(0, 6).map((sc, ii) => (
                    <li
                      key={sc}
                      className="flex items-baseline justify-between border-t border-current/20 py-3 text-sm"
                    >
                      <span className="label-eyebrow opacity-50">
                        {String(ii + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 pl-6">{sc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <DiscussCTA />
    </>
  );
}
