"use client";

import BackButton from "./BackButton";
import Clock from "./Clock";
import HomeButton from "./HomeButton";

export default function NavBar({ showStart, setShowStart }) {
  return (
    <div className="flex flex-col w-100 sticky bottom-0">
      <div className="h-[1px] bg-holo opacity-90"/>
      <div className="h-12  bg-black flex justify-between items-center overflow-hidden opacity-90 shadow-md">
        <div className="flex justify-between w-5/6 max-w-[300px] lg:max-w-[400px] mx-auto items-center h-full">
          <BackButton/>
          <HomeButton showStart={showStart} setShowStart={setShowStart}/>
          <div className="w-1/3"></div>
        </div>
        {/*<Clock/>*/}
	    </div>
    </div>
  )
}
