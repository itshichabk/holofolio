"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./markers/Markers";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

export default function Map({places}) {
  const [imgPopup, setImgPopup] = useState(false);
  const [selectedImg, setSelectedImg] = useState();

  return (
    <div className="h-full w-full relative">
      {(imgPopup && selectedImg) && <ImagePopup img={selectedImg} setImgPopup={setImgPopup}/>}
      <MapContainer className="w-full h-full absolute top-0 left-0 z-0" center={[33.703, -7.372]} zoom={4} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers places={places} setImgPopup={setImgPopup} setSelectedImg={setSelectedImg}/>
      </MapContainer>
    </div>
  )
}
