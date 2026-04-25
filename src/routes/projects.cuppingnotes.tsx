import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Gallery, type GalleryItem } from "@/components/Gallery";
import { FlavorWheel } from "@/components/FlavorWheel";
import scaImg from "../assets/cuppingnotes-sca.png";
import radarImg from "../assets/cuppingnotes-radar.png";

const galleryItems: GalleryItem[] = [
  {
    src: scaImg,
    alt: "Tampilan Mobile CuppingNotes",
    label: "Mobile First",
    caption:
      "Antarmuka yang dioptimalkan untuk penggunaan di lapangan saat sesi cupping, dengan stabilitas mobile dan glassmorphism UI.",
    stage: "Solution",
    orientation: "portrait",
  },
  {
    src: radarImg,
    alt: "Dashboard CuppingNotes",
    label: "Hasil & Evaluasi",
    caption:
      "Sistem mengumpulkan dan mengkalkulasi skor (SCA standar), serta menghasilkan visualisasi radar chart untuk profil rasa.",
    stage: "Solution",
    orientation: "wide",
  },
  {
    src: radarImg,
    alt: "Fitur Berbagi Sosial",
    label: "Social Sharing",
    caption:
      "Open Graph metadata dinamis (SSR) memungkinkan pengguna membagikan hasil cupping langsung ke media sosial dengan preview gambar otomatis.",
    stage: "Result",
    orientation: "wide",
  },
];

export const Route = createFileRoute("/projects/cuppingnotes")({
  head: () => ({
    meta: [
      { title: "CuppingNotes.online — Platform Cupping Kopi · Roedy Rustam" },
      {
        name: "description",
        content:
          "Platform digital untuk mencatat, mengevaluasi, dan membagikan hasil cupping kopi. Dibangun dengan Angular SSR dan Firebase.",
      },
      { property: "og:title", content: "CuppingNotes.online — Digitalisasi Profil Rasa Kopi" },
      {
        property: "og:description",
        content: "Studi kasus platform evaluasi dan social sharing cupping kopi.",
      },
      { property: "og:image", content: "/og-cuppingnotes.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-cuppingnotes.jpg" },
    ],
  }),
  component: CuppingNotesPage,
});

