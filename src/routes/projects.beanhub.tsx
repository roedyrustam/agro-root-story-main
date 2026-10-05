import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { generateSoftwareAppSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Gallery, type GalleryItem } from "@/components/Gallery";
import dashboardImg from "../assets/beanhub-dashboard.jpg";
import flowImg from "../assets/beanhub-flow.jpg";
import mobileImg from "../assets/beanhub-mobile.jpg";

const galleryItems: GalleryItem[] = [
  {
    src: flowImg,
    alt: "Diagram alur rantai pasok kopi dari petani ke kafe",
    label: "Alur rantai pasok",
    caption:
      "Sebelum sistem ini, jejak biji kopi terputus di setiap perpindahan tangan. Diagram ini memetakan ulang lima titik kritis yang harus terdokumentasi.",
    stage: "Problem",
    orientation: "wide",
  },
  {
    src: mobileImg,
    alt: "Mockup aplikasi mobile untuk pencatatan panen petani",
    label: "Catat Panen — Mobile",
    caption:
      "Petani mencatat hasil panen langsung dari kebun: kebun, varietas, tanggal, berat, foto. Antarmuka satu layar, ringan untuk koneksi 3G.",
    stage: "Solution",
    orientation: "portrait",
  },
  {
    src: dashboardImg,
    alt: "Dashboard Beanhub menampilkan data lot kopi dan statistik",
    label: "Dashboard Operator",
    caption:
      "Operator melihat semua lot, asal, grade, dan status dalam satu tabel. Stats bar memberi gambaran cepat tanpa perlu menggali laporan.",
    stage: "Solution",
    orientation: "wide",
  },
  {
    src: mobileImg,
    alt: "Tampilan riwayat panen dan jejak setiap lot kopi",
    label: "Jejak Lot Terverifikasi",
    caption:
      "Setiap lot punya halaman cerita sendiri — bisa di-share ke roaster atau pembeli akhir sebagai bukti origin yang jujur.",
    stage: "Result",
    orientation: "portrait",
  },
];

export const Route = createFileRoute("/projects/beanhub")({
  head: () => ({
    meta: [
      { title: "Beanhub.online — Platform Rantai Pasok Kopi · Roedy Rustam" },
      {
        name: "description",
        content:
          "Beanhub.online: platform pencatatan rantai pasok kopi dari kebun ke roastery. Transparan untuk petani, pengepul, dan roaster.",
      },
      { property: "og:title", content: "Beanhub.online — Rantai Pasok Kopi yang Transparan" },
      {
        property: "og:description",
        content: "Studi kasus pengembangan platform supply chain kopi Sulawesi.",
      },
      { property: "og:image", content: "/og-beanhub.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-beanhub.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateSoftwareAppSchema({
            name: "Beanhub.online",
            description: "Platform rantai pasok kopi dari kebun ke roastery yang transparan.",
            url: "https://beanhub.online",
            image: "https://roedyrustam.pages.dev/og-beanhub.jpg",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbSchema([
            { name: "Beranda", item: "/" },
            { name: "Proyek", item: "/" },
            { name: "Beanhub", item: "/projects/beanhub" },
          ])
        ),
      },
    ],
  }),
  component: BeanhubPage,
});

const features = [
  {
    title: "Pencatatan panen",
    desc: "Petani mencatat hasil panen per kebun, varietas, dan tanggal — langsung dari ponsel.",
  },
  {
    title: "Aliran biji terlacak",
    desc: "Setiap perpindahan dari kebun → pengepul → roaster terdokumentasi otomatis.",
  },
  {
    title: "Mutu & grading",
    desc: "Catat hasil cupping, defect rate, dan grade untuk setiap lot kopi.",
  },
  {
    title: "Laporan transparan",
    desc: "Dashboard sederhana untuk roaster melihat asal-usul biji yang mereka beli.",
  },
];

const results = [
  { metric: "3", label: "Wilayah aktif", note: "Barru · Toraja · Sinjai" },
  { metric: "100%", label: "Single origin tracked", note: "Setiap lot punya cerita" },
  { metric: "↓", label: "Selisih data lapangan", note: "Pencatatan jadi disiplin" },
];

