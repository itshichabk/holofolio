import React from 'react'
import SettingsIcon from './icons/SettingsIcon'

export default function LauncherHome() {
  let icons = []
  for(let i = 0; i < 16; i++)
    icons.push(<SettingsIcon key={i} showLabel/>)

  return (
    <div className='grid grid-cols-4 grid-rows-4 h-full items-center gap-2'>
        {icons.map((icon, i) => <>{icon}</>)}
    </div>
  )
}
