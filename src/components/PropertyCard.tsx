import React from "react";
import { Icons } from "@/components/Icons";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  p: Property;
  onClick?: () => void;
  mode?: "grid" | "list";
  fav?: boolean;
  onFav?: (id: string) => void;
}

export function PropertyCard({ p, onClick, mode = "grid", fav, onFav }: PropertyCardProps) {
  return (
    <article
      className={`prop-card${mode === "list" ? " list" : ""} cursor-pointer`}
      onClick={onClick}
    >
      <div className="img-wrap bg-zinc-100 relative group overflow-hidden border border-zinc-200 aspect-[4/3] rounded-lg">
        {p.img ? (
          <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104" loading="lazy" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-50 flex items-center justify-center p-4 text-center">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{p.title} Image</span>
          </div>
        )}
        <div className="tags-tl absolute top-3.5 left-3.5 flex gap-1.5 z-10">
          {p.tags.includes("Verified") && <span className="tag tag-verified">Verified</span>}
          {p.tags.includes("Managed") && <span className="tag tag-dark">Managed</span>}
          {p.tags.includes("New") && <span className="tag tag-line">New</span>}
        </div>
        <button
          className={`fav absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 text-zinc-700 flex items-center justify-center border-0 cursor-pointer shadow-sm hover:scale-106 hover:bg-white transition-all z-10 ${fav ? "active text-zinc-950" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onFav && onFav(p.id);
          }}
        >
          {fav ? (
            <Icons.Heart size={16} stroke={1.6} fill="currentColor" />
          ) : (
            <Icons.Heart size={16} stroke={1.6} />
          )}
        </button>
      </div>

      <div className={mode === "list" ? "list-body flex-1 flex flex-col justify-between" : "mt-3.5"}>
        <div className="prop-card-meta flex justify-between items-baseline gap-3">
          <div>
            <h3 className="h-card font-medium text-zinc-900 leading-snug">{p.title}</h3>
            <div className="prop-card-loc text-xs text-zinc-500 mt-1">{p.location}</div>
          </div>
          <div className="text-right">
            <div className="prop-card-price text-zinc-900 font-semibold text-lg">
              ₹{(p.rent / 1000).toFixed(0)}k
              <span className="text-xs font-normal text-zinc-500">/mo</span>
            </div>
            <div className="prop-card-deposit text-[10px] text-zinc-500 mt-0.5">
              Deposit ₹{(p.deposit / 1000).toFixed(0)}k
            </div>
          </div>
        </div>

        <div className="prop-card-specs flex gap-4 pt-3.5 mt-3.5 border-t border-zinc-100 text-xs text-zinc-600">
          <span className="prop-card-spec flex items-center gap-1.5"><Icons.Bed size={15} />{p.beds} BHK</span>
          <span className="prop-card-spec flex items-center gap-1.5"><Icons.Bath size={15} />{p.baths} Bath</span>
          <span className="prop-card-spec flex items-center gap-1.5"><Icons.Area size={15} />{p.area} sqft</span>
        </div>
      </div>
    </article>
  );
}
