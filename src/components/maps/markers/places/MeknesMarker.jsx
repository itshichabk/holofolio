import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function MeknesMarker() {
  return (
    <MapMarker position={[33.866, -5.539]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
