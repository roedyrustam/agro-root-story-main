import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Perjalanan — Roedy Rustam" },
      { name: "description", content: "Timeline naratif perjalanan Roedy Rustam dari kampus ke kebun ke kode, 2017 — sekarang." },
      { property: "og:title", content: "Timeline Perjalanan — Roedy Rustam" },
      { property: "og:description", content: "2017 — Sekarang · Dari kampus ke kebun ke kode." },
      { property: "og:image", content: "/og-journey.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-journey.jpg" },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-cream-soft overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-terracotta/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-mustard/5 blur-[100px]" />

        <div className="mx-auto max-w-6xl px-6 md:px-10 relative z-10">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            Perjalanan · Naratif
          </div>
          <h1 className="mt-8 font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] text-coffee text-balance">
            Sebuah <span className="italic text-terracotta">evolusi</span> <br />
            fokus dan <span className="italic">dampak.</span>
          </h1>
          
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
            <p className="text-xl leading-relaxed text-coffee/80 max-w-xl">
              Dari mendirikan jaringan radio komunitas di tahun 90-an hingga membangun platform rantai pasok kopi di era digital. Perjalanan ini bukanlah garis lurus, melainkan sebuah pertumbuhan yang konsisten pada satu nilai: <em className="text-coffee">kedaulatan informasi.</em>
            </p>
            <div className="flex flex-col gap-4 border-l border-coffee/15 pl-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-coffee/40">Status Saat Ini</div>
              <div className="font-display text-2xl text-coffee">Membangun ekosistem yang berpihak pada hulu.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-20 border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="font-display text-4xl italic text-terracotta/40">01. Akar</div>
              <h3 className="font-display text-2xl text-coffee">Disiplin Teknik</h3>
              <p className="text-coffee/70 leading-relaxed">
                Teknik Industri memberikan saya kacamata untuk melihat dunia sebagai rangkaian sistem yang bisa dioptimasi. Akar dari setiap solusi adalah data yang jujur.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-display text-4xl italic text-sage/40">02. Batang</div>
              <h3 className="font-display text-2xl text-coffee">Aksi Lapangan</h3>
              <p className="text-coffee/70 leading-relaxed">
                Pemberdayaan dan agro adalah tempat teori bertemu realita. Mendengar petani dan UMKM selama puluhan tahun membentuk struktur kerja saya.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-display text-4xl italic text-mustard/40">03. Daun</div>
              <h3 className="font-display text-2xl text-coffee">Solusi Digital</h3>
              <p className="text-coffee/70 leading-relaxed">
                Digitalisasi adalah wujud dari pertumbuhan. Perangkat lunak yang saya bangun adalah alat bantu untuk memperluas jangkauan dan manfaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline />

      {/* Legacy Section */}
      <section className="py-24 md:py-32 bg-coffee text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">Visi ke Depan</div>
          <h2 className="mt-8 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-cream">
            Membangun kedaulatan data <br />
            <span className="italic">dari setiap jengkal desa.</span>
          </h2>
          <p className="mt-8 text-lg text-cream/75 leading-relaxed">
            Perjalanan ini belum usai. Saya terus mencari cara agar teknologi tidak menjadi pemisah, melainkan perekat yang memperkuat daya tawar masyarakat di hulu rantai nilai.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
