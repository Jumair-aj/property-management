"use client";

import React, { useState } from "react";

export interface FilterState {
  budget: [number, number];
  type: string[];
  beds: string[];
  amenities: string[];
  furnished: boolean;
  semi: boolean;
  unfurnished: boolean;
  pets: boolean;
  immediate: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  onReset: () => void;
}

export function FilterSidebar({ filters, setFilters, onReset }: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const types = ["Apartment", "Villa", "Studio", "Penthouse"];
  const beds = ["1", "2", "3", "4+"];
  const amenities = ["WiFi", "Gym", "Parking", "Pool", "Security", "Power backup"];

  const toggle = (key: keyof Pick<FilterState, "type" | "beds" | "amenities">, val: string) => {
    const arr = filters[key] || [];
    setFilters({
      ...filters,
      [key]: arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val],
    });
  };

  const activeCount = [
    ...filters.type,
    ...filters.beds,
    ...filters.amenities,
    filters.furnished && "f",
    filters.semi && "s",
    filters.unfurnished && "u",
    filters.pets && "p",
    filters.immediate && "i",
    filters.budget[1] < 200000 && "b",
  ].filter(Boolean).length;

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-3 lg:scrollbar-thin">
      {/* Mobile toggle header */}
      <button
        className="lg:hidden w-full flex items-center justify-between px-4 py-3.5 border border-zinc-200 bg-white"
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
          Filters
          {activeCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-zinc-950 text-white text-[10px] font-bold leading-none">
              {activeCount}
            </span>
          )}
        </span>
        <svg
          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Filter content — always visible on lg+, collapsible on mobile */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
        <div className="border border-t-0 border-zinc-200 px-4 pb-4 lg:border-0 lg:px-0 lg:pb-0">
          <div className="py-5.5 border-b border-zinc-100 pt-4 lg:pt-0">
            <h4 className="text-xs font-semibold tracking-wide text-zinc-900 mb-3.5">Monthly budget</h4>
            <div className="flex justify-between text-xs font-medium text-zinc-500 mb-3">
              <span>₹{filters.budget[0] / 1000}k</span>
              <span>₹{filters.budget[1] / 1000}k</span>
            </div>
            <input
              type="range"
              className="w-full accent-zinc-950 bg-zinc-200 h-0.5 cursor-pointer rounded-full outline-none"
              min="20000"
              max="200000"
              step="5000"
              value={filters.budget[1]}
              onChange={(e) =>
                setFilters({ ...filters, budget: [filters.budget[0], +e.target.value] })
              }
            />
          </div>

          <div className="py-5.5 border-b border-zinc-100">
            <h4 className="text-xs font-semibold tracking-wide text-zinc-900 mb-3.5">Property type</h4>
            <div className="flex gap-2 flex-wrap">
              {types.map((t) => (
                <button
                  key={t}
                  className={`inline-flex items-center h-8 px-3.5 rounded-full text-xs border border-zinc-200 bg-white cursor-pointer transition-all hover:border-zinc-950 text-zinc-800 active:scale-95 duration-150 ${filters.type.includes(t) ? "bg-zinc-950 text-white border-zinc-950 hover:border-zinc-950" : ""}`}
                  onClick={() => toggle("type", t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="py-5.5 border-b border-zinc-100">
            <h4 className="text-xs font-semibold tracking-wide text-zinc-900 mb-3.5">Bedrooms</h4>
            <div className="flex gap-2 flex-wrap">
              {beds.map((b) => (
                <button
                  key={b}
                  className={`inline-flex items-center h-8 px-3.5 rounded-full text-xs border border-zinc-200 bg-white cursor-pointer transition-all hover:border-zinc-950 text-zinc-800 active:scale-95 duration-150 ${filters.beds.includes(b) ? "bg-zinc-950 text-white border-zinc-950 hover:border-zinc-950" : ""}`}
                  onClick={() => toggle("beds", b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="py-5.5 border-b border-zinc-100 flex flex-col gap-1">
            <h4 className="text-xs font-semibold tracking-wide text-zinc-900 mb-3.5">Furnishing</h4>
            <label className="flex items-center gap-2.5 text-sm text-zinc-800 cursor-pointer py-1.5 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-zinc-200 cursor-pointer accent-zinc-950"
                checked={!!filters.furnished}
                onChange={(e) => setFilters({ ...filters, furnished: e.target.checked })}
              />
              Fully furnished
            </label>
            <label className="flex items-center gap-2.5 text-sm text-zinc-800 cursor-pointer py-1.5 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-zinc-200 cursor-pointer accent-zinc-950"
                checked={!!filters.semi}
                onChange={(e) => setFilters({ ...filters, semi: e.target.checked })}
              />
              Semi-furnished
            </label>
            <label className="flex items-center gap-2.5 text-sm text-zinc-800 cursor-pointer py-1.5 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-zinc-200 cursor-pointer accent-zinc-950"
                checked={!!filters.unfurnished}
                onChange={(e) => setFilters({ ...filters, unfurnished: e.target.checked })}
              />
              Unfurnished
            </label>
          </div>

          <div className="py-5.5 border-b border-zinc-100 flex flex-col gap-1">
            <h4 className="text-xs font-semibold tracking-wide text-zinc-900 mb-3.5">Other</h4>
            <label className="flex items-center gap-2.5 text-sm text-zinc-800 cursor-pointer py-1.5 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-zinc-200 cursor-pointer accent-zinc-950"
                checked={!!filters.pets}
                onChange={(e) => setFilters({ ...filters, pets: e.target.checked })}
              />
              Pet friendly
            </label>
            <label className="flex items-center gap-2.5 text-sm text-zinc-800 cursor-pointer py-1.5 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-zinc-200 cursor-pointer accent-zinc-950"
                checked={!!filters.immediate}
                onChange={(e) => setFilters({ ...filters, immediate: e.target.checked })}
              />
              Available immediately
            </label>
          </div>

          <div className="py-5.5 border-b border-zinc-100">
            <h4 className="text-xs font-semibold tracking-wide text-zinc-900 mb-3.5">Amenities</h4>
            <div className="flex gap-2 flex-wrap">
              {amenities.map((a) => (
                <button
                  key={a}
                  className={`inline-flex items-center h-8 px-3.5 rounded-full text-xs border border-zinc-200 bg-white cursor-pointer transition-all hover:border-zinc-950 text-zinc-800 active:scale-95 duration-150 ${filters.amenities.includes(a) ? "bg-zinc-950 text-white border-zinc-950 hover:border-zinc-950" : ""}`}
                  onClick={() => toggle("amenities", a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <button
            className="text-zinc-900 text-xs font-medium bg-transparent border-0 cursor-pointer hover:opacity-75 transition-all mt-6 block p-0 text-left underline underline-offset-4"
            onClick={onReset}
          >
            Reset all filters
          </button>
        </div>
      </div>
    </aside>
  );
}
