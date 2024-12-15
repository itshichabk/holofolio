"use client";

import Clock from "./Clock";

export default function Taskbar() {
  return (
    <div className="flex flex-col w-100 h-[38px]">
      <div className="h-[2px] bg-holo"></div>
      <div className="h-[36px] bg-black flex items-center overflow-hidden opacity-90 shadow-sm px-2">
        <Clock/>
	    </div>
    </div>
  )
}
