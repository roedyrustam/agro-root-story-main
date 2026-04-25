import React from "react";
import training1 from "../assets/training-agri.png";
import training2 from "../assets/training-coffee.png";
import training3 from "../assets/training-digital.png";

const activities = [
  {
    title: "Pendampingan Kelompok Tani",
    location: "Barru & Enrekang",
    description: "Edukasi budidaya berkelanjutan dan penerapan pasca-panen standar specialty.",
    image: training1,
  },
  {
    title: "Sertifikasi Profil Rasa",
    location: "Makassar & Toraja",
    description: "Pelatihan sensory evaluation untuk meningkatkan daya tawar komoditas kopi lokal.",
    image: training2,
  },
  {
    title: "Literasi Digital UMKM",
    location: "Jakarta & Sulawesi",
    description: "Workshop manajemen usaha berbasis cloud untuk efisiensi operasional warung & kedai.",
    image: training3,
  },
];

export function TrainingGallery() {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Proof of Work</div>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-coffee">
              Aksi Nyata <br />
              <span className="italic text-terracotta">di Lapangan.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-coffee/70">
            Lebih dari sekadar kode, setiap platform yang saya bangun diuji langsung melalui ribuan jam interaksi dengan pelaku utama di hulu dan hilir.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {activities.map((act, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-coffee/5 border border-border shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <img
                  src={act.image}
                  alt={act.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-coffee/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-mustard">{act.location}</div>
                  <h3 className="mt-2 font-display text-2xl text-cream">{act.title}</h3>
                  <p className="mt-4 text-sm text-cream/70 leading-relaxed opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    {act.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Stats */}
        <div className="mt-24 grid gap-10 md:grid-cols-4 border-t border-border pt-16">
          {[
            { label: "Jam Pelatihan", value: "1,200+" },
            { label: "Penerima Manfaat", value: "450+" },
            { label: "Desa Digital", value: "120" },
            { label: "Kurikulum Kustom", value: "5" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display text-4xl text-coffee">{stat.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
