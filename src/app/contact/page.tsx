"use client";

import React, { useState } from "react";

const CONTACT_INFO = [
  {
    title: "Call us",
    detail: "+91 98400 00000",
    sub: "Mon–Sat, 9am to 7pm",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Email us",
    detail: "hello@north.in",
    sub: "We respond within 4 hours",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Visit us",
    detail: "12 Church Street, Indiranagar",
    sub: "Bangalore 560008",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fade-in">

      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Get in touch</span>
          <h1 className="text-5xl lg:text-[64px] font-bold tracking-tight text-zinc-900 leading-[1.08] mt-3 mb-5">
            We're here to help.
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
            Whether you're an owner or a tenant, our team responds within a few hours.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map((item) => (
                <div key={item.title} className="flex gap-5 p-6 border border-zinc-100">
                  <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">{item.title}</div>
                    <div className="text-sm font-semibold text-zinc-900">{item.detail}</div>
                    <div className="text-sm text-zinc-500 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-start justify-center py-8">
                  <div className="w-10 h-10 bg-zinc-950 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-3">
                    Thanks! We'll be in touch shortly.
                  </h2>
                  <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
                    Your message has been received. Expect a response within a few hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Aarav Mehta"
                      className="border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98400 00000"
                      className="border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors bg-white"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help…"
                      className="border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-zinc-950 text-white text-sm font-semibold px-7 py-4 hover:bg-zinc-800 transition-colors self-start"
                  >
                    Send message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
