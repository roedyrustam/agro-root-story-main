import { useState } from "react";
import { toast } from "sonner";
import { SectionLabel } from "./SectionLabel";
import { useMagnetic } from "@/hooks/use-magnetic";

export function Contact() {
  const [isCopying, setIsCopying] = useState(false);
  const magneticRef = useMagnetic();
  const email = "support@bijidata.online";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopying(true);
    toast.success("Email berhasil disalin!");
    setTimeout(() => setIsCopying(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="content-container">
        <SectionLabel number="07" label="Kontak" />

        <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-coffee text-balance">
          Mari ngobrol <span className="italic text-terracotta">soal kopi,</span> komunitas, atau
          kode.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-coffee/75">
          Terbuka untuk kolaborasi di bidang agro, pemberdayaan komunitas, atau pengembangan
          perangkat digital untuk UMKM. Saya membaca setiap pesan.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-6">
            <button
              onClick={copyEmail}
              className="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-coffee/10 bg-cream-soft p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-terracotta/30 hover:shadow-[0_20px_40px_-15px_rgba(211,93,71,0.15)]"
            >
              {/* Decorative background element */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-terracotta/5 blur-2xl transition-all duration-500 group-hover:bg-terracotta/10"></div>
              
              <div className="relative z-10 w-full">
                <div className="inline-flex items-center gap-2 rounded-full bg-coffee/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta transition-colors group-hover:bg-terracotta/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta"></span>
                  </span>
                  Tersedia
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="font-display text-2xl text-coffee md:text-3xl">
                    {email}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
                    {isCopying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    )}
                  </span>
                </div>
              </div>
            </button>

            <a
              href="https://beanhub.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-coffee/10 bg-cream-soft p-8 transition-all duration-500 hover:-translate-y-2 hover:border-coffee/30 hover:shadow-[0_20px_40px_-15px_rgba(44,36,27,0.15)]"
            >
              <div className="relative z-10">
                <div className="inline-block rounded-full bg-coffee/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/70 transition-colors group-hover:bg-coffee/10">
                  Platform Utama
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="font-display text-2xl text-coffee md:text-3xl">beanhub.online</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coffee text-cream opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="reveal rounded-[2.5rem] border border-coffee/10 bg-card p-8 md:p-12 shadow-sm transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(44,36,27,0.1)]">
            <h3 className="font-display text-3xl text-coffee">Kirim Permintaan Konsultasi</h3>
            <p className="mt-4 text-base text-coffee/60">
              Butuh pendampingan digitalisasi desa atau UMKM? Isi formulir di bawah ini.
            </p>

            <form className="mt-10 space-y-8" onSubmit={(e) => { e.preventDefault(); toast.success("Pesan Anda telah dikirim!"); }}>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="group relative space-y-2">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="peer w-full border-b border-coffee/20 bg-transparent py-3 text-base text-coffee transition-all focus:border-terracotta focus:outline-none placeholder:text-transparent" 
                    placeholder="Nama Lengkap" 
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase tracking-widest text-coffee/40 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/30 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-terracotta cursor-text"
                  >
                    Nama Lengkap
                  </label>
                </div>
                <div className="group relative space-y-2">
                  <input 
                    type="text" 
                    id="org"
                    className="peer w-full border-b border-coffee/20 bg-transparent py-3 text-base text-coffee transition-all focus:border-terracotta focus:outline-none placeholder:text-transparent" 
                    placeholder="Instansi/UMKM" 
                  />
                  <label 
                    htmlFor="org"
                    className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase tracking-widest text-coffee/40 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/30 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-terracotta cursor-text"
                  >
                    Instansi/UMKM
                  </label>
                </div>
              </div>

              <div className="group relative space-y-2">
                <select className="w-full border-b border-coffee/20 bg-transparent py-3 text-base text-coffee focus:border-terracotta focus:outline-none appearance-none cursor-pointer transition-all">
                  <option disabled selected className="text-coffee/30">Pilih Jenis Layanan</option>
                  <option>Digitalisasi Desa & BUMDes</option>
                  <option>Sensory & QC Training (SCA)</option>
                  <option>Pengembangan UMKM Agro</option>
                  <option>Lainnya</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-4 text-coffee/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>

              <div className="group relative space-y-2">
                <textarea 
                  id="message"
                  rows={4} 
                  required
                  className="peer w-full border-b border-coffee/20 bg-transparent py-3 text-base text-coffee transition-all focus:border-terracotta focus:outline-none placeholder:text-transparent" 
                  placeholder="Pesan"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase tracking-widest text-coffee/40 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-coffee/30 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-terracotta cursor-text"
                >
                  Kebutuhan Anda
                </label>
              </div>

              <button 
                ref={magneticRef}
                type="submit" 
                className="group relative w-full overflow-hidden rounded-full bg-coffee py-5 font-mono text-xs uppercase tracking-[0.3em] text-cream transition-all hover:bg-terracotta hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Kirim Pesan
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-terracotta via-mustard to-terracotta opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 text-sm text-coffee/60 sm:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta/80">
              Lokasi
            </div>
            <div className="mt-2 font-display text-lg text-coffee">Makassar, Sulawesi Selatan</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta/80">
              Komunikasi
            </div>
            <div className="mt-2 font-display text-lg text-coffee">Indonesia · Bugis · English</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta/80">
              Ketersediaan
            </div>
            <div className="mt-2 flex items-center gap-2 font-display text-lg text-coffee">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage"></span>
              </span>
              Terbuka untuk diskusi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
