import MapMarker from "./MapMarker";
import MapPopup from "../MapPopup";

export default function Markers({places}) {
  //const places = []//await travelPlacesDB();
  
  return (
    <>
      { places.map((place, index) => 
        <MapMarker position={place.position} key={index}>
          <MapPopup>{place.name}<br/>{place.description.en}</MapPopup>
        </MapMarker>)
      }    
    </>
  )
}
