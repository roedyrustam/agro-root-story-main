import { Link } from "@tanstack/react-router";
import { useMagnetic } from "@/hooks/use-magnetic";
import heroImg from "../assets/hero-coffee.jpg";
import { LiquidImage } from "./LiquidImage";

export function Hero() {
  const magneticRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* decorative grain */}
      <div className="grain absolute inset-0" />

      {/* Ambient background blobs */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-terracotta/5 blur-[100px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-mustard/5 blur-[120px]" />

      <div className="relative content-container">
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
              className="font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] tracking-tight text-coffee text-balance"
            >
              <div className="overflow-hidden py-1">
                <span className="block animate-slide-up">
                  Membangun <span className="italic font-light text-terracotta/90">jembatan</span>
                </span>
              </div>
              <div className="overflow-hidden py-1">
                <span className="block animate-slide-up [animation-delay:150ms]">
                  antara <span className="relative inline-block px-2">
                    kebun
                    <svg
                      className="absolute -bottom-2 left-0 w-full opacity-60"
                      viewBox="0 0 200 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8 Q 50 2, 100 6 T 198 5"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-mustard"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  & kode.
                </span>
              </div>
            </h1>

            <p
              className="mt-10 max-w-xl text-lg leading-relaxed text-coffee/70 text-pretty animate-fade-up font-normal"
              style={{ animationDelay: "0.25s" }}
            >
              Saya <strong className="text-coffee font-semibold">Roedy Rustam</strong> — Trainer UMKM dan konsultan pengembangan desa yang menemani petani kopi Sulawesi dari bukit Toraja sampai ke meja barista, sambil menulis kode untuk membuat rantai pasok mereka lebih jujur.
            </p>

            <div
              className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                ref={magneticRef}
                to="/"
                hash="projects"
                className="group relative inline-flex items-center gap-4 rounded-full bg-coffee px-8 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream transition-all duration-500 hover:bg-terracotta hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-coffee/10 hover:shadow-terracotta/25"
              >
                Lihat karya
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/20 transition-transform duration-500 group-hover:rotate-45">→</span>
              </Link>
              
              <div className="flex items-center gap-8 pl-2">
                <button
                  onClick={() => window.print()}
                  className="group relative flex items-center font-mono text-[10px] uppercase tracking-[0.25em] text-coffee/60 transition-all hover:text-coffee"
                >
                  Unduh CV
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-coffee/20 transition-all duration-500 group-hover:w-full" />
                </button>
                <Link
                  to="/contact"
                  className="group relative flex items-center font-mono text-[10px] uppercase tracking-[0.25em] text-coffee/60 transition-all hover:text-coffee"
                >
                  Hubungi
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-coffee/20 transition-all duration-500 group-hover:w-full" />
                </Link>
              </div>
            </div>

            <div
              className="mt-20 grid grid-cols-3 gap-4 animate-fade-up md:gap-8"
              style={{ animationDelay: "0.55s" }}
            >
              {[
                { n: "7+", l: "Wilayah", icon: "🌿" },
                { n: "4", l: "Digital", icon: "💻" },
                { n: "BNSP", l: "Trainer", icon: "🏅" },
              ].map((s) => (
                <div key={s.l} className="group relative overflow-hidden rounded-3xl border border-coffee/5 bg-cream-soft/40 p-6 backdrop-blur-xl transition-all duration-500 hover:bg-cream-soft/60 hover:shadow-2xl hover:shadow-coffee/5">
                  <div className="absolute -right-2 -top-2 text-3xl opacity-[0.05] transition-all duration-700 group-hover:rotate-12 group-hover:scale-150 group-hover:opacity-[0.1]">
                    {s.icon}
                  </div>
                  <div className="font-display text-4xl text-coffee/90">{s.n}</div>
                  <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-coffee/40 font-medium">
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
            <div className="relative group">
              {/* Concentric Frame decoration */}
              <div className="absolute -inset-6 -rotate-3 rounded-[3rem] bg-gradient-to-br from-mustard/20 via-terracotta/10 to-sage/15 transition-all duration-1000 group-hover:rotate-0 group-hover:scale-105 opacity-60 blur-xl" />
              
              <div className="relative overflow-hidden rounded-[2.5rem] border-[12px] border-cream shadow-2xl shadow-coffee/10">
                <LiquidImage
                  src={heroImg}
                  alt="Ilustrasi biji kopi dan lanskap pegunungan Sulawesi"
                  className="hero-parallax w-full scale-110 transition-transform duration-75 will-change-transform"
                />
              </div>

              {/* Origin badge - Glassmorphism floating */}
              <div className="absolute -bottom-8 -left-8 max-w-[220px] rotate-[-2deg] rounded-3xl border border-cream/50 bg-cream/80 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta/10 text-sm">☕</span>
                  <div className="leading-tight">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-terracotta font-bold">
                      Impact Areas
                    </span>
                    <div className="mt-1 font-display text-base text-coffee">Toraja · Barru · Sinjai</div>
                  </div>
                </div>
              </div>

              {/* Single origin badge - Concentric Capsule */}
              <div className="absolute -top-6 -right-6 rotate-[8deg] rounded-full border border-cream/50 bg-coffee/90 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream shadow-2xl backdrop-blur-xl transition-all duration-500 hover:rotate-0 hover:scale-110">
                Sociopreneur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
