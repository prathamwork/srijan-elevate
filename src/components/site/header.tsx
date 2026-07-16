import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, services, company } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-background/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{ color: onHero ? "var(--bone)" : undefined }}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-5 md:h-20 md:px-10">
          <Link to="/" className="group flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border border-current text-[10px] font-mono tracking-widest">
              SR
            </span>
            <span className="hidden text-[11px] font-mono uppercase tracking-[0.22em] md:inline">
              Srijan / Consultant & Engineers
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.slice(1, -1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="link-underline text-[13px] uppercase tracking-[0.16em]"
                activeProps={{ className: "text-bronze" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/enquiry"
              className="hidden items-center gap-2 border border-current px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition hover:bg-current hover:text-background md:inline-flex"
            >
              Discuss a Project
              <span aria-hidden>→</span>
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center border border-current lg:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-ink text-bone">
          <div className="mx-auto flex h-full max-w-7xl flex-col px-5 py-6 md:px-10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em]">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center border border-bone/40"
              >
                <span className="block h-px w-4 rotate-45 bg-bone" />
                <span className="-mt-px block h-px w-4 -rotate-45 bg-bone" />
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col justify-center gap-4">
              {nav.map((n, i) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="flex items-baseline gap-6 text-4xl font-light tracking-tight text-bone/90 transition hover:text-bronze md:text-6xl"
                >
                  <span className="w-10 text-[11px] font-mono tracking-[0.22em] text-bone/40">
                    0{i + 1}
                  </span>
                  <span className="display-serif">{n.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 grid gap-6 border-t border-bone/15 pt-6 text-[12px] font-mono uppercase tracking-[0.18em] text-bone/60 md:grid-cols-3">
              <div>
                <div className="text-bone/40">Services</div>
                <div className="mt-2 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.key}
                      to={`/services/${s.key}` as string}
                      className="block hover:text-bronze"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-bone/40">Contact</div>
                <div className="mt-2 space-y-1">
                  <div>{company.phone}</div>
                  <div>{company.email}</div>
                  <div>{company.hours}</div>
                </div>
              </div>
              <div>
                <div className="text-bone/40">Follow</div>
                <div className="mt-2 space-y-1">
                  <a href={company.social.instagram}>Instagram</a>
                  <a href={company.social.linkedin} className="block">
                    LinkedIn
                  </a>
                  <a href={company.social.facebook} className="block">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
