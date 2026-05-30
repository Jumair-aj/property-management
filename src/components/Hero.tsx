import React from "react";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      {/* Left Column */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-zinc-900 leading-[1.08] mb-6">
          Better Rentals.<br />Less Hassle.
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-normal leading-relaxed max-w-lg mb-10">
          Managed rental homes with low deposits, verified tenants and zero worries for owners.
        </p>

        <div className="flex flex-row items-center gap-6 mb-16">
          <a href="/homes" className="bg-zinc-950 text-white text-sm font-semibold px-6 py-4 flex items-center gap-2 hover:bg-zinc-800 active:scale-95 duration-150 transition-all">
            Browse Homes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <button className="text-zinc-900 text-sm font-semibold flex items-center gap-2 hover:text-zinc-600 transition-colors group">
            Learn More
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Highlights row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-100">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 tracking-wide uppercase">Low Deposit</h4>
              <p className="text-zinc-500 text-[11px] mt-0.5">Max 2-3 months</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 tracking-wide uppercase">Verified Tenants</h4>
              <p className="text-zinc-500 text-[11px] mt-0.5">Rigorous screening</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-zinc-50 rounded-lg text-zinc-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 10.5h3.75c.621 0 1.125-.504 1.125-1.125V3.75c0-.621-.504-1.125-1.125-1.125h-3.75c-.621 0-1.125.504-1.125 1.125v3.75c0 .621.504 1.125 1.125 1.125zM3.75 20.25h16.5A1.5 1.5 0 0021.75 18.75V15a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 15v3.75a1.5 1.5 0 003.75 1.5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 tracking-wide uppercase">Full Management</h4>
              <p className="text-zinc-500 text-[11px] mt-0.5">We handle everything</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-6 w-full h-[320px] sm:h-[450px] lg:h-[580px] bg-zinc-100 relative group overflow-hidden border border-zinc-200">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"
          alt="Premium managed home"
          className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </section>
  );
}
