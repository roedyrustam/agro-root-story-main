import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";
import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import agroagentImg from "../assets/project-agroagent-mcp.jpg";
import swarmImg from "../assets/project-agent-swarm.jpg";
import beanhubImg from "../assets/project-beanhub.png";
import kafeyaImg from "../assets/project-kafeya.png";
import cuppingnotesImg from "../assets/project-cuppingnotes.png";
import pandudesaImg from "../assets/project-pandudesa.png";
import { LiquidImage } from "./LiquidImage";

type ProjectCategory = "all" | "ai" | "oss" | "agro" | "desa";

interface ProjectItem {
  name: string;
  type: string;
  category: ProjectCategory;
  year: string;
  desc: string;
  stack: string[];
  accent: string;
  pattern: string;
  href?: "/projects/agroagent-mcp" | "/projects/agent-swarm" | "/projects/beanhub" | "/projects/cuppingnotes" | "/projects/kafeya" | "/projects/pandudesa";
  externalUrl?: string;
  stars?: string;
  forks?: string;
  initial: string;
  badge: string;
  image?: string;
}

const projects: ProjectItem[] = [
  {
    name: "AgroAgent MCP Server",
    type: "Platform · Model Context Protocol",
    category: "ai",
    year: "2026",
    desc: "Server Model Context Protocol (MCP v1.x) terstandarisasi yang menghubungkan LLM agent ke database rantai pasok kopi, telemetri panen, dan audit kedaulatan data desa.",
    stack: ["MCP v1.x", "TypeScript", "JSON-RPC", "Cloudflare Edge"],
    accent: "bg-terracotta",
    pattern: "from-terracotta/25 via-coffee/30 to-mustard/20",
    href: "/projects/agroagent-mcp",
    initial: "m",
    badge: "MCP Ready",
    image: agroagentImg,
  },
  {
    name: "Multi-Agent Swarm Orchestrator",
    type: "System · Autonomous Swarm",
    category: "ai",
    year: "2026",
    desc: "Sistem orkestrasi kolaboratif multi-agen untuk verifikasi mutu biji kopi, kalkulasi kelayakan rute logistik dataran tinggi, dan pelaporan otomatis ke koperasi tani.",
    stack: ["Multi-Agent", "LangGraph", "Telemetry", "Decision Graph"],
    accent: "bg-mustard",
    pattern: "from-mustard/25 via-sage/20 to-coffee/30",
    href: "/projects/agent-swarm",
    initial: "s",
    badge: "Swarm AI",
    image: swarmImg,
  },
  {
    name: "vibes-plug",
    type: "Open Source · Agent Swarm Skills",
    category: "oss",
    year: "2026",
    desc: "Universal Skill AI Agent Swarm Architecture untuk Google Antigravity, Claude Code, Cursor, & Windsurf. Vibe Coding 2.0 dengan standar Zero Tech Debt dan paket resmi npm.",
    stack: ["Agent Swarms", "Antigravity", "Claude Code", "npm package", "73★ GitHub"],
    accent: "bg-amber-500",
    pattern: "from-amber-950/40 via-stone-900 to-amber-900/30",
    externalUrl: "https://github.com/roedyrustam/vibes-plug",
    stars: "73",
    forks: "18",
    initial: "v",
    badge: "73★ GitHub",
  },
  {
    name: "sinapsai",
    type: "Open Source · AI Gateway & Control Plane",
    category: "oss",
    year: "2026",
    desc: "Blazing-fast in-process AI Gateway & Control Plane dengan Circuit Breaker, Automatic Failover, dan Unified LLM API untuk Node.js & TypeScript multi-agent.",
    stack: ["AI Gateway", "TypeScript", "Circuit Breaker", "Multi-Agent"],
    accent: "bg-emerald-500",
    pattern: "from-emerald-950/40 via-stone-900 to-emerald-900/30",
    externalUrl: "https://github.com/roedyrustam/sinapsai",
    initial: "s",
    badge: "AI Gateway",
  },
  {
    name: "doku-gemini-mcp",
    type: "Open Source · MCP Agentic Commerce",
    category: "oss",
    year: "2026",
    desc: "Server Model Context Protocol (MCP) untuk Google Antigravity & Gemini. Menghubungkan AI coding assistant ke DOKU Payment Gateway (VA, QRIS, & SNAP BI).",
    stack: ["MCP v1.x", "Gemini & Cursor", "Fintech API", "QRIS / VA"],
    accent: "bg-orange-500",
    pattern: "from-orange-950/40 via-stone-900 to-amber-950/30",
    externalUrl: "https://github.com/roedyrustam/doku-gemini-mcp",
    initial: "d",
    badge: "MCP Plugin",
  },
  {
    name: "API Wilayah Indonesia",
    type: "Open Source · Geographic Data",
    category: "oss",
    year: "2024",
    desc: "Dataset & API wilayah administratif Indonesia terlengkap (Provinsi, Kabupaten/Kota, Kecamatan, Desa) yang digunakan luas oleh komunitas developer Indonesia.",
    stack: ["Open Data", "Geo Database", "Indonesia API", "21★ GitHub"],
    accent: "bg-teal-500",
    pattern: "from-teal-950/40 via-stone-900 to-stone-950",
    externalUrl: "https://github.com/roedyrustam/API-Wilayah-2024",
    stars: "21",
    forks: "10",
    initial: "w",
    badge: "21★ GitHub",
  },
  {
    name: "beanhub.online",
    type: "Platform · Supply Chain",
    category: "agro",
    year: "2025",
    desc: "Platform pencatatan rantai pasok kopi dari kebun ke roastery. Membantu petani, pengepul, dan roaster melihat aliran biji secara transparan dan berkeadilan.",
    stack: ["React", "SQL", "Operations", "Barru & Toraja"],
    accent: "bg-terracotta",
    pattern: "from-terracotta/20 via-mustard/20 to-sage/20",
    href: "/projects/beanhub",
    initial: "b",
    badge: "Production",
    image: beanhubImg,
  },
  {
    name: "CuppingNotes.online",
    type: "Platform · Coffee Quality & SCA",
    category: "agro",
    year: "2026",
    desc: "Platform digital untuk mencatat, mengevaluasi, dan membagikan hasil cupping kopi standar SCA. Membantu Q-Graders dan roasters mendokumentasikan profil rasa secara presisi.",
    stack: ["Angular", "Firebase", "SSR", "SCA Standards"],
    accent: "bg-sage",
    pattern: "from-mustard/20 via-terracotta/20 to-coffee/20",
    href: "/projects/cuppingnotes",
    initial: "c",
    badge: "SCA Tool",
    image: cuppingnotesImg,
  },
  {
    name: "Kafeya POS",
    type: "Tool · Akuntansi UMKM",
    category: "desa",
    year: "2025",
    desc: "Alat bantu kasir & pelaporan keuangan untuk café dan UMKM kopi. Sederhana, sesuai standar akuntansi mikro, ramah pemilik warung kopi komunitas.",
    stack: ["React", "Akuntansi", "UMKM", "Offline-First"],
    accent: "bg-coffee",
    pattern: "from-coffee/15 via-clay/20 to-mustard/20",
    href: "/projects/kafeya",
    initial: "k",
    badge: "UMKM App",
    image: kafeyaImg,
  },
  {
    name: "Pandu Desa 4.0",
    type: "Inisiatif · Kedaulatan Digital",
    category: "desa",
    year: "2018",
    desc: "Sistem tata kelola informasi desa dan pemetaan potensi ekonomi berbasis digital. Membangun kedaulatan data dan literasi mandiri dari tingkat desa.",
    stack: ["Digital Literacy", "GIS Mapping", "Policy", "BUMDes"],
    accent: "bg-mustard",
    pattern: "from-mustard/20 via-sage/20 to-clay/20",
    href: "/projects/pandudesa",
    initial: "p",
    badge: "Community",
    image: pandudesaImg,
  },
];

