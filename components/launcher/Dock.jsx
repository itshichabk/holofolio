import DrawerIcon from "./icons/DrawerIcon";
import SettingsIcon from "./icons/SettingsIcon";

export default function Dock() {
  return (
    <div className="grid grid-cols-5 gap-2 items-center border-t-2 border-neutral-300 mx-4 mt-4 h-24 lg:w-[800px] lg:mx-auto">
      <SettingsIcon/>
      <SettingsIcon/>
      <DrawerIcon/>
      <SettingsIcon/>
      <SettingsIcon/>
    </div>
  )
}
