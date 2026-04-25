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
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-coffee/40 mb-10">
            Kolaborator & Mitra Strategis
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-60 grayscale transition-all duration-500 hover:grayscale-0">
            {partners.map((p, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="font-display text-xl md:text-2xl text-coffee group-hover:text-terracotta transition-colors">
                  {p.name}
                </div>
                <div className="mt-1 font-mono text-[8px] uppercase tracking-widest text-coffee/40">
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
