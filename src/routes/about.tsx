import { createFileRoute } from "@tanstack/react-router";
import aboutVisual from "@/assets/about-visual.jpg";
import { PageHero, DiscussCTA, SectionLabel } from "@/components/site/primitives";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Srijan Consultant and Engineers" },
      {
        name: "description",
        content:
          "Srijan is an integrated consultancy for architecture, structural engineering, interiors, infrastructure and turnkey execution.",
      },
      { property: "og:title", content: "About Srijan" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Draw it well", d: "Buildings are only as clear as the drawings they were built from." },
  { n: "02", t: "Stay in the room", d: "Design, structural and site teams work together — not in relay." },
  { n: "03", t: "Own the outcome", d: "We take responsibility for how the building performs, not just how it looks." },
  { n: "04", t: "Restrain the palette", d: "Fewer, better materials — chosen for how they weather and age." },
  { n: "05", t: "Detail the joint", d: "The junctions of a building are where its intelligence lives." },
  { n: "06", t: "Respect the site", d: "Every project starts from what is already there." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="/ About"
        title="An integrated design and engineering practice."
        lede="We work across architecture, structural engineering, interiors, infrastructure and turnkey execution — as a single team, on a single timeline."
        crumbs={[{ to: "/", label: "Home" }, { to: "/about", label: "About" }]}
      />

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <SectionLabel n="01">Overview</SectionLabel>
            <h2 className="display-serif fluid-h2 mt-8">
              Established in [Editable year] by [Founder name], the practice has
              grown into a multidisciplinary consultancy serving residential,
              commercial, institutional and infrastructure clients.
            </h2>
            <div className="mt-10 space-y-6 text-lg text-muted-foreground">
              <p>
                We work at the seam between design and engineering — where most
                buildings quietly fail or quietly succeed. Our teams share plans,
                calculations and site reports on the same day they&apos;re made.
              </p>
              <p>
                Every project is led by a single principal, supported by a
                bench of architects, structural engineers, interior designers,
                infrastructure specialists and construction managers.
              </p>
            </div>
          </div>
          <aside className="md:col-span-5">
            <div className="sticky top-32">
              <img
                src={aboutVisual}
                alt="Site plan on concrete"
                loading="lazy"
                width={1400}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="label-eyebrow mt-4">Site plan · [Editable project]</div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-line bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          <SectionLabel n="02">Values</SectionLabel>
          <h2 className="display-serif fluid-h1 mt-8 max-w-3xl">
            Six principles we work by.
          </h2>
          <div className="mt-16 grid gap-0 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.n}
                className="border-t border-bone/15 py-8 pr-6 md:border-r"
              >
                <div className="label-eyebrow text-bone/40">{v.n}</div>
                <h3 className="display-serif mt-6 text-3xl">{v.t}</h3>
                <p className="mt-4 max-w-sm text-sm text-bone/60">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <SectionLabel n="03">Leadership</SectionLabel>
            <h2 className="display-serif mt-8 text-4xl md:text-5xl">The team.</h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Full leadership and team profiles will be published once verified
              headshots and biographies are supplied.
            </p>
          </div>
          <div className="grid gap-10 md:col-span-8 md:grid-cols-3">
            {["Founder & Principal Architect", "Head of Structural Engineering", "Head of Interior Design"].map(
              (role, i) => (
                <div key={i} className="border-t border-line pt-6">
                  <div className="aspect-[3/4] w-full bg-muted" aria-hidden />
                  <div className="mt-4 display-serif text-2xl">[Team Member]</div>
                  <div className="label-eyebrow mt-2">{role}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto grid max-w-[100rem] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <SectionLabel n="04">Reach</SectionLabel>
            <h2 className="display-serif mt-8 text-4xl md:text-5xl">Where we work.</h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Based at {company.address}, working with clients across [Editable
              service areas].
            </p>
          </div>
          <ul className="grid gap-0 md:col-span-6 md:grid-cols-2">
            {["[City 1]", "[City 2]", "[City 3]", "[City 4]", "[City 5]", "[City 6]"].map(
              (c, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between border-t border-line py-4 text-sm"
                >
                  <span className="label-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 pl-6">{c}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <DiscussCTA />
    </>
  );
}
