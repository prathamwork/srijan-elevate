import { Link } from "@tanstack/react-router";
import { company, nav, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line bg-ink text-bone">
      <div className="mx-auto max-w-[100rem] px-5 pt-20 pb-10 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="label-eyebrow text-bone/50">Est. [Editable year]</div>
            <p className="display-serif mt-6 text-4xl md:text-5xl">
              Design. Engineer. Deliver.
            </p>
            <p className="mt-6 max-w-md text-sm text-bone/60">{company.statement}</p>
            <Link
              to="/enquiry"
              className="mt-8 inline-flex items-center gap-3 border border-bone/40 px-5 py-3 text-[11px] uppercase tracking-[0.2em] transition hover:border-bronze hover:text-bronze"
            >
              Start a Project <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-2">
            <div className="label-eyebrow text-bone/50">Navigate</div>
            <ul className="mt-6 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-bone/80 hover:text-bronze">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="label-eyebrow text-bone/50">Services</div>
            <ul className="mt-6 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.key}>
                  <Link
                    to={`/services/${s.key}` as string}
                    className="text-bone/80 hover:text-bronze"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow text-bone/50">Contact</div>
            <ul className="mt-6 space-y-2 text-sm text-bone/80">
              <li>{company.address}</li>
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>{company.hours}</li>
            </ul>
            <div className="mt-6 flex gap-4 text-[11px] uppercase tracking-[0.2em] text-bone/60">
              <a href={company.social.instagram} className="hover:text-bronze">
                Ig
              </a>
              <a href={company.social.linkedin} className="hover:text-bronze">
                Li
              </a>
              <a href={company.social.facebook} className="hover:text-bronze">
                Fb
              </a>
              <a href={company.social.youtube} className="hover:text-bronze">
                Yt
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-bone/15 pt-6 text-[11px] font-mono uppercase tracking-[0.2em] text-bone/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-bronze">Privacy</Link>
            <Link to="/terms" className="hover:text-bronze">Terms</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-bronze"
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
