import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function SaidiaMarker() {
  return (
    <MapMarker position={[35.088, -2.2598]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
