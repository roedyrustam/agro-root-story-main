export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-soft py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-coffee text-cream font-display italic">
            r
          </span>
          <div>
            <div className="font-display text-coffee">Roedy Rustam</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Industrial Engineering · Agro · Digital
            </div>
          </div>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-coffee/60">
          © {new Date().getFullYear()} · Crafted in Sulawesi
        </div>
      </div>
    </footer>
  );
}