function BeanhubPage() {
  return (
    <main className="min-h-screen bg-[#090807] text-stone-200">
      <Nav />

      {/* Project Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#090807] overflow-hidden border-b border-white/10">
        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.06),transparent_50%)]" />

        <div className="mx-auto max-w-6xl px-6 md:px-10 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-amber-400 transition-colors"
          >
            ← Kembali
          </Link>
          
          <div className="mt-12 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-amber-400 border border-amber-500/20 font-bold">Supply Chain</span>
            <span className="text-stone-400">2025</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">Agro-Digital</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] text-white text-balance font-bold">
            Digitalisasi <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">hulu kopi</span> <br />
            Sulawesi.
          </h1>
          
          <div className="mt-12 max-w-2xl">
            <p className="text-xl leading-relaxed text-stone-300">
              Beanhub.online bukan sekadar aplikasi pencatatan. Ini adalah instrumen transparansi yang lahir dari kegelisahan saya melihat petani kopi di pegunungan Sulawesi seringkali kehilangan kendali atas nilai komoditas mereka sendiri.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a href="https://beanhub.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-950 font-bold transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
              Buka Platform ↗
            </a>
          </div>
        </div>
      </section>

      {/* Narrative Section: The Consultant's View */}
      <section className="py-24 md:py-32 bg-[#0e0c0a] border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Catatan Konsultan</div>
              <h2 className="font-display text-4xl text-white leading-[1.1] font-bold">
                "Aplikasi tidak akan <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">membereskan masalah</span> <br />
                jika hubungan tidak dibangun."
              </h2>
              <p className="text-lg leading-relaxed text-stone-300">
                Saat mendampingi petani di Barru dan Toraja, saya menyadari bahwa hambatan terbesar digitalisasi bukan pada kemampuan teknis, melainkan pada <strong className="text-amber-400">kepercayaan</strong>. Petani enggan mencatat jika data tersebut hanya digunakan untuk menekan harga.
              </p>
              <p className="text-lg leading-relaxed text-stone-300">
                Beanhub saya rancang untuk menjadi "jembatan kepercayaan". Dengan pencatatan yang terbuka, pengepul dan roaster bisa memberikan harga yang lebih adil (premium) karena mereka memiliki bukti kualitas dan asal-usul yang sah.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#14110e] border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="relative h-full p-10 flex flex-col justify-end">
                  <div className="font-mono text-sm text-amber-400 font-semibold">Impact Metric</div>
                  <div className="mt-2 font-display text-6xl text-white font-bold">100%</div>
                  <div className="mt-2 text-stone-400">Traceability terjamin dari pohon ke karung.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual block */}
      <section className="px-6 md:px-10 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grain relative aspect-[16/8] overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/40 via-stone-900/80 to-emerald-950/30 border border-white/10">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-[12rem] italic leading-none text-white/10 md:text-[18rem]">
                  b
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300/80">
                  Bean to brew · transparent by design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 md:py-32 bg-[#090807]">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Masalah
            </div>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl font-bold">
              Rantai pasok kopi sering jadi <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">kotak hitam.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-stone-300">
              Petani tidak tahu berapa harga biji mereka dijual di kota. Pengepul kewalahan mencatat
              di buku tulis. Roaster ingin bercerita "single origin" tapi tidak punya data yang bisa
              diverifikasi. Akibatnya: harga tidak adil, kualitas naik turun, cerita kopi berhenti
              di rak toko.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="reveal mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#14110e]">
              <img src={flowImg} alt="Alur Beanhub" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">Solusi</div>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl font-bold">
              Satu sistem ringan untuk <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">semua simpul.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-stone-300">
              Beanhub.online adalah pencatatan terpusat yang ringan — bisa diakses petani via
              ponsel, pengepul via laptop, roaster via dashboard. Setiap lot biji punya jejak yang
              sama, dipakai siapa saja, tanpa friksi.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="reveal border-t border-white/10 bg-[#0e0c0a] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
            Fitur Inti
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-white md:text-5xl font-bold">
            Empat hal yang dikerjakan dengan serius.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-[#14110e]/80 p-8 transition-all hover:border-amber-400/30 hover:bg-[#1a1613] md:p-10"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-2xl text-white font-bold">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="reveal py-24 md:py-32 bg-[#090807]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Hasil</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-white md:text-5xl font-bold">
            Dampak nyata di lapangan.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.label} className="border-t-2 border-amber-400 pt-6">
                <div className="font-display text-6xl text-white font-bold md:text-7xl">{r.metric}</div>
                <div className="mt-3 font-display text-xl text-white font-bold">{r.label}</div>
                <div className="mt-1 text-sm text-stone-400">{r.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery
        items={galleryItems}
        title="Dari sketsa alur sampai layar yang dipakai harian."
        subtitle="Empat artefak kunci dari pengembangan Beanhub — geser untuk menelusuri."
      />

      {/* CTA */}
      <CtaBlock
        eyebrow="Kolaborasi"
        title="Punya kebun, roastery, atau ide untuk rantai pasok yang lebih jujur?"
        body="Saya terbuka membahas integrasi, pilot project, atau kolaborasi riset. Beanhub adalah platform yang masih tumbuh — paling baik dibangun bersama yang menggunakannya."
      />

      <Footer />
    </main>
  );
}

function CtaBlock({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="border-t border-white/10 bg-[#120f0d] py-24 text-stone-200 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">{eyebrow}</div>
        <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-white text-balance font-bold">
          {title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">{body}</p>

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="mailto:support@bijidata.online"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-950 font-bold transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Email saya →
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-200 transition-all hover:border-amber-400 hover:text-amber-300"
          >
            Lihat kontak lain
          </Link>
        </div>
      </div>
    </section>
  );
}
