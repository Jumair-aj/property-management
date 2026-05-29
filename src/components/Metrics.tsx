import React from "react";

export function Metrics() {
  return (
    <section className="bg-zinc-50 py-16 border-t border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">Trusted by Owners. Loved by Tenants.</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
          <div className="pt-6 md:pt-0 text-center flex flex-col justify-center">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">500+</span>
            <span className="text-[11px] font-medium text-zinc-500 mt-2">Homes Managed</span>
          </div>
          <div className="pt-6 md:pt-0 text-center flex flex-col justify-center">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">98%</span>
            <span className="text-[11px] font-medium text-zinc-500 mt-2">On-time Rent Collection</span>
          </div>
          <div className="pt-6 md:pt-0 text-center flex flex-col justify-center">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">4.8★</span>
            <span className="text-[11px] font-medium text-zinc-500 mt-2">Owner Rating</span>
          </div>
          <div className="pt-6 md:pt-0 text-center flex flex-col justify-center">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">4.7★</span>
            <span className="text-[11px] font-medium text-zinc-500 mt-2">Tenant Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
