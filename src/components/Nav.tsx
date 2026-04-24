import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const navLinks = [
  { label: "Tentang", href: "/about", type: "route" as const },
  { label: "Perjalanan", href: "/journey", type: "route" as const },
  { label: "Pengalaman", href: "/experience", type: "route" as const },
  { label: "Karya", href: "/#projects", type: "hash" as const },
  { label: "Dampak", href: "/impact", type: "route" as const },
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
    <header className="fixed left-0 right-0 top-0 z-50 bg-cream/70 backdrop-blur-xl after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-coffee/15 after:to-transparent">
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
        <nav className="hidden items-center gap-1 rounded-full border border-coffee/8 bg-cream-soft/50 p-1.5 backdrop-blur-sm md:flex">
          <Link
            to="/about"
            className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-coffee/60 transition-all duration-300 hover:bg-coffee/5 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream hover:bg-coffee hover:text-cream shadow-sm" }}
          >
            Tentang
          </Link>
          <Link
            to="/journey"
            className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-coffee/60 transition-all duration-300 hover:bg-coffee/5 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream hover:bg-coffee hover:text-cream shadow-sm" }}
          >
            Perjalanan
          </Link>
          <Link
            to="/experience"
            className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-coffee/60 transition-all duration-300 hover:bg-coffee/5 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream hover:bg-coffee hover:text-cream shadow-sm" }}
          >
            Pengalaman
          </Link>
          <Link
            to="/"
            hash="projects"
            className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-coffee/60 transition-all duration-300 hover:bg-coffee/5 hover:text-coffee"
          >
            Karya
          </Link>
          <Link
            to="/impact"
            className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-coffee/60 transition-all duration-300 hover:bg-coffee/5 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream hover:bg-coffee hover:text-cream shadow-sm" }}
          >
            Dampak
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-terracotta px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:bg-coffee hover:shadow-[0_4px_20px_-6px_rgba(211,93,71,0.4)] md:inline-block"
        >
          Hubungi saya
        </Link>

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
              className={`block h-[1.5px] w-full bg-coffee transition-all duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-coffee transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-coffee transition-all duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-coffee/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-0 z-[58] flex h-dvh w-[min(85vw,360px)] flex-col bg-cream/95 backdrop-blur-2xl shadow-[_-20px_0_60px_-15px_rgba(44,36,27,0.1)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu header spacer */}
        <div className="h-20 shrink-0" />

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-1 px-6 py-4">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              className={`transition-all duration-500 ${
                open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
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
                  <span className="font-display text-lg text-terracotta/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{link.label}</span>
                </Link>
              ) : (
                <Link
                  to="/"
                  hash={link.href.replace("/#", "")}
                  className="flex items-center gap-4 rounded-xl px-4 py-4 font-mono text-xs uppercase tracking-[0.2em] text-coffee/80 transition-colors hover:bg-coffee/5 hover:text-terracotta"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-lg text-terracotta/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{link.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div
          className={`shrink-0 border-t border-border/40 px-6 py-6 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "400ms" : "0ms" }}
        >
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-coffee px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta"
          >
            Hubungi saya
            <span>→</span>
          </Link>

          <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60">
            Sulawesi Selatan, ID
          </div>
        </div>
      </div>
    </header>
  );
}
