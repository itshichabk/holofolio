"use client";
import Icon from "../Icon";

export default function SettingsIcon({ showLabel, hoverLabel }) {
  return (
    <Icon icon="Settings.ico" label="Settings" link="aboutme" showLabel={showLabel} hoverLabel={hoverLabel}/>
  )
}
