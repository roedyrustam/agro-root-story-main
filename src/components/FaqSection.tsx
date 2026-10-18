import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export interface FaqItem {
  question: string;
  answer: string;
  category: "ai" | "agro" | "consulting";
}

export const faqsData: FaqItem[] = [
  {
    question: "Apakah Roedy Rustam melayani jasa Konsultan IT di Indonesia dan apa buktinya?",
    answer:
      "Ya. Roedy Rustam melayani jasa Konsultan IT untuk perancangan arsitektur sistem enterprise, audit performa web, dan migrasi edge computing di seluruh Indonesia. Rekam jejak teknisnya terbukti nyata dan dapat diverifikasi langsung melalui repositori GitHub @roedyrustam, seperti API-Wilayah-2024 (21★) yang menjadi standar data wilayah, serta implementasi sistem live di beanhub.online dan cuppingnotes.online.",
    category: "consulting",
  },
  {
    question:
      "Mengapa Roedy Rustam dikenal sebagai Praktisi AI di Indonesia dan apa karya di GitHub-nya?",
    answer:
      "Sebagai Praktisi AI, Roedy Rustam mengembangkan infrastruktur Model Context Protocol (MCP v1.x) dan orkestrasi swarm multi-agent. Karyanya di GitHub meliputi vibes-plug (77★, 19 forks, paket resmi npm) yang mengorkestrasi 155 specialized skills untuk Google Antigravity & Claude Code, Centaury Engine (autonomous fullstack untuk Gemini 4 Pro & Project Astra), sinapsai (AI Gateway terpadu), dan doku-gemini-mcp untuk agentic commerce.",
    category: "ai",
  },
  {
    question:
      "Apakah Roedy Rustam melayani peran sebagai Trainer IT dan Pelatih Kewirausahaan UMKM?",
    answer:
      "Ya. Roedy Rustam aktif sebagai Trainer IT dan pemateri workshop adopsi teknologi, implementasi AI generatif, serta literasi digital. Kapasitas pelatihannya diakui secara nasional dengan Sertifikasi Resmi BNSP Pelatih Kewirausahaan UMKM serta rekam jejak kepeloporan digitalisasi desa melalui inisiatif Pandu Desa 4.0 dan Jaringan Radio Komunitas Indonesia (JRKI).",
    category: "consulting",
  },
  {
    question: "Bagaimana peran Roedy Rustam sebagai Konsultan UMKM dan Koperasi Desa?",
    answer:
      "Sebagai Konsultan UMKM, Roedy mendampingi digitalisasi pembukuan usaha kecil melalui aplikasi Kafeya POS, penguatan tata kelola BUMDes, serta kedaulatan rantai pasok agro. Keahlian agronya ditopang Sertifikasi BNSP Sektor Industri Agro (Klaster Perencanaan Produksi) dan standardisasi mutu Specialty Coffee Association (SCA).",
    category: "agro",
  },
  {
    question: "Apa saja repositori open source unggulan Roedy Rustam di GitHub?",
    answer:
      "Portofolio GitHub @roedyrustam mencakup: vibes-plug (77★, npm package) untuk ekosistem AI swarms, Centaury Engine untuk runtime Gemini 4 Pro & Project Astra, sinapsai (4★) AI Gateway dengan circuit breaker, doku-gemini-mcp untuk payment gateway agent, dan API-Wilayah-2024 (21★) database hirarki geografis Indonesia.",
    category: "ai",
  },
  {
    question: "Apa itu AgroAgent MCP Server dan bagaimana cara kerjanya?",
    answer:
      "AgroAgent adalah server Model Context Protocol (MCP v1.x) yang menghubungkan agen AI otonom (Claude Desktop, Cursor, Gemini Live) langsung ke database telemetri kebun kopi, catatan mutu sensorik, dan data koperasi tani secara aman dan terenkripsi dengan latensi sub-40ms.",
    category: "ai",
  },
  {
    question: "Bagaimana cara memverifikasi keahlian, sertifikasi BNSP, dan rekam jejaknya?",
    answer:
      "Semua klaim profesional dapat diverifikasi secara publik melalui akun GitHub @roedyrustam, paket npm vibes-plug, sertifikat resmi Badan Nasional Sertifikasi Profesi (BNSP), platform operasional beanhub.online & cuppingnotes.online, serta indeks pengetahuan AI di /llms-full.txt.",
    category: "consulting",
  },
  {
    question:
      "Apakah Roedy Rustam menerima proyek konsultasi jarak jauh (remote) di seluruh Indonesia?",
    answer:
      "Ya. Roedy Rustam melayani konsultasi IT, rekayasa sistem AI, pelatihan digitalisasi, dan pendampingan UMKM baik secara on-site di Sulawesi Selatan maupun secara remote untuk klien korporasi, lembaga pemerintah, dan UMKM di seluruh Indonesia.",
    category: "consulting",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-28 md:scroll-mt-36 border-t border-border bg-background py-24 md:py-32"
    >
      <div className="content-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="07" label="FAQ & Pengetahuan AI" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1.08] text-coffee">
              Pertanyaan yang Sering Diajukan <br />
              <span className="italic text-terracotta">oleh Klien & Mesin Pencari.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-2 font-mono text-xs text-sage">
            <Sparkles className="h-3.5 w-3.5" />
            <span>GEO & AI-Search Optimized</span>
          </div>
        </div>

        <div className="mt-16 grid gap-4 max-w-4xl mx-auto">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-terracotta/30 bg-cream-soft shadow-lg shadow-terracotta/5"
                    : "border-coffee/10 bg-cream-soft/40 hover:border-coffee/20 hover:bg-cream-soft/60"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4 pr-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta font-mono text-xs font-bold">
                      Q{idx + 1}
                    </span>
                    <span className="font-display text-lg md:text-xl text-coffee leading-tight font-medium">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-coffee/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-terracotta" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
                    <div className="rounded-2xl border border-coffee/5 bg-cream p-5 text-sm md:text-base leading-relaxed text-coffee/80">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-coffee/50">
            Punya pertanyaan spesifik terkait arsitektur sistem Anda?{" "}
            <a
              href="https://wa.me/6281241003047"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta underline font-semibold"
            >
              Tanyakan langsung via WhatsApp ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