const categoryTabs = [
  { id: "all", label: "Semua Karya", count: 10 },
  { id: "ai", label: "AI & Agentic Systems", count: 2 },
  { id: "oss", label: "Open Source (GitHub)", count: 4 },
  { id: "agro", label: "Rantai Pasok & Kopi", count: 2 },
  { id: "desa", label: "Kedaulatan Desa", count: 2 },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="border-t border-white/10 bg-[#090807] py-24 md:py-32">
      <div className="content-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="04" label="Karya Digital & Sistem Agen" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-white">
              Karya digital & repository <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">dampak nyata & teruji.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="max-w-md text-sm leading-relaxed text-stone-400">
              Menampilkan platform produksi dan repository open-source terverifikasi di GitHub dengan implementasi agen cerdas.
            </p>
            <a
              href="https://github.com/roedyrustam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 hover:text-amber-300 transition-colors w-fit"
            >
              <Github className="h-3.5 w-3.5" />
              <span>github.com/roedyrustam ↗</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {categoryTabs.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.25)] scale-[1.02]"
                    : "border border-white/10 bg-white/5 text-stone-300 hover:border-amber-400/30 hover:bg-white/10"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-mono ${
                    isSelected ? "bg-black/20 text-stone-950 font-bold" : "bg-white/10 text-stone-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((p) => {
            const isExternal = !!p.externalUrl;
            const CardWrapper = isExternal ? "a" : Link;
            const linkProps = isExternal
              ? { href: p.externalUrl, target: "_blank", rel: "noopener noreferrer" }
              : { to: p.href! };

            return (
              <CardWrapper
                key={p.name}
                {...(linkProps as any)}
                onMouseEnter={() => setHoveredProject(p.name)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#14110e]/80 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-amber-500/40 hover:bg-[#181410] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] active:scale-[0.98] ${
                  hoveredProject && hoveredProject !== p.name
                    ? "scale-[0.97] opacity-40 blur-[0.5px]"
                    : "scale-100 opacity-100 blur-0"
                }`}
              >
                <div className={`relative h-64 bg-gradient-to-br ${p.pattern} grain overflow-hidden`}>
                  {p.image ? (
                    <LiquidImage
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#120f0d]">
                      <div className="font-mono text-7xl font-bold text-white/10 transition-transform duration-700 group-hover:scale-125">
                        {p.initial}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#090807]/30 transition-opacity duration-700 group-hover:opacity-0" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-125">
                    <div className="font-display text-9xl italic text-white/30 drop-shadow-2xl">
                      {p.initial}
                    </div>
                  </div>
                  
                  <div className="absolute left-6 top-6 z-10 flex h-8 items-center gap-2 rounded-full bg-black/75 px-3.5 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-200 shadow-sm backdrop-blur-xl border border-white/15 font-semibold">
                    <span>{p.year}</span>
                    {p.badge && (
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-amber-300">
                        {p.badge}
                      </span>
                    )}
                    {p.stars && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-amber-300 font-bold">
                        <Star className="h-2.5 w-2.5 fill-amber-300 text-amber-300" />
                        {p.stars}
                      </span>
                    )}
                    {p.forks && (
                      <span className="inline-flex items-center gap-1 text-stone-400">
                        <GitFork className="h-2.5 w-2.5" />
                        {p.forks}
                      </span>
                    )}
                  </div>
                  <div
                    className={`absolute right-6 top-6 z-10 h-3.5 w-3.5 rounded-full ${p.accent} shadow-xl ring-4 ring-white/10 transition-transform duration-700 group-hover:scale-150`}
                  />
                </div>

                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
                      {p.type}
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-300 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-stone-950 group-hover:scale-110 group-hover:rotate-45">
                      {isExternal ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <span className="text-xl leading-none">↗</span>
                      )}
                    </span>
                  </div>
                  
                  <div className="mt-5 flex-1">
                    <h3 className="font-display text-2xl md:text-3xl text-white leading-tight transition-colors group-hover:text-amber-300 tracking-tight font-bold flex items-center gap-2">
                      <span>{p.name}</span>
                      {isExternal && <Github className="h-5 w-5 text-stone-500 inline" />}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-400 line-clamp-3">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-stone-300 transition-all duration-300 group-hover:border-amber-400/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
