import { SectionLabel } from "./SectionLabel";

const milestones = [
  {
    year: "2019",
    title: "Sertifikasi BNSP",
    desc: "Klaster Perencanaan Produksi Sektor Industri Agro — fondasi disiplin operasional.",
    tag: "Foundation",
  },
  {
    year: "2020+",
    title: "Fasilitator Komunitas",
    desc: "Bergabung Jaringan Radio Komunitas Indoensia dan Jurnal Celebes Serta Aliansi Masyarakat Adat Sulawesi Selatan, mendampingi tata kelola BUMMA dan akses pasar produk lokal.",
    tag: "Community",
  },
  {
    year: "2024",
    title: "Inkubasi Rewako Export",
    desc: "Peserta program ekspor Bank Indonesia — kurasi standar pasar internasional.",
    tag: "Growth",
  },
  {
    year: "2025",
    title: "Sehati Kopi Indonesia",
    desc: "Mengelola operasional hulu-hilir kopi di Barru, Toraja, dan Sinjai. Produksi, stok, kualitas, mitra.",
    tag: "Operations",
  },
  {
    year: "2025",
    title: "Pandu Talenta Digital",
    desc: "Membangun beanhub.online dan Kafeya POS — perangkat sederhana untuk pencatatan rantai pasok dan akuntansi UMKM.",
    tag: "Digital",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="border-t border-border bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="02" label="Perjalanan" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
              Dari ruang kuliah <br />
              ke ladang kopi <span className="italic text-terracotta">— & kembali ke layar.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-coffee/70">
            Lima titik pijak yang membentuk cara saya bekerja hari ini.
          </p>
        </div>

        <ol className="relative mt-16 space-y-12 md:mt-20">
          <span className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-coffee/25 animate-draw-line md:left-1/2 md:-translate-x-1/2" />

          {milestones.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={m.year}
                className="relative grid gap-4 pl-8 md:grid-cols-2 md:pl-0 md:gap-12"
              >
                <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-terracotta bg-cream md:left-1/2 md:-translate-x-1/2" />

                <div className={left ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                    {m.year} · {m.tag}
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-coffee md:text-3xl">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-coffee/70 md:text-base">
                    {m.desc}
                  </p>
                </div>
                <div className={left ? "hidden md:block md:order-2" : "hidden md:block"} />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
