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
    org: "Aliansi Masyarakat Adat Sulawesi Selatan",
    period: "Berjalan",
    chapter: "II",
    points: [
      "Penguatan tata kelola Badan Usaha Milik Masyarakat Adat (BUMMA).",
      "Memetakan peluang pasar dan akses distribusi produk lokal komunitas.",
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
    period: "2024 — Sekarang",
    chapter: "II",
    points: [
      "Melatih literasi digital dan strategi kewirausahaan untuk UMKM di berbagai wilayah.",
      "Konsultan pengembangan potensi ekonomi desa melalui pemetaan komoditas lokal.",
      "Menyusun strategi transformasi digital untuk meningkatkan daya saing produk desa.",
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
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel number="03" label="Pengalaman" />
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
          Empat peran, satu <span className="italic text-terracotta">benang merah</span>: efisiensi
          yang berpihak.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {experiences.map((exp, i) => {
            // Memberikan ukuran grid yang berbeda untuk efek Bento
            // Card pertama lebih besar (col-span-7), sisanya di sisi kanan (col-span-5)
            const isFeatured = i === 0;
            const isFullWidth = i === 3;
            const gridClasses = isFeatured
              ? "lg:col-span-7 lg:row-span-2"
              : isFullWidth
              ? "lg:col-span-12"
              : "lg:col-span-5";

            return (
              <article
                key={exp.role}
                className={`group relative overflow-hidden flex flex-col justify-between rounded-3xl border border-coffee/10 bg-cream-soft p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(44,36,27,0.15)] ${gridClasses}`}
              >
                <div className="reveal">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="font-mono text-xs uppercase tracking-widest text-terracotta">
                      {exp.period}
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-coffee/5 px-2.5 py-1 font-mono text-[10px] font-bold text-coffee/60">
                        BAB {exp.chapter}
                      </span>
                    </div>
                  </div>

                  <h3 className={`font-display text-coffee ${isFeatured ? 'text-4xl md:text-5xl' : 'text-3xl'} mb-2`}>
                    {exp.role}
                  </h3>
                  <div className="mb-8 text-base font-medium text-coffee/80">
                    {exp.org}
                  </div>

                  <ul className="space-y-4">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-4 text-base leading-relaxed text-coffee/70">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/80" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-coffee/5 reveal delay-100">
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
