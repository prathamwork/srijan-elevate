import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Srijan" },
      { name: "description", content: "Terms of use for the Srijan website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="/ Terms"
        title="Terms & Conditions"
        crumbs={[{ to: "/", label: "Home" }, { to: "/terms", label: "Terms" }]}
      />
      <section className="py-16 md:py-24">
        <div className="prose prose-neutral mx-auto max-w-3xl px-5 text-lg text-muted-foreground md:px-10">
          <p>
            This website is provided for information about the practice of
            Srijan Consultant and Engineers. [Editable — replace with your
            finalised terms and conditions.]
          </p>
          <h2 className="display-serif mt-10 text-2xl text-foreground">Content</h2>
          <p>All images, drawings and written content are © Srijan unless noted.</p>
          <h2 className="display-serif mt-10 text-2xl text-foreground">Use</h2>
          <p>Use of this website is at your own risk.</p>
        </div>
      </section>
    </>
  ),
});
