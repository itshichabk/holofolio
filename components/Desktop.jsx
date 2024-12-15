"use client";

import { useState } from "react";
import Taskbar from "@/components/taskbar/Taskbar";
import StartMenu from "@/components/startmenu/StartMenu";

export default function Desktop({children}) {
  const [showStart, setShowStart] = useState(false);

  return (
    <div className="flex h-screen flex-col text-white">
        <div className="relative grow">
          {children}
          {showStart && <StartMenu setShowStart={setShowStart}/>}
        </div>
        <Taskbar showStart={showStart} setShowStart={setShowStart}/>
    </div>
  )
}
