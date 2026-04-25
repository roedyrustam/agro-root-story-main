import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang — Roedy Rustam · Sociopreneur  × Agro × Digital" },
      {
        name: "description",
        content:
          "Cerita Roedy Rustam: Trainer UMKM & Konsultan Desa yang menjembatani kebun kopi Sulawesi dengan baris kode dan pemberdayaan komunitas.",
      },
      { property: "og:title", content: "Tentang Roedy Rustam — Trainer × Agro × Digital" },
      {
        property: "og:description",
        content:
          "Trainer UMKM, Konsultan Desa, dan pengembang sistem agro-komunitas dengan latar Teknik Industri.",
      },
      { property: "og:image", content: "/og-about.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tentang Roedy Rustam — Praktisi Agro × Digital" },
      { name: "twitter:image", content: "/og-about.jpg" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    n: "01",
    title: "Mulai dari lapangan",
    body: "Solusi yang baik dilahirkan di kebun, di belakang mesin kasir, di rapat komunitas — bukan di whiteboard. Saya mendengar dulu, mengetik kemudian.",
  },
  {
    n: "02",
    title: "Sederhana adalah disiplin",
    body: "Setiap fitur harus berjuang untuk eksis. Yang dibuang sama pentingnya dengan yang dibangun. Petani dan pemilik warung tidak punya waktu untuk training.",
  },
  {
    n: "03",
    title: "Transparansi sebagai nilai",
    body: "Data yang jujur menghasilkan harga yang adil. Sistem yang saya bangun selalu menempatkan keterlacakan di atas kosmetik.",
  },
  {
    n: "04",
    title: "Komunitas dulu, produk kemudian",
    body: "Teknologi adalah alat, bukan tujuan. Yang saya kerjakan harus memperkuat tata kelola yang sudah ada di komunitas, bukan menggantinya.",
  },
];

