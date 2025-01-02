import DrawerIcon from "./icons/DrawerIcon";
import AboutMeIcon from "./icons/apps/AboutMeIcon";
import BrowserIcon from "./icons/apps/BrowserIcon";
import CameraIcon from "./icons/apps/CameraIcon";
import ContactIcon from "./icons/apps/ContactIcon";
import SettingsIcon from "./icons/apps/SettingsIcon";

export default function Dock() {
  return (
    <div className="grid grid-cols-5 gap-2 items-center border-t-2 border-neutral-300 mx-4 mt-4 h-24 lg:w-[800px] lg:mx-auto">
      <AboutMeIcon/>
      <ContactIcon/>
      <DrawerIcon/>
      <BrowserIcon/>
      <CameraIcon/>
    </div>
  )
}
