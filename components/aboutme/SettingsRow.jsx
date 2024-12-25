import Link from "next/link";

export default function SettingsRow({ title, value, link }) {
  const row = (
    <div className={"border-b border-t border-gray-600 border-opacity-50" + (link ? " hover:cursor-pointer" : "")}>
      <div className="flex flex-col justify-center h-16 px-3 border-2 border-transparent active:border-holo active:bg-holo hover:bg-gray-800 active:bg-opacity-50 select-none">
          <h1 className={(link ? "text-white" : "text-gray-300") + " text-lg leading-7"}>{title}</h1>
          <p className="text-sm text-gray-300">{value}</p>
      </div>
    </div>)
    
  return link ? <Link href={link}>{row}</Link> : <>{row}</>
}
