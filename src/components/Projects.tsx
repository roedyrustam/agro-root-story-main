import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";
import beanhubImg from "../assets/project-beanhub.png";
import kafeyaImg from "../assets/project-kafeya.png";
import cuppingnotesImg from "../assets/project-cuppingnotes.png";
import pandudesaImg from "../assets/project-pandudesa.png";

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
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="04" label="Karya Digital" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
              Empat karya digital <br />
              dengan <span className="italic text-terracotta">dampak jujur.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              onMouseEnter={() => setHoveredProject(p.name)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative overflow-hidden rounded-3xl border border-coffee/10 bg-cream-soft transition-all duration-500 hover:-translate-y-2 hover:border-coffee/30 hover:shadow-[0_20px_40px_-15px_rgba(44,36,27,0.15)] ${
                hoveredProject && hoveredProject !== p.name
                  ? "scale-[0.98] opacity-40 blur-[2px]"
                  : "scale-100 opacity-100 blur-0"
              }`}
            >
              <div className={`relative h-56 bg-gradient-to-br ${p.pattern} grain overflow-hidden`}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-coffee/10 transition-colors group-hover:bg-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
                  <div className="font-display text-8xl italic text-cream/30 drop-shadow-lg">
                    {p.initial}
                  </div>
                </div>
                
                <div className="absolute left-6 top-6 z-10 flex h-8 items-center rounded-full bg-coffee/20 px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cream drop-shadow-md backdrop-blur-sm border border-cream/20">
                  {p.year}
                </div>
                <div
                  className={`absolute right-6 top-6 z-10 h-3 w-3 rounded-full ${p.accent} ring-4 ring-cream/20`}
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta">
                    {p.type}
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-coffee/10 bg-transparent text-coffee/60 transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta group-hover:rotate-45">
                    ↗
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl text-coffee transition-colors group-hover:text-terracotta">{p.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-coffee/75">{p.desc}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-coffee/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-coffee/70 transition-colors group-hover:bg-coffee/10"
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
