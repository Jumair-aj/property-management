import React from "react";
import { Icons } from "@/components/Icons";

export function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row items-stretch bg-white border border-zinc-200 rounded-2xl p-2 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] gap-2 md:gap-0 max-w-4xl w-full">
      <div className="flex flex-col px-4.5 py-3 border-b md:border-b-0 md:border-r border-zinc-100 last-of-type:border-r-0 hover:bg-zinc-50 cursor-pointer rounded-xl transition-colors flex-1 min-w-[150px]">
        <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Location</label>
        <input 
          className="bg-transparent border-0 outline-none text-sm font-medium text-zinc-900 w-full placeholder-zinc-400 cursor-pointer"
          placeholder="e.g. Indiranagar" 
          defaultValue="Bangalore" 
        />
      </div>
      <div className="flex flex-col px-4.5 py-3 border-b md:border-b-0 md:border-r border-zinc-100 last-of-type:border-r-0 hover:bg-zinc-50 cursor-pointer rounded-xl transition-colors flex-1 min-w-[150px]">
        <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Budget</label>
        <input 
          className="bg-transparent border-0 outline-none text-sm font-medium text-zinc-900 w-full placeholder-zinc-400 cursor-pointer"
          placeholder="₹50k – ₹1L" 
          defaultValue="₹40k – ₹90k" 
        />
      </div>
      <div className="flex flex-col px-4.5 py-3 border-b md:border-b-0 md:border-r border-zinc-100 last-of-type:border-r-0 hover:bg-zinc-50 cursor-pointer rounded-xl transition-colors flex-1 min-w-[150px]">
        <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Bedrooms</label>
        <input 
          className="bg-transparent border-0 outline-none text-sm font-medium text-zinc-900 w-full placeholder-zinc-400 cursor-pointer"
          placeholder="Any" 
          defaultValue="2 – 3 BHK" 
        />
      </div>
      <div className="flex flex-col px-4.5 py-3 border-b md:border-b-0 md:border-r border-zinc-100 last-of-type:border-r-0 hover:bg-zinc-50 cursor-pointer rounded-xl transition-colors flex-1 min-w-[150px]">
        <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Move-in</label>
        <input 
          className="bg-transparent border-0 outline-none text-sm font-medium text-zinc-900 w-full placeholder-zinc-400 cursor-pointer"
          placeholder="Pick a date" 
          defaultValue="Jun 15, 2026" 
        />
      </div>
      <button 
        className="bg-zinc-950 text-white rounded-xl flex items-center justify-center cursor-pointer transition-all hover:bg-black active:scale-95 duration-150 w-full md:w-14 h-12 md:h-auto shrink-0" 
        aria-label="Search"
      >
        <Icons.Search size={18} stroke={1.8} />
      </button>
    </div>
  );
}
