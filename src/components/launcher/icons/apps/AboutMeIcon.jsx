import Icon from "../Icon";
import {useTranslations} from 'next-intl';

export default function AboutMeIcon({ showLabel, hoverLabel }) {
  const t = useTranslations('Launcher');
  return (
    <Icon label={t("aboutme")} name="aboutme" showLabel={showLabel} className="rounded-full h-12 w-12" hoverLabel={hoverLabel}/>
  )
}
