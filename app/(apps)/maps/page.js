import MapContainer from "@/src/components/maps/MapContainer";
import { travelPlacesDB } from "@/src/utils/db";

export default async function TravelMapsPage() {
  const places = await travelPlacesDB();

  return (
    <>
      <MapContainer places={places}/>
    </>
  )
}
