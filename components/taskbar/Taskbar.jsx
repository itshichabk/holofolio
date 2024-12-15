"use client";

import BackButton from "./BackButton";
import Clock from "./Clock";
import HomeButton from "./HomeButton";

export default function Taskbar({ showStart, setShowStart }) {
  return (
    <div className="flex flex-col w-100">
      <div className="h-[1px] bg-holo opacity-90"></div>
      <div className="h-[36px] bg-black flex justify-between items-center overflow-hidden opacity-90 shadow-sm pr-2">
        <div className="flex">
          <HomeButton showStart={showStart} setShowStart={setShowStart}/>
          <BackButton/>
        </div>
        <Clock/>
	    </div>
    </div>
  )
}
