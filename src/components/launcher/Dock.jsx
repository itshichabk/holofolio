import Icon from "./icons/Icon";
import {useTranslations} from 'next-intl';

export default function Dock() {
  const t = useTranslations('Launcher');
  const icons = ["aboutme", "contact", "drawer", "browser", "camera"];

  return (
    <div className="grid grid-cols-5 gap-2 items-center border-t-2 border-neutral-300 mx-4 mt-4 h-24 lg:w-[800px] lg:mx-auto">
      { icons.map((icon, index) => 
        <Icon key={index} label={t(icon)} name={icon} className="h-12 w-12" showLabel={false} hoverLabel/>)
      }
    </div>
  )
}
