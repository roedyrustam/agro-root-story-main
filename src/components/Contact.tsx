import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionLabel number="07" label="Kontak" />

        <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-coffee text-balance">
          Mari ngobrol <span className="italic text-terracotta">soal kopi,</span> komunitas, atau kode.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-coffee/75">
          Terbuka untuk kolaborasi di bidang agro, pemberdayaan komunitas, atau pengembangan perangkat
          digital untuk UMKM. Saya membaca setiap pesan.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:support@bijidata.online"
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-terracotta hover:bg-cream-soft"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">Email</div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="font-display text-2xl text-coffee md:text-3xl">support@bijidata.online</span>
              <span className="text-2xl text-coffee/40 transition-all group-hover:translate-x-1 group-hover:text-terracotta">→</span>
            </div>
            <div className="mt-2 text-sm text-coffee/60">Cara paling mudah, biasanya dibalas dalam 24 jam.</div>
          </a>

          <a
            href="https://beanhub.online"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-terracotta hover:bg-cream-soft"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">Karya</div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="font-display text-2xl text-coffee md:text-3xl">beanhub.online</span>
              <span className="text-2xl text-coffee/40 transition-all group-hover:translate-x-1 group-hover:text-terracotta">↗</span>
            </div>
            <div className="mt-2 text-sm text-coffee/60">Lihat platform rantai pasok kopi yang sedang dibangun.</div>
          </a>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 text-sm text-coffee/60 md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">Berbasis</div>
            <div className="mt-2 font-display text-lg text-coffee">Sulawesi Selatan, ID</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">Bahasa</div>
            <div className="mt-2 font-display text-lg text-coffee">Indonesia · Bugis</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">Status</div>
            <div className="mt-2 flex items-center gap-2 font-display text-lg text-coffee">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
              Terbuka untuk kolaborasi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
