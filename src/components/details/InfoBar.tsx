import React from "react";
import { Icons } from "@/components/Icons";

interface InfoBarProps {
  p: any;
}

export function InfoBar({ p }: InfoBarProps) {
  const cells = [
    { icon: <Icons.Bed size={18} />, lbl: "Bedrooms", val: `${p.beds} BHK` },
    { icon: <Icons.Bath size={18} />, lbl: "Bathrooms", val: `${p.baths}` },
    { icon: <Icons.Area size={18} />, lbl: "Carpet area", val: `${p.area} sqft` },
    { icon: <Icons.Sofa size={18} />, lbl: "Furnishing", val: p.furnished ? "Fully" : "Unfurnished" },
    { icon: <Icons.Car size={18} />, lbl: "Parking", val: "2 covered" },
    { icon: <Icons.Paw size={18} />, lbl: "Pets", val: p.pets ? "Allowed" : "Not allowed" },
  ];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 py-7 border-b border-zinc-100">
      {cells.map((c) => (
        <div className="flex flex-col gap-1.5" key={c.lbl}>
          <span className="text-zinc-600">{c.icon}</span>
          <span className="text-[11px] text-zinc-500 tracking-wider uppercase font-medium">{c.lbl}</span>
          <span className="text-sm font-semibold text-zinc-900">{c.val}</span>
        </div>
      ))}
    </div>
  );
}
