import React from "react";

export function Tenants() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center border-t border-zinc-100">
      <div className="w-full aspect-4/3 sm:aspect-16/10 overflow-hidden order-2 lg:order-1">
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
          alt="Minimal bedroom interior"
          className="w-full h-full object-cover grayscale"
        />
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
