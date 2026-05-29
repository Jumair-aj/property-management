import React from "react";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Owners } from "@/components/Owners";
import { Tenants } from "@/components/Tenants";
import { Metrics } from "@/components/Metrics";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Owners />
      <Tenants />
      <Metrics />
    </>
  );
}

