import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function LacLysterMarker() {
  return (
    <MapMarker position={[45.030, -71.918]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
