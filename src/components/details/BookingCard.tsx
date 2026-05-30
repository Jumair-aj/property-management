"use client";

import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Property } from "@/data/properties";
import { RequestCallModal } from "./RequestCallModal";

interface BookingCardProps {
  p: Property;
}

export function BookingCard({ p }: BookingCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <aside className="sticky top-24 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm self-start w-full">
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-3xl font-bold text-zinc-950 tracking-tight">₹{(p.rent / 1000).toFixed(0)}k</span>
          <span className="text-sm text-zinc-500 font-medium">/month</span>
        </div>
        <div className="text-[13px] text-zinc-500 mb-6 font-normal">
          Available from <span className="text-zinc-950 font-medium">Dec 15, 2024</span>
        </div>

        <div className="space-y-3 mb-6 text-sm">
          <div className="flex justify-between text-zinc-600">
            <span>Security deposit</span>
            <span className="text-zinc-950 font-semibold">₹1.68L</span>
          </div>
          <div className="flex justify-between text-zinc-600">
            <span>Maintenance</span>
            <span className="text-zinc-950 font-semibold">₹3,500/mo</span>
          </div>
          <div className="flex justify-between text-zinc-600">
            <span>Brokerage</span>
            <span className="text-zinc-950 font-semibold">Free</span>
          </div>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-zinc-950 text-white rounded-full text-sm font-semibold px-6 py-4 flex items-center justify-between hover:bg-zinc-900 active:scale-95 duration-150 transition-all w-full mb-3.5"
        >
          <span className="mx-auto flex items-center gap-2">
            Request a call <Icons.ArrowRight size={14} />
          </span>
        </button>

        <button className="text-zinc-500 text-xs font-medium hover:text-zinc-950 transition-colors w-full text-center block">
          Schedule a call
        </button>
      </aside>

      {modalOpen && <RequestCallModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
