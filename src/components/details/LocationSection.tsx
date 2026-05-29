import React from "react";
import { Icons } from "@/components/Icons";

interface NearbyItem {
  icon: React.ReactNode;
  ttl: string;
  dst: string;
}

export function LocationSection() {
  const nearby: NearbyItem[] = [
    { icon: <Icons.Train size={20} />, ttl: "MG Road Metro", dst: "650 m · 8 min walk" },
    { icon: <Icons.School size={20} />, ttl: "Inventure Academy", dst: "1.2 km" },
    { icon: <Icons.Hospital size={20} />, ttl: "Manipal Hospital", dst: "2.4 km" },
    { icon: <Icons.Fork size={20} />, ttl: "Toit, Olive, ZLB", dst: "300–700 m" },
  ];

  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">Location</h2>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">
        Quiet residential block, two minutes from the main avenue and the lake.
      </p>
      <div className="relative h-[360px] bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden mb-6">
        <div className="w-full h-full relative bg-gradient-to-br from-[#efeeea] to-[#e6e5e0] grayscale filter">
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.45 }}>
            <path d="M 0 180 Q 200 170 400 230 T 800 260" stroke="#bbb" strokeWidth="1.5" fill="none"/>
            <path d="M 200 0 Q 220 150 280 280 T 380 600" stroke="#bbb" strokeWidth="1.5" fill="none"/>
            <path d="M 0 100 Q 300 90 500 130 T 900 180" stroke="#bbb" strokeWidth="1" fill="none"/>
            <path d="M 500 0 Q 510 200 560 360" stroke="#bbb" strokeWidth="1" fill="none"/>
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 text-white px-5 py-3 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg select-none">
            <Icons.Pin size={12} />
            Sloane Residence
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {nearby.map((n) => (
          <div className="p-6 border border-zinc-200 bg-white rounded-xl flex flex-col items-start gap-4" key={n.ttl}>
            <span className="text-zinc-700">{n.icon}</span>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-1">{n.ttl}</h4>
              <p className="text-xs text-zinc-500">{n.dst}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
