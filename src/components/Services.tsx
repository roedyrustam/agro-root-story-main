import React, { useState } from "react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Digitalisasi Desa & BUMDes",
    description: "Implementasi sistem manajemen berbasis cloud (Pandu Desa 4.0) untuk transparansi tata kelola dan efisiensi administrasi desa.",
    icon: "🏗️",
    tags: ["Cloud Ops", "Data Governance", "Capacity Building"],
  },
  {
    title: "Sensory & Quality Control",
    description: "Pelatihan evaluasi kopi standar SCA CVA 2025 untuk petani dan roaster guna meningkatkan standarisasi profil rasa.",
    icon: "🔬",
    tags: ["SCA Protocols", "Quality Audit", "Flavor Profiling"],
  },
  {
    title: "Scaling Up UMKM Agro",
    description: "Pendampingan manajemen usaha, literasi keuangan digital, dan pembukaan akses pasar nasional bagi produk unggulan daerah.",
    icon: "📈",
    tags: ["Business Growth", "Market Access", "Digital Literacy"],
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Professional Services</div>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-coffee">
              Solusi Untuk <br />
              <span className="italic text-terracotta">Ekosistem Agro.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-coffee/60">
            Membantu organisasi dan komunitas menjembatani kesenjangan antara potensi tradisional dan peluang ekonomi modern.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
              className={`group relative rounded-3xl border border-coffee/5 bg-cream-soft p-10 transition-all duration-500 hover:border-terracotta/20 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredService !== null && hoveredService !== i
                  ? "scale-[0.98] opacity-40 blur-[2px]"
                  : "scale-100 opacity-100 blur-0"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-coffee/5 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-terracotta/10">
                {service.icon}
              </div>
              
              <h3 className="mt-8 font-display text-2xl text-coffee leading-tight">
                {service.title}
              </h3>
              
              <p className="mt-4 text-sm leading-relaxed text-coffee/70">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-coffee/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-coffee/50 group-hover:border-terracotta/20 group-hover:text-terracotta transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-coffee/5">
                <Link to="/contact" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/40 group-hover:text-terracotta transition-colors">
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
