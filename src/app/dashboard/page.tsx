import React from "react";
import { PROPERTIES } from "@/data/properties";

const TENANTS: Record<string, { name: string; since: string; paid: boolean }> = {
  p1: { name: "Riya Kapoor", since: "Jan 2025", paid: true },
  p2: { name: "Nikhil Sharma", since: "Mar 2025", paid: true },
  p3: { name: "Arjun Nair", since: "Sep 2024", paid: false },
  p5: { name: "Meera Patel", since: "Feb 2025", paid: true },
  p7: { name: "Dev Kumar", since: "Nov 2024", paid: true },
  p8: { name: "Anita Reddy", since: "Dec 2024", paid: true },
  p9: { name: "Suresh Menon", since: "Apr 2025", paid: false },
};

const PAYMENTS = [
  { tenant: "Riya Kapoor", property: "Sloane Residence", amount: 84000, date: "28 May" },
  { tenant: "Nikhil Sharma", property: "Atelier 12", amount: 62000, date: "27 May" },
  { tenant: "Meera Patel", property: "The Mews", amount: 96000, date: "26 May" },
  { tenant: "Dev Kumar", property: "Ashwood Villa", amount: 118000, date: "25 May" },
  { tenant: "Anita Reddy", property: "Bellevue Apartments", amount: 76000, date: "24 May" },
];

const TICKETS = [
  { property: "North Tower Penthouse", issue: "AC not cooling", priority: "High", age: "2d" },
  { property: "Atelier 12", issue: "Water heater malfunction", priority: "Medium", age: "4d" },
  { property: "The Mews", issue: "Door lock replacement", priority: "Low", age: "6d" },
];

const occupied = PROPERTIES.filter((p) => TENANTS[p.id]);
const monthlyRevenue = occupied.reduce((sum, p) => sum + p.rent, 0);
const occupancyPct = Math.round((occupied.length / PROPERTIES.length) * 100);

const PRIORITY_STYLES: Record<string, string> = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-amber-50 text-amber-700",
  Low: "bg-zinc-100 text-zinc-600",
};

export default function DashboardPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">Overview</h1>
        <p className="text-sm text-zinc-400 mt-1">All properties · Bangalore</p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Properties", value: PROPERTIES.length.toString(), sub: "across Bangalore" },
          { label: "Occupied", value: `${occupied.length} / ${PROPERTIES.length}`, sub: `${occupancyPct}% occupancy` },
          { label: "Monthly Revenue", value: `₹${(monthlyRevenue / 100000).toFixed(1)}L`, sub: "from active leases" },
          { label: "Open Tickets", value: TICKETS.length.toString(), sub: "maintenance requests" },
        ].map((m) => (
          <div key={m.label} className="bg-white border border-zinc-100 rounded-xl p-5">
            <div className="text-xs text-zinc-400 font-medium mb-1.5">{m.label}</div>
            <div className="text-2xl font-bold text-zinc-950 tracking-tight">{m.value}</div>
            <div className="text-[11px] text-zinc-400 mt-1">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        {/* Properties table */}
        <div className="bg-white border border-zinc-100 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-950">All Properties</h2>
            <span className="text-[11px] text-zinc-400">{PROPERTIES.length} listings</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="text-left text-[11px] font-medium text-zinc-400 px-6 py-3">Property</th>
                  <th className="text-left text-[11px] font-medium text-zinc-400 px-4 py-3">Tenant</th>
                  <th className="text-left text-[11px] font-medium text-zinc-400 px-4 py-3">Rent</th>
                  <th className="text-left text-[11px] font-medium text-zinc-400 px-4 py-3">Status</th>
                  <th className="text-left text-[11px] font-medium text-zinc-400 px-4 py-3 pr-6">Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {PROPERTIES.map((p) => {
                  const t = TENANTS[p.id];
                  return (
                    <tr key={p.id} className="hover:bg-zinc-50/60 transition-colors">
                      <td className="px-6 py-3.5">
                        <div className="font-medium text-zinc-900 text-[13px]">{p.title}</div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">{p.location}</div>
                      </td>
                      <td className="px-4 py-3.5 text-[13px] text-zinc-700">
                        {t ? t.name : <span className="text-zinc-300">—</span>}
                      </td>
                      <td className="px-4 py-3.5 text-[13px] font-medium text-zinc-900">
                        ₹{(p.rent / 1000).toFixed(0)}k
                      </td>
                      <td className="px-4 py-3.5">
                        {t ? (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                            Occupied
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 inline-block" />
                            Vacant
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 pr-6">
                        {t ? (
                          t.paid ? (
                            <span className="text-[11px] font-medium text-zinc-400">Paid</span>
                          ) : (
                            <span className="text-[11px] font-semibold text-red-600">Overdue</span>
                          )
                        ) : (
                          <span className="text-zinc-200 text-[11px]">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">

          {/* Recent payments */}
          <div className="bg-white border border-zinc-100 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-zinc-100">
              <h2 className="text-sm font-semibold text-zinc-950">Recent Payments</h2>
            </div>
            <div className="divide-y divide-zinc-50">
              {PAYMENTS.map((pay) => (
                <div key={pay.tenant} className="px-5 py-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[13px] font-medium text-zinc-900 truncate">{pay.tenant}</div>
                    <div className="text-[11px] text-zinc-400 truncate">{pay.property}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[13px] font-semibold text-zinc-950">₹{(pay.amount / 1000).toFixed(0)}k</div>
                    <div className="text-[11px] text-zinc-400">{pay.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance tickets */}
          <div className="bg-white border border-zinc-100 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-zinc-950">Open Tickets</h2>
              <span className="text-[11px] text-zinc-400">{TICKETS.length} open</span>
            </div>
            <div className="divide-y divide-zinc-50">
              {TICKETS.map((t) => (
                <div key={t.property} className="px-5 py-3.5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="text-[13px] font-medium text-zinc-900">{t.issue}</div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${PRIORITY_STYLES[t.priority]}`}>
                      {t.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] text-zinc-400">{t.property}</div>
                    <div className="text-[11px] text-zinc-400">{t.age} ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
