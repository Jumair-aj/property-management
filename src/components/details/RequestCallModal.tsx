"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";

interface RequestCallModalProps {
  onClose: () => void;
}

export function RequestCallModal({ onClose }: RequestCallModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", area: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
        >
          <Icons.X size={16} />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-1">We'll call you shortly</h3>
            <p className="text-sm text-zinc-500">Our team will reach out within 30 minutes.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-1">Request a call</h3>
            <p className="text-sm text-zinc-500 mb-7">Leave your details and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Your name</label>
                <input
                  type="text"
                  placeholder="e.g. Arjun Kumar"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Phone number</label>
                <input
                  type="tel"
                  placeholder="e.g. 98400 00000"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Where are you looking?</label>
                <input
                  type="text"
                  placeholder="e.g. Koramangala, Indiranagar"
                  required
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-950 text-white rounded-full py-3.5 text-sm font-semibold hover:bg-zinc-800 active:scale-95 transition-all duration-150 mt-2"
              >
                Request a call
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
