import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions, ScrollProgress } from "@/components/site/floating-actions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="label-eyebrow">Error / 404</div>
        <h1 className="display-serif mt-6 text-6xl">Not found.</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          The page you&apos;re looking for isn&apos;t here — it may have moved, or the
          link may be out of date.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-bone"
          >
            Return home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="label-eyebrow">Error</div>
        <h1 className="display-serif mt-6 text-4xl">This page didn&apos;t load.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something went wrong on our end. Try again, or head home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-bone"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 border border-line px-5 py-3 text-[11px] uppercase tracking-[0.2em] hover:border-ink"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Srijan Consultant and Engineers — Architecture, Engineering, Interiors, Infrastructure & Turnkey" },
      {
        name: "description",
        content:
          "Srijan Consultant and Engineers delivers integrated architectural, structural, interior, infrastructure and turnkey project solutions — from initial planning to final execution.",
      },
      { name: "author", content: "Srijan Consultant and Engineers" },
      { property: "og:site_name", content: "Srijan Consultant and Engineers" },
      { property: "og:title", content: "Srijan Consultant and Engineers" },
      {
        property: "og:description",
        content:
          "Integrated architecture, structural engineering, interior design, infrastructure and turnkey project execution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Srijan Consultant and Engineers",
          description:
            "Integrated architecture, structural engineering, interior design, infrastructure and turnkey project execution.",
          areaServed: "IN",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </QueryClientProvider>
  );
}
