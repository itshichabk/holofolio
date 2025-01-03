import Thumbnail from "./Thumbnail";

export default function PicturesGrid() {
  const images = [
    "ios7",
    "wonder",
    "win8",
    "holo",
    "cid",
    "win10tp",
    "s5",
    "ubuntu",
    "sierra",
    "longhorn",
  ]
  
  return (
    <div className="flex flex-wrap w-full">
      { images.map((img, index) => <Thumbnail name={img} key={index}/>) }
    </div>
  )
}
