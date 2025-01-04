import { Popup } from "react-leaflet";

export default function MapPopup({children}) {
  return (
    <Popup className="rounded-none">
        {children}
    </Popup>
  )
}
