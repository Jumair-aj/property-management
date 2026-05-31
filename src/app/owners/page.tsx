import Link from "next/link";
import { ListPropertyButton } from "@/components/ListPropertyButton";

const SERVICES = [
  {
    title: "Tenant Screening",
    description: "Background checks, employment verification, and reference calls — so you only get reliable tenants.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Move-in Management",
    description: "Documentation, inventory, key handover, and onboarding — all handled without you lifting a finger.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Repairs",
    description: "Two-hour response for urgent issues. Verified contractors. No inflated bills — ever.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Move-out & Renovation",
    description: "Thorough exit inspections, fair deposit settlements, and property refresh before the next tenancy.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Furnishing (Optional)",
    description: "Need your property furnished before listing? We source, procure, and set up — to spec, on budget.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Rent Collection",
    description: "Automated rent collection, monthly disbursements, and a full ledger available whenever you need it.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "200+", label: "Properties managed" },
  { value: "98%", label: "Owner retention" },
  { value: "₹0", label: "Brokerage fees" },
  { value: "2hr", label: "Avg maintenance response" },
];

const HOW = [
  {
    title: "You're always informed",
    description: "Monthly reports, real-time updates, full visibility into your property's performance.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "A manager just for you",
    description: "One dedicated point of contact who knows your property and your preferences.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Honest from day one",
    description: "No surprise deductions. No inflated maintenance bills. Everything is itemised and explained.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function OwnersPage() {
  return (
    <div className="fade-in">

      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">For Owners</span>
          <h1 className="text-5xl lg:text-[64px] font-bold tracking-tight text-zinc-900 leading-[1.08] mt-3 mb-6 max-w-2xl">
            Higher returns.<br />Zero stress.
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-xl mb-10">
            We take your property off your hands and put money in your pocket — with full transparency and zero hidden fees.
          </p>
          <ListPropertyButton className="inline-flex items-center gap-2 bg-zinc-950 text-white text-sm font-semibold px-7 py-4 hover:bg-zinc-800 transition-colors" />
        </div>
      </section>

      <section className="border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Our promise</span>
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
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Full service</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mt-3">What we handle for you</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-white p-8">
                <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center text-zinc-700 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">By the numbers</span>
            <h2 className="text-3xl font-bold tracking-tight mt-3">Numbers that matter</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="pt-6 md:pt-0 text-center">
                <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-[11px] font-medium text-white/50 mt-2 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-white/10">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Ready to list?</h2>
          <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
            Talk to our team and have your property live within 48 hours.
          </p>
          <ListPropertyButton label="Get started" className="inline-flex items-center gap-2 bg-white text-zinc-950 text-sm font-semibold px-7 py-4 hover:bg-zinc-100 transition-colors" />
        </div>
      </section>

    </div>
  );
}
