import Image from "next/image";

export default function StatusBarIcon({icon, className}) {
  return (
    <img src={"/icons/statusbar/" + icon + ".png"} alt={icon} className={"h-[21px] " + className}/>
  )
}
