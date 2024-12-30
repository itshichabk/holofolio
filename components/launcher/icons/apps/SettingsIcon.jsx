"use client";
import Icon from "../Icon";

export default function SettingsIcon({ showLabel, hoverLabel }) {
  return (
    <Icon icon="Settings.ico" label="Settings" link="settings" showLabel={showLabel} hoverLabel={hoverLabel}/>
  )
}
