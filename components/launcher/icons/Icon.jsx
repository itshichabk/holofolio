import Image from "next/image";
import Link from "next/link";

export default function Icon({ icon, label, link, showLabel, onClick }) {
  const iconDiv = <div className="flex flex-col items-center justify-center hover:cursor-pointer select-none" onClick={onClick}>
                    <Image src={"/icons/apps/" + icon} alt={label} width={48} height={48} className="mb-2 drop-shadow-md"/> 
                    {showLabel && <p className="text-sm drop-shadow-md">{label}</p>}
                  </div>;

  return link ? <Link href={"/" + link}>{iconDiv}</Link> : <div>{iconDiv}</div>;
}
