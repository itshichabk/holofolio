"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./markers/Markers";

export default function Map() {
  return (
    <MapContainer className="w-full h-full" center={[33.703, -7.372]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers/>
    </MapContainer>
  )
}
