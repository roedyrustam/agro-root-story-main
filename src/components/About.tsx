import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative subtle gradient background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-terracotta/5 blur-3xl pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel number="01" label="Tentang" />

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee text-balance lg:col-span-7 reveal">
            Pegiat Socialpreneurship yang memilih{" "}
            <span className="relative inline-block px-2">
              <span className="relative z-10 italic text-terracotta">jalan tanah</span>
              <span className="absolute bottom-1 left-0 h-3 w-full bg-mustard/30 -z-10 -rotate-2 rounded"></span>
            </span>{" "}
            — bekerja dengan komunitas adat, kelompok tani, dan baris-baris kode.
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-coffee/80 lg:col-span-5 lg:pt-4 reveal delay-100">
            <p>
              Latar belakang saya adalah perencanaan produksi industri agro — disiplin yang
              mengajarkan cara membaca alur dari bahan baku sampai produk akhir. Saya membawanya ke
              dunia kopi: memetakan panen, menjaga kualitas, dan memastikan harga yang adil sampai
              ke petani.
            </p>
            <p>
              Di sisi lain, saya menulis kode. Bukan untuk gaya, tapi untuk menjawab pertanyaan
              sederhana di lapangan: <em className="bg-terracotta/10 text-terracotta px-1.5 py-0.5 rounded italic">"berapa stok hari ini?"</em>,{" "}
              <em className="bg-terracotta/10 text-terracotta px-1.5 py-0.5 rounded italic">"siapa yang sudah dibayar?"</em>,{" "}
              <em className="bg-terracotta/10 text-terracotta px-1.5 py-0.5 rounded italic">"berapa pajak bulan ini?"</em>. Teknologi
              yang dibangun di kebun, bukan di menara.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Sulawesi Selatan", "BUMMA", "Rewako Export · BI", "AMAN Sulsel"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-coffee/10 bg-cream px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-coffee shadow-sm transition-transform hover:-translate-y-0.5 hover:border-terracotta/30"
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
