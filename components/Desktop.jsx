"use client";

import { useState } from "react";
import NavBar from "@/components/taskbar/NavBar";
import StartMenu from "@/components/startmenu/StartMenu";
import StatusBar from "./statusbar/StatusBar";

export default function Desktop({children}) {
  const [showStart, setShowStart] = useState(false);

  return (
    <div className="flex h-screen flex-col text-white relative">
        {/*<StatusBar/>*/}
        <div className="relative flex-auto overflow-y-auto">
          {children}
          {showStart && <StartMenu setShowStart={setShowStart}/>}
        </div>
        <NavBar showStart={showStart} setShowStart={setShowStart}/>
    </div>
  )
}
