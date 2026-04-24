import { useState, useEffect } from "react";
import { SectionLabel } from "./SectionLabel";

const chapters = [
  { id: "I", title: "Bab I: Akar", desc: "Pondasi Teknik Industri" },
  { id: "II", title: "Bab II: Batang", desc: "Agro & Komunitas" },
  { id: "III", title: "Bab III: Daun", desc: "Inovasi Digital" },
];

const milestones = [
  {
    year: "2019",
    title: "Sertifikasi BNSP",
    desc: "Klaster Perencanaan Produksi Sektor Industri Agro — fondasi disiplin operasional.",
    tag: "Foundation",
    chapter: "I",
  },
  {
    year: "2020+",
    title: "Fasilitator Komunitas",
    desc: "Bergabung Jaringan Radio Komunitas Indonesia dan Jurnal Celebes, mendampingi tata kelola BUMMA dan akses pasar produk lokal.",
    tag: "Community",
    chapter: "II",
  },
  {
    year: "2024",
    title: "Inkubasi Rewako Export",
    desc: "Peserta program ekspor Bank Indonesia — kurasi standar pasar internasional.",
    tag: "Growth",
    chapter: "II",
  },
  {
    year: "2025",
    title: "Sehati Kopi Indonesia",
    desc: "Mengelola operasional hulu-hilir kopi di Barru, Toraja, dan Sinjai. Produksi, stok, kualitas, mitra.",
    tag: "Operations",
    chapter: "II",
  },
  {
    year: "2025",
    title: "Pandu Talenta Digital",
    desc: "Membangun beanhub.online dan Kafeya POS — perangkat sederhana untuk pencatatan rantai pasok dan akuntansi UMKM.",
    tag: "Digital",
    chapter: "III",
  },
];

