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
    <section id="contact" className="border-t border-white/10 bg-[#090807] py-24 md:py-32">
      <div className="content-container">
        <SectionLabel number="07" label="Kontak & Kolaborasi" />

        <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-white text-balance font-bold">
          Mari bicara <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">soal agen AI,</span> agro, atau
          arsitektur sistem.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-300">
          Terbuka untuk kolaborasi di arsitektur Model Context Protocol (MCP), orkestrasi multi-agen otonom, pemberdayaan rantai pasok agro, maupun konsultasi strategis.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-6">
            <button
              onClick={copyEmail}
              className="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-white/10 bg-[#14110e]/80 p-8 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]"
            >
              {/* Decorative background element */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-all duration-500 group-hover:bg-amber-500/20" />
              
              <div className="relative z-10 w-full">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  Online & Responsive
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="font-display text-2xl text-white md:text-3xl font-semibold">
                    {email}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-stone-950 opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#14110e]/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]"
            >
              <div className="relative z-10">
                <div className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 transition-colors group-hover:bg-white/10 group-hover:text-amber-300">
                  Ekosistem Digital
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="font-display text-2xl text-white md:text-3xl font-semibold">beanhub.online</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="reveal rounded-[2.5rem] border border-white/10 bg-[#14110e]/90 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
            <h3 className="font-display text-3xl text-white font-bold">Kirim Pesan / Inquiry</h3>
            <p className="mt-4 text-base text-stone-400">
              Butuh arsitektur sistem agen, integrasi data, atau transformasi rantai pasok agro? Sampaikan pesan Anda.
            </p>

            <form className="mt-10 space-y-8" onSubmit={(e) => { e.preventDefault(); toast.success("Pesan Anda telah dikirim!"); }}>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="group relative space-y-2">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="peer w-full border-b border-white/20 bg-transparent py-3 text-base text-white transition-all focus:border-amber-400 focus:outline-none placeholder:text-transparent" 
                    placeholder="Nama Lengkap" 
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase tracking-widest text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-amber-400 cursor-text"
                  >
                    Nama Lengkap
                  </label>
                </div>
                <div className="group relative space-y-2">
                  <input 
                    type="text" 
                    id="org"
                    className="peer w-full border-b border-white/20 bg-transparent py-3 text-base text-white transition-all focus:border-amber-400 focus:outline-none placeholder:text-transparent" 
                    placeholder="Instansi/Perusahaan" 
                  />
                  <label 
                    htmlFor="org"
                    className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase tracking-widest text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-amber-400 cursor-text"
                  >
                    Instansi/Perusahaan
                  </label>
                </div>
              </div>

              <div className="group relative space-y-2">
                <select className="w-full border-b border-white/20 bg-[#14110e] py-3 text-base text-stone-200 focus:border-amber-400 focus:outline-none appearance-none cursor-pointer transition-all">
                  <option disabled selected className="text-stone-500">Pilih Jenis Layanan / Diskusi</option>
                  <option>Model Context Protocol (MCP) Server Development</option>
                  <option>Autonomous Multi-Agent Swarm Orchestration</option>
                  <option>Digitalisasi Agro & Rantai Pasok Kopi</option>
                  <option>Pelatihan & Konsultasi Teknis</option>
                  <option>Lainnya</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-4 text-stone-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>

              <div className="group relative space-y-2">
                <textarea 
                  id="message"
                  rows={4} 
                  required
                  className="peer w-full border-b border-white/20 bg-transparent py-3 text-base text-white transition-all focus:border-amber-400 focus:outline-none placeholder:text-transparent" 
                  placeholder="Pesan"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 font-mono text-[10px] uppercase tracking-widest text-stone-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-amber-400 cursor-text"
                >
                  Kebutuhan Proyek / Diskusi
                </label>
              </div>

              <button 
                ref={magneticRef}
                type="submit" 
                className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-500 py-5 font-mono text-xs uppercase tracking-[0.3em] text-stone-950 font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Kirim Pesan Sekarang
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 text-sm text-stone-400 sm:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Lokasi & Koordinat
            </div>
            <div className="mt-2 font-display text-lg text-white font-medium">Makassar, Sulawesi Selatan (119.4° E, 5.1° S)</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Komunikasi
            </div>
            <div className="mt-2 font-display text-lg text-white font-medium">Indonesia · Bugis · English</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Ketersediaan Proyek
            </div>
            <div className="mt-2 flex items-center gap-2 font-display text-lg text-white font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              Terbuka untuk Diskusi Arsitektur
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
