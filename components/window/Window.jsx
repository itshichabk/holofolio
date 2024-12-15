"use client";

import Image from "next/image";
import WindowButton from "./WindowButton";
import { useState } from "react";

export default function Window({ title, children }) {
  const [display, setDisplay] = useState(true);
  return (
    <>
    { display && 
    <div className="flex flex-col w-[400px] m-auto bg-[#282828] rounded-sm border-t border-[#414141] shadow-sm shadow-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="h-[50px] flex items-center border-b-2 border-holo">
            <Image src="/icons/droid.webp" alt="Window" width={40} height={40} className="mx-4"/>
            <div className="text-holo text-xl">{ title }</div>
        </div>
        <div className="px-6 py-4 grow text-lg">
            { children }
        </div>
        <div className="flex">
            <WindowButton label="OK" setDisplay={setDisplay}/>
        </div>
    </div> }
    </>
  )
}
