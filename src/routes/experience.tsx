import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Pengalaman — Roedy Rustam · AI Systems & Agentic Developer" },
      { name: "description", content: "Pengalaman profesional Roedy Rustam: AI Systems Architect, Pengembang Server MCP, Konsultan Agro, dan Pengembang Edge Web." },
      { property: "og:title", content: "Pengalaman Profesional — Roedy Rustam" },
      { property: "og:description", content: "AI Systems Architect · Model Context Protocol · Sehati Kopi Indonesia · Pandu Talenta Digital · Aliansi Masyarakat Adat" },
      { property: "og:image", content: "/og-experience.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-experience.jpg" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      
      {/* Experience Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden border-b border-border">
        <div className="content-container">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            Karir · Keahlian
          </div>
          <h1 className="mt-8 font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] text-coffee text-balance">
            Peran yang <span className="italic text-terracotta">teruji</span> <br />
            oleh <span className="italic">realita.</span>
          </h1>
          
          <div className="mt-12 max-w-2xl">
            <p className="text-xl leading-relaxed text-coffee/80">
              Setiap peran yang saya jalani—sebagai trainer, konsultan, maupun pengembang—selalu berpijak pada satu disiplin: <em className="text-coffee">menerjemahkan kompleksitas lapangan menjadi solusi yang sederhana.</em>
            </p>
          </div>
        </div>
      </section>

      <div className="reveal">
        <Experience />
      </div>

      <div className="reveal">
        <Skills />
      </div>

      {/* Methodology Section */}
      <section className="py-24 md:py-32 bg-[#090807] border-t border-white/10">
        <div className="content-container">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Metodologi</div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-white max-w-3xl">
            Cara saya mendampingi <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">perubahan & transformasi.</span>
          </h2>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="p-8 md:p-10 rounded-3xl bg-[#14110e]/80 border border-white/10 backdrop-blur-xl transition-all hover:border-amber-500/30">
              <h3 className="font-display text-2xl text-white font-bold">Empati Lapangan & Verifikasi Riil</h3>
              <p className="mt-4 text-stone-300 leading-relaxed">
                Tidak ada perubahan yang langgeng jika tidak dimulai dari pemahaman mendalam tentang kecemasan dan harapan orang-orang yang menjalaninya. Sistem agen AI dibangun di atas kebutuhan riil pelaku usaha dan petani.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-3xl bg-[#14110e]/80 border border-white/10 backdrop-blur-xl transition-all hover:border-amber-500/30">
              <h3 className="font-display text-2xl text-white font-bold">Kedaulatan Data & Interoperabilitas</h3>
              <p className="mt-4 text-stone-300 leading-relaxed">
                Informasi adalah kekuatan kedaulatan. Fokus saya adalah memastikan data tidak hanya mengalir ke atas, tapi juga kembali menjadi alat bantu prediktif bagi komunitas untuk mengambil keputusan bisnis yang presisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
