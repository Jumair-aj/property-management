import React from "react";
import { Icons } from "@/components/Icons";

interface DescriptionProps {
  p: any;
}

export function Description({ p }: DescriptionProps) {
  const highlights = [
    {
      icon: <Icons.Bolt size={18} />,
      title: "Move-in ready",
      desc: "Deep clean, paint, sanitised — done.",
    },
    {
      icon: <Icons.Shield size={18} />,
      title: "Low 2× deposit",
      desc: "Refundable within 7 days of move-out.",
    },
    {
      icon: <Icons.Wrench size={18} />,
      title: "2-hour response",
      desc: "Maintenance handled by vetted vendors.",
    },
    {
      icon: <Icons.Tag size={18} />,
      title: "Zero brokerage",
      desc: "No hidden fees. Just the rent and deposit.",
    },
  ];

  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4.5">About this home</h2>
      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
        A north-facing {p.beds}-bedroom residence on a quiet, well-maintained building. Floor-to-ceiling windows along the living wall, a deep balcony that catches the late morning sun, and a kitchen rebuilt last year in matte oak and stone.
      </p>
      <p className="text-zinc-600 text-sm leading-relaxed mb-3">
        The neighbourhood is the kind where you walk to coffee. Two metro stations, a tree-lined park and four of the city's better restaurants are all within 800 meters. Move-in ready, professionally cleaned, and managed end-to-end by North.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {highlights.map((h, i) => (
          <div className={`flex gap-3 items-start py-3.5 border-t border-zinc-100 ${i < 2 ? "sm:border-t-0 sm:pt-0" : ""}`} key={h.title}>
            <span className="text-zinc-955 mt-0.5">{h.icon}</span>
            <div>
              <strong className="text-zinc-900 text-sm font-semibold block">{h.title}</strong>
              <span className="text-xs text-zinc-500 mt-0.5 block">{h.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
