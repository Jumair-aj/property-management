"use client";

import { useState } from "react";
import { Icons } from "@/components/Icons";

interface ListPropertyButtonProps {
  className?: string;
  label?: string;
}

export function ListPropertyButton({ className, label = "List Your Property" }: ListPropertyButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      {open && <ListPropertyModal onClose={() => setOpen(false)} />}
    </>
  );
}

function ListPropertyModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    type: "",
    beds: "",
    status: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white px-8 pt-8 pb-4 border-b border-zinc-100 flex items-start justify-between z-10">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400 mb-1">For Owners</p>
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">List your property</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all shrink-0"
          >
            <Icons.X size={16} />
          </button>
        </div>

        <div className="px-8 pb-8 pt-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-zinc-950 flex items-center justify-center mx-auto mb-5">
                <Icons.Check size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">We'll be in touch</h3>
              <p className="text-sm text-zinc-500 max-w-xs mx-auto leading-relaxed">
                Our team will review your details and call you within 24 hours if your property meets our standards.
              </p>
              <button
                onClick={onClose}
                className="mt-6 text-xs font-semibold text-zinc-500 underline underline-offset-4 hover:text-zinc-900 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                Fill in the details below. If your property fits our standards, our team will call you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Your name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      required
                      value={form.name}
                      onChange={set("name")}
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
                      onChange={set("phone")}
                      className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Property location</label>
                  <input
                    type="text"
                    placeholder="e.g. Indiranagar, Bangalore"
                    required
                    value={form.location}
                    onChange={set("location")}
                    className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Property type</label>
                    <select
                      required
                      value={form.type}
                      onChange={set("type")}
                      className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-colors appearance-none cursor-pointer bg-white"
                    >
                      <option value="">Select</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Studio</option>
                      <option>Penthouse</option>
                      <option>Independent house</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Bedrooms</label>
                    <select
                      required
                      value={form.beds}
                      onChange={set("beds")}
                      className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-colors appearance-none cursor-pointer bg-white"
                    >
                      <option value="">Select</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4+ BHK</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Current status</label>
                    <select
                      required
                      value={form.status}
                      onChange={set("status")}
                      className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-colors appearance-none cursor-pointer bg-white"
                    >
                      <option value="">Select</option>
                      <option>Vacant</option>
                      <option>Currently occupied</option>
                      <option>Under renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Anything else? <span className="text-zinc-400 font-normal">(optional)</span></label>
                  <textarea
                    placeholder="e.g. fully furnished, has parking, preferred rent range..."
                    value={form.notes}
                    onChange={set("notes")}
                    rows={3}
                    className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-950 text-white rounded-full py-3.5 text-sm font-semibold hover:bg-zinc-800 active:scale-95 transition-all duration-150"
                >
                  Submit — we'll call you
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
