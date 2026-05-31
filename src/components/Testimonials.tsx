const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Tenant — 14 months",
    text: "Move-in was effortless. The team handled everything from documentation to inventory. The apartment looked exactly like the listing — sometimes that's a rare thing to say.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Sara Iyer",
    role: "Tenant — 8 months",
    text: "Low deposit was the reason I picked North. Stayed because of how responsive they are. Plumbing issue at 9pm — sorted by next morning.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Deepak Shetty",
    role: "Owner — 2 properties",
    text: "I listed both apartments and haven't had to think about them since. Rent hits my account on the 1st, every month. The reporting is clean and honest.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Priya Shah",
    role: "Tenant — 11 months",
    text: "Genuinely feels like a managed product, not a side-business. Clean handover, fair walkthrough, refund came on day three.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=80&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-zinc-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">What people say</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight mt-2 max-w-sm">
            Trusted by owners and tenants.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white p-8 flex flex-col gap-6">
              <p className="text-sm text-zinc-600 leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
