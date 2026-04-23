import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-coffee text-cream font-display text-lg italic">
            r
          </span>
          <div className="leading-none">
            <div className="font-display text-base text-coffee">Roedy Rustam</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Agro × Digital
            </div>
          </div>
        </Link>

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

        <a
          href="/#contact"
          className="hidden rounded-full border border-coffee bg-coffee px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-all hover:bg-terracotta hover:border-terracotta md:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
