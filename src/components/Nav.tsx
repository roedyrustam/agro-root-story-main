import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const navLinks = [
  { label: "About", href: "/about", type: "route" as const },
  { label: "Journey", href: "/#journey", type: "hash" as const },
  { label: "Projects", href: "/#projects", type: "hash" as const },
  { label: "Impact", href: "/#impact", type: "hash" as const },
  { label: "Contact", href: "/#contact", type: "hash" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Roedy Rustam"
            className="h-10 w-10 rounded-full object-cover border border-coffee/20 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-none">
            <div className="font-display text-base text-coffee">Roedy Rustam</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Agro × Digital
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] md:flex">
          <Link
            to="/about"
            className="text-coffee/70 transition-colors hover:text-terracotta"
            activeProps={{ className: "text-terracotta" }}
          >
            About
          </Link>
          <a href="/#journey" className="text-coffee/70 transition-colors hover:text-terracotta">Journey</a>
          <a href="/#projects" className="text-coffee/70 transition-colors hover:text-terracotta">Projects</a>
          <a href="/#impact" className="text-coffee/70 transition-colors hover:text-terracotta">Impact</a>
          <a href="/#contact" className="text-coffee/70 transition-colors hover:text-terracotta">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden rounded-full border border-coffee bg-coffee px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-all hover:bg-terracotta hover:border-terracotta md:inline-block"
        >
          Get in touch
        </a>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[60] grid h-10 w-10 place-items-center rounded-full border border-coffee/20 transition-colors hover:border-terracotta md:hidden"
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={`block h-[1.5px] w-full bg-coffee transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-coffee transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""
                }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-coffee transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-coffee/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-0 z-[58] flex h-dvh w-[min(85vw,360px)] flex-col bg-cream/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Menu header spacer */}
        <div className="h-20 shrink-0" />

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-1 px-6 py-4">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            >
              {link.type === "route" ? (
                <Link
                  to={link.href}
                  className="flex items-center gap-4 rounded-xl px-4 py-4 font-mono text-xs uppercase tracking-[0.2em] text-coffee/80 transition-colors hover:bg-coffee/5 hover:text-terracotta"
                  activeProps={{ className: "text-terracotta bg-terracotta/5" }}
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-lg text-terracotta/60">{String(i + 1).padStart(2, "0")}</span>
                  <span>{link.label}</span>
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="flex items-center gap-4 rounded-xl px-4 py-4 font-mono text-xs uppercase tracking-[0.2em] text-coffee/80 transition-colors hover:bg-coffee/5 hover:text-terracotta"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-lg text-terracotta/60">{String(i + 1).padStart(2, "0")}</span>
                  <span>{link.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div
          className={`shrink-0 border-t border-border/40 px-6 py-6 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          style={{ transitionDelay: open ? "400ms" : "0ms" }}
        >
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-coffee px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta"
          >
            Get in touch
            <span>→</span>
          </a>

          <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/40">
            Sulawesi Selatan, ID
          </div>
        </div>
      </div>
    </header>
  );
}
