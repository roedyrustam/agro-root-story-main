import { Link } from "@tanstack/react-router";
import { useMagnetic } from "@/hooks/use-magnetic";
import heroImg from "../assets/hero-coffee.jpg";
import { LiquidImage } from "./LiquidImage";

export function Hero() {
  const magneticRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative grain & obsidian mesh */}
      <div className="grain absolute inset-0 opacity-40 pointer-events-none" />

      {/* Luminous Ambient Glows */}
      <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-orange-600/10 blur-[100px] pointer-events-none" />

      <div className="relative content-container">
        {/* Main Bento Grid Header */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (Span 7): Identity, Vision & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Live Pulsing Node Status Pill */}
            <div className="mb-6 flex flex-wrap items-center gap-2.5 animate-fade-up">
              <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                NODE: AGENTIC DEV ONLINE
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300">
                <span className="text-amber-400">⚡</span> MCP v1.x Ready
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
                Sulawesi · 119.4° E, 5.1° S
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.08] tracking-tight text-stone-100 text-balance">
              <span className="block">
                Membangun <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">jembatan cerdas</span>
              </span>
              <span className="block mt-1">
                antara <span className="relative inline-block text-white font-semibold underline decoration-amber-500/50 decoration-wavy decoration-2">agen AI</span>, kode modern, & ekosistem agro.
              </span>
            </h1>

            {/* 32-word AEO Extraction Paragraph */}
            <p
              className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-stone-300 text-pretty font-normal animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Saya <strong className="text-white font-medium">Roedy Rustam</strong> — AI Systems & Agentic Developer serta Konsultan Agro-Industri berbasis di Makassar, Sulawesi Selatan. Mengembangkan arsitektur Model Context Protocol (MCP), orkestrasi multi-agen otonom, dan transformasi rantai pasok kopi hulu-hilir dengan dampak riil terukur.
            </p>

            {/* Action Row */}
            <div
              className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <Link
                ref={magneticRef}
                to="/"
                hash="estimator"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-950 font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Rancang Blueprint
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/20 text-stone-950 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                to="/"
                hash="mcp-console"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-200 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 hover:text-white backdrop-blur-md"
              >
                <span className="text-emerald-400">▶</span> Konsol MCP
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-amber-300"
              >
                Konsultasi & Kontak ↗
              </Link>
            </div>
          </div>

          {/* Right Column (Span 5): Live Holographic Telemetry & Node Visual Card */}
          <div
            className="lg:col-span-5 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative group rounded-3xl border border-white/10 bg-[#14110e]/80 p-5 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-amber-500/30">
              {/* Telemetry Console Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[10px] uppercase tracking-wider text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-stone-200 font-semibold">NODE_ID: RR-SULAWESI-01</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">EDGE POP:</span>
                  <span className="text-emerald-400 font-medium">UPTIME 99.98%</span>
                </div>
              </div>

              {/* Main Visual Image with Parallax & Liquid Mask */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-inner group/img aspect-[4/3]">
                <LiquidImage
                  src={heroImg}
                  alt="Roedy Rustam - AI Systems & Agro-Tech Specialist"
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent opacity-80" />

                {/* Floating Micro-Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-amber-400 text-xs">☕</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-stone-200">
                      Toraja · Barru · Sinjai
                    </span>
                  </div>
                  <div className="rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                    ~38ms Latency
                  </div>
                </div>
              </div>

              {/* Active Agent Systems Bar */}
              <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[9px] uppercase tracking-wider">
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5 text-center">
                  <div className="text-emerald-400 font-semibold flex items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> ACTIVE
                  </div>
                  <div className="text-stone-400 mt-1">AgroAgent MCP</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5 text-center">
                  <div className="text-amber-400 font-semibold flex items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" /> SYNCING
                  </div>
                  <div className="text-stone-400 mt-1">Agent Swarm</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5 text-center">
                  <div className="text-cyan-400 font-semibold flex items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> VERIFIED
                  </div>
                  <div className="text-stone-400 mt-1">BNSP Planner</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Metric Strip */}
        <div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#14110e]/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-amber-500/30 hover:bg-[#181410] hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-display text-4xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                20+ <span className="text-xl font-normal text-amber-400/80">Tahun</span>
              </span>
              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 p-2.5 text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 5 5-5-5 5 5ZM12 15l-5 5 5-5-5 5Z"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
              Sintesis Domain Kopi & Agro
            </div>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed">
              Penguasaan rantai nilai dari kebun rakyat Barru & Toraja hingga standar industri ekspor dan hilirisasi.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#14110e]/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 hover:bg-[#181410] hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-display text-4xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                6+ <span className="text-xl font-normal text-emerald-400/80">Platform</span>
              </span>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
              </span>
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
              Agentic Systems & Modern Web
            </div>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed">
              Arsitektur MCP v1.x, Swarm Worker Autonomous, Beanhub, Pandu Desa, Kafeya, dan CuppingNotes.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#14110e]/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-[#181410] hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-display text-4xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                4.700+ <span className="text-xl font-normal text-cyan-400/80">Petani</span>
              </span>
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 p-2.5 text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
              Dampak Riil Ekosistem
            </div>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed">
              Pemberdayaan hulu-hilir, peningkatan nilai tambah komoditas kopi, dan transfer teknologi aplikatif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

