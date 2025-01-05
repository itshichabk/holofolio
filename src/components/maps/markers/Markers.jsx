import MapMarker from "./MapMarker";
import MapPopup from "../MapPopup";

export default function Markers({places, setImgPopup, setSelectedImg}) {
  return (
    <>
      { places.map((place, index) => 
        <MapMarker position={place.position} key={index}>
          <MapPopup place={place} setImgPopup={setImgPopup} setSelectedImg={setSelectedImg}/>
        </MapMarker>)
      }    
    </>
  )
}
