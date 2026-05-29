"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";
import { Property } from "@/data/properties";

interface BookingCardProps {
  p: Property;
}

export function BookingCard({ p }: BookingCardProps) {
  const [time, setTime] = useState("11 AM");
  const [date] = useState("Sat, Jun 8");
  const times = ["10 AM", "11 AM", "12 PM", "4 PM", "5 PM", "6 PM"];

  return (
    <aside className="sticky top-24 bg-white border border-zinc-200 rounded-xl p-7 shadow-sm self-start w-full">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-4xl font-semibold text-zinc-900 tracking-tight">₹{(p.rent / 1000).toFixed(0)}k</span>
        <span className="text-sm text-zinc-500">/month</span>
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
        Available from <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Jun 1, 2026</strong>
      </div>

      <div className="flex justify-between text-xs text-zinc-600 py-3 border-b border-zinc-100">
        <span>Security deposit</span>
        <span className="text-zinc-900 font-medium">₹{(p.deposit / 1000).toFixed(0)}k</span>
      </div>
      <div className="flex justify-between text-xs text-zinc-600 py-3 border-b border-zinc-100">
        <span>Maintenance</span>
        <span className="text-zinc-900 font-medium">₹4.5k / mo</span>
      </div>
      <div className="flex justify-between text-xs text-zinc-600 py-3 border-b border-zinc-100 last-of-type:border-b-0 last-of-type:pb-6">
        <span>Brokerage</span>
        <span className="text-zinc-900 font-medium">Zero</span>
      </div>

      <div className="border border-zinc-200 rounded-lg p-2.5 mb-2 cursor-pointer hover:border-zinc-950 transition-colors">
        <label className="block text-[9px] uppercase font-bold text-zinc-400 tracking-wider mb-0.5">Visit date</label>
        <div className="text-sm font-semibold text-zinc-900 flex justify-between items-center">
          {date} <Icons.Calendar size={14} />
        </div>
      </div>

      <div className="block text-[9px] uppercase font-bold text-zinc-400 tracking-wider mt-3">
        Visit time
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-1.5 mb-4">
        {times.map((t) => (
          <button
            key={t}
            className={`py-2 text-center text-xs font-semibold border border-zinc-200 rounded-lg cursor-pointer bg-white transition-colors hover:border-zinc-950 ${time === t ? "bg-zinc-950 text-white border-zinc-950 hover:border-zinc-950" : ""}`}
            onClick={() => setTime(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <button className="bg-zinc-950 text-white rounded-xl text-sm font-semibold px-6 py-4 flex items-center justify-center gap-2 hover:bg-zinc-800 active:scale-95 duration-150 transition-all w-full mt-2">
        Request a visit <Icons.ArrowRight size={14} />
      </button>
      <button className="text-zinc-950 text-sm font-semibold bg-white border border-zinc-200 rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:border-zinc-950 active:scale-95 duration-150 transition-all w-full mt-2">
        Apply now
      </button>
      <div className="text-xs text-zinc-500 mt-3.5 text-center">
        You won't be charged yet.
      </div>
    </aside>
  );
}
