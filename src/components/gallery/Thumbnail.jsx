"use client"

import Link from "next/link"

export default function Thumbnail({ name }) {
  return (
    <Link href={"/gallery/" + name} className="h-[150px] md:h-[200px] w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-1">
        <img src={"/img/gallery/" + name + ".jpg"} alt={name} className="object-cover h-full w-full border border-holo"/>
    </Link>
  )
}
