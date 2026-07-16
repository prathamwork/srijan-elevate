import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DiscussCTA } from "@/components/site/primitives";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities & Technology — Srijan" },
      {
        name: "description",
        content:
          "The tools and technologies our team uses to design, engineer and deliver projects.",
      },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: CapabilitiesPage,
});

const groups = [
  {
    n: "01",
    title: "Design & Drafting",
    items: ["CAD drawings", "3D modelling", "Rendering & visualisation", "Client presentation tools"],
  },
  {
    n: "02",
    title: "Structural & Analysis",
    items: ["Structural-analysis software", "BIM coordination", "Load & stability analysis"],
  },
  {
    n: "03",
    title: "Documentation & Delivery",
    items: [
      "Quantity estimation",
      "Digital documentation",
      "Project scheduling",
      "Site reporting",
      "Drone progress imagery",
    ],
  },
];

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="/ Capabilities"
        title="How we work — the tools behind the practice."
        lede="Specific software names will be confirmed with the client. Categories reflect the disciplines the team is set up to deliver in-house."
        crumbs={[
          { to: "/", label: "Home" },
          { to: "/capabilities", label: "Capabilities" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[100rem] px-5 md:px-10">
          {groups.map((g) => (
            <div
              key={g.n}
              className="grid grid-cols-12 gap-6 border-t border-line py-12 md:py-16 last:border-b"
            >
              <div className="col-span-12 md:col-span-4">
                <div className="label-eyebrow">{g.n}</div>
                <h3 className="display-serif mt-4 text-4xl md:text-5xl">{g.title}</h3>
              </div>
              <ul className="col-span-12 md:col-span-8">
                {g.items.map((it, i) => (
                  <li
                    key={it}
                    className="flex items-baseline justify-between border-t border-line py-5 text-lg first:border-t-0"
                  >
                    <span className="label-eyebrow text-line">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 pl-6">{it}</span>
                    <span className="label-eyebrow text-line">[Editable tool]</span>
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
