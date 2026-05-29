import React from "react";

export function Tenants() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center border-t border-zinc-100">
      {/* Tenants Image Placeholder */}
      <div className="w-full aspect-[4/3] sm:aspect-[16/10] bg-zinc-100 border border-zinc-200 order-2 lg:order-1 flex flex-col items-center justify-center p-8 text-center">
        <svg className="w-10 h-10 text-zinc-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
        </svg>
        <h4 className="text-xs font-bold text-zinc-800 tracking-wider uppercase">Tenants Image Placeholder</h4>
        <p className="text-zinc-400 text-[10px] mt-1">Minimal bedroom interior</p>
      </div>

      <div className="flex flex-col justify-center order-1 lg:order-2">
        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">For Tenants</span>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-zinc-900 leading-[1.15] mt-2 mb-6">
          Great homes.<br />Lower deposits.
        </h2>
        <p className="text-zinc-500 text-base md:text-lg font-normal leading-relaxed max-w-md mb-10">
          Move into premium homes with low deposits and transparent terms. Hassle-free renting, the way it should be.
        </p>
        <a href="#" className="text-zinc-950 font-semibold text-sm flex items-center gap-2 hover:text-zinc-600 transition-colors group">
          Browse Homes
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
