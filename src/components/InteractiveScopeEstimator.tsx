import { useState } from "react";
import { Calculator, Sparkles, Send, Check, Layers, Cpu, Database, Zap } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

interface SolutionOption {
  id: string;
  name: string;
  category: string;
  icon: string;
  baseDays: number;
  recommendedStack: string[];
  architectureSummary: string;
}

const solutionOptions: SolutionOption[] = [
  {
    id: "mcp_server",
    name: "Model Context Protocol (MCP Server)",
    category: "AI & Agents",
    icon: "⚡",
    baseDays: 10,
    recommendedStack: ["MCP v1.x", "TypeScript", "JSON-RPC 2.0", "Cloudflare Edge"],
    architectureSummary:
      "Server MCP terstandarisasi untuk menghubungkan Claude Desktop, Cursor, atau Gemini ke database operasional dan telemetri bisnis Anda.",
  },
  {
    id: "agent_swarm",
    name: "Multi-Agent Swarm Orchestrator",
    category: "AI & Agents",
    icon: "🤖",
    baseDays: 14,
    recommendedStack: ["LangGraph", "Multi-Agent State Machine", "Context Caching", "Webhook"],
    architectureSummary:
      "Jaringan sub-agen kolaboratif otonom dengan pembagian peran spesifik (evaluasi data, mitigasi risiko, pembuatan laporan terverifikasi).",
  },
  {
    id: "edge_web_app",
    name: "Fullstack Web App (React 19 & Edge)",
    category: "Modern Web",
    icon: "🌐",
    baseDays: 14,
    recommendedStack: ["TanStack Start", "React 19", "Tailwind CSS v4", "Cloudflare Pages"],
    architectureSummary:
      "Aplikasi web SSR ultra-cepat dengan arsitektur type-safe end-to-end, Core Web Vitals optimal, dan biaya server minim.",
  },
  {
    id: "agro_supply_chain",
    name: "Digitalisasi Rantai Pasok & QC Kopi",
    category: "Agro & Industry",
    icon: "☕",
    baseDays: 18,
    recommendedStack: ["Beanhub Architecture", "SCA CVA Protocols", "GIS Mapping", "BNSP Standards"],
    architectureSummary:
      "Sistem pencatatan terpadu dari kebun ke roastery, sertifikasi mutu SCA, pelacakan lot digital, dan laporan kedaulatan ekonomi petani.",
  },
];

const addons = [
  { id: "local_geo", name: "Optimasi SEO & AI Search Engine (AEO)", days: 3 },
  { id: "whatsapp_bot", name: "Integrasi Notifikasi WhatsApp Transaksional", days: 3 },
  { id: "edge_db", name: "Distribusi Database Edge (SQLite / Turso / D1)", days: 4 },
  { id: "bnsp_consult", name: "Konsultasi & Audit Perencanaan Agro (BNSP)", days: 4 },
];

