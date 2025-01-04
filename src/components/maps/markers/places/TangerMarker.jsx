import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function TangerMarker() {
  return (
    <MapMarker position={[35.757, -5.833]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
