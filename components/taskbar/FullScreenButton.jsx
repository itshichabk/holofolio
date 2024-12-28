"use client";
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function FullScreenButton() {
  const [fullScreen, setFullScreen] = useState(false);
  //const elem = document.documentElement;

  const toggleFullScreen = () => {
    /*if(!fullScreen) {
        elem.requestFullscreen && elem.requestFullscreen();
    } else {
        (document.exitFullscreen && (window.innerHeight === screen.height)) && document.exitFullscreen();
    }

    setFullScreen(!fullScreen);*/
  }

  return (
    <button type="button" className='active:bg-gray-800 hover:bg-gray-700 w-1/3 flex justify-center h-full' onClick={toggleFullScreen}>
        <img src="/icons/fullscreen.png" alt="Full screen" className='mx-auto object-cover'/>
    </button>
  )
}
