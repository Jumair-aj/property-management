import React from "react";
import Link from "next/link";

const HOW = [
  {
    title: "Fair deposits, always",
    description: "Move in with just 2× rent. Your deposit is tracked, transparent, and returned within 7 days of move-out.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "We actually show up",
    description: "Maintenance requests get a two-hour response. No chasing, no excuses, no repeat issues.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "No hidden charges",
    description: "Rent, deposit, and maintenance — all disclosed upfront. Nothing appears on your final bill that wasn't agreed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Verified Properties",
    description: "Every listing is inspected and verified before it goes live. No surprises on move-in day.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Low Deposit (2× rent)",
    description: "No locking away 6–12 months of savings. Move in with just two months' rent as deposit.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "24hr Maintenance",
    description: "Round-the-clock support for urgent issues. We respond in under two hours, every time.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Pet-Friendly Options",
    description: "We have a dedicated selection of pet-friendly homes — clearly labelled, no surprises.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Flexible Terms",
    description: "Short or long — we work around your timeline, not ours. Minimum lease terms clearly stated upfront.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V13.5zm0 3h.008v.008H12V16.5zm-3-3h.008v.008H9V13.5zm0 3h.008v.008H9V16.5zm6-3h.008v.008H15V13.5zm0 3h.008v.008H15V16.5z" />
      </svg>
    ),
  },
  {
    title: "Transparent Move-out",
    description: "A clear exit checklist, fair damage assessment, and deposit returned within 7 days. No disputes.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    ),
  },
];

const REVIEWS = [
  {
    name: "Aarav Mehta",
    tenure: "Tenant — 14 months",
    quote:
      "Move-in was effortless. The team handled everything from documentation to inventory. The apartment looked exactly like the listing.",
  },
  {
    name: "Sara Iyer",
    tenure: "Tenant — 8 months",
    quote:
      "Low deposit was the reason I picked North. Stayed because of how responsive they are. Plumbing issue at 9pm — sorted by next morning.",
  },
];

export default function TenantsPage() {
  return (
    <div className="fade-in">

      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">For Tenants</span>
          <h1 className="text-5xl lg:text-[64px] font-bold tracking-tight text-zinc-900 leading-[1.08] mt-3 mb-6 max-w-2xl">
            Great homes.<br />Better renting.
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-xl mb-10">
            No brokerage. Low deposits. Properties that are actually maintained. Renting the way it always should have been.
          </p>
          <Link
            href="/homes"
            className="inline-flex items-center gap-2 bg-zinc-950 text-white text-sm font-semibold px-7 py-4 hover:bg-zinc-800 transition-colors"
          >
            Browse Homes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Our commitment</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3">How we treat you</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100">
            {HOW.map((item, i) => (
              <div
                key={item.title}
                className={`p-8 ${i < HOW.length - 1 ? "border-b md:border-b-0 md:border-r border-zinc-100" : ""}`}
              >
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-zinc-700 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Included</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3">What you get</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8">
                <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center text-zinc-700 mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Tenant stories</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3">What tenants say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="border border-zinc-100 p-8">
                <div className="w-6 h-px bg-zinc-300 mb-6" />
                <p className="text-zinc-700 text-base leading-relaxed mb-8">"{review.quote}"</p>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">{review.name}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5 uppercase tracking-[0.12em]">{review.tenure}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Find your next home.</h2>
          <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
            Browse verified properties across North Bangalore — all with low deposits and no brokerage.
          </p>
          <Link
            href="/homes"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 text-sm font-semibold px-7 py-4 hover:bg-zinc-100 transition-colors"
          >
            Browse Homes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
