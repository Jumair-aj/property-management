"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { PROPERTIES, GALLERY } from "@/data/properties";
import { Gallery } from "@/components/details/Gallery";
import { DetailHeader } from "@/components/details/DetailHeader";
import { InfoBar } from "@/components/details/InfoBar";
import { Description } from "@/components/details/Description";
import { Amenities } from "@/components/details/Amenities";
import { FloorPlan } from "@/components/details/FloorPlan";
import { LocationSection } from "@/components/details/LocationSection";
import { BookingCard } from "@/components/details/BookingCard";
import { SimilarProperties } from "@/components/details/SimilarProperties";
import { CTABlock } from "@/components/details/CTABlock";

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
