import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function IfraneMarker() {
  return (
    <MapMarker position={[33.527, -5.116]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
