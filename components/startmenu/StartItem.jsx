import Link from "next/link";
import Image from 'next/image'
export default function StartItem({ icon = "droid.webp", label, link, rounded = false, setShowStart }) {

  return (
    <Link href={link} onClick={() => setShowStart(false)}>
        <div className={"w-[128px] h-[128px] flex flex-col items-center justify-center border border-gray-800 hover:cursor-pointer active:bg-gray-800 hover:bg-gray-700 select-none"}>
            <Image src={"/icons/" + icon} alt={label} width={36} height={36} className={"mb-2" + (rounded ? " rounded-full" : "")}/> 
            {label}
        </div>
    </Link>
  )
}
