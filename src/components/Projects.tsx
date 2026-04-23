import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./SectionLabel";
import beanhubImg from "@/assets/project-beanhub.png";
import kafeyaImg from "@/assets/project-kafeya.png";
import cuppingnotesImg from "@/assets/project-cuppingnotes.png";

const projects = [
  {
    name: "beanhub.online",
    type: "Platform · Supply Chain",
    year: "2025",
    desc: "Platform pencatatan rantai pasok kopi dari kebun ke roastery. Membantu petani, pengepul, dan roaster melihat aliran biji secara transparan.",
    stack: ["React", "SQL", "Operations"],
    accent: "bg-terracotta",
    pattern: "from-terracotta/20 via-mustard/20 to-sage/20",
    href: "/projects/beanhub" as const,
    initial: "b",
    image: beanhubImg,
  },

  {
    name: "Kafeya POS",
    type: "Tool · Akuntansi UMKM",
    year: "2025",
    desc: "Alat bantu kasir & pelaporan keuangan untuk café dan UMKM kopi. Sederhana, sesuai standar, ramah pemilik warung kecil.",
    stack: ["React", "Akuntansi", "UMKM"],
    accent: "bg-coffee",
    pattern: "from-coffee/15 via-clay/20 to-mustard/20",
    href: "/projects/kafeya" as const,
    initial: "k",
    image: kafeyaImg,
  },
  {
    name: "CuppingNotes.online",
    type: "Platform · Coffee Quality",
    year: "2026",
    desc: "Platform digital untuk mencatat, mengevaluasi, dan membagikan hasil cupping kopi (SCA standar). Membantu Q-Graders dan roasters mendokumentasikan profil rasa.",
    stack: ["Angular", "Firebase", "SSR"],
    accent: "bg-terracotta",
    pattern: "from-mustard/20 via-terracotta/20 to-coffee/20",
    href: "/projects/cuppingnotes" as const,
    initial: "c",
    image: cuppingnotesImg,
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="04" label="Karya Digital" />
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-coffee">
              Tiga produk kecil <br />
              dengan <span className="italic text-terracotta">dampak jujur.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`relative h-56 bg-gradient-to-br ${p.pattern} grain overflow-hidden`}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-coffee/10 transition-colors group-hover:bg-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="font-display text-7xl italic text-cream/40 md:text-8xl">
                    {p.initial}
                  </div>
                </div>
                <div className="absolute left-6 top-6 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-cream drop-shadow-md">
                  {p.year}
                </div>
                <div className={`absolute right-6 top-6 z-10 h-3 w-3 rounded-full ${p.accent} ring-2 ring-cream`} />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta">
                    {p.type}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-coffee/60 transition-all group-hover:translate-x-1 group-hover:text-terracotta">
                    Studi kasus →
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl text-coffee">{p.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-coffee/75">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-coffee/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-coffee/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
