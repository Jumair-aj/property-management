"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
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
      {open && createPortal(<ListPropertyModal onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}

type FormFields = { name: string; phone: string; location: string; type: string; beds: string; status: string; notes: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;

function validate(form: FormFields): FormErrors {
  const errs: FormErrors = {};
  if (!form.name.trim()) {
    errs.name = "Name is required.";
  } else if (!/^[a-zA-Z\s]{2,}$/.test(form.name.trim())) {
    errs.name = "Enter a valid name (letters only, min 2 characters).";
  }
  if (!form.phone.trim()) {
    errs.phone = "Phone number is required.";
  } else if (!/^(?:\+91|0)?[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
    errs.phone = "Enter a valid 10-digit Indian mobile number.";
  }
  if (!form.location.trim()) {
    errs.location = "Location is required.";
  } else if (form.location.trim().length < 3) {
    errs.location = "Location must be at least 3 characters.";
  }
  if (!form.type) errs.type = "Select a property type.";
  if (!form.beds) errs.beds = "Select number of bedrooms.";
  if (!form.status) errs.status = "Select current status.";
  return errs;
}

function ListPropertyModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormFields>({
    name: "",
    phone: "",
    location: "",
    type: "",
    beds: "",
    status: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const updated = { ...form, [k]: e.target.value };
    setForm(updated);
    if (touched[k]) setErrors(validate(updated));
  };

  const blur = (k: keyof FormFields) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true])) as Record<keyof FormFields, boolean>;
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    const body = new FormData();
    body.append("entry.1989960195", form.name);
    body.append("entry.2039202528", form.phone);
    body.append("entry.2029023960", form.location);
    body.append("entry.921560188", form.type);
    body.append("entry.542856317", form.beds);
    body.append("entry.2032147991", form.status);
    if (form.notes) body.append("entry.1783000015", form.notes);

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjCOleUHyN-Q6VuJ1NEu5nvHQawJQOhwf8uNoWIwP-R7Hq_w/formResponse",
        { method: "POST", body, mode: "no-cors" }
      );
    } catch {
      // no-cors fetch always throws a network error on response read; submission still goes through
    } finally {
      setLoading(false);
    }
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

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Your name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={set("name")}
                      onBlur={blur("name")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-colors ${errors.name && touched.name ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-zinc-950"}`}
                    />
                    {errors.name && touched.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Phone number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 98400 00000"
                      value={form.phone}
                      onChange={set("phone")}
                      onBlur={blur("phone")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-colors ${errors.phone && touched.phone ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-zinc-950"}`}
                    />
                    {errors.phone && touched.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Property location</label>
                  <input
                    type="text"
                    placeholder="e.g. Indiranagar, Bangalore"
                    value={form.location}
                    onChange={set("location")}
                    onBlur={blur("location")}
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-colors ${errors.location && touched.location ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-zinc-950"}`}
                  />
                  {errors.location && touched.location && <p className="mt-1.5 text-xs text-red-500">{errors.location}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Property type</label>
                    <select
                      value={form.type}
                      onChange={set("type")}
                      onBlur={blur("type")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none transition-colors appearance-none cursor-pointer bg-white ${errors.type && touched.type ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-zinc-950"}`}
                    >
                      <option value="">Select</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Studio</option>
                      <option>Penthouse</option>
                      <option>Independent house</option>
                    </select>
                    {errors.type && touched.type && <p className="mt-1.5 text-xs text-red-500">{errors.type}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Bedrooms</label>
                    <select
                      value={form.beds}
                      onChange={set("beds")}
                      onBlur={blur("beds")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none transition-colors appearance-none cursor-pointer bg-white ${errors.beds && touched.beds ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-zinc-950"}`}
                    >
                      <option value="">Select</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4+ BHK</option>
                    </select>
                    {errors.beds && touched.beds && <p className="mt-1.5 text-xs text-red-500">{errors.beds}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 mb-1.5">Current status</label>
                    <select
                      value={form.status}
                      onChange={set("status")}
                      onBlur={blur("status")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none transition-colors appearance-none cursor-pointer bg-white ${errors.status && touched.status ? "border-red-400 focus:border-red-500" : "border-zinc-200 focus:border-zinc-950"}`}
                    >
                      <option value="">Select</option>
                      <option>Vacant</option>
                      <option>Currently occupied</option>
                      <option>Under renovation</option>
                    </select>
                    {errors.status && touched.status && <p className="mt-1.5 text-xs text-red-500">{errors.status}</p>}
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
                  disabled={loading}
                  className="w-full bg-zinc-950 text-white rounded-full py-3.5 text-sm font-semibold hover:bg-zinc-800 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting…" : "Submit — we'll call you"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
