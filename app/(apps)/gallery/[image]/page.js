import GalleryImage from "@/src/components/gallery/GalleryImage";
import Button from "@/src/components/ui/Button";
import wallpapers from "@/src/json/wallpapers.json";

export function log(obj)
{
    "use client";
    console.log(obj);
}

export default async function GalleryImagePage({params}) {
  const imgParam = (await params).image;
  const img = wallpapers.find(wp => { return wp.name == imgParam });

  console.log(img.name)

  return (
    <div className="text-center m-8 w-full">
        <GalleryImage name={img.name}/>
        <h1 className="text-holo text-2xl font-bold">{img.title}</h1>
        <h2 className="text-neutral-200 text-sm mt-1 mb-4">Source: {img.source}</h2>
        <p className="mb-4">{img.description}</p>

        <Button className="mb-8">Set as wallpaper</Button>
    </div>
  )
}
