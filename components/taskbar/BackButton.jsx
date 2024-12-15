"use client";
import Image from 'next/image'

export default function BackButton() {
  return (
    <button type="button" className='active:bg-gray-800 hover:bg-gray-700' onClick={() => history.back()}>
        <Image src="/icons/back.png" alt="Back" height={36} width={64}/>
    </button>
  )
}
