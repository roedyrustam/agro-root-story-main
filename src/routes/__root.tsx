import { useRouterState, ScrollRestoration, Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/CustomCursor";
import { DistortionFilters } from "@/components/DistortionFilters";
import Lenis from "lenis";
import { generatePersonSchema, generateWebSiteSchema } from "@/lib/schema";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090807] px-6 selection:bg-amber-500/20 selection:text-amber-400">
      <div className="max-w-md text-center rounded-3xl border border-white/10 bg-[#14110e]/80 p-8 backdrop-blur-2xl shadow-2xl">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-4">
          Error 404 · Node Offline
        </div>
        <h1 className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-none text-white">
          Tersesat.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-stone-300">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak pernah ada di peta ekosistem
          ini.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-950 font-semibold transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
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
      { title: "Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur" },
      {
        name: "description",
        content:
          "Portfolio & blueprint Roedy Rustam — AI Systems & Agentic Developer serta Konsultan Agro-Industri. Arsitektur Model Context Protocol (MCP), orkestrasi multi-agen, dan transformasi rantai pasok kopi hulu-hilir Sulawesi.",
      },
      { name: "keywords", content: "Roedy Rustam, AI Systems, Agentic Developer, Model Context Protocol, MCP Server, Swarm AI, Kopi Sulawesi, Agro Digital, Barru, Toraja, Sinjai, beanhub, Kafeya POS, Teknik Industri, Makassar" },
      { name: "author", content: "Roedy Rustam" },
      { name: "theme-color", content: "#090807" },
      // Open Graph
      { property: "og:title", content: "Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur" },
      {
        property: "og:description",
        content:
          "Portfolio & blueprint Roedy Rustam — AI Systems & Agentic Developer serta Konsultan Agro-Industri Sulawesi Selatan. Arsitektur MCP, agen otonom, dan aplikasi edge modern.",
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
        content: "Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur",
      },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Roedy Rustam — AI Systems & Agentic Developer × Agro-Tech Sociopreneur" },
      {
        name: "twitter:description",
        content:
          "Portfolio & blueprint Roedy Rustam — AI Systems & Agentic Developer serta Konsultan Agro-Industri Sulawesi Selatan.",
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
        children: JSON.stringify(generatePersonSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(generateWebSiteSchema()),
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
  const isPending = routerState.isLoading;

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll Progress & Parallax Logic
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const indicator = document.getElementById("scroll-indicator");
      if (indicator) {
        indicator.style.width = scrolled + "%";
        indicator.style.opacity = scrolled > 1 ? "1" : "0";
      }

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

    // Intersection Observer for .reveal elements
    const setupRevealObserver = () => {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          threshold: 0, // Trigger as soon as 1px is visible
          rootMargin: "0px 0px -50px 0px",
        }
      );

      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => revealObserver.observe(el));
      return revealObserver;
    };

    // Initial setup with a small delay to ensure React has finished rendering
    const timeoutId = setTimeout(() => {
      const observer = setupRevealObserver();
      // Store observer in a variable to disconnect it later
      (window as any)._revealObserver = observer;
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount/navigation

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
      if ((window as any)._revealObserver) {
        (window as any)._revealObserver.disconnect();
      }
    };
  }, [location.pathname]); // Re-run on navigation

  return (
    <>
      <ScrollRestoration />
      <Toaster position="top-center" richColors />
      <DistortionFilters />
      <CustomCursor />
      
      {/* Route Loading Progress */}
      <div 
        className={`fixed left-0 top-0 z-[110] h-[3px] bg-mustard transition-all duration-500 ease-in-out ${isPending ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: isPending ? '70%' : '100%' }}
      />

      <div 
        key={location.pathname} 
        className="animate-in fade-in slide-in-from-bottom-2 duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <Outlet />
      </div>
    </>
  );
}