function CuppingNotesPage() {
  return (
    <main className="min-h-screen bg-cream text-coffee selection:bg-terracotta/20 selection:text-terracotta">
      <Nav />
      
      {/* Project Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden border-b border-border">
        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(211,93,71,0.03),transparent_50%)]" />

        <div className="mx-auto max-w-6xl px-6 md:px-10 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 hover:text-terracotta"
          >
            ← Kembali
          </Link>
          
          <div className="mt-12 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-coffee">
            <span className="rounded-full bg-coffee/10 px-3 py-1">Sensory Tool</span>
            <span>2026</span>
            <span className="text-coffee/60">·</span>
            <span className="text-coffee/60">Quality Control</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] text-coffee text-balance">
            Objektivitas <br />
            <span className="italic text-terracotta">profil rasa</span> <br />
            digital.
          </h1>
          
          <div className="mt-12 max-w-2xl">
            <p className="text-xl leading-relaxed text-coffee/80">
              CuppingNotes.online adalah manifestasi digital dari protokol SCA (Specialty Coffee Association). Sebuah alat yang saya bangun untuk memastikan evaluasi kualitas kopi tidak hanya berhenti di catatan kertas, tapi menjadi data yang bisa dipertanggungjawabkan.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a href="https://cuppingnotes.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-coffee px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta">
              Buka Platform ↗
            </a>
          </div>
        </div>
      </section>

      {/* Narrative Section: The Consultant's View */}
      <section className="py-24 md:py-32 bg-cream-soft border-b border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Catatan Konsultan</div>
              <h2 className="font-display text-4xl text-coffee leading-[1.1]">
                "Data sensoris adalah <br />
                <span className="italic">bahasa universal</span> <br />
                industri kopi."
              </h2>
              <p className="text-lg leading-relaxed text-coffee/75">
                Dalam rantai pasok global, skor *cupping* adalah penentu harga. Tanpa sistem yang standar, perdebatan kualitas antara petani dan pembeli seringkali merugikan pihak yang lebih lemah.
              </p>
              <p className="text-lg leading-relaxed text-coffee/75">
                CuppingNotes saya bangun untuk memberikan standarisasi evaluasi di lapangan. Dengan algoritma yang menghitung skor SCA secara otomatis dan visualisasi radar chart, platform ini memungkinkan roaster di Jakarta atau mancanegara "melihat" potensi rasa kopi dari Toraja atau Enrekang sebelum fisik kopinya sampai.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-coffee/5 border border-border shadow-2xl">
                <div className="absolute inset-0 bg-coffee/5" />
                <div className="relative h-full p-10 flex flex-col justify-end">
                  <div className="font-mono text-sm text-terracotta">Protocol Standard</div>
                  <div className="mt-2 font-display text-5xl text-coffee">SCA</div>
                  <div className="mt-2 text-coffee/70">Kepatuhan penuh pada protokol Coffee Value Assessment.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="reveal mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70">
                  Role
                </h3>
                <p className="mt-2 text-sm text-coffee/80">
                  Fullstack Developer & System Architect
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70">
                  Stack
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-coffee/80">
                  <li>Angular 21 (Signals, SSR)</li>
                  <li>Firebase (Auth, Firestore, Storage)</li>
                  <li>Tailwind CSS (Glassmorphism)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70">
                  Context
                </h3>
                <p className="mt-2 text-sm text-coffee/80">Production-grade coffee platform.</p>
              </div>
            </div>
          </div>

          <div className="space-y-16 md:col-span-8 md:col-start-6 lg:col-span-7">
            <article className="prose prose-stone max-w-none prose-p:leading-relaxed prose-p:text-coffee/80 prose-headings:font-display prose-headings:text-coffee prose-strong:text-terracotta">
              <h2>Latar Belakang</h2>
              <p>
                Evaluasi kualitas kopi (cupping) adalah proses vital bagi roaster dan Q-Grader.
                Namun, pencatatan manual di atas kertas menyulitkan rekapitulasi data, kolaborasi,
                dan pembagian hasil evaluasi profil rasa kepada stakeholders lain.
              </p>

              <h2>Tantangan Sistem</h2>
              <p>
                Aplikasi membutuhkan interaksi mobile yang sangat stabil saat digunakan di
                lapangan, dengan data integrity yang kuat agar manipulasi metrik sosial (seperti
                rating atau ulasan) tidak terjadi. Selain itu, pengguna menginginkan kemampuan
                membagikan hasil cupping mereka secara estetik ke platform sosial media.
              </p>

              <h2>Solusi Arsitektural</h2>
              <div className="my-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream-soft p-6">
                  <h4 className="mt-0 font-display text-xl">Mobile Stability</h4>
                  <p className="mb-0 text-sm opacity-80">
                    Penggunaan Angular 21 Signals untuk reaktivitas UI tingkat tinggi, menjamin
                    state tidak rusak walau koneksi terputus sesaat.
                  </p>
                </div>
                <div className="rounded-2xl bg-cream-soft p-6">
                  <h4 className="mt-0 font-display text-xl">Data Integrity</h4>
                  <p className="mb-0 text-sm opacity-80">
                    Penerapan Firebase Security Rules yang ketat dan atomic transactions mencegah
                    spoofing skor dan modifikasi data tanpa otorisasi.
                  </p>
                </div>
                <div className="rounded-2xl bg-cream-soft p-6">
                  <h4 className="mt-0 font-display text-xl">Social Sharing</h4>
                  <p className="mb-0 text-sm opacity-80">
                    Implementasi SSR (Server-Side Rendering) untuk meng-generate Open Graph meta
                    tags dinamis berisi preview hasil cupping.
                  </p>
                </div>
                <div className="rounded-2xl bg-cream-soft p-6">
                  <h4 className="mt-0 font-display text-xl">Image Processing</h4>
                  <p className="mb-0 text-sm opacity-80">
                    Sistem yang dapat mengolah data skor numerik menjadi radar chart visual untuk
                    langsung dianalisis oleh roaster.
                  </p>
                </div>
              </div>

              <h2>Hasil & Dampak</h2>
              <p>
                CuppingNotes.online sukses bertransisi dari fungsional prototipe menjadi sistem
                produksi yang ter-harden. Proses cupping tidak lagi berhenti di atas meja
                laboratorium, tetapi terdokumentasi rapi, aman, dan siap dibagikan ke ranah
                publik.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Flavor Wheel Section */}
      <section className="reveal bg-background py-24 md:py-32 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Demo Modul</div>
            <h2 className="mt-4 font-display text-4xl text-coffee md:text-5xl">Eksplorasi Profil Rasa</h2>
          </div>
          <FlavorWheel />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="reveal border-t border-border/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl text-coffee">Artefak Produk</h2>
          <p className="mt-2 text-sm text-coffee/60">
            Beberapa tangkapan layar dari antarmuka platform.
          </p>
        </div>
        <div className="mt-12">
          <Gallery
            items={galleryItems}
            title="Visualisasi data untuk keputusan yang lebih presisi."
            subtitle="Beberapa artefak dari pengembangan CuppingNotes — geser untuk menelusuri."
          />
        </div>
      </section>

      {/* Next Project Nav */}
      <section className="border-t border-border bg-cream-soft">
        <Link
          to="/projects/beanhub"
          className="group flex flex-col items-center justify-center gap-4 py-24 transition-colors hover:bg-terracotta/5"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/60 transition-colors group-hover:text-terracotta/80">
            Proyek Selanjutnya
          </span>
          <h2 className="font-display text-4xl text-coffee transition-colors group-hover:text-terracotta md:text-5xl">
            Beanhub.online
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
