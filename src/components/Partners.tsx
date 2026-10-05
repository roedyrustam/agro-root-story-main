import React from "react";

const partners = [
  { name: "BUMDes Sejahtera", category: "Rural Development" },
  { name: "Koperasi Kopi Toraja", category: "Supply Chain" },
  { name: "Dinas Kominfo Sulsel", category: "Digital Literacy" },
  { name: "Asosiasi Eksportir Kopi", category: "Market Access" },
  { name: "Pusat Pelatihan UMKM", category: "Training" },
];

export function Partners() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#0b0908]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-10">
            Kolaborator & Mitra Strategis
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-70 transition-all duration-500 hover:opacity-100">
            {partners.map((p, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="font-display text-xl md:text-2xl text-stone-300 group-hover:text-amber-300 transition-colors">
                  {p.name}
                </div>
                <div className="mt-1 font-mono text-[8px] uppercase tracking-widest text-stone-500">
                  {p.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
