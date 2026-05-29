"use client";

import React, { useRef } from "react";
import { Icons } from "@/components/Icons";
import { PROPERTIES } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

interface SimilarPropertiesProps {
  navigate: (page: string, id?: string) => void;
  current: any;
  favs: string[];
  onFav: (id: string) => void;
}

export function SimilarProperties({ navigate, current, favs, onFav }: SimilarPropertiesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const list = PROPERTIES.filter((p) => p.id !== current.id).slice(0, 6);
  const scroll = (dir: number) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });
  };
  return (
    <section className="py-24 w-full max-w-[1440px] mx-auto px-8">
      <div className="flex justify-between items-end mb-9">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-2.5">Similar homes</div>
          <h2 className="text-zinc-900 font-bold text-4xl tracking-tight leading-none">You might also like</h2>
        </div>
        <div className="flex gap-2">
          <button className="w-11 h-11 rounded-full border border-zinc-200 bg-white cursor-pointer flex items-center justify-center transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 duration-150" onClick={() => scroll(-1)}>
            <Icons.ArrowLeft size={16} />
          </button>
          <button className="w-11 h-11 rounded-full border border-zinc-200 bg-white cursor-pointer flex items-center justify-center transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 duration-150" onClick={() => scroll(1)}>
            <Icons.ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 scroll-smooth" ref={ref}>
        {list.map((p) => (
          <div key={p.id} className="flex-none w-[calc((100%-48px)/3)] snap-start">
            <PropertyCard
              p={p}
              fav={favs.includes(p.id)}
              onFav={onFav}
              onClick={() => navigate("details", p.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
