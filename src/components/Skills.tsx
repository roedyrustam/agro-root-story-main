import { SectionLabel } from "./SectionLabel";

const groups = [
  {
    title: "Operasional Agro",
    items: [
      "Perencanaan produksi",
      "Manajemen rantai pasok",
      "Quality control kopi",
      "Standar pasar ekspor",
    ],
  },
  {
    title: "Pemberdayaan",
    items: [
      "Fasilitasi Radio Komunitas",
      "Literasi Digital Desa (Pandu Desa)",
      "Pendampingan UMKM & BUMDes",
      "Komunikasi lintas pemangku",
    ],
  },
  {
    title: "Teknis & Digital",
    items: [
      "React & TypeScript",
      "SQL & data modeling",
      "Sistem informasi akuntansi",
      "Manajemen data (Excel)",
    ],
  },
  {
    title: "Bahasa & Konteks",
    items: [
      "Bahasa Indonesia",
      "Bahasa Bugis",
      "Komunikasi lintas budaya",
      "Pemahaman komunitas adat",
    ],
  },
];

export function Skills() {
  return (
    <section className="border-t border-border bg-coffee py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-mustard">
          <span>06</span>
          <span className="h-px w-8 bg-mustard/60" />
          <span className="text-cream/70">Keahlian</span>
        </div>

        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-cream">
          Toolkit yang dibentuk lapangan, <br />
          bukan ruang kelas.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <div key={g.title} className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-mustard/30 hover:bg-cream/10 hover:shadow-[0_20px_40px_-15px_rgba(224,181,101,0.1)]">
              {/* Decorative top gradient glow */}
              <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-mustard/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/10 font-mono text-[10px] uppercase tracking-[0.2em] text-mustard transition-colors group-hover:bg-mustard/20">
                0{i + 1}
              </div>
              <h3 className="mt-8 font-display text-2xl text-cream">{g.title}</h3>
              <ul className="mt-6 space-y-4">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-4 text-sm text-cream/70 transition-colors group-hover:text-cream/90">
                    <span className="mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-mustard/30 bg-mustard/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-mustard" />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-cream/15 pt-8 font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
          <span>Kredensial:</span>
          <span className="text-mustard">★ BNSP Perencanaan Produksi Industri Agro (2019)</span>
          <span className="text-mustard">★ Pelatih Kewirausahaan UMKM · BNSP</span>
          <span className="text-mustard">★ Rewako Export · Bank Indonesia</span>
        </div>
      </div>
    </section>
  );
}
