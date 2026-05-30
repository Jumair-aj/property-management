import React from "react";

export function Owners() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="flex flex-col justify-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">For Owners</span>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-zinc-900 leading-[1.15] mt-2 mb-6">
          Higher returns.<br />Zero stress.
        </h2>
        <p className="text-zinc-500 text-base md:text-lg font-normal leading-relaxed max-w-md mb-10">
          We take care of everything—finding the right tenants, managing your property and ensuring it's always well looked after.
        </p>
        <a href="#" className="text-zinc-950 font-semibold text-sm flex items-center gap-2 hover:text-zinc-600 transition-colors group">
          List Your Property
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <div className="w-full aspect-4/3 sm:aspect-16/10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
          alt="Modern managed living room"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </section>
  );
}
