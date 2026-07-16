import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Srijan" },
      { name: "description", content: "How we collect, use and protect your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="/ Privacy"
        title="Privacy Policy"
        crumbs={[{ to: "/", label: "Home" }, { to: "/privacy", label: "Privacy" }]}
      />
      <section className="py-16 md:py-24">
        <div className="prose prose-neutral mx-auto max-w-3xl px-5 text-lg text-muted-foreground md:px-10">
          <p>
            Srijan Consultant and Engineers (&quot;we&quot;) respects your privacy.
            This page describes what information we collect via this website, and
            how we use it. [Editable — replace with your finalised privacy policy.]
          </p>
          <h2 className="display-serif mt-10 text-2xl text-foreground">What we collect</h2>
          <p>Contact details you provide via the enquiry or contact forms.</p>
          <h2 className="display-serif mt-10 text-2xl text-foreground">How we use it</h2>
          <p>Only to respond to your enquiry. We do not sell your data.</p>
          <h2 className="display-serif mt-10 text-2xl text-foreground">Contact</h2>
          <p>Write to us for any privacy-related question.</p>
        </div>
      </section>
    </>
  ),
});
