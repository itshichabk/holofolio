import Icon from "../Icon";

export default function ContactIcon({ showLabel, hoverLabel }) {
  return (
    <Icon icon="Email.ico" label="Contact me" link="contact" showLabel={showLabel} hoverLabel={hoverLabel}/>
  )
}
