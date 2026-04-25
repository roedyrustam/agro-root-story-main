import React from "react";

const insights = [
  {
    category: "Philosophy",
    date: "Mar 2026",
    title: "Jembatan Kepercayaan: Mengapa Data Saja Tidak Cukup di Hulu.",
    excerpt: "Membangun ekosistem digital di desa bukan tentang memaksa petani memakai aplikasi, tapi tentang membangun kepercayaan melalui transparansi data.",
  },
  {
    category: "Technical",
    date: "Feb 2026",
    title: "SCA CVA 2025: Standar Baru Evaluasi Kopi dalam Genggaman.",
    excerpt: "Bagaimana protokol sensory terbaru dari SCA mengubah cara kita menilai kualitas dan harga kopi di tingkat petani.",
  },
  {
    category: "Case Study",
    date: "Jan 2026",
    title: "Psikologi Pencatatan: Mengapa UMKM Takut pada Akuntansi.",
    excerpt: "Analisis lapangan mengenai hambatan mental pemilik warung dalam mengadopsi sistem pencatatan digital dan solusinya.",
  },
];

export function Insights() {
  return (
    <section className="py-24 md:py-32 bg-cream-soft border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Field Notes</div>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-coffee text-balance">
              Catatan <br />
              <span className="italic text-terracotta">Lapangan.</span>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 hover:text-terracotta transition-colors">
            Lihat Semua Tulisan ↗
          </button>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {insights.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex flex-col h-full border-l border-coffee/10 pl-8 transition-all duration-500 group-hover:border-terracotta">
                <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-coffee/40">
                  <span>{item.category}</span>
                  <span className="h-1 w-1 rounded-full bg-coffee/20" />
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-coffee leading-tight transition-colors group-hover:text-terracotta">
                  {item.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-coffee/60">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-coffee/40 group-hover:text-terracotta transition-colors">
                  Baca Selengkapnya
                  <span className="translate-x-0 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
