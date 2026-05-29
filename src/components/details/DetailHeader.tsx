"use client";

import React from "react";
import { Icons } from "@/components/Icons";

interface DetailHeaderProps {
  property: any;
  saved: boolean;
  setSaved: (v: boolean) => void;
}

export function DetailHeader({ property, saved, setSaved }: DetailHeaderProps) {
  return (
    <div className="flex justify-between items-start gap-6 pb-8 border-b border-zinc-100">
      <div>
        <h1 className="text-zinc-950 font-bold text-5xl tracking-tight leading-none">{property.title}</h1>
        <div className="flex items-center gap-1.5 text-zinc-500 mt-4 text-[15px] font-normal">
          <Icons.Pin size={16} className="text-zinc-500" />
          <span>{property.location}</span>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-5 select-none text-[13px] font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 text-zinc-900 rounded-md">
            <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
            Verified listing
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-[#09090b] text-white rounded-md font-medium">
            Managed by North
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-zinc-900 font-medium">
            <Icons.Star size={13} fill="currentColor" className="text-zinc-950 -mt-0.5" />
            {property.rating} · {property.reviews} reviews
          </span>
        </div>
      </div>
      <div className="flex gap-2.5">
        <button className="w-11 h-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center cursor-pointer transition-all hover:border-zinc-400 active:scale-95 duration-150" title="Share">
          <Icons.Share size={18} className="text-zinc-700" />
        </button>
        <button
          className={`w-11 h-11 rounded-full border bg-white flex items-center justify-center cursor-pointer transition-all hover:border-zinc-400 active:scale-95 duration-150 ${saved ? "bg-zinc-950 border-zinc-950 text-white" : "border-zinc-200 text-zinc-700"}`}
          title="Save"
          onClick={() => setSaved(!saved)}
        >
          {saved ? (
            <Icons.Heart size={18} fill="currentColor" />
          ) : (
            <Icons.Heart size={18} />
          )}
        </button>
      </div>
    </div>
  );
}
