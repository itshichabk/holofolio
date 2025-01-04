import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function NadorMarker() {
  return (
    <MapMarker position={[35.175, -2.9347]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
