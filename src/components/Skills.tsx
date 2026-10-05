const groups = [
  {
    title: "AI & Agentic Systems",
    items: [
      "Model Context Protocol (MCP v1.x)",
      "Autonomous Multi-Agent Swarms",
      "Tool Calling & Structured Outputs",
      "LangGraph & Edge AI Integration",
    ],
  },
  {
    title: "Modern Fullstack & Edge",
    items: [
      "React 19 & TanStack Start (SSR)",
      "TypeScript 5.8+ & Python",
      "Cloudflare Workers & Pages Edge",
      "Type-Safe APIs & SQL Modeling",
    ],
  },
  {
    title: "Operasional Agro & Kopi",
    items: [
      "Perencanaan produksi agro (BNSP)",
      "Manajemen rantai pasok kopi",
      "Quality control kopi (SCA Protocols)",
      "Standarisasi pasar & kesiapan ekspor",
    ],
  },
  {
    title: "Pemberdayaan & Konteks",
    items: [
      "Kedaulatan digital desa (Pandu Desa)",
      "Fasilitasi radio komunitas (JRKI)",
      "Pendampingan UMKM & BUMDes",
      "Bahasa Bugis & komunikasi lintas budaya",
    ],
  },
];

export function Skills() {
  return (
    <section className="border-t border-white/10 bg-[#0b0908] py-24 text-stone-200 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-amber-400">
          <span>06</span>
          <span className="h-px w-8 bg-amber-400/60" />
          <span className="text-stone-400">Keahlian & Toolkit</span>
        </div>

        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-white">
          Toolkit yang dibentuk lapangan, <br />
          diperkuat <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">arsitektur agen cerdas.</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <div key={g.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#14110e]/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-[#1a1613] hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]">
              {/* Decorative top gradient glow */}
              <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 transition-colors group-hover:bg-amber-400/20">
                0{i + 1}
              </div>
              <h3 className="mt-8 font-display text-2xl text-white font-bold">{g.title}</h3>
              <ul className="mt-6 space-y-4">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-4 text-sm text-stone-300 transition-colors group-hover:text-white">
                    <span className="mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-cream/15 pt-8 font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
          <span>Kredensial & Spesialisasi:</span>
          <span className="text-mustard">★ Model Context Protocol (MCP) Architect</span>
          <span className="text-mustard">★ BNSP Perencanaan Produksi Industri Agro (2019)</span>
          <span className="text-mustard">★ Pelatih Kewirausahaan UMKM · BNSP</span>
          <span className="text-mustard">★ Rewako Export · Bank Indonesia</span>
        </div>
      </div>
    </section>
  );
}
