import { useState } from "react";

interface FlavorNode {
  name: string;
  color: string;
  children?: FlavorNode[];
}

const flavorData: FlavorNode = {
  name: "Flavor Wheel",
  color: "#3d2b1f",
  children: [
    {
      name: "Fruity",
      color: "#d35d47",
      children: [
        { name: "Berry", color: "#b33939" },
        { name: "Dried Fruit", color: "#8a2be2" },
        { name: "Citrus", color: "#ffb142" },
      ],
    },
    {
      name: "Sweet",
      color: "#e67e22",
      children: [
        { name: "Caramel", color: "#cd6133" },
        { name: "Vanilla", color: "#f7f1e3" },
        { name: "Chocolate", color: "#4b2c20" },
      ],
    },
    {
      name: "Floral",
      color: "#ffda79",
      children: [
        { name: "Jasmine", color: "#fcfaf2" },
        { name: "Rose", color: "#ff6b81" },
      ],
    },
    {
      name: "Nutty",
      color: "#747d8c",
      children: [
        { name: "Peanut", color: "#a4b0be" },
        { name: "Hazelnut", color: "#2f3542" },
      ],
    },
    {
      name: "Spices",
      color: "#ff7f50",
      children: [
        { name: "Cinnamon", color: "#ff6348" },
        { name: "Clove", color: "#2ed573" },
      ],
    },
  ],
};

export function FlavorWheel() {
  const [activePath, setActivePath] = useState<string[]>(["Fruity"]);

  const renderNodes = (nodes: FlavorNode[], depth: number = 0) => {
    return (
      <div className="flex flex-col gap-2">
        {nodes.map((node) => {
          const isActive = activePath.includes(node.name);
          return (
            <div key={node.name} className="flex flex-col">
              <button
                onClick={() => {
                  const newPath = activePath.slice(0, depth);
                  newPath[depth] = node.name;
                  setActivePath(newPath);
                }}
                className={`flex items-center gap-3 rounded-xl border px-5 py-3 transition-all ${
                  isActive
                    ? "border-terracotta bg-terracotta/10 text-terracotta"
                    : "border-border bg-card text-coffee/60 hover:border-terracotta/30 hover:bg-cream-soft"
                }`}
              >
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <span className="font-mono text-xs uppercase tracking-widest">{node.name}</span>
              </button>
              
              {isActive && node.children && (
                <div className="ml-6 mt-2 border-l border-border pl-6 animate-in slide-in-from-left-2 duration-300">
                  {renderNodes(node.children, depth + 1)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="relative aspect-square">
        {/* Dynamic Visualizer (SVG Wheel Mockup) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border border-border opacity-20" />
            <div className="absolute inset-4 rounded-full border border-border opacity-40" />
            <div className="absolute inset-8 rounded-full border border-border opacity-60" />
            
            {/* Active Highlight */}
            <div 
              className="absolute inset-0 rounded-full bg-terracotta/5 transition-transform duration-1000"
              style={{ transform: `rotate(${activePath.length * 45}deg)` }}
            />

            {/* Core Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-coffee/40">Active Profiling</span>
              <div className="mt-2 font-display text-2xl text-terracotta italic">
                {activePath[activePath.length - 1]}
              </div>
            </div>

            {/* Animated Particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-terracotta"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-${120 + Math.random() * 40}px)`,
                  opacity: activePath.length > 0 ? 0.3 : 0,
                  transition: `transform 2s infinite linear, opacity 0.5s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-mustard/5 blur-3xl" />
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-terracotta/5 blur-3xl" />
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-display text-3xl text-coffee">
            Sensoris <span className="italic">Terukur.</span>
          </h3>
          <p className="mt-4 text-coffee/70">
            CuppingNotes menyederhanakan kompleksitas profil rasa kopi. Pengguna cukup memilih kategori utama, lalu mendalami deskriptor yang lebih spesifik sesuai standar SCA.
          </p>
        </div>
        
        <div className="max-h-[400px] overflow-y-auto pr-4 scrollbar-hide">
          {renderNodes(flavorData.children || [])}
        </div>
      </div>
    </div>
  );
}
