import Thumbnail from "./Thumbnail";
import wallpapers from "@/src/json/wallpapers.json";

export default function PicturesGrid() {
  const images = wallpapers.map((wp) => { return wp.name });
  /*const images = [
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
  */
  return (
    <div className="flex flex-wrap w-full">
      { images.map((img, index) => <Thumbnail name={img} key={index}/>) }
    </div>
  )
}
