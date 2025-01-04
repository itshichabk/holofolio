import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function AgadirMarker() {
  return (
    <MapMarker position={[30.429, -9.623]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
