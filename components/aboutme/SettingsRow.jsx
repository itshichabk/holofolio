"use client";
import { redirect } from "next/navigation"

export default function SettingsRow({ title, value, link }) {

  return (
    <div onClick={link ? () => {redirect(link)} : null} className={"border-b border-t border-neutral-600 border-opacity-50" + (link ? " hover:cursor-pointer" : "")}>
      <div className="flex flex-col justify-center h-16 px-3 border-2 border-transparent active:border-holo active:bg-holo hover:bg-neutral-800 active:bg-opacity-50 select-none">
          <h1 className={(link ? "text-white" : "text-neutral-300") + " text-lg leading-7"}>{title}</h1>
          <p className="text-sm text-neutral-300">{value}</p>
      </div>
    </div>
  )
}
