"use client";

export default function WindowButton({ setDisplay, label = "Button" }) {
  return (
    <div className="flex-1 border-t border-r border-[#424242] flex justify-center items-center h-12 select-none hover:cursor-pointer active:bg-gray-800 hover:bg-gray-700" onClick={() => { setDisplay(false) }}>
        {label}
    </div>
  )
}
