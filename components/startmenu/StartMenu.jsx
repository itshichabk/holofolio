"use client";

import StartItem from "./StartItem";

export default function StartMenu() {
  return (
    <div className="border-collapse absolute bottom-5 left-4 w-[384px] flex flex-wrap justify-center content-start h-[480px] shadow-md bg-gradient-to-b from-black to-gray-900 opacity-90">
        <StartItem label="About me" width="1/3"/>
        <StartItem label="Projects" width="1/3"/>
        <StartItem label="Resume" width="1/3"/>
        <StartItem label="Blog" width="1/3"/>
        <StartItem label="Gallery" width="1/3"/>
        <StartItem label="Settings" width="1/3"/>
    </div>
  )
}
