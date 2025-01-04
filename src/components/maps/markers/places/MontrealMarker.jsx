import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function MontrealMarker() {
  return (
    <MapMarker position={[45.503, -73.587]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
