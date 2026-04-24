import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Gallery, type GalleryItem } from "@/components/Gallery";
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
    <div className="min-h-screen bg-cream text-coffee selection:bg-terracotta/20 selection:text-terracotta">
      <Nav />

      <main className="pt-32">
        {/* Header Section */}
        <section className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-b border-border/60 pb-16">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta">
                  Platform
                </span>
                <span className="h-1 w-1 rounded-full bg-coffee/20"></span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coffee/60">
                  Coffee Quality
                </span>
                <span className="h-1 w-1 rounded-full bg-coffee/20"></span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coffee/60">
                  2026
                </span>
              </div>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-coffee">
                Digitalisasi <br />
                <span className="italic text-terracotta">Profil Rasa.</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://cuppingnotes.online"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-coffee bg-coffee px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta"
              >
                Kunjungi Platform ↗
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "CuppingNotes.online — Digitalisasi Profil Rasa",
                      text: "Studi kasus platform evaluasi kualitas kopi.",
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center gap-3 rounded-full border border-coffee/20 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-coffee transition-all hover:border-coffee hover:bg-cream-soft"
              >
                Bagikan
              </button>
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
      </main>

      <Footer />
    </div>
  );
}
