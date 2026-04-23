import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Gallery, type GalleryItem } from "@/components/Gallery";
import posImg from "../assets/kafeya-pos.jpg";
import flowImg from "../assets/kafeya-flow.jpg";
import reportImg from "../assets/kafeya-report.jpg";

const galleryItems: GalleryItem[] = [
  {
    src: flowImg,
    alt: "Diagram alur dari transaksi kasir menjadi laporan keuangan otomatis",
    label: "Transaksi → Laporan",
    caption: "Dulu pemilik warung mencatat di buku, lalu memindahkan ke Excel akhir bulan. Diagram ini memetakan ulang alurnya jadi satu tarikan napas.",
    stage: "Problem",
    orientation: "wide",
  },
  {
    src: posImg,
    alt: "Antarmuka kasir Kafeya POS untuk café",
    label: "Kasir Kafeya",
    caption: "Layout split: menu di kiri, order di kanan. Tombol besar, harga jelas, alur tap-tap-bayar dalam hitungan detik bahkan saat antrian sibuk.",
    stage: "Solution",
    orientation: "wide",
  },
  {
    src: reportImg,
    alt: "Mockup laporan bulanan keuangan UMKM kopi",
    label: "Laporan Bulanan",
    caption: "Akhir bulan tinggal buka — omzet, kategori, margin, pajak sudah tergenerate. Tinggal kirim ke akuntan atau lihat sendiri di ponsel.",
    stage: "Result",
    orientation: "portrait",
  },
  {
    src: posImg,
    alt: "Tampilan ringkas struk transaksi yang siap cetak atau dikirim digital",
    label: "Struk Digital",
    caption: "Struk bisa dicetak atau dikirim via WhatsApp — sekaligus jadi bukti transaksi yang masuk ke pembukuan tanpa input manual.",
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
      { property: "og:description", content: "Studi kasus pengembangan POS & sistem akuntansi UMKM kopi." },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
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
    <main className="min-h-screen bg-background">
      <Nav />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 hover:text-terracotta"
          >
            ← Kembali
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            <span className="rounded-full bg-coffee/10 px-3 py-1 text-coffee">Tool</span>
            <span>2025</span>
            <span className="text-coffee/60">·</span>
            <span className="text-coffee/60">Pandu Talenta Digital</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-coffee text-balance">
            Kafeya <span className="italic text-terracotta">POS</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-coffee/75">
            Sistem kasir & akuntansi untuk café dan UMKM kopi yang ingin{" "}
            <em className="text-coffee">tutup buku tanpa drama</em> setiap akhir bulan.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://kafeya.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-coffee bg-coffee px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta hover:border-terracotta"
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
              className="inline-flex items-center gap-3 rounded-full border border-coffee/20 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-coffee transition-all hover:border-coffee hover:bg-cream-soft"
            >
              Bagikan
            </button>
          </div>
        </div>
      </section>

      {/* Visual block */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grain relative aspect-[16/8] overflow-hidden rounded-3xl bg-gradient-to-br from-coffee via-coffee to-terracotta/40">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-[12rem] italic leading-none text-cream/15 md:text-[18rem]">
                  k
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">
                  Point of sale · built for warung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Masalah</div>
            <h2 className="mt-4 font-display text-3xl text-coffee md:text-4xl">
              UMKM kopi takut <span className="italic">"laporan keuangan".</span>
            </h2>
            <p className="mt-6 leading-relaxed text-coffee/75">
              Pemilik warung sibuk meracik kopi, bukan mengoperasikan software akuntansi.
              POS yang ada terlalu mahal, terlalu rumit, atau cuma jualan fitur yang tidak dipakai.
              Akhirnya: nota berserakan, omzet tidak tercatat, pajak ditebak-tebak, modal tidak
              jelas perginya ke mana.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-sage">Solusi</div>
            <h2 className="mt-4 font-display text-3xl text-coffee md:text-4xl">
              Kasir & pembukuan <span className="italic">dalam satu napas.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-coffee/75">
              Kafeya POS dibangun dari mendengar barista dan pemilik warung langsung. Setiap
              transaksi otomatis menjadi entri akuntansi. Akhir bulan? Ekspor laporan. Selesai.
              Tidak ada training berhari-hari, tidak ada fitur untuk pamer.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream-soft py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Fitur Inti</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-coffee md:text-5xl">
            Hanya yang benar-benar dipakai.
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

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Hasil</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-coffee md:text-5xl">
            Yang dirasakan pemilik warung.
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
        title="Layar yang dipakai barista, dilihat pemilik."
        subtitle="Empat artefak dari pengembangan Kafeya — geser untuk menelusuri."
      />

      <section className="border-t border-border bg-coffee py-24 text-cream md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">Kolaborasi</div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-cream text-balance">
            Punya warung, café, atau jaringan UMKM kopi yang butuh sistem yang waras?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            Saya terbuka untuk pilot, kustomisasi, atau kemitraan dengan inkubator/koperasi.
            Mari bangun perangkat yang benar-benar dipakai, bukan cuma diinstall.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://kafeya.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-cream bg-cream px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-coffee transition-all hover:bg-mustard hover:border-mustard"
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
              className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:border-mustard hover:text-mustard"
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
