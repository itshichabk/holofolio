import PicturesGrid from "@/src/components/gallery/PicturesGrid";

export default function GalleryPage() {
  return (
    <div className="w-full m-4 mb-8">
      <p className="mx-1 italic my-2">A collection of pictures you can set as wallpapers, each representing a step in my tech journey.</p>
      <PicturesGrid/>
    </div>
  )
}
