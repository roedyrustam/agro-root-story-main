import { useState } from "react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Agentic AI & Protocol Engineering",
    description: "Perancangan server Model Context Protocol (MCP v1.x), orkestrasi multi-agen otonom, dan integrasi agen LLM dengan database operasional dunia nyata.",
    icon: "⚡",
    tags: ["MCP v1.x", "Multi-Agent Swarms", "Tool Calling", "Type-safe Schemas"],
  },
  {
    title: "Modern Fullstack & Edge Architecture",
    description: "Pengembangan web app berskala produksi dengan React 19, TanStack Start SSR, Tailwind CSS v4, dan deployment Cloudflare Workers yang ultra-responsif.",
    icon: "🌐",
    tags: ["TanStack Start", "React 19", "Cloudflare Edge", "TypeScript"],
  },
  {
    title: "Agro Supply Chain & Rural Empowerment",
    description: "Transformasi rantai pasok kopi hulu-hilir, audit mutu sensorik standar SCA, perencanaan industri bersertifikasi BNSP, dan digitalisasi kedaulatan data desa.",
    icon: "🌱",
    tags: ["BNSP Certified", "SCA Protocols", "Supply Chain", "BUMDes Digital"],
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#090807] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Professional Services & Architecture</div>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-white">
              Tiga Pilar Solusi <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">AI, Web Modern & Agro.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-400">
            Menjembatani keunggulan rekayasa sistem kecerdasan buatan otonom dengan operasi lapangan dan dampak ekonomi riil.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
              className={`group relative rounded-3xl border border-white/10 bg-[#14110e]/80 backdrop-blur-xl p-10 transition-all duration-500 hover:border-amber-500/40 hover:bg-[#181410] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] hover:-translate-y-2 ${
                hoveredService !== null && hoveredService !== i
                  ? "scale-[0.98] opacity-40 blur-[1px]"
                  : "scale-100 opacity-100 blur-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/30">
                {service.icon}
              </div>
              
              <h3 className="mt-8 font-display text-2xl text-white font-bold leading-tight group-hover:text-amber-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="mt-4 text-sm leading-relaxed text-stone-400">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-stone-400 group-hover:border-amber-400/30 group-hover:text-amber-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10">
                <Link to="/contact" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 group-hover:text-amber-300 transition-colors">
                  Konsultasi Sekarang ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
