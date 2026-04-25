import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: "hub" | "origin";
  details: string;
}

const locations: Location[] = [
  {
    id: "jakarta",
    name: "Jakarta",
    lat: -6.2088,
    lng: 106.8456,
    type: "hub",
    details: "Pusat Ekonomi Nasional & Akses Pasar Strategis",
  },
  {
    id: "makassar",
    name: "Makassar",
    lat: -5.1476,
    lng: 119.4327,
    type: "hub",
    details: "Ibu Kota Provinsi · Roastery & Supply Chain",
  },
  {
    id: "barru",
    name: "Barru",
    lat: -4.4022,
    lng: 119.6756,
    type: "origin",
    details: "Pesisir & Dataran Rendah · Komoditas Baru",
  },
  {
    id: "toraja",
    name: "Toraja",
    lat: -2.9701,
    lng: 119.8974,
    type: "origin",
    details: "Highland Klasik · Arabika Premium",
  },
  {
    id: "enrekang",
    name: "Enrekang",
    lat: -3.5654,
    lng: 119.7749,
    type: "origin",
    details: "Dataran Tinggi · Arabika Specialty",
  },
  {
    id: "malino",
    name: "Malino",
    lat: -5.2530,
    lng: 119.8540,
    type: "origin",
    details: "Pusat Edukasi & Promosi Kopi Sulsel",
  },
  {
    id: "sinjai",
    name: "Sinjai",
    lat: -5.1278,
    lng: 120.2520,
    type: "origin",
    details: "Komunitas Adat · Tata Kelola BUMMA",
  },
];

export function InteractiveMap() {
  const [activeLoc, setActiveLoc] = useState<Location | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const createCustomIcon = (type: "hub" | "origin", isActive: boolean) => {
    const colorClass = type === "hub" ? "bg-terracotta" : "bg-mustard";
    const sizeClass = type === "hub" ? "w-4 h-4" : "w-3 h-3";
    const glow = isActive ? `scale-150 shadow-[0_0_15px_rgba(211,93,71,0.8)]` : "scale-100";
    
    return L.divIcon({
      className: "bg-transparent border-0",
      html: `<div class="relative flex items-center justify-center w-full h-full">
               ${type === 'hub' ? `<div class="absolute w-10 h-10 rounded-full border border-terracotta/40 animate-ping-slow"></div>` : ''}
               <div class="rounded-full ${colorClass} ${sizeClass} ${glow} transition-all duration-300 shadow-md"></div>
             </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  };

  const originToMakassar = locations.filter(l => l.type === 'origin').map(origin => [
    [origin.lat, origin.lng],
    [-5.1476, 119.4327] // Makassar
  ] as [number, number][]);

  const makassarToJakarta: [number, number][] = [
    [-5.1476, 119.4327], // Makassar
    [-6.2088, 106.8456] // Jakarta
  ];

  if (!isMounted) return <div className="w-full aspect-[4/3] bg-coffee rounded-3xl animate-pulse" />;

  return (
    <div className="relative w-full aspect-[4/3] bg-coffee rounded-3xl overflow-hidden group/map border border-white/10 shadow-2xl">
      
      {/* Map Labels */}
      <div className="absolute top-8 left-8 z-[400] pointer-events-none">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mustard drop-shadow-md">Peta Sebaran</div>
        <h3 className="mt-2 font-display text-2xl text-cream drop-shadow-lg">Wilayah Dampingan</h3>
      </div>

      <MapContainer 
        center={[-4.5, 113.5]} 
        zoom={5} 
        className="w-full h-full z-0"
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
        />

        {/* Connections */}
        {originToMakassar.map((pos, i) => (
          <Polyline 
            key={i} 
            positions={pos} 
            color="#E6A15C" 
            weight={1.5} 
            dashArray="5, 8" 
            opacity={0.5} 
          />
        ))}
        <Polyline 
          positions={makassarToJakarta} 
          color="#D35D47" 
          weight={2} 
          dashArray="6, 10" 
          opacity={0.8} 
        />

        {/* Markers */}
        {locations.map((loc) => (
          <Marker 
            key={loc.id} 
            position={[loc.lat, loc.lng]} 
            icon={createCustomIcon(loc.type, activeLoc?.id === loc.id)}
            eventHandlers={{
              click: () => setActiveLoc(loc),
              mouseover: () => setActiveLoc(loc),
            }}
          />
        ))}
      </MapContainer>

      {/* Detail Overlay */}
      <div className={`absolute bottom-8 left-8 right-8 z-[400] transition-all duration-500 pointer-events-none ${
        activeLoc ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="bg-coffee/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl pointer-events-auto max-w-md">
          <div className="flex items-center gap-3">
            <div className={`h-2 w-2 rounded-full ${activeLoc?.type === 'hub' ? 'bg-terracotta' : 'bg-mustard'}`} />
            <div className="font-display text-xl text-cream">{activeLoc?.name}</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-mustard ml-auto bg-mustard/10 px-3 py-1 rounded-full border border-mustard/20">
              {activeLoc?.type === 'hub' ? 'Strategic Hub' : 'Origin Site'}
            </div>
          </div>
          <p className="mt-3 text-sm text-cream/80 leading-relaxed italic">
            "{activeLoc?.details}"
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-8 right-8 z-[400] flex flex-col gap-3 bg-coffee/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="relative w-3 h-3 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-terracotta/40 animate-ping" />
            <div className="h-2 w-2 rounded-full bg-terracotta" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-cream/80">Pusat Ekonomi / Hub</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-mustard ml-0.5" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-cream/80">Wilayah Dampingan</span>
        </div>
      </div>
      
      {/* Click outside dismisser overlay */}
      {activeLoc && (
        <div 
          className="absolute inset-0 z-[300]" 
          onClick={() => setActiveLoc(null)}
        />
      )}
    </div>
  );
}
