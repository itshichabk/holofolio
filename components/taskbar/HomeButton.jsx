import Image from 'next/image'
import Link from 'next/link';

export default function HomeButton({ showStart, setShowStart }) {
  return (
    <Link href="/" className='active:bg-gray-800 hover:bg-gray-700 w-1/3 flex justify-center h-full'>
      <img src="/icons/home.png" alt="Home" className='mx-auto object-cover h-full'/>
    </Link>
  )
}
