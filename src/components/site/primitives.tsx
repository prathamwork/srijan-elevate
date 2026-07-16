import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionLabel({
  n,
  children,
}: {
  n?: string;
  children: ReactNode;
}) {
  return (
    <div className="label-eyebrow flex items-center gap-3">
      {n && (
        <span className="inline-block h-px w-8 bg-current opacity-40" aria-hidden />
      )}
      {n && <span>{n}</span>}
      <span>{children}</span>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs?: { to: string; label: string }[];
}) {
  return (
    <section className="relative border-b border-line pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="mx-auto max-w-[100rem] px-5 md:px-10">
        {crumbs && (
          <nav className="mb-10 flex gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={c.to} className="flex items-center gap-2">
                <Link to={c.to} className="hover:text-bronze">
                  {c.label}
                </Link>
                {i < crumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <SectionLabel n={eyebrow}>{title.split(" ")[0]}</SectionLabel>
        <h1 className="display-serif mt-8 max-w-5xl text-5xl md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

export function RuleRow({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 border-t border-line py-6 text-sm">
      {children}
    </div>
  );
}

export function DiscussCTA() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink text-bone">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-5 py-24 md:grid-cols-12 md:gap-14 md:px-10 md:py-40">
        <div className="md:col-span-7">
          <SectionLabel n="→">Have a project in mind?</SectionLabel>
          <h2 className="display-serif mt-8 text-5xl md:text-7xl lg:text-8xl">
            Let&apos;s build the next one together.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-bone/60">
            Architecture, engineering and execution can work as one process. Tell us
            what you&apos;re planning and we&apos;ll come back within two working days.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 md:col-span-5">
          <Link
            to="/enquiry"
            className="group flex items-center justify-between gap-6 border border-bone/30 px-6 py-6 text-lg transition hover:border-bronze hover:text-bronze"
          >
            Start a Project
            <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/contact"
            className="group flex items-center justify-between gap-6 border border-bone/30 px-6 py-6 text-lg transition hover:border-bronze hover:text-bronze"
          >
            Visit or Call
            <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
