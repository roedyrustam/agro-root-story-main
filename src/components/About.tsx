import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32">
      {/* Decorative organic background elements */}
      <div className="absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-terracotta/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-mustard/5 blur-[100px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel number="01" label="Tentang" />

        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          {/* Main Statement */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] text-coffee text-balance reveal">
              Memilih{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-terracotta">jalan tanah</span>
                <svg className="absolute -bottom-2 left-0 -z-10 w-full" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15C50 5 250 5 295 15" stroke="#E0B565" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>{" "}
              untuk membangun jembatan antara kebun & kode.
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-20 reveal delay-200">
              <div className="group relative rounded-3xl border border-coffee/5 bg-cream-soft p-8 transition-all hover:border-terracotta/20 hover:shadow-xl hover:shadow-terracotta/5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">Akar</div>
                <h3 className="mt-4 font-display text-2xl text-coffee">Industri Agro</h3>
                <p className="mt-4 text-sm leading-relaxed text-coffee/70">
                  Latar belakang Teknik Industri yang fokus pada efisiensi produksi. Saya menerapkan logika sistemik ini pada rantai pasok kopi Sulawesi.
                </p>
              </div>

              <div className="group relative rounded-3xl border border-coffee/5 bg-cream-soft p-8 transition-all hover:border-sage/20 hover:shadow-xl hover:shadow-sage/5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage">Tumbuh</div>
                <h3 className="mt-4 font-display text-2xl text-coffee">Digital Native</h3>
                <p className="mt-4 text-sm leading-relaxed text-coffee/70">
                  Menulis kode untuk menjawab masalah nyata: pencatatan stok, transparansi harga petani, dan digitalisasi UMKM berbasis komunitas.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-8 lg:col-span-5 lg:pt-4 reveal delay-100">
            <div className="relative border-l-2 border-terracotta/20 pl-8">
              <p className="text-lg leading-relaxed text-coffee/90">
                Saya tidak melihat teknologi sebagai "solusi ajaib", melainkan sebagai <span className="font-medium text-coffee">alat bantu</span> untuk memperkuat apa yang sudah ada di lapangan.
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-coffee/75">
              <p>
                Perjalanan saya dimulai dari pemetaan radio komunitas di pelosok Sulawesi hingga pemetaan panen kopi di bukit Sinjai dan Toraja. Setiap langkah mengajarkan bahwa kedaulatan informasi dan data yang jujur adalah fondasi keadilan.
              </p>
              <p>
                Kini, saya fokus mengembangkan ekosistem digital seperti <span className="text-terracotta font-medium">beanhub.online</span> yang menghubungkan kebun langsung ke meja barista dengan jejak digital yang bisa dipertanggungjawabkan.
              </p>
            </div>

            <div className="pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/50 mb-4">Wilayah & Kolaborasi</div>
              <div className="flex flex-wrap gap-2">
                {["Toraja", "Enrekang", "Barru", "Sinjai", "Malino", "UNHAS Engineering", "Jirak Celebes", "BUMMA", "Pandu Desa 4.0", "Pemberdayaan UMKM", "Konsultan Desa"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-coffee/10 bg-cream px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-coffee/80 shadow-sm transition-all hover:border-terracotta/30 hover:text-terracotta"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
