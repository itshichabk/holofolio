"use client";
import Image from 'next/image'

export default function BackButton() {
  return (
    <button type="button" className='active:bg-gray-800 hover:bg-gray-700 w-1/3 flex justify-center h-full' onClick={() => history.back()}>
        <img src="/icons/back.png" alt="Back" className='mx-auto object-cover'/>
    </button>
  )
}
