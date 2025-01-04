import MapPopup from "../MapPopup";
import MapMarker from "./MapMarker";

export default function ParisMarker() {
  return (
    <MapMarker position={[48.858, 2.294]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