export function Timeline() {
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const handleChapterClick = (chapterId: string) => {
    if (activeChapter === chapterId) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
      window.dispatchEvent(new Event("hashchange"));
    } else {
      window.location.hash = `babak-${chapterId.toLowerCase()}`;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      let newChapter = null;
      if (hash === "#babak-i" || hash === "#bab-i") newChapter = "I";
      else if (hash === "#babak-ii" || hash === "#bab-ii") newChapter = "II";
      else if (hash === "#babak-iii" || hash === "#bab-iii") newChapter = "III";

      setActiveChapter(newChapter);

      if (newChapter) {
        setTimeout(() => {
          const firstIndex = milestones.findIndex((m) => m.chapter === newChapter);
          if (firstIndex !== -1) {
            const el = document.getElementById(`milestone-${newChapter}-${firstIndex}`);
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 120;
              window.scrollTo({ top: y, behavior: "smooth" });
              // Set focus for accessibility after smooth scroll completes
              setTimeout(() => {
                el.focus({ preventScroll: true });
              }, 600);
            }
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, currentIndex: number) => {
    if (activeChapter === null) return;

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();

      const activeIndices = milestones
        .map((m, idx) => (m.chapter === activeChapter ? idx : -1))
        .filter((idx) => idx !== -1);

      const pos = activeIndices.indexOf(currentIndex);
      if (pos !== -1) {
        let nextPos = pos;
        if (e.key === "ArrowDown" && pos < activeIndices.length - 1) {
          nextPos = pos + 1;
        } else if (e.key === "ArrowUp" && pos > 0) {
          nextPos = pos - 1;
        }

        if (nextPos !== pos) {
          const targetIndex = activeIndices[nextPos];
          const el = document.getElementById(`milestone-${activeChapter}-${targetIndex}`);
          if (el) {
            el.focus({ preventScroll: true });
            const y = el.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
    }
  };

  return (
    <section id="journey" className="border-t border-border bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel number="02" label="Perjalanan" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
              Dari ruang sosial<br />
              ke ladang kopi <span className="italic text-terracotta">— & kembali ke layar.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-coffee/70">
              Gunakan bab di samping untuk melihat evolusi fokus saya dari pemetaan sistem hingga
              penerapan teknologi di lapangan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-80 lg:grid-cols-1">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleChapterClick(ch.id)}
                className={`group relative flex flex-col items-start rounded-xl border p-4 text-left transition-all ${activeChapter === ch.id
                    ? "border-terracotta bg-terracotta/5 shadow-sm"
                    : "border-coffee/10 bg-card hover:border-coffee/30"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[10px] tracking-widest ${activeChapter === ch.id ? "text-terracotta" : "text-coffee/40"
                      }`}
                  >
                    BAB {ch.id}
                  </span>
                  {activeChapter === ch.id && (
                    <span className="h-1 w-1 rounded-full bg-terracotta animate-pulse" />
                  )}
                </div>
                <div className="mt-1 font-display text-lg text-coffee">{ch.title}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-coffee/50">
                  {ch.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        <ol className="relative mt-20 space-y-12 md:mt-24">
          <span className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-coffee/15 md:left-1/2 md:-translate-x-1/2" />

          {milestones.map((m, i) => {
            const left = i % 2 === 0;
            const isDimmed = activeChapter !== null && m.chapter !== activeChapter;

            return (
              <li
                key={m.title}
                id={`milestone-${m.chapter}-${i}`}
                tabIndex={-1}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={`relative grid gap-4 pl-8 outline-none rounded-3xl focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-8 focus-visible:ring-offset-cream-soft transition-all duration-500 md:grid-cols-2 md:pl-0 md:gap-12 ${isDimmed ? "opacity-20 grayscale-[0.5] scale-[0.98]" : "opacity-100"
                  }`}
              >
                <span
                  className={`absolute left-0 top-2 h-4 w-4 rounded-full border-2 transition-colors duration-500 md:left-1/2 md:-translate-x-1/2 ${m.chapter === activeChapter
                      ? "border-terracotta bg-terracotta"
                      : "border-terracotta bg-cream"
                    }`}
                />

                <div className={`${left ? "md:mr-12" : "md:order-2 md:ml-12"} flex flex-col items-start p-6 md:p-8 rounded-3xl border border-coffee/5 bg-card shadow-sm transition-all duration-500 hover:shadow-[0_15px_30px_-10px_rgba(44,36,27,0.1)] hover:-translate-y-2 hover:border-coffee/15 w-full relative overflow-hidden group`}>
                  {/* Decorative subtle element inside card */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-terracotta/5 blur-2xl transition-all duration-500 group-hover:bg-terracotta/10"></div>
                  
                  <div className="flex w-full items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta mb-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${m.chapter === activeChapter
                          ? "bg-terracotta text-cream shadow-sm"
                          : "bg-terracotta/10 text-terracotta group-hover:bg-terracotta/20"
                        }`}
                    >
                      BAB {m.chapter}
                    </span>
                    <span className="text-coffee/40 font-bold bg-coffee/5 px-2 py-1 rounded-md">{m.year}</span>
                  </div>
                  <h3 className="font-display text-2xl text-coffee md:text-3xl relative z-10">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-coffee/70 md:text-base relative z-10">
                    {m.desc}
                  </p>
                  <button
                    onClick={() => {
                      const url = `${window.location.origin}${window.location.pathname}#babak-${m.chapter.toLowerCase()}`;
                      navigator.clipboard.writeText(url);
                      // Visual feedback via minimal DOM trick or we just rely on standard click
                      const btn = document.getElementById(`copy-btn-${i}`);
                      if (btn) {
                        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg> Tautan Tersalin`;
                        btn.classList.add("bg-terracotta", "text-cream", "border-terracotta");
                        setTimeout(() => {
                          btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-2"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg> Salin: ${m.title}`;
                          btn.classList.remove("bg-terracotta", "text-cream", "border-terracotta");
                        }, 2000);
                      }
                    }}
                    id={`copy-btn-${i}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-coffee/15 bg-cream-soft px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-coffee/70 transition-colors hover:border-terracotta hover:bg-terracotta hover:text-cream relative z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-2"><path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" x2="16" y1="12" y2="12" /></svg>
                    Salin: {m.title}
                  </button>
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
