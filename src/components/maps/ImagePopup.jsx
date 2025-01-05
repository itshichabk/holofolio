export default function ImagePopup({img, setImgPopup}) {
  return (
    <div className="bg-black bg-opacity-60 h-full w-full absolute top-0 left-0 z-10">
        <div className="rounded-sm absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[300px]">
            <button className="absolute -top-4 -right-4 bg-white rounded-full h-9 w-9 shadow-sm" onClick={() => setImgPopup(false)}>
                <img src="/icons/close.png" alt="X" className="h-5 w-5 m-auto"/>
            </button>
            <img src={"/img/travel/" + img + ".jpg"} alt={img} className="max-h-[600px] shadow-xl"/>
        </div>
    </div>
  )
}
