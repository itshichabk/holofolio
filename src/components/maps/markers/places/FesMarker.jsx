import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function FesMarker() {
  return (
    <MapMarker position={[34.018, -5.008]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
