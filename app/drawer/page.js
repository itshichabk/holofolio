import Icon from '@/src/components/launcher/icons/Icon';
import {useTranslations} from 'next-intl';

export default function Drawer() {
  const t = useTranslations('Launcher');
  const apps = ["aboutme", "browser", "camera", "contact", "settings"];
  apps.sort((a, b) => { return ((t(a).localeCompare(t(b)))) });

  return (
    <div className="bg-black h-full bg-opacity-75">
        <div className='grid grid-cols-4 px-4 md:px-0 md:grid-cols-5 grid-rows-4 h-full py-12 lg:pb-24 items-start gap-2'>
          { apps.map((app, index) => 
            <Icon key={index} label={t(app)} name={app} className="h-12 w-12" showLabel hoverLabel={false}/>)
          }
        </div>
    </div>
  )
}
