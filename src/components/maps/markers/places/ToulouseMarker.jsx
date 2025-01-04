import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function ToulouseMarker() {
  return (
    <MapMarker position={[43.604, 1.443]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
