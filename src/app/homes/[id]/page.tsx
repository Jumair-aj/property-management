"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { PROPERTIES, GALLERY, REVIEWS } from "@/data/properties";
import { Icons } from "@/components/Icons";
import { PropertyCard } from "@/components/PropertyCard";
import { Gallery } from "@/components/details/Gallery";
import { FloorPlan } from "@/components/details/FloorPlan";
import { LocationSection } from "@/components/details/LocationSection";
import { BookingCard } from "@/components/details/BookingCard";

export default function PropertyDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const property = PROPERTIES.find((p) => p.id === id) || PROPERTIES[0];
  const [saved, setSaved] = useState(false);
  const [favs, setFavs] = useState<string[]>([]);

  const onFav = (pid: string) => {
    setFavs(favs.includes(pid) ? favs.filter((x) => x !== pid) : [...favs, pid]);
  };

  useEffect(() => {
    setSaved(favs.includes(property.id));
  }, [favs, property.id]);

  const navigate = (page: string, targetId?: string) => {
    if (page === "details" && targetId) {
      router.push(`/homes/${targetId}`);
    } else {
      router.push("/homes");
    }
  };

  return (
    <main className="fade-in">
      {/* Breadcrumb */}
      <div className="w-full max-w-[1440px] mx-auto px-8" style={{ paddingTop: 24, fontSize: 13, color: "var(--muted)" }}>
        <a onClick={() => navigate("listing")} style={{ cursor: "pointer" }} className="hover:text-zinc-950 transition-colors">
          Homes
        </a>{" "}
        <span style={{ margin: "0 8px" }}>/</span>
        <a onClick={() => navigate("listing")} style={{ cursor: "pointer" }} className="hover:text-zinc-950 transition-colors">
          Bangalore
        </a>{" "}
        <span style={{ margin: "0 8px" }}>/</span>
        <span style={{ color: "var(--ink)" }}>{property.title}</span>
      </div>

      {/* Gallery */}
      <div className="w-full max-w-[1440px] mx-auto px-8 mt-6">
        <Gallery images={GALLERY} />
      </div>

      {/* Main + Booking Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20 py-14 pb-24">
          <div className="min-w-0">
            <DetailHeader
              property={property}
              saved={saved}
              setSaved={(v) => {
                setSaved(v);
                onFav(property.id);
              }}
            />
            <InfoBar p={property} />
            <Description p={property} />
            <Amenities />
            <FloorPlan p={property} />
            <LocationSection />
            <ManagerCard />
            <Reviews p={property} />
          </div>
          <BookingCard p={property} />
        </div>
      </div>

      {/* Similar Properties */}
      <SimilarProperties navigate={navigate} current={property} favs={favs} onFav={onFav} />

      {/* Big CTA */}
      <CTABlock />
    </main>
  );
}

interface DetailHeaderProps {
  property: any;
  saved: boolean;
  setSaved: (v: boolean) => void;
}

function DetailHeader({ property, saved, setSaved }: DetailHeaderProps) {
  return (
    <div className="flex justify-between items-start gap-6 pb-8 border-b border-zinc-100">
      <div>
        <h1 className="text-zinc-950 font-bold text-5xl tracking-tight leading-none">{property.title}</h1>
        <div className="flex items-center gap-1.5 text-zinc-500 mt-4 text-[15px] font-normal">
          <Icons.Pin size={16} className="text-zinc-500" />
          <span>{property.location}</span>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-5 select-none text-[13px] font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 text-zinc-900 rounded-md">
            <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
            Verified listing
          </span>
          <span className="inline-flex items-center px-3 py-1.5 bg-[#09090b] text-white rounded-md font-medium">
            Managed by North
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-zinc-900 font-medium">
            <Icons.Star size={13} fill="currentColor" className="text-zinc-950 -mt-0.5" />
            {property.rating} · {property.reviews} reviews
          </span>
        </div>
      </div>
      <div className="flex gap-2.5">
        <button className="w-11 h-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center cursor-pointer transition-all hover:border-zinc-400 active:scale-95 duration-150" title="Share">
          <Icons.Share size={18} className="text-zinc-700" />
        </button>
        <button
          className={`w-11 h-11 rounded-full border bg-white flex items-center justify-center cursor-pointer transition-all hover:border-zinc-400 active:scale-95 duration-150 ${saved ? "bg-zinc-950 border-zinc-950 text-white" : "border-zinc-200 text-zinc-700"}`}
          title="Save"
          onClick={() => setSaved(!saved)}
        >
          {saved ? (
            <Icons.Heart size={18} fill="currentColor" />
          ) : (
            <Icons.Heart size={18} />
          )}
        </button>
      </div>
    </div>
  );
}

function InfoBar({ p }: { p: any }) {
  const cells = [
    { icon: <Icons.Bed size={18} />, lbl: "Bedrooms", val: `${p.beds} BHK` },
    { icon: <Icons.Bath size={18} />, lbl: "Bathrooms", val: `${p.baths}` },
    { icon: <Icons.Area size={18} />, lbl: "Carpet area", val: `${p.area} sqft` },
    { icon: <Icons.Sofa size={18} />, lbl: "Furnishing", val: p.furnished ? "Fully" : "Unfurnished" },
    { icon: <Icons.Car size={18} />, lbl: "Parking", val: "2 covered" },
    { icon: <Icons.Paw size={18} />, lbl: "Pets", val: p.pets ? "Allowed" : "Not allowed" },
  ];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 py-7 border-b border-zinc-100">
      {cells.map((c) => (
        <div className="flex flex-col gap-1.5" key={c.lbl}>
          <span className="text-zinc-600">{c.icon}</span>
          <span className="text-[11px] text-zinc-500 tracking-wider uppercase font-medium">{c.lbl}</span>
          <span className="text-sm font-semibold text-zinc-900">{c.val}</span>
        </div>
      ))}
    </div>
  );
}

