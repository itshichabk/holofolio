import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { Marker } from "react-leaflet";

export default function MapMarker({position, children}) {
  return (
    <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        {children}
    </Marker>
  )
}
