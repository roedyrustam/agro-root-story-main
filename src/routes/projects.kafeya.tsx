import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Gallery, type GalleryItem } from "@/components/Gallery";
import { generateSoftwareAppSchema, generateBreadcrumbSchema } from "@/lib/schema";
import posImg from "../assets/kafeya-pos.jpg";
import flowImg from "../assets/kafeya-flow.jpg";
import reportImg from "../assets/kafeya-report.jpg";

const galleryItems: GalleryItem[] = [
  {
    src: flowImg,
    alt: "Diagram alur dari transaksi kasir menjadi laporan keuangan otomatis",
    label: "Transaksi → Laporan",
    caption:
      "Dulu pemilik warung mencatat di buku, lalu memindahkan ke Excel akhir bulan. Diagram ini memetakan ulang alurnya jadi satu tarikan napas.",
    stage: "Problem",
    orientation: "wide",
  },
  {
    src: posImg,
    alt: "Antarmuka kasir Kafeya POS untuk café",
    label: "Kasir Kafeya",
    caption:
      "Layout split: menu di kiri, order di kanan. Tombol besar, harga jelas, alur tap-tap-bayar dalam hitungan detik bahkan saat antrian sibuk.",
    stage: "Solution",
    orientation: "wide",
  },
  {
    src: reportImg,
    alt: "Mockup laporan bulanan keuangan UMKM kopi",
    label: "Laporan Bulanan",
    caption:
      "Akhir bulan tinggal buka — omzet, kategori, margin, pajak sudah tergenerate. Tinggal kirim ke akuntan atau lihat sendiri di ponsel.",
    stage: "Result",
    orientation: "portrait",
  },
  {
    src: posImg,
    alt: "Tampilan ringkas struk transaksi yang siap cetak atau dikirim digital",
    label: "Struk Digital",
    caption:
      "Struk bisa dicetak atau dikirim via WhatsApp — sekaligus jadi bukti transaksi yang masuk ke pembukuan tanpa input manual.",
    stage: "Result",
    orientation: "wide",
  },
];

export const Route = createFileRoute("/projects/kafeya")({
  head: () => ({
    meta: [
      { title: "Kafeya POS — Akuntansi Sederhana untuk UMKM Kopi · Roedy Rustam" },
      {
        name: "description",
        content:
          "Kafeya POS: alat bantu kasir & pelaporan keuangan untuk café dan UMKM kopi. Sesuai standar, ramah pemilik warung kecil.",
      },
      { property: "og:title", content: "Kafeya POS — Akuntansi UMKM yang Tidak Bikin Pusing" },
      {
        property: "og:description",
        content: "Studi kasus pengembangan POS & sistem akuntansi UMKM kopi.",
      },
      { property: "og:image", content: "/og-kafeya.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-kafeya.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateSoftwareAppSchema({
            name: "Kafeya POS",
            description: "Alat bantu kasir & pelaporan keuangan sederhana untuk café dan UMKM kopi.",
            url: "https://kafeya.online",
            image: "https://roedyrustam.pages.dev/og-kafeya.jpg",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbSchema([
            { name: "Beranda", item: "/" },
            { name: "Proyek", item: "/" },
            { name: "Kafeya", item: "/projects/kafeya" },
          ])
        ),
      },
    ],
  }),
  component: KafeyaPage,
});

const features = [
  {
    title: "Kasir cepat",
    desc: "Antrian sibuk pagi hari? Input transaksi dalam hitungan detik, bisa offline.",
  },
  {
    title: "Pelaporan otomatis",
    desc: "Laporan harian, mingguan, bulanan tergenerate sendiri — tinggal kirim ke akuntan.",
  },
  {
    title: "Sesuai standar",
    desc: "Format pelaporan mengikuti kaidah akuntansi UMKM yang berlaku di Indonesia.",
  },
  {
    title: "Stok & menu",
    desc: "Pantau biji & bahan habis pakai, atur harga menu, lihat margin per item.",
  },
];

const results = [
  { metric: "<5", label: "Detik per transaksi", note: "Cocok untuk jam sibuk" },
  { metric: "0", label: "Buku tulis akhir bulan", note: "Tutup buku jadi otomatis" },
  { metric: "Rp", label: "Biaya entry-level", note: "Dirancang untuk warung kecil" },
];

