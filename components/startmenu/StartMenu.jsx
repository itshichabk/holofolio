"use client";
import StartItem from "./StartItem";

export default function StartMenu({ setShowStart }) {
  return (
    <div className="border-collapse absolute bottom-5 left-4 w-[384px] flex flex-wrap justify-center content-start h-[380px] shadow-md shadow-black bg-gradient-to-b from-black to-gray-900 opacity-90">
        <StartItem setShowStart={setShowStart} label="About me" link="aboutme" icon="profile.jpg" rounded />
        <StartItem setShowStart={setShowStart} label="Projects" link="aboutme"/>
        <StartItem setShowStart={setShowStart} label="Resume" link="aboutme"/>
        <StartItem setShowStart={setShowStart} label="Blog" link="aboutme"/>
        <StartItem setShowStart={setShowStart} label="Gallery" link="aboutme"/>
        <StartItem setShowStart={setShowStart} label="Settings" link="aboutme"/>
    </div>
  )
}
