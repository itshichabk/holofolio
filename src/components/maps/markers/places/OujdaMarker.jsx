import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function OujdaMarker() {
  return (
    <MapMarker position={[34.682, -1.90107]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
