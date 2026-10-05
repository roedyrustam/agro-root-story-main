import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";
import agroagentImg from "../assets/project-agroagent-mcp.jpg";
import swarmImg from "../assets/project-agent-swarm.jpg";
import beanhubImg from "../assets/project-beanhub.png";
import kafeyaImg from "../assets/project-kafeya.png";
import cuppingnotesImg from "../assets/project-cuppingnotes.png";
import pandudesaImg from "../assets/project-pandudesa.png";
import { LiquidImage } from "./LiquidImage";

type ProjectCategory = "all" | "ai" | "agro" | "desa";

interface ProjectItem {
  name: string;
  type: string;
  category: ProjectCategory;
  year: string;
  desc: string;
  stack: string[];
  accent: string;
  pattern: string;
  href: "/projects/agroagent-mcp" | "/projects/agent-swarm" | "/projects/beanhub" | "/projects/cuppingnotes" | "/projects/kafeya" | "/projects/pandudesa";
  initial: string;
  badge: string;
  image: string;
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
  { id: "all", label: "Semua Karya", count: 6 },
  { id: "ai", label: "AI & Agentic Systems", count: 2 },
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
              Karya digital dengan <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">dampak nyata & teruji.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone-400">
            Pilihlah domain yang relevan dengan kebutuhan bisnis atau organisasi Anda untuk mengeksplorasi arsitektur dan hasil implementasi.
          </p>
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
          {filteredProjects.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              onMouseEnter={() => setHoveredProject(p.name)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#14110e]/80 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-amber-500/40 hover:bg-[#181410] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] active:scale-[0.98] ${
                hoveredProject && hoveredProject !== p.name
                  ? "scale-[0.97] opacity-40 blur-[0.5px]"
                  : "scale-100 opacity-100 blur-0"
              }`}
            >
              <div className={`relative h-64 bg-gradient-to-br ${p.pattern} grain overflow-hidden`}>
                <LiquidImage
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
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
                    <span className="text-xl">↗</span>
                  </span>
                </div>
                
                <div className="mt-5 flex-1">
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight transition-colors group-hover:text-amber-300 tracking-tight font-bold">
                    {p.name}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
