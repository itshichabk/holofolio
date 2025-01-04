import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function ImouzzerMarker() {
  return (
    <MapMarker position={[30.677, -9.481]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
