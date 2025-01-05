import { Popup } from "react-leaflet";

export default function MapPopup({place, setImgPopup, setSelectedImg}) {
  const imgName = place.name.toLowerCase()
                            .trim()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .replace(/\s/g, "");

  const showImgPopup = () => {
    setImgPopup(true);
    setSelectedImg(imgName);
  }

  return (
    <Popup className="!font-sans !w-64 roboto">
        <img src={"/img/travel/" + imgName + ".jpg"} alt="No picture..." className="object-cover w-full max-h-32 mb-2 hover:cursor-zoom-in" onClick={showImgPopup}/>
        <h1 className="text-lg text-center">{place.name}</h1>
        <p className="!m-0 text-center">{place.description.en}</p>
    </Popup>
  )
}