const toolbox = {
  Lapangan: [
    "Perencanaan produksi agro",
    "Manajemen rantai pasok kopi",
    "Quality control & cupping basics",
    "Pelatihan & Literasi Digital UMKM",
    "Konsultansi Pengembangan Ekonomi Desa",
  ],
  Studio: [
    "React & TypeScript",
    "SQL & data modeling",
    "Sistem informasi akuntansi",
    "Excel power-user",
  ],
  Manusia: [
    "Bahasa Indonesia",
    "Bahasa Bugis",
    "Komunikasi lintas budaya",
    "Mediasi pemangku kepentingan",
  ],
};

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60 hover:text-terracotta"
          >
            ← Kembali
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
                Tentang · Profil
              </div>

              <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] text-coffee text-balance">
                Pribadi yang memilih <span className="italic text-terracotta">jalan tanah,</span>{" "}
                lalu kembali ke <span className="italic">layar.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-coffee/75">
                Saya Roedy. Pekerjaan saya hari ini berada di antara dua
                dunia yang jarang bertemu: <span className="italic text-terracotta">ladang kopi di Sulawesi Selatan</span> dan baris-baris kode
                untuk UMKM agro.
              </p>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -inset-4 -rotate-2 rounded-3xl bg-mustard/30" />
              <img
                src={portrait}
                alt="Ilustrasi Roedy Rustam di kebun kopi Sulawesi"
                width={1024}
                height={1280}
                className="relative w-full rounded-2xl"
              />
              <div className="absolute -bottom-5 -right-5 max-w-[180px] rotate-[3deg] rounded-lg bg-cream px-4 py-3 shadow-xl ring-1 ring-border">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-terracotta">
                  Berbasis
                </div>
                <div className="mt-1 font-display text-sm text-coffee">Sulawesi Selatan, ID</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story chapters */}
      <section className="border-t border-border bg-cream-soft py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Cerita</div>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
            Tiga babak — sejauh ini.
          </h2>

          <div className="mt-16 space-y-16">
            <Chapter
              id="babak-i"
              num="I"
              title="Teknik Industri sebagai cara membaca dunia"
              body={[
                "Disiplin saya mengajarkan satu hal yang melekat sampai hari ini: setiap proses bisa dipetakan, dan setiap pemborosan punya alamat. Sertifikasi BNSP Klaster Perencanaan Produksi Sektor Industri Agro (2019) menutup babak ini sebagai fondasi formal.",
                "Tapi yang saya bawa keluar bukan sekadar teknik — melainkan kebiasaan bertanya: di mana titik gesek terbesar? siapa yang paling kena dampaknya? Pertanyaan-pertanyaan inilah yang nanti membawa saya ke kopi.",
              ]}
            />
            <Chapter
              id="babak-ii"
              num="II"
              title="Agro & komunitas — mendengar lebih lama dari bicara"
              body={[
                "Di JURnal Celebes dan Aliansi Masyarakat Adat Sulawesi Selatan, saya belajar bahwa tata kelola sebuah Badan Usaha Milik Masyarakat Adat tidak bisa di-copy paste dari template MBA. Ada adat, ada cara musyawarah, ada hubungan dengan tanah yang tidak masuk di laporan keuangan.",
                "Di Sehati Kopi Indonesia, saya mengelola alur produksi, stok, dan koordinasi tim — sambil mendampingi potensi komoditas di Barru, Toraja, dan Sinjai. Tiga geografi, tiga karakter biji, tiga komunitas yang berbeda. Pelajaran terbesar: standar kualitas hanya bertahan jika hubungan dengan petani juga terjaga.",
                "Inkubasi Rewako Export Bank Indonesia mempertemukan semua ini dengan satu standar baru: pasar internasional. Kopi yang baik harus bisa diceritakan, dan ceritanya harus bisa diverifikasi.",
              ]}
            />
            <Chapter
              id="babak-iii"
              num="III"
              title="Digital — alat bantu, bukan menara gading"
              body={[
                "Di titik ini, latar Teknik Industri & React saya bertemu di satu meja. Di Pandu Talenta Digital, saya membangun beanhub.online untuk mencatat rantai pasok kopi, dan Kafeya POS sebagai alat akuntansi UMKM yang sesuai standar pelaporan.",
                "Saya tidak tertarik membangun software yang menang demo tapi tidak dipakai. Yang saya bangun harus berhasil di tangan ibu pemilik warung yang sibuk, dan di ponsel petani yang sinyalnya kembang kempis. Itu standarnya. Itu seninya.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                Prinsip Kerja
              </div>
              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
                Empat hal yang <br />
                <span className="italic text-terracotta">tidak saya tawar.</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-coffee/70">
                Bukan slogan — ini cara saya memutuskan apa yang dibangun, ditolak, atau dihapus.
              </p>
            </div>

            <ul className="space-y-px overflow-hidden rounded-2xl border border-border md:col-span-7">
              {principles.map((p) => (
                <li
                  key={p.n}
                  className="group grid gap-4 bg-card p-7 transition-colors hover:bg-cream-soft md:grid-cols-12 md:p-8"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta md:col-span-2">
                    {p.n}
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-display text-2xl text-coffee">{p.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-coffee/75">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How I work — pull quote */}
      <section className="border-t border-border bg-coffee py-24 text-cream md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-mustard">
            Pendekatan
          </div>
          <blockquote className="mt-8">
            <p className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[1.1] text-cream text-balance">
              <span className="text-mustard">"</span>Sederhana itu mahal.{" "}
              <span className="italic">Setiap fitur yang tidak ada</span> adalah keputusan yang
              dibuat dengan hati-hati — bukan kelalaian.<span className="text-mustard">"</span>
            </p>
          </blockquote>

          <div className="mt-12 grid gap-12 border-t border-cream/15 pt-12 md:grid-cols-3">
            <Step
              num="1"
              title="Dengar"
              body="Saya datang ke lapangan dulu. Lihat alur kerja yang sudah ada, catat friksi yang nyata. Tidak ada yang dibangun sebelum bagian ini selesai."
            />
            <Step
              num="2"
              title="Sketsa kecil"
              body="Saya prototipe yang paling sederhana — sering hanya dengan kertas atau Excel. Diuji dengan pengguna sebenarnya sebelum satu baris kode ditulis."
            />
            <Step
              num="3"
              title="Iterasi pelan"
              body="Rilis kecil, dengar lagi, perbaiki. Saya lebih suka tool yang tumbuh perlahan tapi dipakai, daripada platform megah yang dilupakan setelah peluncuran."
            />
          </div>
        </div>
      </section>

      {/* Toolbox */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            Toolkit
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
            Apa yang saya bawa ke meja.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {Object.entries(toolbox).map(([group, items]) => (
              <div key={group} className="bg-card p-8 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">
                  {group}
                </div>
                <ul className="mt-6 space-y-3">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-base text-coffee/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.2em] text-coffee/60">
            <span>Kredensial:</span>
            <span className="text-terracotta">★ BNSP Perencanaan Produksi Industri Agro</span>
            <span className="text-terracotta">★ Rewako Export · Bank Indonesia</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cream-soft py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            Mari bicara
          </div>
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee text-balance">
            Kalau cerita ini terdengar selaras dengan apa yang sedang kamu kerjakan —{" "}
            <span className="italic text-terracotta">mari ngobrol.</span>
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-coffee px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-terracotta"
            >
              Lihat kontak →
            </Link>
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-3 rounded-full border border-coffee/30 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-coffee transition-all hover:border-terracotta hover:text-terracotta"
            >
              Lihat karya
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Chapter({ num, title, body, id }: { num: string; title: string; body: string[]; id?: string }) {
  return (
    <article id={id} className="grid gap-6 md:grid-cols-12 md:gap-10 scroll-mt-32">
      <div className="md:col-span-3">
        <div className="font-display text-7xl italic text-terracotta md:text-8xl">{num}</div>
      </div>
      <div className="md:col-span-9">
        <h3 className="font-display text-2xl text-coffee md:text-3xl">{title}</h3>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-coffee/80 md:text-lg">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-4xl text-mustard">{num}</span>
        <span className="font-display text-2xl text-cream">{title}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-cream/75">{body}</p>
    </div>
  );
}
