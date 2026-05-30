import React from "react";

const TEAM = [
  {
    name: "Priya Nair",
    role: "Co-founder & CEO",
    bio: "Former VP at a leading real estate firm. Built NORTH. to fix everything she hated about renting in Bangalore.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rahul Menon",
    role: "Co-founder & CTO",
    bio: "Previously engineered logistics at Swiggy. Now applies the same rigour to property operations and tenant experience.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Shreya Iyer",
    role: "Head of Operations",
    bio: "Runs the end-to-end tenant lifecycle — from onboarding to exit — with a team that responds in under two hours.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Aditya Rao",
    role: "Head of Owner Relations",
    bio: "Manages 200+ owner relationships. His benchmark: every owner should feel like their property is his only one.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

const VALUES = [
  {
    title: "Honesty first",
    body: "No hidden fees. No fine print surprises. What you see is what you pay — rent, deposit, and nothing else.",
  },
  {
    title: "Obsessive responsiveness",
    body: "Two-hour maintenance response isn't a marketing line. It's the standard we hold ourselves to every single day.",
  },
  {
    title: "Built for both sides",
    body: "A great rental experience requires happy owners and happy tenants. We work hard not to trade one off for the other.",
  },
  {
    title: "Long-term thinking",
    body: "We don't optimise for one lease. We build relationships that last — owners who trust us, tenants who stay.",
  },
];

export default function AboutPage() {
  return (
    <div className="fade-in">

      {/* Hero */}
      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">About NORTH.</span>
            <h1 className="text-5xl lg:text-[60px] font-bold tracking-tight text-zinc-900 leading-[1.08] mt-3 mb-6">
              Renting in Bangalore,<br />done properly.
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
              NORTH. was started because finding and managing a good rental home in Bangalore was unnecessarily hard. We decided to fix it — for owners and tenants alike.
            </p>
          </div>
          <div className="w-full aspect-4/3 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80"
              alt="Modern home interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Our Story</span>
            </div>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed max-w-2xl">
              <p>
                In 2022, our founders spent four months searching for a well-managed apartment in Indiranagar. What they found instead was broken listings, opaque brokerages, and landlords who treated deposits as income.
              </p>
              <p>
                They built NORTH. to be the company they wished had existed. A single point of accountability for every home — from the first viewing to the deposit refund on day out.
              </p>
              <p>
                Today we manage over 500 homes across Bangalore, with a team of 40 people whose only job is making sure nothing goes wrong — and fixing it fast when it does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { value: "500+", label: "Homes managed" },
              { value: "98%", label: "On-time rent collection" },
              { value: "4.8★", label: "Owner satisfaction" },
              { value: "< 2 hrs", label: "Avg. maintenance response" },
            ].map((s) => (
              <div key={s.label} className="pt-6 md:pt-0 text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-tight">{s.value}</div>
                <div className="text-[11px] font-medium text-white/50 mt-2 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">What we stand for</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3">Our values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-zinc-100">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`p-8 ${i < VALUES.length - 1 ? "border-b lg:border-b-0 lg:border-r border-zinc-100" : ""}`}>
                <div className="w-8 h-px bg-zinc-950 mb-6" />
                <h3 className="text-base font-semibold text-zinc-900 mb-3">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">The people</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3">Meet the team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((person) => (
              <div key={person.name}>
                <div className="aspect-square overflow-hidden bg-zinc-100 mb-5">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">{person.name}</h3>
                <div className="text-xs text-zinc-400 font-medium mt-0.5 mb-3">{person.role}</div>
                <p className="text-sm text-zinc-500 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">Want to work with us?</h2>
          <p className="text-zinc-500 text-lg max-w-md mx-auto mb-8">
            Whether you own a property or are looking for your next home, we'd love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/homes" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-white hover:bg-zinc-900 text-sm font-semibold transition-colors">
              Browse homes
            </a>
            <a href="mailto:north@catalyze-x.com" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-zinc-200 text-zinc-900 hover:border-zinc-400 text-sm font-semibold transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
