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
    <aside className="sticky top-24 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm self-start w-full">
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-3xl font-bold text-zinc-950 tracking-tight">₹{(p.rent / 1000).toFixed(0)}k</span>
        <span className="text-sm text-zinc-500 font-medium">/month</span>
      </div>
      <div className="text-[13px] text-zinc-500 mb-6 font-normal">
        Available from <span className="text-zinc-950 font-medium">Dec 15, 2024</span>
      </div>

      <div className="space-y-3 mb-6 text-sm">
        <div className="flex justify-between text-zinc-600">
          <span>Security deposit</span>
          <span className="text-zinc-950 font-semibold">₹1.68L</span>
        </div>
        <div className="flex justify-between text-zinc-600">
          <span>Maintenance</span>
          <span className="text-zinc-950 font-semibold">₹3,500/mo</span>
        </div>
        <div className="flex justify-between text-zinc-600">
          <span>Brokerage</span>
          <span className="text-zinc-950 font-semibold">Free</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {/* Visit Date */}
        <div>
          <label className="block text-xs font-semibold text-zinc-950 mb-2">Visit date</label>
          <div className="relative">
            <select className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-3 text-sm text-zinc-900 font-medium appearance-none focus:outline-none focus:border-zinc-950 cursor-pointer">
              <option>{date}</option>
              <option>Sun, Jun 9</option>
              <option>Mon, Jun 10</option>
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
              <Icons.ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Visit Time */}
        <div>
          <label className="block text-xs font-semibold text-zinc-950 mb-2">Visit time</label>
          <div className="grid grid-cols-3 gap-2">
            {times.map((t) => (
              <button
                key={t}
                type="button"
                className={`py-2 text-center text-xs font-semibold border rounded-xl cursor-pointer transition-colors ${time === t ? "bg-[#09090b] text-white border-[#09090b]" : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400"}`}
                onClick={() => setTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="bg-zinc-950 text-white rounded-full text-sm font-semibold px-6 py-4 flex items-center justify-between hover:bg-zinc-900 active:scale-95 duration-150 transition-all w-full mb-3.5">
        <span className="mx-auto flex items-center gap-2">
          Request a call <Icons.ArrowRight size={14} />
        </span>
      </button>

      <button className="text-zinc-500 text-xs font-medium hover:text-zinc-950 transition-colors w-full text-center block">
        Schedule a call
      </button>
    </aside>
  );
}
