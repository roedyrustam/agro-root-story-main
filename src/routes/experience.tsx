import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Pengalaman — Roedy Rustam" },
      { name: "description", content: "Pengalaman profesional Roedy Rustam: Trainer UMKM, Konsultan Desa, Agro Operations, dan Digital Developer." },
      { property: "og:title", content: "Pengalaman Profesional — Roedy Rustam" },
      { property: "og:description", content: "Trainer UMKM · Konsultan Desa · Sehati Kopi Indonesia · Pandu Talenta Digital · Aliansi Masyarakat Adat" },
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
        <div className="mx-auto max-w-6xl px-6 md:px-10">
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
      <section className="py-24 md:py-32 bg-cream-soft border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Metodologi</div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee max-w-3xl">
            Cara saya mendampingi <br />
            <span className="italic text-terracotta">perubahan.</span>
          </h2>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-3xl bg-card border border-coffee/5">
              <h3 className="font-display text-2xl text-coffee">Empati Lapangan</h3>
              <p className="mt-4 text-coffee/70 leading-relaxed">
                Tidak ada perubahan yang langgeng jika tidak dimulai dari pemahaman mendalam tentang kecemasan dan harapan orang-orang yang menjalaninya. Saya memulai dengan mendengar.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-coffee/5">
              <h3 className="font-display text-2xl text-coffee">Kedaulatan Data</h3>
              <p className="mt-4 text-coffee/70 leading-relaxed">
                Informasi adalah kekuatan. Fokus saya adalah memastikan data tidak hanya mengalir ke atas, tapi juga kembali menjadi alat bagi masyarakat untuk mengambil keputusan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
