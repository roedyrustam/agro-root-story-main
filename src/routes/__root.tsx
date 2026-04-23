import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-6 selection:bg-terracotta/20 selection:text-terracotta">
      <div className="max-w-md text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta mb-4">
          Error 404
        </div>
        <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-none text-coffee">
          Tersesat.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-coffee/75">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak pernah ada di peta ekosistem ini.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full border border-coffee bg-transparent px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-coffee transition-all hover:bg-coffee hover:text-cream"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Kembali ke Beranda
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
      // GEO Meta Tags (Local SEO)
      { name: "geo.region", content: "ID-SN" },
      { name: "geo.placename", content: "Makassar" },
      { name: "geo.position", content: "-5.147665;119.432732" },
      { name: "ICBM", content: "-5.147665, 119.432732" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
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
          sameAs: ["https://beanhub.online", "https://cuppingnotes.online"],
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
