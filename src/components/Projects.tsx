import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";
import beanhubImg from "../assets/project-beanhub.png";
import kafeyaImg from "../assets/project-kafeya.png";
import cuppingnotesImg from "../assets/project-cuppingnotes.png";
import pandudesaImg from "../assets/project-pandudesa.png";
import { LiquidImage } from "./LiquidImage";

const projects = [
  {
    name: "beanhub.online",
    type: "Platform · Supply Chain",
    year: "2025",
    desc: "Platform pencatatan rantai pasok kopi dari kebun ke roastery. Membantu petani, pengepul, dan roaster melihat aliran biji secara transparan.",
    stack: ["React", "SQL", "Operations"],
    accent: "bg-terracotta",
    pattern: "from-terracotta/20 via-mustard/20 to-sage/20",
    href: "/projects/beanhub" as const,
    initial: "b",
    image: beanhubImg,
  },

  {
    name: "Kafeya POS",
    type: "Tool · Akuntansi UMKM",
    year: "2025",
    desc: "Alat bantu kasir & pelaporan keuangan untuk café dan UMKM kopi. Sederhana, sesuai standar, ramah pemilik warung kecil.",
    stack: ["React", "Akuntansi", "UMKM"],
    accent: "bg-coffee",
    pattern: "from-coffee/15 via-clay/20 to-mustard/20",
    href: "/projects/kafeya" as const,
    initial: "k",
    image: kafeyaImg,
  },
  {
    name: "CuppingNotes.online",
    type: "Platform · Coffee Quality",
    year: "2026",
    desc: "Platform digital untuk mencatat, mengevaluasi, dan membagikan hasil cupping kopi (SCA standar). Membantu Q-Graders dan roasters mendokumentasikan profil rasa.",
    stack: ["Angular", "Firebase", "SSR"],
    accent: "bg-terracotta",
    pattern: "from-mustard/20 via-terracotta/20 to-coffee/20",
    href: "/projects/cuppingnotes" as const,
    initial: "c",
    image: cuppingnotesImg,
  },
  {
    name: "Pandu Desa 4.0",
    type: "Inisiatif · Literasi Digital",
    year: "2018",
    desc: "Sistem tata kelola informasi desa dan pemetaan potensi ekonomi berbasis digital. Membangun kedaulatan data dari tingkat desa.",
    stack: ["Digital Literacy", "Mapping", "Policy"],
    accent: "bg-mustard",
    pattern: "from-mustard/20 via-sage/20 to-clay/20",
    href: "/projects/pandudesa" as const,
    initial: "p",
    image: pandudesaImg,
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="border-t border-border bg-cream-soft py-24 md:py-32">
      <div className="content-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="04" label="Karya Digital" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
              Empat karya digital <br />
              dengan <span className="italic text-terracotta">dampak jujur.</span>
            </h2>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              onMouseEnter={() => setHoveredProject(p.name)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-coffee/5 bg-cream/50 transition-all duration-700 hover:-translate-y-3 hover:bg-cream hover:shadow-[0_40px_80px_-20px_rgba(44,36,27,0.12)] active:scale-[0.98] ${
                hoveredProject && hoveredProject !== p.name
                  ? "scale-[0.96] opacity-30 grayscale-[0.5] blur-[1px]"
                  : "scale-100 opacity-100 blur-0"
              }`}
            >
              <div className={`relative h-64 bg-gradient-to-br ${p.pattern} grain overflow-hidden`}>
                <LiquidImage
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee/10 transition-opacity duration-700 group-hover:opacity-0" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-125">
                  <div className="font-display text-9xl italic text-cream/40 drop-shadow-2xl">
                    {p.initial}
                  </div>
                </div>
                
                <div className="absolute left-8 top-8 z-10 flex h-8 items-center rounded-full bg-cream/30 px-5 font-mono text-[9px] uppercase tracking-[0.3em] text-coffee shadow-sm backdrop-blur-xl border border-cream/50 font-bold">
                  {p.year}
                </div>
                <div
                  className={`absolute right-8 top-8 z-10 h-3.5 w-3.5 rounded-full ${p.accent} shadow-xl ring-8 ring-cream/20 transition-transform duration-700 group-hover:scale-150`}
                />
              </div>

              <div className="flex flex-1 flex-col p-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta font-semibold">
                    {p.type}
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-coffee/5 bg-cream shadow-sm text-coffee/60 transition-all duration-500 group-hover:bg-coffee group-hover:text-cream group-hover:scale-110 group-hover:rotate-[360deg]">
                    <span className="text-xl">↗</span>
                  </span>
                </div>
                
                <div className="mt-6 flex-1">
                  <h3 className="font-display text-4xl text-coffee leading-tight transition-colors group-hover:text-terracotta tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-coffee/65 line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-2.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-coffee/5 px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-coffee/50 transition-all duration-500 group-hover:bg-coffee/10 group-hover:text-coffee/80"
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
