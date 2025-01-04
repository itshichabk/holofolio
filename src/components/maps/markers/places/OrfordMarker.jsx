import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function OrfordMarker() {
  return (
    <MapMarker position={[45.317, -72.221]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
