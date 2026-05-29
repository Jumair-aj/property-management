import React from "react";
import { Property } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

interface MapViewProps {
  properties: Property[];
  navigate: (page: string, id?: string) => void;
  favs: string[];
  onFav: (id: string) => void;
}

export function MapView({ properties, navigate, favs, onFav }: MapViewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-[calc(100vh-76px)] mt-[-32px]">
      <div className="overflow-y-auto py-8 px-6 lg:px-8">
        <div className="text-sm text-zinc-500 mb-6">
          <strong className="text-zinc-900 font-semibold">{properties.length}</strong> homes in Bangalore
        </div>
        <div className="flex flex-col gap-4">
          {properties.map((p) => (
            <PropertyCard
              key={p.id}
              p={p}
              mode="list"
              fav={favs.includes(p.id)}
              onFav={onFav}
              onClick={() => navigate("details", p.id)}
            />
          ))}
        </div>
      </div>
      <div className="sticky top-[76px] h-[calc(100vh-76px)] bg-[#efefec] hidden lg:block">
        <div className="w-full h-full relative">
          <MapPins properties={properties} />
        </div>
      </div>
    </div>
  );
}

function MapPins({ properties }: { properties: Property[] }) {
  // Pseudo-randomized but deterministic positions
  const pins = properties.slice(0, 9).map((p, i) => {
    const x = 18 + ((i * 137) % 70);
    const y = 14 + ((i * 211) % 76);
    return { ...p, x, y };
  });

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-[#efeeea] to-[#e6e5e0] grayscale filter">
      {/* Faint road lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }}>
        <path d="M 0 200 Q 300 180 600 280 T 1200 320" stroke="#bbb" strokeWidth="1.5" fill="none" />
        <path d="M 100 0 Q 200 200 320 400 T 500 800" stroke="#bbb" strokeWidth="1.5" fill="none" />
        <path d="M 0 500 Q 400 400 800 480 T 1400 540" stroke="#bbb" strokeWidth="1" fill="none" />
        <path d="M 700 0 Q 720 300 800 600 T 900 1000" stroke="#bbb" strokeWidth="1" fill="none" />
      </svg>
      {pins.map((p) => (
        <div
          key={p.id}
          className="absolute bg-zinc-950 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight shadow-lg whitespace-nowrap cursor-pointer"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          ₹{(p.rent / 1000).toFixed(0)}k
        </div>
      ))}
    </div>
  );
}
