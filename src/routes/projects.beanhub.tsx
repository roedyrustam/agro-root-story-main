import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Gallery, type GalleryItem } from "@/components/Gallery";
import dashboardImg from "@/assets/beanhub-dashboard.jpg";
import flowImg from "@/assets/beanhub-flow.jpg";
import mobileImg from "@/assets/beanhub-mobile.jpg";

const galleryItems: GalleryItem[] = [
  {
    src: flowImg,
    alt: "Diagram alur rantai pasok kopi dari petani ke kafe",
    label: "Alur rantai pasok",
    caption: "Sebelum sistem ini, jejak biji kopi terputus di setiap perpindahan tangan. Diagram ini memetakan ulang lima titik kritis yang harus terdokumentasi.",
    stage: "Problem",
    orientation: "wide",
  },
  {
    src: mobileImg,
    alt: "Mockup aplikasi mobile untuk pencatatan panen petani",
    label: "Catat Panen — Mobile",
    caption: "Petani mencatat hasil panen langsung dari kebun: kebun, varietas, tanggal, berat, foto. Antarmuka satu layar, ringan untuk koneksi 3G.",
    stage: "Solution",
    orientation: "portrait",
  },
  {
    src: dashboardImg,
    alt: "Dashboard Beanhub menampilkan data lot kopi dan statistik",
    label: "Dashboard Operator",
    caption: "Operator melihat semua lot, asal, grade, dan status dalam satu tabel. Stats bar memberi gambaran cepat tanpa perlu menggali laporan.",
    stage: "Solution",
    orientation: "wide",
  },
  {
    src: mobileImg,
    alt: "Tampilan riwayat panen dan jejak setiap lot kopi",
    label: "Jejak Lot Terverifikasi",
    caption: "Setiap lot punya halaman cerita sendiri — bisa di-share ke roaster atau pembeli akhir sebagai bukti origin yang jujur.",
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
    <main className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 hover:text-terracotta"
          >
            ← Kembali
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            <span className="rounded-full bg-terracotta/10 px-3 py-1">Platform</span>
            <span>2025</span>
            <span className="text-coffee/40">·</span>
            <span className="text-coffee/60">Pandu Talenta Digital</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-coffee text-balance">
            beanhub<span className="italic text-terracotta">.online</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-coffee/75">
            Platform rantai pasok kopi yang membuat perjalanan biji — dari pohon di Toraja
            sampai cangkir di Jakarta — bisa <em className="text-coffee">dilihat semua orang.</em>
          </p>

          <a
            href="https://beanhub.online"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-coffee bg-coffee px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta hover:border-terracotta"
          >
            Kunjungi platform ↗
          </a>
        </div>
      </section>

      {/* Visual block */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grain relative aspect-[16/8] overflow-hidden rounded-3xl bg-gradient-to-br from-terracotta/30 via-mustard/30 to-sage/30">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-[12rem] italic leading-none text-coffee/20 md:text-[18rem]">
                  b
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-coffee/60">
                  Bean to brew · transparent by design
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
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Masalah</div>
            <h2 className="mt-4 font-display text-3xl text-coffee md:text-4xl">
              Rantai pasok kopi sering jadi <span className="italic">kotak hitam.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-coffee/75">
              Petani tidak tahu berapa harga biji mereka dijual di kota. Pengepul kewalahan
              mencatat di buku tulis. Roaster ingin bercerita "single origin" tapi tidak punya
              data yang bisa diverifikasi. Akibatnya: harga tidak adil, kualitas naik turun,
              cerita kopi berhenti di rak toko.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-sage">Solusi</div>
            <h2 className="mt-4 font-display text-3xl text-coffee md:text-4xl">
              Satu sistem ringan untuk <span className="italic">semua simpul.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-coffee/75">
              Beanhub.online adalah pencatatan terpusat yang ringan — bisa diakses petani via
              ponsel, pengepul via laptop, roaster via dashboard. Setiap lot biji punya jejak
              yang sama, dipakai siapa saja, tanpa friksi.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-cream-soft py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Fitur Inti</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-coffee md:text-5xl">
            Empat hal yang dikerjakan dengan serius.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {features.map((f, i) => (
              <div key={f.title} className="bg-card p-8 transition-colors hover:bg-cream-soft md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-2xl text-coffee">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-coffee/75">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Hasil</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-coffee md:text-5xl">
            Dampak nyata di lapangan.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.label} className="border-t-2 border-terracotta pt-6">
                <div className="font-display text-6xl text-coffee md:text-7xl">{r.metric}</div>
                <div className="mt-3 font-display text-xl text-coffee">{r.label}</div>
                <div className="mt-1 text-sm text-coffee/60">{r.note}</div>
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
    <section className="border-t border-border bg-coffee py-24 text-cream md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">{eyebrow}</div>
        <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-cream text-balance">
          {title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">{body}</p>

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="mailto:support@bijidata.online"
            className="inline-flex items-center gap-3 rounded-full bg-mustard px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-coffee transition-all hover:bg-cream"
          >
            Email saya →
          </a>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:border-mustard hover:text-mustard"
          >
            Lihat kontak lain
          </Link>
        </div>
      </div>
    </section>
  );
}
