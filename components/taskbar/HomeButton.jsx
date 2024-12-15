"use client";
import Image from 'next/image'

export default function HomeButton({ showStart, setShowStart }) {
  return (
    <button type="button" className='active:bg-gray-800 hover:bg-gray-700' onClick={() => setShowStart(!showStart)}>
        <Image src="/icons/home.png" alt="Home" height={36} width={64}/>
    </button>
  )
}
