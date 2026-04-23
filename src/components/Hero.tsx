import heroImg from "@/assets/hero-coffee.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* decorative grain */}
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-terracotta animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <span>Portfolio · 2025</span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.9] text-coffee text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Membangun{" "}
              <span className="italic text-terracotta">jembatan</span>{" "}
              antara{" "}
              <span className="relative inline-block">
                kebun
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q 50 2, 100 6 T 198 5" stroke="currentColor" strokeWidth="2" className="text-mustard" strokeLinecap="round" />
                </svg>
              </span>{" "}
              & kode.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-coffee/75 text-pretty animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Saya <strong className="text-coffee">Roedy Rustam</strong> — Praktisi Pertanian dan Pegiat Adat yang menemani petani kopi Sulawesi
              dari bukit Toraja sampai ke meja barista, sambil menulis kode untuk membuat rantai pasok mereka lebih jujur.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-coffee px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta"
              >
                Lihat karya
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-[0.2em] text-coffee/80 underline-offset-4 hover:text-terracotta hover:underline"
              >
                Ngobrol kopi & data
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 animate-fade-up" style={{ animationDelay: "0.55s" }}>
              {[
                { n: "3", l: "Wilayah dampingan" },
                { n: "2", l: "Produk digital" },
                { n: "BNSP", l: "Tersertifikasi" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-terracotta md:text-4xl">{s.n}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-4 -rotate-2 rounded-3xl bg-mustard/30" />
              <img
                src={heroImg}
                alt="Ilustrasi biji kopi dan lanskap pegunungan Sulawesi"
                width={1024}
                height={1024}
                className="relative w-full rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 max-w-[180px] rotate-[-3deg] rounded-lg bg-cream px-4 py-3 shadow-xl ring-1 ring-border">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-terracotta">Origin</div>
                <div className="mt-1 font-display text-sm text-coffee">Barru · Toraja · Sinjai</div>
              </div>
              <div className="absolute -top-4 -right-4 rotate-[6deg] rounded-full bg-coffee px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream">
                Single origin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