function Description({ p }: { p: any }) {
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
            <span className="text-zinc-950 mt-0.5">{h.icon}</span>
            <div>
              <strong className="text-zinc-900 text-sm font-medium block">{h.title}</strong>
              <span className="text-xs text-zinc-500 mt-0.5 block">{h.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Amenities() {
  const list = [
    { icon: <Icons.Wifi size={18} />, name: "High-speed Wi-Fi", on: true },
    { icon: <Icons.Dumbbell size={18} />, name: "Building gym", on: true },
    { icon: <Icons.Car size={18} />, name: "Covered parking", on: true },
    { icon: <Icons.Lock size={18} />, name: "24/7 security", on: true },
    { icon: <Icons.Bolt size={18} />, name: "Power backup", on: true },
    { icon: <Icons.Elevator size={18} />, name: "2 elevators", on: true },
    { icon: <Icons.Snow size={18} />, name: "Central AC", on: true },
    { icon: <Icons.Laptop size={18} />, name: "Co-work lounge", on: false },
  ];
  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4.5">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
        {list.map((a) => (
          <div className={`flex items-center gap-3 py-4 text-sm ${a.on ? "text-zinc-800" : "text-zinc-400 opacity-40"}`} key={a.name}>
            <span className="text-zinc-600">{a.icon}</span>
            {a.name}
          </div>
        ))}
      </div>
    </section>
  );
}

function ManagerCard() {
  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4.5">Managed by</h2>
      <div className="flex items-center gap-5 p-6 border border-zinc-200 rounded-xl mt-4">
        <div className="avatar w-12 h-12 rounded-full bg-zinc-100 overflow-hidden flex-shrink-0 flex items-center justify-center font-bold text-zinc-700">
          AK
        </div>
        <div className="info">
          <h3 className="text-zinc-900 font-semibold text-base flex items-center gap-2">
            Ananya Krishnan <span className="text-xs text-zinc-400 font-normal">· Verified manager</span>
          </h3>
          <div className="meta text-xs text-zinc-500 mt-1">Responds in ~12 minutes · 84 homes managed</div>
        </div>
        <div className="actions ml-auto flex gap-2">
          <button className="px-4 py-2 border border-zinc-200 hover:border-zinc-400 rounded-full text-sm font-semibold text-zinc-900 transition-colors">
            Message
          </button>
          <button className="px-4 py-2 bg-zinc-950 text-white hover:bg-zinc-900 rounded-full text-sm font-semibold transition-colors">
            Call
          </button>
        </div>
      </div>
    </section>
  );
}

function Reviews({ p }: { p: any }) {
  return (
    <section className="py-10 border-b border-zinc-100">
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4.5">
        What tenants say{" "}
        <span className="font-normal text-zinc-400 text-base">
          · {p.rating} · {p.reviews} reviews
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {REVIEWS.map((r) => (
          <div className="p-6 border border-zinc-200 rounded-xl" key={r.name}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-zinc-100 overflow-hidden flex items-center justify-center text-zinc-700 font-semibold">
                {r.name[0]}
              </div>
              <div>
                <div className="name font-semibold text-zinc-905">{r.name}</div>
                <div className="sub text-xs text-zinc-500 mt-0.5">{r.duration}</div>
              </div>
              <div className="ml-auto text-zinc-950 flex gap-0.5 text-sm">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </div>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
      <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200 hover:border-zinc-400 rounded-full text-sm font-semibold text-zinc-900 transition-colors mt-6">
        Show all {p.reviews} reviews <Icons.ArrowRight size={14} />
      </button>
    </section>
  );
}

interface SimilarPropertiesProps {
  navigate: (page: string, id?: string) => void;
  current: any;
  favs: string[];
  onFav: (id: string) => void;
}

function SimilarProperties({ navigate, current, favs, onFav }: SimilarPropertiesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const list = PROPERTIES.filter((p) => p.id !== current.id).slice(0, 6);
  const scroll = (dir: number) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });
  };
  return (
    <section className="py-24 w-full max-w-[1440px] mx-auto px-8">
      <div className="flex justify-between items-end mb-9">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-2.5">Similar homes</div>
          <h2 className="text-zinc-900 font-bold text-4xl tracking-tight leading-none">You might also like</h2>
        </div>
        <div className="flex gap-2">
          <button className="w-11 h-11 rounded-full border border-zinc-200 bg-white cursor-pointer flex items-center justify-center transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 duration-150" onClick={() => scroll(-1)}>
            <Icons.ArrowLeft size={16} />
          </button>
          <button className="w-11 h-11 rounded-full border border-zinc-200 bg-white cursor-pointer flex items-center justify-center transition-all hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-95 duration-150" onClick={() => scroll(1)}>
            <Icons.ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 scroll-smooth" ref={ref}>
        {list.map((p) => (
          <div key={p.id} className="flex-none w-[calc((100%-48px)/3)] snap-start">
            <PropertyCard
              p={p}
              fav={favs.includes(p.id)}
              onFav={onFav}
              onClick={() => navigate("details", p.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABlock() {
  return (
    <section className="text-center py-28 border-t border-zinc-100">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        <h2 className="text-zinc-905 font-bold text-5xl tracking-tight leading-none mb-6">Ready to move in?</h2>
        <p className="text-zinc-500 text-lg max-w-[520px] mx-auto mb-9">
          Book a 30-minute visit. We'll meet you at the door, walk you through, and answer everything on the spot.
        </p>
        <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-950 text-white hover:bg-zinc-900 rounded-full text-base font-semibold transition-all">
          Schedule a visit <Icons.ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
