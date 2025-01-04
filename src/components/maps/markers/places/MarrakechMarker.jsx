import MapPopup from "../../MapPopup";
import MapMarker from "../MapMarker";

export default function MarrakechMarker() {
  return (
    <MapMarker position={[31.625, -7.989]}>
        <MapPopup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </MapPopup>
    </MapMarker>
  )
}
