import React from "react";
import { Icons } from "@/components/Icons";

export function CTABlock() {
  return (
    <section className="text-center py-28 border-t border-zinc-100">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <h2 className="text-zinc-905 font-bold text-5xl tracking-tight leading-none mb-6">Ready to move in?</h2>
        <p className="text-zinc-500 text-lg max-w-[520px] mx-auto mb-9">
          Book a 30-minute visit. We'll meet you at the door, walk you through, and answer everything on the spot.
        </p>
        <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-950 text-white hover:bg-zinc-900 rounded-full text-base font-semibold transition-all cursor-pointer">
          Schedule a visit <Icons.ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
