import React, { useState } from "react";

interface Location {
  id: string;
  name: string;
  x: number;
  y: number;
  type: "hub" | "origin";
  details: string;
}

const locations: Location[] = [
  {
    id: "jakarta",
    name: "Jakarta",
    x: 120,
    y: 280,
    type: "hub",
    details: "Pusat Ekonomi Nasional & Akses Pasar Strategis",
  },
  {
    id: "makassar",
    name: "Makassar",
    x: 380,
    y: 320,
    type: "hub",
    details: "Ibu Kota Provinsi · Roastery & Supply Chain",
  },
  {
    id: "barru",
    name: "Barru",
    x: 375,
    y: 280,
    type: "origin",
    details: "Pesisir & Dataran Rendah · Komoditas Baru",
  },
  {
    id: "toraja",
    name: "Toraja",
    x: 390,
    y: 180,
    type: "origin",
    details: "Highland Klasik · Arabika Premium",
  },
  {
    id: "enrekang",
    name: "Enrekang",
    x: 400,
    y: 220,
    type: "origin",
    details: "Dataran Tinggi · Arabika Specialty",
  },
  {
    id: "malino",
    name: "Malino",
    x: 400,
    y: 350,
    type: "origin",
    details: "Pusat Edukasi & Promosi Kopi Sulsel",
  },
  {
    id: "sinjai",
    name: "Sinjai",
    x: 430,
    y: 340,
    type: "origin",
    details: "Komunitas Adat · Tata Kelola BUMMA",
  },
];

export function InteractiveMap() {
  const [activeLoc, setActiveLoc] = useState<Location | null>(null);

  return (
    <div className="relative w-full aspect-[4/3] bg-coffee rounded-3xl overflow-hidden group/map border border-white/5 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Map Labels */}
      <div className="absolute top-8 left-8 z-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mustard">Peta Sebaran</div>
        <h3 className="mt-2 font-display text-2xl text-cream">Wilayah Dampingan</h3>
      </div>

      {/* SVG Map Layer */}
      <svg
        viewBox="0 0 600 450"
        className="relative z-10 w-full h-full p-12 select-none"
        onMouseLeave={() => setActiveLoc(null)}
      >
        {/* Connection Lines (Supply Chain Lines) */}
        <g className="opacity-20">
          {locations.filter(l => l.type === 'origin').map(loc => (
            <path
              key={`line-${loc.id}`}
              d={`M ${loc.x} ${loc.y} Q ${(loc.x + 380) / 2} ${(loc.y + 320) / 2 - 20} 380 320`}
              fill="none"
              stroke="#E6A15C"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-dash"
            />
          ))}
          <path
            d="M 380 320 Q 250 300 120 280"
            fill="none"
            stroke="#D35D47"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-dash"
          />
        </g>

        {/* Location Dots */}
        {locations.map((loc) => (
          <g
            key={loc.id}
            className="cursor-pointer"
            onMouseEnter={() => setActiveLoc(loc)}
          >
            {/* Glow Effect */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={activeLoc?.id === loc.id ? "12" : "0"}
              className="fill-mustard/20 transition-all duration-300"
            />
            {/* Outer Circle */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.type === "hub" ? "6" : "4"}
              className={`${
                loc.type === "hub" ? "fill-terracotta" : "fill-mustard"
              } transition-transform duration-300 ${
                activeLoc?.id === loc.id ? "scale-150" : "scale-100"
              }`}
            />
            {/* Pulse for Hubs */}
            {loc.type === "hub" && (
              <circle
                cx={loc.x}
                cy={loc.y}
                r="10"
                className="stroke-terracotta/40 fill-none animate-ping-slow"
              />
            )}
          </g>
        ))}
      </svg>

      {/* Detail Overlay */}
      <div className={`absolute bottom-8 left-8 right-8 z-30 transition-all duration-500 ${
        activeLoc ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-cream/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className={`h-2 w-2 rounded-full ${activeLoc?.type === 'hub' ? 'bg-terracotta' : 'bg-mustard'}`} />
            <div className="font-display text-xl text-cream">{activeLoc?.name}</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-mustard ml-auto">
              {activeLoc?.type === 'hub' ? 'Strategic Hub' : 'Origin Site'}
            </div>
          </div>
          <p className="mt-3 text-sm text-cream/70 leading-relaxed max-w-md italic">
            "{activeLoc?.details}"
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-8 right-8 z-20 flex flex-col gap-2 bg-coffee/40 backdrop-blur-sm p-3 rounded-xl border border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-terracotta" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-cream/60">Hub / Pasar</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-mustard" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-cream/60">Dampingan</span>
        </div>
      </div>
    </div>
  );
}
