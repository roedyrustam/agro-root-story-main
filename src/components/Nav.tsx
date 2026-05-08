import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useMagnetic } from "@/hooks/use-magnetic";

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
  const magneticRef = useMagnetic();

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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center py-4 pointer-events-none md:py-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pointer-events-auto md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <img
              src="/logo.jpg"
              alt="Roedy Rustam"
              className="h-10 w-10 rounded-full object-cover border border-coffee/20 transition-all duration-500 group-hover:scale-105 group-hover:border-terracotta/40 shadow-sm"
            />
            <div className="absolute inset-0 rounded-full bg-terracotta/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <div className="leading-none">
            <div className="font-display text-base text-coffee tracking-tight">Roedy Rustam</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-coffee/50">
              Sociopreneur × Digital
            </div>
          </div>
        </Link>

        {/* Desktop nav - Concentric Capsule */}
        <nav className="hidden items-center gap-1 rounded-full border border-coffee/10 bg-cream/40 p-1.5 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(44,36,27,0.08)] md:flex">
          <Link
            to="/about"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 transition-all duration-300 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream shadow-[0_2px_10px_-2px_rgba(44,36,27,0.3)] !text-cream" }}
          >
            Tentang
          </Link>
          <Link
            to="/journey"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 transition-all duration-300 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream shadow-[0_2px_10px_-2px_rgba(44,36,27,0.3)] !text-cream" }}
          >
            Perjalanan
          </Link>
          <Link
            to="/experience"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 transition-all duration-300 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream shadow-[0_2px_10px_-2px_rgba(44,36,27,0.3)] !text-cream" }}
          >
            Pengalaman
          </Link>
          <Link
            to="/"
            hash="projects"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 transition-all duration-300 hover:text-coffee"
          >
            Karya
          </Link>
          <Link
            to="/impact"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 transition-all duration-300 hover:text-coffee"
            activeProps={{ className: "bg-coffee text-cream shadow-[0_2px_10px_-2px_rgba(44,36,27,0.3)] !text-cream" }}
          >
            Dampak
          </Link>
        </nav>

        {/* Desktop CTA - Distinct Action */}
        <Link
          ref={magneticRef}
          to="/contact"
          className="hidden rounded-full bg-terracotta px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cream transition-all duration-500 hover:bg-coffee hover:scale-[1.02] hover:shadow-[0_12px_24px_-8px_rgba(211,93,71,0.5)] active:scale-[0.98] md:inline-block"
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

      {/* Mobile menu panel - Concentric Depth */}
      <div
        className={`fixed right-4 top-4 bottom-4 z-[58] flex w-[min(85vw,360px)] flex-col rounded-3xl bg-cream/90 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(44,36,27,0.2)] ring-1 ring-coffee/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Menu header spacer */}
        <div className="h-16 shrink-0" />

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              className={`transition-all duration-500 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${150 + i * 50}ms` : "0ms" }}
            >
              {link.type === "route" ? (
                <Link
                  to={link.href}
                  className="flex items-center gap-4 rounded-2xl px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70 transition-all hover:bg-coffee hover:text-cream active:scale-[0.97]"
                  activeProps={{ className: "bg-coffee text-cream" }}
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-lg opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              ) : (
                <Link
                  to="/"
                  hash={link.href.replace("/#", "")}
                  className="flex items-center gap-4 rounded-2xl px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70 transition-all hover:bg-coffee hover:text-cream active:scale-[0.97]"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-display text-lg opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div
          className={`shrink-0 border-t border-coffee/5 px-6 py-8 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "450ms" : "0ms" }}
        >
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-terracotta px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cream transition-all shadow-lg shadow-terracotta/20 hover:bg-coffee active:scale-[0.98]"
          >
            Hubungi saya
            <span className="text-base">→</span>
          </Link>

          <div className="mt-6 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-coffee/40">
            Sulawesi Selatan, ID
          </div>
        </div>
      </div>
    </header>
  );
}
