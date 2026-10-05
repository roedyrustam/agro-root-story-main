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
  const magneticRef = useMagnetic<HTMLAnchorElement>();

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
              className="h-10 w-10 rounded-full object-cover border border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:border-amber-400/50 shadow-md"
            />
            <div className="absolute inset-0 rounded-full bg-amber-500/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <div className="leading-none">
            <div className="font-display text-base text-white tracking-tight">Roedy Rustam</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-400">
              AI Systems × Agro-Tech
            </div>
          </div>
        </Link>

        {/* Desktop nav - Concentric Dark Obsidian Capsule */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#14110e]/80 p-1.5 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] md:flex">
          <Link
            to="/about"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:text-white hover:bg-white/5"
            activeProps={{ className: "bg-white/10 text-white border border-white/10 shadow-sm !text-white" }}
          >
            Tentang
          </Link>
          <Link
            to="/journey"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:text-white hover:bg-white/5"
            activeProps={{ className: "bg-white/10 text-white border border-white/10 shadow-sm !text-white" }}
          >
            Perjalanan
          </Link>
          <Link
            to="/experience"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:text-white hover:bg-white/5"
            activeProps={{ className: "bg-white/10 text-white border border-white/10 shadow-sm !text-white" }}
          >
            Pengalaman
          </Link>
          <Link
            to="/"
            hash="projects"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:text-white hover:bg-white/5"
          >
            Karya
          </Link>
          <Link
            to="/impact"
            className="rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:text-white hover:bg-white/5"
            activeProps={{ className: "bg-white/10 text-white border border-white/10 shadow-sm !text-white" }}
          >
            Dampak
          </Link>
        </nav>

        {/* Desktop CTA - Distinct Action */}
        <Link
          ref={magneticRef}
          to="/contact"
          className="hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-950 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] active:scale-[0.98] md:inline-block"
        >
          Hubungi saya
        </Link>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[60] grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-amber-400 md:hidden"
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={`block h-[1.5px] w-full bg-stone-200 transition-all duration-300 ${
                open ? "translate-y-[6.5px] rotate-45 bg-amber-400" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-stone-200 transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-stone-200 transition-all duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45 bg-amber-400" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel - Concentric Depth */}
      <div
        className={`fixed right-4 top-4 bottom-4 z-[58] flex w-[min(85vw,360px)] flex-col rounded-3xl bg-[#120f0d]/95 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
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
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-all hover:bg-white/10 hover:text-white active:scale-[0.97]"
                  activeProps={{ className: "bg-white/10 text-amber-300 border border-white/10" }}
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
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-all hover:bg-white/10 hover:text-white active:scale-[0.97]"
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
          className={`shrink-0 border-t border-white/10 px-6 py-8 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "450ms" : "0ms" }}
        >
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-950 font-semibold shadow-lg shadow-amber-500/20 active:scale-[0.98]"
          >
            Hubungi saya
            <span className="text-base">→</span>
          </Link>

          <div className="mt-6 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-stone-500">
            Sulawesi Selatan, ID
          </div>
        </div>
      </div>
    </header>
  );
}
