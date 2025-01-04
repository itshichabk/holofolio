
"use client";

import dynamic from "next/dynamic";
const Map = dynamic(() => import('@/src/components/maps/Map'), {loading: () => <p>A map is loading</p>, ssr: false });

export default function TravelMapsPage() {
  return (
    <>
      <Map/>
    </>
  )
}
