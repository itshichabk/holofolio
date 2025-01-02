import { AboutMeIcon, BrowserIcon, CameraIcon, ContactIcon, SettingsIcon } from '@/src/components/launcher/icons/apps/Icons'

export default function Drawer() {
  return (
    <div className="bg-black h-full bg-opacity-75">
        <div className='grid grid-cols-4 px-4 md:px-0 md:grid-cols-5 grid-rows-4 h-full pb-12 lg:pb-24 items-center gap-2'>
            <AboutMeIcon  showLabel hoverLabel={false}/>
            <BrowserIcon  showLabel hoverLabel={false}/>
            <CameraIcon   showLabel hoverLabel={false}/>
            <ContactIcon  showLabel hoverLabel={false}/>
            <SettingsIcon showLabel hoverLabel={false}/>
        </div>
    </div>
  )
}
