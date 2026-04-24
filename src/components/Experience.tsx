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
          Tiga peran, satu <span className="italic text-terracotta">benang merah</span>: efisiensi
          yang berpihak.
        </h2>

        <div className="mt-16 space-y-px overflow-hidden rounded-2xl border border-border">
          {experiences.map((exp, i) => (
            <article
              key={exp.role}
              className="group relative grid gap-6 bg-card p-8 transition-colors hover:bg-cream-soft md:grid-cols-12 md:gap-10 md:p-12"
            >
              <div className="md:col-span-4 flex flex-col items-start">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                  <span>{String(i + 1).padStart(2, "0")} · {exp.period}</span>
                  <span className="text-coffee/20">|</span>
                  <span className="font-bold">BAB {exp.chapter}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl text-coffee md:text-4xl">{exp.role}</h3>
                <div className="mt-2 text-base text-coffee/70">{exp.org}</div>
                <div className="mt-auto pt-4">
                  <CopyLinkBtn chapter={exp.chapter} label={exp.role} />
                </div>
              </div>
              <ul className="space-y-4 md:col-span-8">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-4 text-base leading-relaxed text-coffee/80">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
