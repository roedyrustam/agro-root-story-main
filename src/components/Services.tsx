import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BnspCredentialsModal } from "./BnspCredentialsModal";
import { Award } from "lucide-react";

const services = [
  {
    title: "Praktisi AI & Rekayasa Agentic",
    description:
      "Perancangan server Model Context Protocol (MCP v1.x), orkestrasi multi-agen otonom (LangGraph, Centaury), dan AI coding workflows berstandar Zero Tech Debt.",
    proof: "Dibuktikan via GitHub: vibes-plug (77★), Centaury Engine (Gemini 4 Pro), & sinapsai.",
    icon: "⚡",
    tags: ["Praktisi AI", "MCP v1.x", "77★ GitHub", "Swarm AI", "Gemini 4 Pro"],
  },
  {
    title: "Konsultan IT & Arsitektur Edge",
    description:
      "Penasihat arsitektur sistem informasi, perancangan API terdistribusi, optimasi performa edge, dan pembangunan aplikasi web produksi modern dengan React 19.",
    proof: "Dibuktikan via beanhub.online, cuppingnotes.online, & API-Wilayah-2024 (21★).",
    icon: "🌐",
    tags: ["Konsultan IT", "Cloudflare Edge", "React 19", "TypeScript", "System Design"],
  },
  {
    title: "Trainer IT & Digitalisasi UMKM (BNSP)",
    description:
      "Fasilitator dan pemateri pelatihan adopsi AI generatif untuk produktivitas tim, literasi data desa, workshop Vibe Coding, dan pelatihan kewirausahaan UMKM.",
    proof: "Tersertifikasi resmi BNSP Pelatih Kewirausahaan & Instruktur Pandu Desa 4.0.",
    icon: "🎓",
    tags: ["Trainer IT", "Trainer UMKM", "Instruktur AI", "BNSP Certified", "Workshop"],
  },
  {
    title: "Konsultan UMKM & Kedaulatan Agro",
    description:
      "Pendampingan tatakelola operasional bisnis mikro, sistem kasir akuntansi, standardisasi mutu kopi SCA, dan digitalisasi rantai pasok koperasi desa (BUMDes).",
    proof: "Dibuktikan via Kafeya POS, beanhub.online, & Sertifikasi BNSP Perencanaan Agro.",
    icon: "🌱",
    tags: ["Konsultan UMKM", "Kafeya POS", "SCA Quality", "BUMDes", "Rantai Pasok"],
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isBnspOpen, setIsBnspOpen] = useState(false);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#090807] border-t border-white/10">
      <BnspCredentialsModal isOpen={isBnspOpen} onClose={() => setIsBnspOpen(false)} />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Konsultan IT · Praktisi AI · Trainer & Konsultan UMKM
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] text-white">
              Empat Pilar Layanan &{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Bukti Karya Riil.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone-400">
            Menjembatani keunggulan rekayasa sistem kecerdasan buatan teruji di GitHub dengan
            pendampingan lapangan, pelatihan terakreditasi BNSP, dan dampak ekonomi UMKM nyata di
            Indonesia.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
              className={`group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#14110e]/80 backdrop-blur-xl p-7 transition-all duration-500 hover:border-amber-500/40 hover:bg-[#181410] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] hover:-translate-y-2 ${
                hoveredService !== null && hoveredService !== i
                  ? "scale-[0.98] opacity-50 blur-[0.5px]"
                  : "scale-100 opacity-100 blur-0"
              }`}
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/30">
                  {service.icon}
                </div>

                <h3 className="mt-6 font-display text-xl text-white font-bold leading-snug group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-stone-300">{service.description}</p>

                <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-2.5">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-amber-400 font-semibold">
                    Bukti Portofolio:
                  </div>
                  <div className="text-[11px] text-stone-300 mt-0.5 leading-snug">
                    {service.proof}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-stone-400 group-hover:border-amber-400/30 group-hover:text-amber-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col gap-2">
                {service.title.includes("BNSP") && (
                  <button
                    type="button"
                    onClick={() => setIsBnspOpen(true)}
                    className="inline-flex items-center gap-1.5 text-left font-mono text-[10px] uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer mb-1"
                  >
                    <Award className="h-3 w-3" />
                    <span>Verifikasi ID BNSP ↗</span>
                  </button>
                )}
                <Link
                  to="/contact"
                  className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-stone-300 group-hover:text-amber-300 transition-colors"
                >
                  <span>Mulai Konsultasi</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
