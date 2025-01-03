export default function GalleryImage({name}) {
  return (
    <img src={"/img/gallery/" + name + ".jpg"} alt={name} className=" max-h-96 mx-auto object-cover border border-holo shadow-md mb-5 shadow-holo lg:mt-5"/>
  )
}
