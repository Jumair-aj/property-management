"use client";

import React, { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { PROPERTIES } from "@/data/properties";
import { Icons } from "@/components/Icons";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/listings/SearchBar";
import { FilterSidebar, FilterState } from "@/components/listings/FilterSidebar";
import { MapView } from "@/components/listings/MapView";

export default function Homes() {
  const router = useRouter();
  const [view, setView] = useState<"grid" | "list" | "map">("grid");
  const [sort, setSort] = useState("recommended");
  const [favs, setFavs] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    budget: [20000, 150000],
    type: [],
    beds: [],
    amenities: [],
    furnished: false,
    semi: false,
    unfurnished: false,
    pets: false,
    immediate: false,
  });

  const resetFilters = () =>
    setFilters({
      budget: [20000, 200000],
      type: [],
      beds: [],
      amenities: [],
      furnished: false,
      semi: false,
      unfurnished: false,
      pets: false,
      immediate: false,
    });

  const onFav = (id: string) => {
    setFavs(favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id]);
  };

  const navigate = (page: string, id?: string) => {
    if (page === "details" && id) {
      router.push(`/homes/${id}`);
    } else {
      router.push("/homes");
    }
  };

  const filtered = useMemo(() => {
    let list = PROPERTIES.filter((p) => {
      if (p.rent > filters.budget[1]) return false;
      if (
        filters.beds.length &&
        !filters.beds.some((b) => (b === "4+" ? p.beds >= 4 : +b === p.beds))
      )
        return false;
      if (filters.pets && !p.pets) return false;
      return true;
    });
    if (sort === "low") list = [...list].sort((a, b) => a.rent - b.rent);
    if (sort === "high") list = [...list].sort((a, b) => b.rent - a.rent);
    if (sort === "area") list = [...list].sort((a, b) => b.area - a.area);
    return list;
  }, [filters, sort]);

  return (
    <main className="fade-in">
      {/* Hero */}
      <section className="py-14 pb-10 border-b border-zinc-100">
        <div className="w-full max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 gap-9">
            <div>
              <h1 className="text-zinc-900 font-bold text-5xl md:text-6xl tracking-tight leading-none">Find your<br />next home.</h1>
              <p className="text-zinc-500 text-lg mt-4.5">
                Premium rental homes with verified listings and transparent pricing.
              </p>
            </div>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Listings (or map mode) */}
      {view === "map" ? (
        <div className="w-full max-w-[1440px] mx-auto px-0">
          <div className="w-full max-w-[1440px] mx-auto px-8 pt-8 pb-2">
            <Toolbar
              count={filtered.length}
              view={view}
              setView={setView}
              sort={sort}
              setSort={setSort}
            />
          </div>
          <MapView properties={filtered} navigate={navigate} favs={favs} onFav={onFav} />
        </div>
      ) : (
        <div className="w-full max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 py-8 pb-24">
            <FilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />
            <div>
              <Toolbar
                count={filtered.length}
                view={view}
                setView={setView}
                sort={sort}
                setSort={setSort}
              />
              {view === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-9">
                  {filtered.map((p) => (
                    <PropertyCard
                      key={p.id}
                      p={p}
                      fav={favs.includes(p.id)}
                      onFav={onFav}
                      onClick={() => navigate("details", p.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {filtered.map((p) => (
                    <PropertyCard
                      key={p.id}
                      p={p}
                      mode="list"
                      fav={favs.includes(p.id)}
                      onFav={onFav}
                      onClick={() => navigate("details", p.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Featured Carousel */}
      <FeaturedCarousel navigate={navigate} favs={favs} onFav={onFav} />

      {/* Benefits */}
      <Benefits />
    </main>
  );
}

interface ToolbarProps {
  count: number;
  view: "grid" | "list" | "map";
  setView: (v: "grid" | "list" | "map") => void;
  sort: string;
  setSort: (s: string) => void;
}

function Toolbar({ count, view, setView, sort, setSort }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between pb-6">
      <div className="text-sm text-zinc-500">
        <strong className="text-zinc-900 font-semibold">{count}</strong> homes in Bangalore
      </div>
      <div className="flex items-center gap-3">
        <select 
          className="h-[38px] border border-zinc-200 bg-white rounded-full px-3.5 text-xs text-zinc-900 cursor-pointer outline-none transition-all pr-8 hover:border-zinc-950 bg-no-repeat bg-[right_12px_center] appearance-none" 
          value={sort} 
          onChange={(e) => setSort(e.target.value)}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230a0a0a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`
          }}
        >
          <option value="recommended">Sort: Recommended</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="new">Newest first</option>
          <option value="area">Largest first</option>
        </select>
        <div className="hidden sm:inline-flex bg-zinc-50 rounded-full p-0.5">
          <button 
            className={`h-8 px-3.5 border-0 bg-transparent rounded-full text-xs font-medium cursor-pointer flex items-center gap-1.5 transition-all ${view === "grid" ? "bg-white text-zinc-950 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-zinc-500"}`} 
            onClick={() => setView("grid")}
          >
            <Icons.Grid size={14} /> Grid
          </button>
          <button 
            className={`h-8 px-3.5 border-0 bg-transparent rounded-full text-xs font-medium cursor-pointer flex items-center gap-1.5 transition-all ${view === "list" ? "bg-white text-zinc-950 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-zinc-500"}`} 
            onClick={() => setView("list")}
          >
            <Icons.List size={14} /> List
          </button>
          <button 
            className={`h-8 px-3.5 border-0 bg-transparent rounded-full text-xs font-medium cursor-pointer flex items-center gap-1.5 transition-all ${view === "map" ? "bg-white text-zinc-950 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-zinc-500"}`} 
            onClick={() => setView("map")}
          >
            <Icons.Map size={14} /> Map
          </button>
        </div>
      </div>
    </div>
  );
}

interface CarouselProps {
  navigate: (page: string, id?: string) => void;
  favs: string[];
  onFav: (id: string) => void;
}

function FeaturedCarousel({ navigate, favs, onFav }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * (ref.current.clientWidth * 0.7), behavior: "smooth" });
  };
  return (
    <div className="py-24 w-full max-w-[1440px] mx-auto px-8">
      <div className="flex justify-between items-end mb-9">
        <div>
          <div className="text-[11px] letter-spacing-[0.18em] uppercase text-zinc-500 font-medium mb-2.5">Featured</div>
          <h2 className="text-zinc-900 font-bold text-4xl tracking-tight leading-none">Premium homes, hand-picked.</h2>
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
        {PROPERTIES.slice(0, 6).map((p) => (
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
    </div>
  );
}

function Benefits() {
  const items = [
    {
      icon: <Icons.Shield size={22} />,
      title: "Verified tenants",
      desc: "Every tenant goes through identity, employment and reference checks.",
    },
    {
      icon: <Icons.Tag size={22} />,
      title: "Transparent pricing",
      desc: "No brokerage. No hidden fees. Just rent, deposit and what you get.",
    },
    {
      icon: <Icons.Bolt size={22} />,
      title: "Low deposits",
      desc: "Move in with 2× rent. Refund tracked, transparent, in seven days.",
    },
    {
      icon: <Icons.Wrench size={22} />,
      title: "Managed maintenance",
      desc: "Two-hour response. Vetted vendors. Issues fixed without follow-ups.",
    },
  ];
  return (
    <section className="bg-zinc-50 border-t border-zinc-100">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-24">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="text-[11px] letter-spacing-[0.18em] uppercase text-zinc-500 font-medium mb-3">Why North</div>
          <h2 className="text-zinc-900 font-bold text-4xl tracking-tight leading-none">A rental experience, not a rental transaction.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {items.map((b) => (
            <div className="p-2 pr-8 border-r border-zinc-200 last:border-r-0" key={b.title}>
              <span className="w-11 h-11 rounded-full bg-zinc-950 text-white flex items-center justify-center mb-5">{b.icon}</span>
              <h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-1.5">{b.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[260px]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
