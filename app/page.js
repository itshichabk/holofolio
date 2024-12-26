"use client";
import Dock from "@/components/launcher/Dock";
import LauncherHome from "@/components/launcher/LauncherHome";
import Window from "@/components/window/Window";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-auto relative">
        
      </div>
      {/*<LauncherHome/>*/}
      <Dock/>
    </div>
  );
}
