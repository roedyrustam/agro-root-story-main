import { Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-coffee.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* decorative grain */}
      <div className="grain absolute inset-0" />

      {/* Ambient background blobs */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-terracotta/5 blur-[100px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-mustard/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3 animate-fade-up">
              <span className="flex items-center gap-2.5 rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-terracotta backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
                </span>
                Portfolio · 2025
              </span>
            </div>

            <h1
              className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.9] text-coffee text-balance animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Membangun <span className="italic text-terracotta">jembatan</span> antara{" "}
              <span className="relative inline-block">
                kebun
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 6 T 198 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-mustard"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              & kode.
            </h1>

            <p
              className="mt-8 max-w-xl text-lg leading-relaxed text-coffee/75 text-pretty animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Saya <strong className="text-coffee">Roedy Rustam</strong> — Trainer UMKM dan konsultan pengembangan desa yang menemani petani kopi Sulawesi dari bukit Toraja sampai ke meja barista, sambil menulis kode untuk membuat rantai pasok mereka lebih jujur.
            </p>

              <div
                className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Link
                  to="/"
                  hash="projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-coffee px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-terracotta hover:shadow-[0_8px_30px_-8px_rgba(211,93,71,0.4)]"
                >
                  Lihat karya
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/20 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <button
                  onClick={() => window.print()}
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/80 transition-colors hover:text-terracotta"
                >
                  Unduh Profil PDF
                  <span className="h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-6" />
                </button>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 transition-colors hover:text-terracotta"
                >
                  Hubungi
                </Link>
              </div>

            <div
              className="mt-16 grid grid-cols-3 gap-6 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              {[
                { n: "7+", l: "Wilayah dampingan", icon: "🌿" },
                { n: "4", l: "Produk digital", icon: "💻" },
                { n: "BNSP", l: "Tersertifikasi", icon: "🏅" },
              ].map((s) => (
                <div key={s.l} className="group relative rounded-2xl border border-coffee/8 bg-cream-soft/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/20 hover:shadow-sm">
                  <div className="absolute right-3 top-3 text-lg opacity-60 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-100">
                    {s.icon}
                  </div>
                  <div className="font-display text-3xl text-terracotta md:text-4xl">{s.n}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative lg:col-span-5 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Frame decoration */}
              <div className="absolute -inset-4 -rotate-2 rounded-3xl bg-gradient-to-br from-mustard/30 via-terracotta/10 to-sage/20 transition-transform duration-700 hover:rotate-0" />
              
              <img
                src={heroImg}
                alt="Ilustrasi biji kopi dan lanskap pegunungan Sulawesi"
                width={1024}
                height={1024}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="hero-parallax relative w-full rounded-2xl transition-transform duration-75 will-change-transform"
              />

              {/* Origin badge - glassmorphism */}
              <div className="absolute -bottom-6 -left-6 max-w-[200px] rotate-[-3deg] rounded-2xl border border-cream/30 bg-cream/80 px-5 py-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-terracotta/10 text-xs">☕</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-terracotta">
                    Origin
                  </span>
                </div>
                <div className="mt-2 font-display text-sm text-coffee">Jakarta · Barru · Toraja · Sinjai</div>
              </div>

              {/* Single origin badge */}
              <div className="absolute -top-4 -right-4 rotate-[6deg] rounded-full border border-coffee/10 bg-coffee px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream shadow-lg backdrop-blur-sm">
                Single origin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
