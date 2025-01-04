import MapPopup from "../MapPopup";
import MapMarker from "./MapMarker";

export default function BruxellesMarker() {
  return (
    <MapMarker position={[50.846, 4.352]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
