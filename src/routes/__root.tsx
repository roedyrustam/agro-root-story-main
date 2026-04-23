import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Roedy Rustam — Agro × Digital" },
      { name: "description", content: "Portfolio Roedy Rustam — praktisi Teknik Industri yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro." },
      { name: "author", content: "Roedy Rustam" },
      { name: "theme-color", content: "#3d2b1f" },
      // Open Graph
      { property: "og:title", content: "Roedy Rustam — Agro × Digital" },
      { property: "og:description", content: "Praktisi Teknik Industri yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:site_name", content: "Roedy Rustam Portfolio" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Roedy Rustam — Industrial Engineering × Agro × Digital" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Roedy Rustam — Agro × Digital" },
      { name: "twitter:description", content: "Praktisi Teknik Industri yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro." },
      { name: "twitter:image", content: "/og-image.jpg" },
      // Additional SEO
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/jpeg",
        href: "/logo.jpg",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/logo.jpg",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Roedy Rustam",
          jobTitle: "Industrial Engineering Practitioner & Agro Digital Developer",
          description: "Praktisi Teknik Industri yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro.",
          url: "https://roedyrustam.com",
          knowsAbout: [
            "Coffee Supply Chain",
            "Industrial Engineering",
            "Agro Operations",
            "React Development",
            "UMKM Digital Solutions",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Sehati Kopi Indonesia",
          },
          address: {
            "@type": "PostalAddress",
            addressRegion: "Sulawesi Selatan",
            addressCountry: "ID",
          },
          sameAs: ["https://beanhub.online"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
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
  return <Outlet />;
}
