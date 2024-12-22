import Image from "next/image";

export default function AboutMeLayout({children}) {
  return (
        <div className="h-full bg-black bg-opacity-80 flex flex-col">
          <div className="border-b-2 border-holo h-12 flex items-center bg-black text-holo px-3 sticky top-0">
              <Image src={"/icons/droid.webp"} alt="Projects" width={32} height={32} className="mr-2"/> 
              <p>Projects</p>
          </div>
          <div className="grow my-2">
            {children}
          </div>
        </div>
  )
}
