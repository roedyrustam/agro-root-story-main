import { SectionLabel } from "./SectionLabel";
import { Link2, Check } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    role: "Pengelola Operasional",
    org: "Sehati Kopi Indonesia",
    period: "2025 — Sekarang",
    chapter: "II",
    points: [
      "Bertanggung jawab atas alur produksi, manajemen stok, dan koordinasi tim operasional.",
      "Mendampingi pengembangan potensi komoditas kopi di Barru, Toraja, dan Sinjai.",
      "Menjaga standar kualitas produk untuk kepuasan mitra dan pelanggan.",
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
    role: "Pengembang Sistem",
    org: "Pandu Talenta Digital",
    period: "2025 — Sekarang",
    chapter: "III",
    points: [
      "Merancang dan memelihara platform beanhub.online untuk pencatatan rantai pasok kopi.",
      "Mengembangkan Kafeya POS — alat bantu akuntansi UMKM sesuai standar pelaporan.",
      "Merancang dan memelihara sistem cuppingnotes.online untuk pencatatan kualitas kopi.",
    ],
  },
  {
    role: "Trainer & Konsultan",
    org: "Pemberdayaan Desa & UMKM",
    period: "2018 — Sekarang",
    chapter: "II",
    points: [
      "Project Manager Pandu Desa 4.0 untuk literasi digital dan tata kelola informasi desa.",
      "Melatih literasi digital dan strategi kewirausahaan untuk UMKM di berbagai wilayah.",
      "Konsultan pengembangan ekonomi desa melalui pemetaan komoditas lokal.",
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
      className="mt-6 inline-flex items-center gap-2 rounded-full border border-coffee/15 bg-cream px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-coffee/70 transition-colors hover:border-terracotta hover:bg-terracotta hover:text-cream"
    >
      {copied ? <Check className="h-3 w-3" /> : <Link2 className="h-3 w-3" />}
      {copied ? "Tautan Tersalin" : `Salin: ${label}`}
    </button>
  );
}

export function Experience() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="content-container">
        <SectionLabel number="03" label="Pengalaman" />
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] text-coffee">
          Empat peran, satu <span className="italic text-terracotta">benang merah</span>: efisiensi
          yang berpihak.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {experiences.map((exp, i) => {
            // Bento Grid spanning logic
            const gridClasses = 
              i === 0 ? "lg:col-span-8 lg:row-span-2 bg-cream-soft" :
              i === 1 ? "lg:col-span-4 bg-sage/5 border-sage/20" :
              i === 2 ? "lg:col-span-4 bg-mustard/5 border-mustard/20" :
              "lg:col-span-12 bg-terracotta/5 border-terracotta/20";

            return (
              <article
                key={exp.role}
                className={`group relative overflow-hidden flex flex-col justify-between rounded-[2.5rem] border border-coffee/10 p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(44,36,27,0.15)] ${gridClasses}`}
              >
                {/* Decorative Pattern Background */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-current opacity-[0.03] blur-3xl transition-transform duration-700 group-hover:scale-150" />
                
                <div className="reveal relative z-10">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">
                      {exp.period}
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full border border-coffee/10 bg-coffee/5 px-3 py-1 font-mono text-[10px] font-bold text-coffee/60">
                        CH. {exp.chapter}
                      </span>
                    </div>
                  </div>

                  <h3 className={`font-display text-coffee leading-tight ${i === 0 ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'} mb-3`}>
                    {exp.role}
                  </h3>
                  <div className="mb-8 font-mono text-xs uppercase tracking-widest text-coffee/50">
                    {exp.org}
                  </div>

                  <ul className="space-y-5">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-4 text-base leading-relaxed text-coffee/70">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/60" />
                        <span className="text-pretty">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10 pt-8 border-t border-coffee/10 reveal delay-100 relative z-10">
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
