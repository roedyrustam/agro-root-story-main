import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
  ScrollRestoration,
} from "@tanstack/react-router";
import { useEffect } from "react";

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
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak pernah ada di peta ekosistem
          ini.
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
      {
        name: "google-site-verification",
        content: "pBTvdE97aC22PQnmJv_ZDD3c2B9O2IXJlLeQNYp4c_E",
      },
      { title: "Roedy Rustam — Sociopreneur × Agro × Digital" },
      {
        name: "description",
        content:
          "Portfolio Roedy Rustam — Sociopreneur yang membangun ekosistem kopi Sulawesi (Barru, Toraja, Sinjai) & perangkat digital untuk UMKM agro.",
      },
      { name: "keywords", content: "Roedy Rustam, Sociopreneur, Kopi Sulawesi, Agro Digital, UMKM, beanhub, Kafeya POS, Teknik Industri, Makassar" },
      { name: "author", content: "Roedy Rustam" },
      { name: "theme-color", content: "#3d2b1f" },
      // Open Graph
      { property: "og:title", content: "Roedy Rustam — Sociopreneur × Agro × Digital" },
      {
        property: "og:description",
        content:
          "Sociopreneur yang membangun ekosistem kopi Sulawesi & perangkat digital (beanhub.online, Kafeya POS) untuk UMKM agro.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://roedyrustam.pages.dev" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:site_name", content: "Roedy Rustam Portfolio" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Roedy Rustam — Sociopreneur × Agro × Digital",
      },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Roedy Rustam — Sociopreneur × Agro × Digital" },
      {
        name: "twitter:description",
        content:
          "Sociopreneur yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
      // Additional SEO
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      // GEO Meta Tags (Local SEO)
      { name: "geo.region", content: "ID-SN" },
      { name: "geo.placename", content: "Makassar, Sulawesi Selatan" },
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
          jobTitle: "Sociopreneur & Agro Digital Developer",
          description:
            "Sociopreneur yang membangun ekosistem kopi Sulawesi & perangkat digital untuk UMKM agro.",
          url: "https://roedyrustam.pages.dev",
          knowsAbout: [
            "Coffee Supply Chain",
            "Sociopreneur",
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
      <body className="antialiased">
        {/* Skip Link for A11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-terracotta focus:px-6 focus:py-3 focus:text-cream focus:outline-none"
        >
          Skip to content
        </a>

        {/* Global Grain Overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03] mix-blend-multiply grain"
          aria-hidden="true"
        />

        {/* Scroll Progress Indicator */}
        <div
          className="fixed left-0 top-0 z-[100] h-[2px] bg-terracotta transition-all duration-150"
          id="scroll-indicator"
          style={{ width: "0%" }}
        />

        <div id="main-content">{children}</div>
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-enabled');`,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const routerState = useRouterState();
  const location = routerState.location;

  useEffect(() => {
    // Scroll Progress
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const indicator = document.getElementById("scroll-indicator");
      if (indicator) indicator.style.width = scrolled + "%";

      // Parallax for Hero Image
      const heroImg = document.querySelector(".hero-parallax") as HTMLElement;
      if (heroImg) {
        const speed = 0.05;
        const rect = heroImg.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const yPos = -(window.scrollY * speed);
          heroImg.style.transform = `translateY(${yPos}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount/navigation

    // Reveal on Scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll(".reveal:not(.is-observed)");
      revealElements.forEach((el) => {
        el.classList.add("is-observed");
        observer.observe(el);
      });
    };

    observeElements();

    // Observe DOM changes to catch newly added .reveal elements after route changes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mutationObserver.observe(mainContent, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]); // Re-run on navigation

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
