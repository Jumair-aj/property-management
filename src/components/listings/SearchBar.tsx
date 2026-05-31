"use client";

import { useState, useRef, useEffect } from "react";
import { Icons } from "@/components/Icons";
import { FilterState } from "./FilterSidebar";

interface SearchBarProps {
  filters: FilterState;
  setFilters: (f: FilterState) => void;
}

const BED_OPTIONS = [
  { label: "Any", value: "" },
  { label: "1 BHK", value: "1" },
  { label: "2 BHK", value: "2" },
  { label: "3 BHK", value: "3" },
  { label: "4+ BHK", value: "4+" },
];

export function SearchBar({ filters, setFilters }: SearchBarProps) {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [bedsOpen, setBedsOpen] = useState(false);
  const budgetRef = useRef<HTMLDivElement>(null);
  const bedsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (budgetRef.current && !budgetRef.current.contains(e.target as Node)) setBudgetOpen(false);
      if (bedsRef.current && !bedsRef.current.contains(e.target as Node)) setBedsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const fmt = (n: number) => `₹${(n / 1000).toFixed(0)}k`;

  const selectedBed = filters.beds.length === 1
    ? BED_OPTIONS.find((o) => o.value === filters.beds[0])?.label ?? "Any"
    : "Any";

  return (
    <div className="flex flex-col md:flex-row items-stretch bg-white border border-zinc-200 rounded-2xl p-2 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] gap-2 md:gap-0 max-w-3xl w-full">

      {/* Budget */}
      <div className="relative flex-1" ref={budgetRef}>
        <button
          className="w-full flex flex-col px-4.5 py-3 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-zinc-50 cursor-pointer rounded-xl transition-colors text-left"
          onClick={() => { setBudgetOpen((o) => !o); setBedsOpen(false); }}
        >
          <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Budget</span>
          <span className="text-sm font-medium text-zinc-900">
            {fmt(filters.budget[0])} – {fmt(filters.budget[1])}
          </span>
        </button>

        {budgetOpen && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-zinc-200 rounded-2xl shadow-xl p-5 z-30">
            <div className="flex justify-between text-xs font-medium text-zinc-500 mb-4">
              <span>{fmt(filters.budget[0])}</span>
              <span>{fmt(filters.budget[1])}</span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-2">Min</label>
                <input
                  type="range"
                  min="20000"
                  max="200000"
                  step="5000"
                  value={filters.budget[0]}
                  onChange={(e) =>
                    setFilters({ ...filters, budget: [Math.min(+e.target.value, filters.budget[1] - 5000), filters.budget[1]] })
                  }
                  className="w-full accent-zinc-950 h-0.5 cursor-pointer"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-2">Max</label>
                <input
                  type="range"
                  min="20000"
                  max="200000"
                  step="5000"
                  value={filters.budget[1]}
                  onChange={(e) =>
                    setFilters({ ...filters, budget: [filters.budget[0], Math.max(+e.target.value, filters.budget[0] + 5000)] })
                  }
                  className="w-full accent-zinc-950 h-0.5 cursor-pointer"
                />
              </div>
            </div>
            <button
              className="mt-4 w-full bg-zinc-950 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-zinc-800 transition-colors"
              onClick={() => setBudgetOpen(false)}
            >
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Bedrooms */}
      <div className="relative flex-1" ref={bedsRef}>
        <button
          className="w-full flex flex-col px-4.5 py-3 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-zinc-50 cursor-pointer rounded-xl transition-colors text-left"
          onClick={() => { setBedsOpen((o) => !o); setBudgetOpen(false); }}
        >
          <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Bedrooms</span>
          <span className="text-sm font-medium text-zinc-900">{selectedBed}</span>
        </button>

        {bedsOpen && (
          <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden z-30">
            {BED_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  selectedBed === opt.label
                    ? "bg-zinc-950 text-white font-semibold"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
                onClick={() => {
                  setFilters({ ...filters, beds: opt.value ? [opt.value] : [] });
                  setBedsOpen(false);
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
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
