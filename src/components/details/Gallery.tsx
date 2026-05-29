import React from "react";
import { Icons } from "@/components/Icons";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] grid-rows-[1fr_1fr] gap-2 h-[420px] sm:h-[560px] mt-6 rounded-xl overflow-hidden">
      {images.map((img, idx) => (
        <div key={idx} className={`bg-zinc-100 relative group overflow-hidden border border-zinc-200 ${idx === 0 ? "row-span-2" : ""}`}>
          {img ? (
            <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-103" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-50 flex items-center justify-center p-4 text-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Photo {idx + 1}</span>
            </div>
          )}
          {idx === 4 && (
            <div className="view-all absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full text-xs font-semibold text-zinc-900 shadow-sm inline-flex items-center gap-2 cursor-pointer transition-all hover:bg-white active:scale-95 duration-150 select-none">
              <Icons.Grid size={14} /> View all 24 photos
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
