import Image from "next/image";

export default function Tile({skill}) {
  return (
    <div className="h-32 w-1/3 sm:w-1/4 md:w-1/5 lg:w-32 p-1">
        <div className="flex flex-col items-center justify-center text-center border-2 border-holo border-opacity-50 bg-black bg-opacity-50 w-full h-full">
            <div className="h-10 w-10 flex items-center justify-center flex-col">
                <Image src={"/icons/skills/" + skill.internal_name + ".png"} width={40} height={40} alt={skill.name} className="object-cover my-auto"/>
            </div>
            <p className="leading-none mt-3">{skill.name}</p>
        </div>
    </div>
  )
}
