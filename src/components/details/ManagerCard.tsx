import React from "react";

export function ManagerCard() {
  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4.5">Managed by</h2>
      <div className="flex items-center gap-5 p-6 border border-zinc-200 rounded-xl mt-4">
        <div className="avatar w-12 h-12 rounded-full bg-zinc-100 overflow-hidden flex-shrink-0 flex items-center justify-center font-bold text-zinc-700">
          AK
        </div>
        <div className="info">
          <h3 className="text-zinc-900 font-semibold text-base flex items-center gap-2">
            Ananya Krishnan <span className="text-xs text-zinc-400 font-normal">· Verified manager</span>
          </h3>
          <div className="meta text-xs text-zinc-500 mt-1">Responds in ~12 minutes · 84 homes managed</div>
        </div>
        <div className="actions ml-auto flex gap-2">
          <button className="px-4 py-2 border border-zinc-200 hover:border-zinc-400 rounded-full text-sm font-semibold text-zinc-900 transition-colors">
            Message
          </button>
          <button className="px-4 py-2 bg-zinc-950 text-white hover:bg-zinc-900 rounded-full text-sm font-semibold transition-colors">
            Call
          </button>
        </div>
      </div>
    </section>
  );
}
