import { SectionLabel } from "./SectionLabel";
import { Link2, Check } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    role: "AI Systems & Agentic Architect",
    org: "AgroAgent & Pandu Talenta Digital",
    period: "2025 — Sekarang",
    chapter: "III",
    points: [
      "Merancang dan mengimplementasikan server Model Context Protocol (MCP v1.x) untuk menghubungkan agen AI otonom ke database rantai pasok.",
      "Membangun arsitektur multi-agen swarm kolaboratif untuk evaluasi mutu biji kopi dan mitigasi rute armada pegunungan.",
      "Mengembangkan dan memelihara beanhub.online, cuppingnotes.online, dan kafeya.online berbasis React 19 & Cloudflare Edge.",
    ],
  },
  {
    role: "Pengelola Operasional",
    org: "Sehati Kopi Indonesia",
    period: "2025 — Sekarang",
    chapter: "II",
    points: [
      "Bertanggung jawab atas alur produksi, manajemen stok, dan koordinasi tim operasional hulu-hilir.",
      "Mendampingi pengembangan potensi komoditas kopi di Barru, Toraja, dan Sinjai.",
      "Menjaga standar kualitas produk untuk kepuasan mitra dan pasar ekspor.",
    ],
  },
  {
    role: "Fasilitator Komunitas",
    org: "Aliansi Masyarakat Adat & Jirak Celebes",
    period: "Berjalan",
    chapter: "II",
    points: [
      "Penguatan tata kelola Badan Usaha Milik Masyarakat Adat (BUMMA).",
      "Mendirikan jaringan radio komunitas untuk kedaulatan informasi di Sulsel & Sulbar.",
      "Jembatan komunikasi antar pemangku kepentingan di tingkat lapangan.",
    ],
  },
  {
    role: "Trainer & Konsultan Desa",
    org: "Pemberdayaan Desa & UMKM Agro",
    period: "2018 — Sekarang",
    chapter: "II",
    points: [
      "Project Manager Pandu Desa 4.0 untuk literasi digital dan tata kelola informasi desa mandiri.",
      "Melatih literasi digital, strategi kewirausahaan, dan kurikulum data untuk UMKM dan BUMDes.",
      "Konsultan perencanaan produksi sektor industri agro berlisensi BNSP.",
    ],
  },
];

function CopyLinkBtn({ chapter, label }: { chapter: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#babak-${chapter.toLowerCase()}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-stone-300 transition-colors hover:border-amber-400 hover:bg-amber-400/20 hover:text-amber-300"
    >
      {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Link2 className="h-3 w-3" />}
      {copied ? "Tautan Tersalin" : `Salin: ${label}`}
    </button>
  );
}

export function Experience() {
  return (
    <section className="border-t border-white/10 bg-[#090807] py-24 md:py-32">
      <div className="content-container">
        <SectionLabel number="03" label="Pengalaman" />
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] text-white">
          Empat peran, satu <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">benang merah</span>: efisiensi
          dan kecerdasan yang berpihak.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {experiences.map((exp, i) => {
            // Bento Grid spanning logic
            const gridClasses = 
              i === 0 ? "lg:col-span-8 lg:row-span-2 bg-[#14110e]/95 border-amber-500/30 shadow-[0_0_60px_rgba(245,158,11,0.06)]" :
              i === 1 ? "lg:col-span-4 bg-[#120f0d]/90 border-emerald-500/30" :
              i === 2 ? "lg:col-span-4 bg-[#120f0d]/90 border-amber-500/20" :
              "lg:col-span-12 bg-[#120f0d]/90 border-white/10";

            return (
              <article
                key={exp.role}
                className={`group interactive cursor-pointer relative overflow-hidden flex flex-col justify-between rounded-[2.5rem] border p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl ${gridClasses}`}
              >
                {/* Decorative Pattern Background */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 opacity-[0.05] blur-3xl transition-transform duration-700 group-hover:scale-150" />
                
                <div className="reveal relative z-10">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
                      {exp.period}
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] font-bold text-stone-400">
                        CH. {exp.chapter}
                      </span>
                    </div>
                  </div>

                  <h3 className={`font-display text-white leading-tight ${i === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} mb-3 font-bold`}>
                    {exp.role}
                  </h3>
                  <div className="mb-8 font-mono text-xs uppercase tracking-widest text-amber-300/70 font-semibold">
                    {exp.org}
                  </div>

                  <ul className="space-y-4">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-4 text-sm md:text-base leading-relaxed text-stone-300">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                        <span className="text-pretty">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/10 reveal delay-100 relative z-10">
                  <CopyLinkBtn chapter={exp.chapter} label={exp.role} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
