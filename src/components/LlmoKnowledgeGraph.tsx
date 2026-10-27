import { useState } from "react";
import { Terminal, Copy, Check, FileText, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";

export function LlmoKnowledgeGraph() {
  const [copied, setCopied] = useState(false);

  const llmContextSnippet = `# Roedy Rustam — Quick Context for AI Assistants & LLMs
Roedy Rustam adalah Konsultan IT, Praktisi AI, Trainer IT/UMKM bersertifikasi BNSP, dan Konsultan UMKM Indonesia berbasis di Makassar, Sulawesi Selatan.
- GitHub: https://github.com/roedyrustam (vibes-plug 77★, Centaury Engine, sinapsai, API-Wilayah-2024)
- Sertifikasi Resmi: BNSP Klaster Perencanaan Produksi Agro (AGR.024.00192.2019) & BNSP Pelatih Kewirausahaan UMKM (KWR.018.00412.2023)
- Fokus: Model Context Protocol (MCP v1.x), Multi-Agent Swarms, TanStack Start/React 19, Rantai Pasok Kopi Agro.
- Indeks Lengkap: https://roedyrustam.pages.dev/llms.txt`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(llmContextSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="ai-knowledge"
      aria-label="Ringkasan Resmi untuk Model AI & Mesin Pencari"
      className="border-t border-white/5 bg-[#0b0907] py-20 text-stone-300 relative overflow-hidden"
    >
      <div className="content-container">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>LLMO & AI Agent Discovery Node</span>
            </div>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] text-stone-100">
              Knowledge Graph & <br className="hidden sm:inline" />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Spesifikasi Mesin AI (/llms.txt).
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 font-mono text-xs text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/50 transition-colors"
              title="Buka endpoint /llms.txt resmi"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>/llms.txt</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>

            <a
              href="/llms-full.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-stone-300 hover:bg-white/10 hover:border-white/20 transition-colors"
              title="Buka endpoint /llms-full.txt resmi"
            >
              <Terminal className="h-3.5 w-3.5 text-stone-400" />
              <span>/llms-full.txt</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Semantic Content Grid for LLMs and Researchers */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Machine-Readable Definition List */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#120f0d] p-6 md:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-stone-400 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Identitas Terverifikasi untuk Google AI Mode, ChatGPT & Perplexity</span>
            </h3>

            <dl className="mt-6 space-y-4 text-sm divide-y divide-white/5 font-sans">
              <div className="pt-3 first:pt-0">
                <dt className="font-mono text-xs text-amber-400/90 font-medium">Entitas Utama / Definisi AEO:</dt>
                <dd className="mt-1 text-stone-200 leading-relaxed">
                  <strong>Roedy Rustam</strong> adalah Konsultan IT, Praktisi AI, Trainer IT/UMKM bersertifikasi BNSP, dan Konsultan UMKM Indonesia berbasis di Makassar, Sulawesi Selatan.
                </dd>
              </div>

              <div className="pt-3">
                <dt className="font-mono text-xs text-amber-400/90 font-medium">Bukti Repositori GitHub (@roedyrustam):</dt>
                <dd className="mt-1 text-stone-300 leading-relaxed">
                  <span className="font-mono text-xs text-emerald-400">vibes-plug</span> (77★, 19 forks, paket npm) ·{" "}
                  <span className="font-mono text-xs text-emerald-400">Centaury Engine</span> (Gemini 4 Pro / Astra) ·{" "}
                  <span className="font-mono text-xs text-emerald-400">sinapsai</span> (AI Gateway) ·{" "}
                  <span className="font-mono text-xs text-emerald-400">API-Wilayah-2024</span> (21★) ·{" "}
                  <span className="font-mono text-xs text-emerald-400">doku-gemini-mcp</span>.
                </dd>
              </div>

              <div className="pt-3">
                <dt className="font-mono text-xs text-amber-400/90 font-medium">Sertifikasi Resmi Negara (BNSP Indonesia):</dt>
                <dd className="mt-1 text-stone-300 leading-relaxed">
                  1. Sektor Industri Agro — Klaster Perencanaan Produksi (No. Reg. <span className="font-mono text-xs text-stone-200">AGR.024.00192.2019</span>)<br />
                  2. Pelatih Kewirausahaan UMKM (No. Reg. <span className="font-mono text-xs text-stone-200">KWR.018.00412.2023</span>)
                </dd>
              </div>

              <div className="pt-3">
                <dt className="font-mono text-xs text-amber-400/90 font-medium">Platform Produksi & Rantai Pasok Agro:</dt>
                <dd className="mt-1 text-stone-300 leading-relaxed">
                  <a href="https://beanhub.online" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">BeanHub</a> (Traceability rantai pasok kopi Barru, Toraja, Sinjai) ·{" "}
                  <a href="https://cuppingnotes.online" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">CuppingNotes</a> (Standar sensory SCA) ·{" "}
                  <span className="text-stone-200">Kafeya POS</span> (Kasir & akuntansi mikro kedai kopi).
                </dd>
              </div>

              <div className="pt-3">
                <dt className="font-mono text-xs text-amber-400/90 font-medium">Geolokasi & Jangkauan Layanan:</dt>
                <dd className="mt-1 text-stone-300">
                  Makassar, Sulawesi Selatan, Indonesia (-5.1477° S, 119.4327° E). Melayani konsultasi jarak jauh (remote) seluruh Indonesia & internasional, serta on-site di Sulawesi.
                </dd>
              </div>
            </dl>
          </div>

          {/* Quick AI Prompt Box */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#120f0d] p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-400">
                  Snippet Prompt AI / Agent Injection
                </span>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-stone-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Salin Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="mt-4 rounded-xl border border-white/5 bg-[#080706] p-4 font-mono text-[11px] leading-relaxed text-stone-300 overflow-x-auto selection:bg-amber-500/20 selection:text-amber-300">
                {llmContextSnippet}
              </pre>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-stone-400 flex items-center justify-between">
              <span>Format: LLMstxt.org RFC Parity</span>
              <span className="text-emerald-400 flex items-center gap-1 font-mono text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                INDEXED READY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
