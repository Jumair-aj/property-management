import React from "react";
import { Icons } from "@/components/Icons";
import { Property } from "@/data/properties";

interface FloorPlanProps {
  p: Property;
}

export function FloorPlan({ p }: FloorPlanProps) {
  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4.5">Floor plan</h2>
      <div className="bg-zinc-50 rounded-xl p-8 mt-4 flex flex-col md:flex-row gap-8 items-center">
        <svg width="280" height="220" viewBox="0 0 280 220" fill="none" stroke="#0a0a0a" strokeWidth="1.2">
          <rect x="10" y="10" width="260" height="200" fill="#fff" />
          {/* Walls */}
          <line x1="120" y1="10" x2="120" y2="120" />
          <line x1="120" y1="120" x2="10" y2="120" />
          <line x1="120" y1="60" x2="270" y2="60" />
          <line x1="200" y1="60" x2="200" y2="210" />
          <line x1="120" y1="160" x2="200" y2="160" />
          {/* Doors */}
          <path d="M 60 120 A 20 20 0 0 1 80 140" stroke="#666" strokeDasharray="2,2" />
          <path d="M 160 60 A 20 20 0 0 1 180 80" stroke="#666" strokeDasharray="2,2" />
          {/* Labels */}
          <text x="55" y="65" fontSize="9" fill="#666" stroke="none" textAnchor="middle">BEDROOM 1</text>
          <text x="55" y="170" fontSize="9" fill="#666" stroke="none" textAnchor="middle">LIVING</text>
          <text x="160" y="35" fontSize="9" fill="#666" stroke="none" textAnchor="middle">BEDROOM 2</text>
          <text x="160" y="115" fontSize="9" fill="#666" stroke="none" textAnchor="middle">KITCHEN</text>
          <text x="235" y="115" fontSize="9" fill="#666" stroke="none" textAnchor="middle">BATH</text>
          <text x="235" y="190" fontSize="9" fill="#666" stroke="none" textAnchor="middle">BALCONY</text>
          {/* North arrow */}
          <g transform="translate(248, 28)">
            <circle cx="0" cy="0" r="10" stroke="#0a0a0a" fill="#fff"/>
            <path d="M 0 -6 L 3 4 L 0 2 L -3 4 z" fill="#0a0a0a" stroke="none"/>
            <text x="0" y="14" fontSize="6" textAnchor="middle" fill="#666" stroke="none">N</text>
          </g>
        </svg>
        <div className="text-sm text-zinc-600 flex-1 w-full">
          <div className="flex justify-between py-1.5 border-b border-zinc-200"><span>Total area</span><strong className="text-zinc-950 font-medium">{p.area} sqft</strong></div>
          <div className="flex justify-between py-1.5 border-b border-zinc-200"><span>Carpet area</span><strong className="text-zinc-950 font-medium">{Math.floor(p.area * 0.86)} sqft</strong></div>
          <div className="flex justify-between py-1.5 border-b border-zinc-200"><span>Built-up area</span><strong className="text-zinc-950 font-medium">{Math.floor(p.area * 1.12)} sqft</strong></div>
          <div className="flex justify-between py-1.5 border-b border-zinc-200"><span>Configuration</span><strong className="text-zinc-950 font-medium">{p.beds} BHK + {p.baths}B</strong></div>
          <div className="flex justify-between py-1.5 border-b border-zinc-200"><span>Floor</span><strong className="text-zinc-950 font-medium">4 of 9</strong></div>
          <div className="flex justify-between py-1.5 border-b border-zinc-200 last:border-b-0"><span>Facing</span><strong className="text-zinc-950 font-medium">North-East</strong></div>
          <button className="btn btn-outline btn-sm w-full sm:w-auto" style={{ marginTop: 14 }}>
            Download floor plan <Icons.ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
