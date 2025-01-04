import MapPopup from "../MapPopup";
import MapMarker from "./MapMarker";

export default function LondonMarker() {
  return (
    <MapMarker position={[51.523, -0.114]}>
        <MapPopup>
            London <br/> July 2019
        </MapPopup>
    </MapMarker>
  )
}
