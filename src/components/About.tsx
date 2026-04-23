import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel number="01" label="Tentang" />

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee text-balance lg:col-span-7">
            Pegiat Adat yang memilih{" "}
            <span className="italic text-terracotta">jalan tanah</span>{" "}
            — bekerja dengan komunitas adat, kelompok tani, dan baris-baris kode.
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-coffee/80 lg:col-span-5 lg:pt-4">
            <p>
              Latar belakang saya adalah perencanaan produksi industri agro — disiplin yang mengajarkan
              cara membaca alur dari bahan baku sampai produk akhir. Saya membawanya ke dunia kopi:
              memetakan panen, menjaga kualitas, dan memastikan harga yang adil sampai ke petani.
            </p>
            <p>
              Di sisi lain, saya menulis kode. Bukan untuk gaya, tapi untuk menjawab pertanyaan
              sederhana di lapangan: <em>"berapa stok hari ini?"</em>, <em>"siapa yang sudah dibayar?"</em>,
              <em>"berapa pajak bulan ini?"</em>. Teknologi yang dibangun di kebun, bukan di menara.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Sulawesi Selatan", "BUMMA", "Rewako Export · BI", "AMAN Sulsel"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-coffee/20 bg-cream-soft px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-coffee/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
