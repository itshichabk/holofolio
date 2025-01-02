"use client";
import ClockWidget from "@/src/components/launcher/ClockWidget";
import Dock from "@/src/components/launcher/Dock";
import LauncherHome from "@/src/components/launcher/LauncherHome";
import Window from "@/src/components/window/Window";

export default function Home() {
  return (
    <div className="flex flex-col h-full shadow-[0px_-20px_100px_black_inset]">
      <div className="flex-auto relative">
          <ClockWidget/>
      </div>
      <Dock/>
    </div>
  );
}