function KafeyaPage() {
  return (
    <main className="min-h-screen bg-[#090807] text-stone-200">
      <Nav />

      {/* Project Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#090807] overflow-hidden border-b border-white/10">
        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.05),transparent_50%)]" />

        <div className="mx-auto max-w-6xl px-6 md:px-10 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-amber-400 transition-colors"
          >
            ← Kembali
          </Link>

          <div className="mt-12 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-amber-400 font-bold border border-amber-500/20">Financial Tool</span>
            <span className="text-stone-400">2025</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">UMKM Empowerment</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] text-white text-balance font-bold">
            Akuntansi <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">tanpa beban</span> <br />
            untuk warung.
          </h1>

          <div className="mt-12 max-w-2xl">
            <p className="text-xl leading-relaxed text-stone-300">
              Kafeya POS lahir dari ribuan jam saya mendampingi pemilik warung kopi kecil yang merasa "takut" dengan angka. Saya membangun alat yang membuat pembukuan terasa seperti aktivitas harian yang ringan.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a href="https://kafeya.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-950 font-bold transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
              Coba Sekarang ↗
            </a>
          </div>
        </div>
      </section>

      {/* Narrative Section: The Trainer's View */}
      <section className="py-24 md:py-32 bg-[#0e0c0a] border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Catatan Trainer</div>
              <h2 className="font-display text-4xl text-white leading-[1.1] font-bold">
                "Mendidik mentalitas <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">lebih sulit</span> <br />
                daripada mengajar fitur."
              </h2>
              <p className="text-lg leading-relaxed text-stone-300">
                Banyak pemilik UMKM berhenti mencatat bukan karena aplikasinya sulit, tapi karena mereka tidak melihat manfaat langsung dari data. Tugas saya sebagai pelatih adalah menunjukkan bahwa satu baris transaksi adalah peta menuju profitabilitas.
              </p>
              <p className="text-lg leading-relaxed text-stone-300">
                Kafeya saya desain untuk "sembunyi". Dia tidak meminta banyak perhatian, tapi memastikan setiap rupiah yang masuk terdokumentasi dengan benar sesuai kaidah akuntansi, tanpa pemilik warung harus menjadi akuntan.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#14110e] border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="relative h-full p-10 flex flex-col justify-end">
                  <div className="font-mono text-sm text-amber-400 font-semibold">Training Stat</div>
                  <div className="mt-2 font-display text-6xl text-white font-bold">0</div>
                  <div className="mt-2 text-stone-400">Kurva belajar mendekati nol untuk pemilik warung.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual block */}
      <section className="reveal px-6 md:px-10 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grain relative aspect-[16/8] overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-[#14110e] to-amber-950/40 border border-white/10">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-[12rem] italic leading-none text-white/10 md:text-[18rem]">
                  k
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber-400/80">
                  Point of sale · built for warung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#090807]">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Masalah
            </div>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl font-bold">
              UMKM kopi takut <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">"laporan keuangan".</span>
            </h2>
            <p className="mt-6 leading-relaxed text-stone-300">
              Pemilik warung sibuk meracik kopi, bukan mengoperasikan software akuntansi. POS yang
              ada terlalu mahal, terlalu rumit, atau cuma jualan fitur yang tidak dipakai. Akhirnya:
              nota berserakan, omzet tidak tercatat, pajak ditebak-tebak, modal tidak jelas perginya
              ke mana.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">Solusi</div>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl font-bold">
              Kasir & pembukuan <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">dalam satu napas.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-stone-300">
              Kafeya POS dibangun dari mendengar barista dan pemilik warung langsung. Setiap
              transaksi otomatis menjadi entri akuntansi. Akhir bulan? Ekspor laporan. Selesai.
              Tidak ada training berhari-hari, tidak ada fitur untuk pamer.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0e0c0a] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
            Fitur Inti
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-white md:text-5xl font-bold">
            Hanya yang benar-benar dipakai.
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

      <section className="py-24 md:py-32 bg-[#090807]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">Hasil</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-white md:text-5xl font-bold">
            Yang dirasakan pemilik warung.
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
        title="Layar yang dipakai barista, dilihat pemilik."
        subtitle="Empat artefak dari pengembangan Kafeya — geser untuk menelusuri."
      />

      <section className="border-t border-white/10 bg-[#120f0d] py-24 text-stone-200 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
            Kolaborasi
          </div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-white text-balance font-bold">
            Punya Bisnis, café, atau jaringan UMKM kopi yang butuh sistem yang sesuai?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
            Saya terbuka untuk pilot, kustomisasi, atau kemitraan dengan inkubator/koperasi. Mari
            bangun perangkat yang benar-benar dipakai, bukan cuma diinstall.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://kafeya.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-950 font-bold transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              Coba sekarang ↗
            </a>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Kafeya POS — Akuntansi UMKM Kopi",
                    text: "Studi kasus pengembangan sistem POS untuk UMKM agro.",
                    url: window.location.href,
                  });
                }
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-200 transition-all hover:border-amber-400 hover:text-amber-300"
            >
              Bagikan
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
