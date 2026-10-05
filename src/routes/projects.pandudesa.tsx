import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { generateBreadcrumbSchema } from "@/lib/schema";
import projectImg from "../assets/project-pandudesa.png";

export const Route = createFileRoute("/projects/pandudesa")({
  head: () => ({
    meta: [
      { title: "Pandu Desa 4.0 — Digitalisasi Tata Kelola Desa · Roedy Rustam" },
      {
        name: "description",
        content:
          "Pandu Desa 4.0: Inisiatif digitalisasi tata kelola informasi desa, pemetaan potensi ekonomi, dan literasi digital untuk kedaulatan data desa.",
      },
      { property: "og:title", content: "Pandu Desa 4.0 — Membangun Kedaulatan Data dari Desa" },
      {
        property: "og:description",
        content: "Studi kasus inisiatif Pandu Desa 4.0 untuk transformasi digital perdesaan.",
      },
      { property: "og:image", content: "/og-pandudesa.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-pandudesa.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbSchema([
            { name: "Beranda", item: "/" },
            { name: "Proyek", item: "/" },
            { name: "Pandu Desa 4.0", item: "/projects/pandudesa" },
          ])
        ),
      },
    ],
  }),
  component: PanduDesaPage,
});

const features = [
  {
    title: "Pemetaan Potensi",
    desc: "Identifikasi dan pemetaan aset serta potensi ekonomi desa secara digital untuk perencanaan yang presisi.",
  },
  {
    title: "Literasi Digital",
    desc: "Pendampingan aparatur dan warga desa dalam menggunakan perangkat teknologi informasi secara produktif.",
  },
  {
    title: "Tata Kelola Data",
    desc: "Membangun sistem informasi desa yang terintegrasi untuk keterbukaan publik dan efisiensi layanan.",
  },
  {
    title: "BUMDes Modern",
    desc: "Digitalisasi manajemen unit usaha desa agar lebih akuntabel dan memiliki daya saing pasar.",
  },
];

const results = [
  { metric: "100+", label: "Desa dampingan", note: "Tersebar di berbagai wilayah" },
  { metric: "4.0", label: "Indeks Literasi", note: "Peningkatan kesadaran digital" },
  { metric: "Real-time", label: "Pelaporan Data", note: "Akses informasi lebih cepat" },
];

function PanduDesaPage() {
  return (
    <main className="min-h-screen bg-[#090807] text-stone-200">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-amber-400 transition-colors"
          >
            ← Kembali
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
            <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1">Inisiatif</span>
            <span>2018 — 2020</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Pandu Desa 4.0</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-white text-balance font-bold">
            Pandu Desa<span className="italic text-amber-400"> 4.0</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone-300">
            Gerakan transformasi digital perdesaan yang menempatkan desa sebagai <em className="text-amber-300 not-italic font-semibold">subjek data,</em> bukan sekadar objek pembangunan.
          </p>
        </div>
      </section>

      {/* Visual block */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-orange-950/20 to-black grain">
            <img 
              src={projectImg} 
              alt="Pandu Desa 4.0 Visual" 
              className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-40"
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-[12rem] italic leading-none text-white/10 md:text-[18rem]">
                  p
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber-400/80">
                  Data Driven Village · Sovereignty by choice
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
              Tantangan
            </div>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl font-bold">
              Ketimpangan digital bukan hanya soal <span className="italic text-amber-400">sinyal.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-stone-300">
              Banyak kebijakan desa diambil tanpa basis data yang kuat. Informasi mengenai potensi ekonomi terserak dan tidak terdokumentasi. Pandu Desa hadir untuk menjembatani celah ini dengan literasi dan teknologi yang tepat guna.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0e0c0a] p-8 md:p-10 flex flex-col justify-center">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
              Pendekatan Lapangan
            </div>
            <p className="mt-4 leading-relaxed text-stone-300">
              Membangun kedaulatan data dimulai dari masyarakat desa sendiri: mendata aset produktif, memetakan rantai pasok komoditas lokal, hingga melatih aparatur memanfaatkan basis data terbuka untuk perencanaan anggaran desa (APBDes) yang akuntabel.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="reveal border-t border-white/10 bg-[#0e0c0a] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
            Pilar Program
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-white md:text-5xl font-bold">
            Membangun ekosistem, bukan sekadar aplikasi.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-[#14110e]/90 p-8 transition-all hover:border-amber-500/40 hover:bg-[#1a1612] md:p-10"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-2xl text-white font-bold">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="reveal py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">Dampak</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-white md:text-5xl font-bold">
            Transformasi yang terukur.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.label} className="border-t-2 border-amber-500/60 pt-6">
                <div className="font-display text-6xl text-white font-bold md:text-7xl">{r.metric}</div>
                <div className="mt-3 font-display text-xl text-white font-semibold">{r.label}</div>
                <div className="mt-1 text-sm text-stone-400">{r.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#120f0d] py-24 text-stone-200 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Kolaborasi</div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-white text-balance font-bold">
            Tertarik membangun narasi pembangunan berbasis data?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
            Saya terbuka untuk diskusi mengenai pengembangan ekosistem digital desa, pelatihan literasi, atau kolaborasi kebijakan berbasis komunitas.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-950 font-bold transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              Mari Ngobrol →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
