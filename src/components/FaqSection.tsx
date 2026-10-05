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
    question: "Siapa Roedy Rustam dan apa keahlian utamanya?",
    answer:
      "Roedy Rustam adalah AI Systems Architect & Konsultan Agro-Industri di Sulawesi Selatan. Keahliannya mencakup perancangan server Model Context Protocol (MCP v1.x), orkestrasi multi-agen otonom, pengembangan web modern React 19/TanStack Start, dan transformasi digital rantai pasok kopi hulu-hilir.",
    category: "ai",
  },
  {
    question: "Apa itu AgroAgent MCP Server dan bagaimana cara kerjanya?",
    answer:
      "AgroAgent adalah server Model Context Protocol (MCP) terstandarisasi yang menghubungkan agen AI otonom (Claude Desktop, Cursor, Gemini) langsung ke database telemetri kebun kopi, catatan mutu sensorik, dan data koperasi tani secara aman dan terenkripsi.",
    category: "ai",
  },
  {
    question: "Layanan profesional apa saja yang ditawarkan untuk klien?",
    answer:
      "Layanan utama mencakup konsultasi arsitektur Model Context Protocol (MCP Server), perancangan sistem multi-agen swarm, pengembangan aplikasi web edge produksi (React 19 & Cloudflare), serta konsultasi rantai pasok kopi standar SCA dan kedaulatan data desa.",
    category: "consulting",
  },
  {
    question: "Bagaimana Roedy Rustam memadukan AI dengan dunia agro riil?",
    answer:
      "Dengan latar belakang Teknik Industri dan sertifikasi BNSP, Roedy mengintegrasikan agen cerdas ke titik kritis fisik: verifikasi mutu SCA, pemantauan sensorik kebun, dan otomasi rute distribusi pegunungan di Toraja, Barru, dan Sinjai.",
    category: "agro",
  },
  {
    question: "Apakah Roedy Rustam menerima proyek konsultasi jarak jauh (remote)?",
    answer:
      "Ya. Roedy Rustam melayani konsultasi rekayasa sistem AI, pembuatan MCP server custom, dan arsitektur web modern untuk klien di seluruh Indonesia maupun kolaborasi remote internasional.",
    category: "consulting",
  },
  {
    question: "Bagaimana alur memulai konsultasi atau penjajakan proyek?",
    answer:
      "Klien dapat memulai dengan konsultasi singkat via formulir kontak atau WhatsApp resmi (+6281241003047) untuk mendiskusikan kebutuhan arsitektur, estimasi lingkup kerja, dan jadwal implementasi.",
    category: "consulting",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="border-t border-border bg-background py-24 md:py-32">
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
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${isOpen
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
                    className={`h-5 w-5 shrink-0 text-coffee/50 transition-transform duration-300 ${isOpen ? "rotate-180 text-terracotta" : ""
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
            <a href="https://wa.me/6281241003047" target="_blank" rel="noopener noreferrer" className="text-terracotta underline font-semibold">
              Tanyakan langsung via WhatsApp ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
