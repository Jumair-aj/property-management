import React from "react";
import { Icons } from "@/components/Icons";

export function Amenities() {
  const list = [
    { icon: <Icons.Wifi size={18} />, name: "High-speed Wi-Fi", on: true },
    { icon: <Icons.Dumbbell size={18} />, name: "Building gym", on: true },
    { icon: <Icons.Car size={18} />, name: "Covered parking", on: true },
    { icon: <Icons.Lock size={18} />, name: "24/7 security", on: true },
    { icon: <Icons.Bolt size={18} />, name: "Power backup", on: true },
    { icon: <Icons.Elevator size={18} />, name: "2 elevators", on: true },
    { icon: <Icons.Snow size={18} />, name: "Central AC", on: true },
    { icon: <Icons.Laptop size={18} />, name: "Co-work lounge", on: false },
  ];
  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-905 tracking-tight mb-4.5">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
        {list.map((a) => (
          <div className={`flex items-center gap-3 py-4 text-sm ${a.on ? "text-zinc-805" : "text-zinc-400 opacity-40"}`} key={a.name}>
            <span className="text-zinc-600">{a.icon}</span>
            {a.name}
          </div>
        ))}
      </div>
    </section>
  );
}
