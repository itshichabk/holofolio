import Icon from "../Icon";

export default function AboutMeIcon({ showLabel, hoverLabel }) {
  return (
    <Icon label="About me" name="aboutme" showLabel={showLabel} className="rounded-full h-12 w-12" hoverLabel={hoverLabel}/>
  )
}
