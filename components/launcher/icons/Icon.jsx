"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Icon({ icon, label, link, showLabel, onClick, className, hoverLabel = true }) {
  const [hover, setHover] = useState(false);

  const iconDiv = <div className="relative" onMouseEnter={() => {hoverLabel && setHover(true)}} onMouseLeave={() => {hoverLabel && setHover(false)}}>
                    { (hover) &&
                    <div className="hover:block hidden lg:block absolute -top-16 bg-neutral-900 py-1 px-2 mx-auto left-1/2 -translate-x-1/2 w-4/5 text-center shadow-sm shadow-black">
                      {label}
                    </div> }
                    <div className="flex flex-col items-center justify-center hover:cursor-pointer select-none" onClick={onClick}>
                      <Image src={"/icons/apps/" + icon} alt={label} width={52} height={52} className={"mb-2 drop-shadow-md " + className}/> 
                      {showLabel && <p className="text-sm drop-shadow-md">{label}</p>}
                    </div>
                  </div>;

  return link ? <Link href={"/" + link}>{iconDiv}</Link> : <>{iconDiv}</>;
}
