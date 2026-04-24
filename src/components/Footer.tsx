export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-cream-soft py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Roedy Rustam"
            loading="lazy"
            className="h-8 w-8 rounded-full object-cover border border-coffee/20"
          />
          <div>
            <div className="font-display text-coffee">Roedy Rustam</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60">
              Sociopreneur  · Agro · Digital
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between md:w-auto md:gap-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-coffee/60">
            © {new Date().getFullYear()} · Crafted in Sulawesi
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-coffee/20 bg-cream text-coffee transition-all hover:bg-terracotta hover:text-cream hover:border-terracotta md:hidden"
          >
            ↑
          </button>
        </div>
      </div>
      <div className="mx-auto mt-6 hidden max-w-7xl px-6 md:flex md:justify-end md:px-10">
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 transition-colors hover:text-terracotta"
        >
          Kembali ke atas
          <span className="grid h-8 w-8 place-items-center rounded-full border border-coffee/20 transition-colors group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream">
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}
