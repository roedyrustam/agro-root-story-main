export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-coffee/10 bg-cream-soft py-16">
      {/* Decorative ambient glow */}
      <div className="absolute -bottom-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-terracotta/5 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Main footer row */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div className="group flex items-center gap-4">
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="Roedy Rustam"
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover border-2 border-coffee/10 transition-all duration-300 group-hover:border-terracotta/30 group-hover:shadow-md"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sage ring-2 ring-cream-soft">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cream" />
              </span>
            </div>
            <div>
              <div className="font-display text-lg text-coffee">Roedy Rustam</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/50">
                Sociopreneur · Trainer · Village Consultant
              </div>
            </div>
          </div>

          {/* Copyright & back-to-top */}
          <div className="flex w-full items-center justify-between md:w-auto md:gap-10">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-coffee/50">
              <span>© {new Date().getFullYear()}</span>
              <span className="h-1 w-1 rounded-full bg-terracotta/40" />
              <span>Crafted in Sulawesi</span>
            </div>

            {/* Mobile back-to-top */}
            <button
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-coffee/15 bg-cream text-coffee transition-all duration-300 hover:-translate-y-1 hover:border-terracotta hover:bg-terracotta hover:text-cream hover:shadow-md md:hidden"
            >
              ↑
            </button>
          </div>
        </div>

        {/* Desktop back-to-top */}
        <div className="mx-auto mt-8 hidden max-w-7xl md:flex md:justify-end">
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/50 transition-colors hover:text-terracotta"
          >
            Kembali ke atas
            <span className="grid h-9 w-9 place-items-center rounded-full border border-coffee/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream group-hover:shadow-md">
              ↑
            </span>
          </button>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-coffee/10 to-transparent" />
        <div className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-coffee/30">
          Dari kebun ke kode — dengan cinta untuk Sulawesi Selatan
        </div>
      </div>
    </footer>
  );
}
