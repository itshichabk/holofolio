export default function StartItem({ icon, label, link, width }) {

    const w = width == "1/3" ? "128" : "192";

  return (
    <div className={"w-[" + w + "px] h-[128px] flex flex-col items-center justify-center border border-gray-800 hover:cursor-pointer hover:bg-gray-700"}>
        {label}
    </div>
  )
}
