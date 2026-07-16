import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroBuilding from "@/assets/hero-building.jpg";
import {
  services,
  projects,
  processStages,
  stats,
  testimonials,
  insights,
  capabilities,
  company,
} from "@/lib/site-data";
import { SectionLabel, DiscussCTA } from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srijan Consultant and Engineers — Design. Engineer. Deliver." },
      {
        name: "description",
        content:
          "An integrated consultancy for architecture, structural engineering, interiors, infrastructure and turnkey execution.",
      },
      { property: "og:image", content: heroBuilding },
      { rel: "canonical", href: "/" } as never,
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutIntro />
      <ExpertiseSection />
      <FeaturedProjects />
      <ProcessSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <InsightsSection />
      <DiscussCTA />
    </>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-bone">
      <img
        src={heroBuilding}
        alt="Architectural building at dusk"
        width={1920}
        height={1200}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
          loaded ? "scale-100 opacity-90" : "scale-105 opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/85" />
      <div className="absolute inset-0 grid-lines opacity-[0.06]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[100rem] flex-col justify-between px-5 pt-28 pb-10 md:px-10 md:pt-40 md:pb-16">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-bone/60">
          <span>Architecture · Engineering · Interiors · Infrastructure</span>
          <span className="hidden md:inline">01 / 05</span>
        </div>

        <div>
          <div className="overflow-hidden">
            <h1
              className={`display-serif fluid-display max-w-[16ch] text-bone transition-all duration-1000 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <em className="font-normal not-italic">Engineering</em> ideas into{" "}
              <span className="text-bronze-soft italic">enduring</span> spaces.
            </h1>
          </div>
          <p
            className={`mt-8 max-w-xl text-base text-bone/70 transition-all delay-300 duration-1000 md:text-lg ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {company.statement}
          </p>
          <div
            className={`mt-10 flex flex-wrap gap-3 transition-all delay-500 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 border border-bone px-6 py-4 text-[12px] uppercase tracking-[0.2em] transition hover:bg-bone hover:text-ink"
            >
              Explore Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/enquiry"
              className="group inline-flex items-center gap-3 border border-bone/40 px-6 py-4 text-[12px] uppercase tracking-[0.2em] transition hover:border-bronze hover:text-bronze"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>

        <div className="flex items-end justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-bone/50">
          <div className="flex items-center gap-3">
            <span className="animate-scroll-hint inline-block h-8 w-px bg-bone/60" />
            Scroll
          </div>
          <div className="hidden md:block">[Editable location · India]</div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-b border-line bg-background">
      <div className="mx-auto grid max-w-[100rem] grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {stats.map((s, i) => (
          <div key={i} className="border-line px-6 py-10 md:px-10 md:py-14">
            <div className="display-serif text-5xl md:text-6xl">{s.value}</div>
            <div className="label-eyebrow mt-4">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutIntro() {
  return (
    <section className="relative border-b border-line py-24 md:py-40">
      <div className="mx-auto grid max-w-[100rem] gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5 md:sticky md:top-32 md:h-fit">
          <SectionLabel n="01 / About">The Practice</SectionLabel>
          <div className="display-serif mt-10 text-[8rem] leading-none text-line md:text-[12rem]">
            01
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 className="display-serif fluid-h1">
            Designing possibilities.{" "}
            <span className="italic text-bronze">Engineering certainty.</span>
          </h2>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground">
            Srijan is an integrated consultancy connecting architecture,
            engineering, interiors, infrastructure and execution. We work as one
            team across a project&apos;s whole life — from the first site visit
            through to handover.
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            The result is fewer handoffs, faster decisions and buildings that
            behave the way their drawings promised.
          </p>
          <Link
            to="/about"
            className="link-underline mt-12 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em]"
          >
            Discover our practice <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const current = services[active];
  return (
    <section className="relative border-b border-line bg-ink text-bone">
      <div className="mx-auto max-w-[100rem] px-5 py-24 md:px-10 md:py-40">
        <SectionLabel n="02 / Expertise">Five disciplines, one team</SectionLabel>
        <h2 className="display-serif fluid-h1 mt-8 max-w-4xl">
          What we design, engineer and deliver.
        </h2>

        <div className="mt-20 grid gap-14 md:grid-cols-12 md:gap-10">
          <ul className="md:col-span-6">
            {services.map((s, i) => (
              <li
                key={s.key}
                onMouseEnter={() => setActive(i)}
                className={`group relative border-t border-bone/15 py-8 transition-all ${
                  i === active ? "" : "opacity-40 hover:opacity-70"
                } ${i === services.length - 1 ? "border-b" : ""}`}
              >
                <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6">
                  <span className="label-eyebrow text-bone/50">{s.index}</span>
                  <div>
                    <div className="display-serif text-3xl md:text-4xl">
                      {s.title}
                    </div>
                    <p className="mt-3 max-w-md text-sm text-bone/60">
                      {s.short}
                    </p>
                  </div>
                  <Link
                    to={`/services/${s.key}` as string}
                    className="hidden text-[11px] uppercase tracking-[0.2em] hover:text-bronze md:inline"
                  >
                    Explore →
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <div className="md:col-span-6">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/60">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  width={1600}
                  height={2000}
                  className="animate-reveal-in h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-[11px] font-mono uppercase tracking-[0.2em]">
                  <span>{current.index} — {current.title}</span>
                  <span>[Editable location]</span>
                </div>
              </div>
              <p className="mt-6 max-w-lg text-sm text-bone/60">{current.lede}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.slice(0, 4);
  return (
    <section className="border-b border-line py-24 md:py-40">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <SectionLabel n="03 / Selected work">Featured Projects</SectionLabel>
            <h2 className="display-serif fluid-h1 mt-8">A selection of recent work.</h2>
          </div>
          <Link
            to="/projects"
            className="link-underline hidden text-[12px] uppercase tracking-[0.2em] md:inline"
          >
            All projects →
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[100rem] px-5 md:px-10">
        <div className="grid gap-x-8 gap-y-24 md:grid-cols-12">
          {featured.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}` as string}
                className={`group ${
                  isEven ? "md:col-span-7" : "md:col-span-5 md:mt-24"
                }`}
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1600}
                    height={1100}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <div>
                    <div className="label-eyebrow">
                      0{i + 1} — {p.category} · {p.location}
                    </div>
                    <div className="display-serif mt-3 text-3xl md:text-4xl">
                      {p.title}
                    </div>
                  </div>
                  <span className="text-2xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="border-b border-line bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <SectionLabel n="04 / Process">Design to Delivery</SectionLabel>
        <h2 className="display-serif fluid-h1 mt-8 max-w-3xl">
          A nine-stage process, followed on every project.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-3">
          {processStages.map((s) => (
            <div
              key={s.n}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-line py-8 transition-colors hover:bg-muted/40"
            >
              <span className="display-serif text-3xl text-line transition-colors group-hover:text-bronze">
                {s.n}
              </span>
              <div>
                <div className="text-xl">{s.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.note}</div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/process"
          className="link-underline mt-14 inline-flex text-[12px] uppercase tracking-[0.2em]"
        >
          Read the full process →
        </Link>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel n="05 / Capabilities">In-house</SectionLabel>
            <h2 className="display-serif mt-8 text-4xl md:text-5xl">
              A working list of what we do.
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Not marketing categories — the actual activities involved in taking
              a project from brief to building.
            </p>
          </div>
          <ul className="grid gap-0 md:col-span-8 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline justify-between border-t border-line py-4 text-sm"
              >
                <span className="label-eyebrow text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 pl-6">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="border-b border-line bg-muted/40 py-24 md:py-40">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <SectionLabel n="06 / Clients">In their words</SectionLabel>
        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-24">
          {testimonials.map((t, i) => (
            <figure key={i}>
              <blockquote className="display-serif text-3xl md:text-4xl">
                <span className="text-bronze">“</span>
                {t.quote}
                <span className="text-bronze">”</span>
              </blockquote>
              <figcaption className="mt-8 label-eyebrow">
                {t.who} · {t.role} · {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <SectionLabel n="07 / Insights">Journal</SectionLabel>
            <h2 className="display-serif fluid-h1 mt-8">Latest thinking.</h2>
          </div>
          <Link
            to="/insights"
            className="link-underline hidden text-[12px] uppercase tracking-[0.2em] md:inline"
          >
            All insights →
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {insights.map((a) => (
            <Link
              key={a.slug}
              to={`/insights` as string}
              className="group border-t border-line pt-6"
            >
              <div className="label-eyebrow">
                {a.category} · {a.date}
              </div>
              <h3 className="display-serif mt-6 text-2xl transition-colors group-hover:text-bronze">
                {a.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">{a.excerpt}</p>
              <span className="mt-6 inline-block text-[11px] uppercase tracking-[0.2em]">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
