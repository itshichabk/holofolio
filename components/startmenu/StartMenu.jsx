"use client";
import StartItem from "./StartItem";

export default function StartMenu({ setShowStart }) {
  return (
    <div className="border-collapse fixed bottom-14 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 w-[384px] flex flex-wrap justify-center content-start h-[380px] shadow-md shadow-black bg-gradient-to-b from-black to-gray-900 opacity-90">
        <StartItem setShowStart={setShowStart} label="About me" link="aboutme" icon="profile.jpg" rounded />
        <StartItem setShowStart={setShowStart} label="Projects" link="projects"/>
        <StartItem setShowStart={setShowStart} label="Resume" link="aboutme"/>
        <StartItem setShowStart={setShowStart} label="Blog" link="aboutme"/>
        <StartItem setShowStart={setShowStart} label="Gallery" link="aboutme"/>
        <StartItem setShowStart={setShowStart} label="Settings" link="aboutme"/>
    </div>
  )
}
