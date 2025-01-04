import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function QuebecMarker() {
  return (
    <MapMarker position={[46.812, -71.205]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
