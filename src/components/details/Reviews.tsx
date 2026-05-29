import React from "react";
import { Icons } from "@/components/Icons";
import { REVIEWS } from "@/data/properties";

interface ReviewsProps {
  p: any;
}

export function Reviews({ p }: ReviewsProps) {
  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4.5">
        What tenants say{" "}
        <span className="font-normal text-zinc-400 text-base">
          · {p.rating} · {p.reviews} reviews
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {REVIEWS.map((r) => (
          <div className="p-6 border border-zinc-200 rounded-xl" key={r.name}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-zinc-100 overflow-hidden flex items-center justify-center text-zinc-700 font-semibold">
                {r.name[0]}
              </div>
              <div>
                <div className="name font-semibold text-zinc-905">{r.name}</div>
                <div className="sub text-xs text-zinc-500 mt-0.5">{r.duration}</div>
              </div>
              <div className="ml-auto text-zinc-950 flex gap-0.5 text-sm">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </div>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
      <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200 hover:border-zinc-400 rounded-full text-sm font-semibold text-zinc-900 transition-colors mt-6">
        Show all {p.reviews} reviews <Icons.ArrowRight size={14} />
      </button>
    </section>
  );
}