export function InteractiveScopeEstimator() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionOption>(solutionOptions[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["local_geo"]);
  const [clientCompany, setClientCompany] = useState("");

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const totalDays =
    selectedSolution.baseDays +
    selectedAddons.reduce((acc, curr) => {
      const found = addons.find((a) => a.id === curr);
      return acc + (found ? found.days : 0);
    }, 0);

  const generateWhatsAppLink = () => {
    const addonNames = selectedAddons
      .map((id) => addons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Halo Bung Roedy Rustam, saya tertarik mendiskusikan kebutuhan arsitektur sistem:
- Kategori Solusi: ${selectedSolution.name}
- Fitur Tambahan: ${addonNames || "Standar"}
- Estimasi Sprint: ~${Math.ceil(totalDays / 7)} Minggu kerja
${clientCompany ? `- Dari: ${clientCompany}` : ""}

Mohon info jadwal discovery call yang tersedia. Terima kasih!`;

    return `https://wa.me/6281241003047?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="border-t border-white/10 bg-[#090807] py-24 md:py-32">
      <div className="content-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="05" label="Estimator Interaktif" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1.08] text-white">
              Rancang Kebutuhan Arsitektur <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">dan Dapatkan Blueprint Awal.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone-400">
            Pilih jenis solusi yang Anda butuhkan untuk melihat rekomendasi stack teknologi, estimasi sprint, dan memulai diskusi teknis langsung.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="space-y-8 lg:col-span-7">
            {/* Step 1: Solution */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                Langkah 1: Pilih Solusi Utama
              </span>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {solutionOptions.map((sol) => {
                  const isSelected = sol.id === selectedSolution.id;
                  return (
                    <button
                      key={sol.id}
                      onClick={() => setSelectedSolution(sol)}
                      className={`flex flex-col items-start rounded-2xl p-5 text-left transition-all duration-300 ${isSelected
                          ? "border border-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.15)] scale-[1.01]"
                          : "border border-white/10 bg-[#14110e]/70 hover:bg-[#181410] hover:border-white/20"
                        }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="text-2xl">{sol.icon}</span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400">
                          {sol.category}
                        </span>
                      </div>
                      <h4 className="mt-3 font-display text-base font-semibold text-white leading-snug">
                        {sol.name}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                Langkah 2: Fitur & Spesifikasi Tambahan
              </span>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {addons.map((add) => {
                  const isChecked = selectedAddons.includes(add.id);
                  return (
                    <button
                      key={add.id}
                      onClick={() => toggleAddon(add.id)}
                      className={`flex items-center justify-between rounded-xl p-4 text-left transition-all duration-300 ${isChecked
                          ? "border border-amber-500/50 bg-amber-500/10 text-white shadow-sm"
                          : "border border-white/10 bg-[#14110e]/70 text-stone-300 hover:bg-[#181410] hover:border-white/20"
                        }`}
                    >
                      <span className="text-xs font-medium leading-relaxed pr-3">{add.name}</span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${isChecked
                            ? "border-amber-400 bg-amber-500 text-stone-950 font-bold"
                            : "border-white/20 bg-white/5"
                          }`}
                      >
                        {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional info */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2">
                Nama Organisasi / Perusahaan (Opsional)
              </label>
              <input
                type="text"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                placeholder="Contoh: Roastery Kopi, Startup AI, atau BUMDes Sejahtera"
                className="w-full rounded-xl border border-white/10 bg-[#14110e] px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-[#14110e] p-8 text-stone-200 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-amber-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-stone-400">
                    Spesifikasi Blueprint
                  </span>
                </div>
                <span className="rounded-full bg-emerald-950/50 border border-emerald-500/30 px-3 py-1 font-mono text-[10px] text-emerald-400 font-medium">
                  Tersedia untuk Q4 2026 / 2027
                </span>
              </div>

              <div className="mt-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                  Solusi Terpilih
                </span>
                <h3 className="mt-1 font-display text-2xl text-white leading-tight">
                  {selectedSolution.name}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-stone-300">
                  {selectedSolution.architectureSummary}
                </p>
              </div>

              {/* Recommended Stack */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                  Rekomendasi Stack
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedSolution.recommendedStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-[10px] text-stone-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline estimate */}
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-black/40 p-4 border border-white/5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400">
                    Estimasi Sprint
                  </span>
                  <div className="font-display text-2xl text-white mt-0.5">
                    ~{Math.ceil(totalDays / 7)} Minggu <span className="text-xs text-stone-400 font-sans">({totalDays} hari kerja)</span>
                  </div>
                </div>
                <Zap className="h-6 w-6 text-amber-400" />
              </div>

              {/* WhatsApp Action Button */}
              <div className="mt-8">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone-950 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Kirim Blueprint ke WhatsApp</span>
                </a>
                <p className="mt-3 text-center text-[10px] font-mono text-stone-500">
                  Respons langsung dalam waktu 1x24 jam via chat teknis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
