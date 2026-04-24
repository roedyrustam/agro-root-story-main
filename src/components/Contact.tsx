import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionLabel number="07" label="Kontak" />

        <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-coffee text-balance">
          Mari ngobrol <span className="italic text-terracotta">soal kopi,</span> komunitas, atau
          kode.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-coffee/75">
          Terbuka untuk kolaborasi di bidang agro, pemberdayaan komunitas, atau pengembangan
          perangkat digital untuk UMKM. Saya membaca setiap pesan.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:support@bijidata.online"
            className="group relative overflow-hidden rounded-3xl border border-coffee/10 bg-cream-soft p-8 transition-all duration-500 hover:-translate-y-2 hover:border-terracotta/30 hover:shadow-[0_20px_40px_-15px_rgba(211,93,71,0.15)]"
          >
            {/* Decorative background element */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-terracotta/5 blur-2xl transition-all duration-500 group-hover:bg-terracotta/10"></div>
            
            <div className="relative z-10">
              <div className="inline-block rounded-full bg-coffee/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta transition-colors group-hover:bg-terracotta/10">
                Email
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="font-display text-2xl text-coffee md:text-3xl">
                  support@bijidata.online
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
              <div className="mt-4 text-sm leading-relaxed text-coffee/60">
                Cara paling mudah, biasanya dibalas dalam waktu kurang dari 24 jam.
              </div>
            </div>
          </a>

          <a
            href="https://beanhub.online"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-coffee/10 bg-cream-soft p-8 transition-all duration-500 hover:-translate-y-2 hover:border-coffee/30 hover:shadow-[0_20px_40px_-15px_rgba(44,36,27,0.15)]"
          >
             {/* Decorative background element */}
            <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-coffee/5 blur-3xl transition-all duration-500 group-hover:bg-coffee/10"></div>
            
            <div className="relative z-10">
              <div className="inline-block rounded-full bg-coffee/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70 transition-colors group-hover:bg-coffee/10">
                Karya
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="font-display text-2xl text-coffee md:text-3xl">beanhub.online</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee text-cream opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </span>
              </div>
              <div className="mt-4 text-sm leading-relaxed text-coffee/60">
                Lihat platform rantai pasok kopi yang sedang kami kembangkan.
              </div>
            </div>
          </a>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 text-sm text-coffee/60 md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">
              Berbasis
            </div>
            <div className="mt-2 font-display text-lg text-coffee">Sulawesi Selatan, ID</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">
              Bahasa
            </div>
            <div className="mt-2 font-display text-lg text-coffee">Indonesia · Bugis</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">
              Status
            </div>
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
