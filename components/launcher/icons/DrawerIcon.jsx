"use client";

import Icon from "./Icon";

export default function DrawerIcon({ showLabel }) {
  return (
    <Icon icon="Drawer.ico" label="Drawer" onClick={() => {alert("drawer")}} showLabel={showLabel}/>
  )
}
