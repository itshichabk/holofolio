'use client'

import HelloWorldCode from "@/components/HelloWorldCode";
import Age from "@/components/aboutme/Age";
import SettingsRow from "@/components/aboutme/SettingsRow";
import Image from "next/image";
import { usePathname } from 'next/navigation'

/* eslint react/no-unescaped-entities: 0 */

export default function AboutMeLayout({children}) {
  const pathname = usePathname();

  return (
    <div className="h-full bg-black bg-opacity-70 lg:bg-opacity-80 flex flex-col">
      <div className="border-b border-holo shadow-md h-12 flex items-center bg-neutral-900 px-3 sticky top-0 z-10">
          <Image src={"/icons/profile.jpg"} alt="About me" width={36} height={36} className="rounded-full mr-1"/> 
          <p>About me</p>
      </div>
      <div className="sm:mx-3 h-full flex flex-auto lg:mx-0 overflow-hidden relative">
        <div className={"lg:flex-auto overflow-y-scroll px-4 lg:min-w-[350px] lg:w-1/4 lg:bg-black" + (pathname != "/aboutme" ? " hidden lg:block" : "")}>
          <Image src="/img/hicham.jpeg" alt="Hicham" width={96} height={96} className="mt-12 mb-4 mx-auto rounded-full border-2 border-holo"/>
          <HelloWorldCode/>

          <SettingsRow link="/aboutme/timeline" title="My tech journey" value="My progress over the years"/>
          <SettingsRow link="/aboutme/skills" title="Skills"/>
          <SettingsRow link="/aboutme/hobbies" title="Hobbies" value="Tech and non-tech"/>
          <SettingsRow link="/aboutme/specs" title="System information" value="More details"/>

          <div className="my-6 lg:mx-2 text-justify">
            <p className="mb-2">
              Hi! I'm Hicham Abekiri, a <Age /> year old programmer, full-stack
              Web developer, and computer technician.
            </p>
            <p className="mb-2">
              Technology enthusiast since I was a kid, I have always
              loved troubleshooting and finding solutions to problems,
              especially if they're less obvious.
            </p>
            <p className="mb-2">
              I mainly master structured programming and OOP, relational
              databases, and full-stack Web development. I am also able to install, maintain
              and repair computers, and I have basic knowledge of networking.
            </p>
            <p className="mb-2">
              My goal is to further explore and gather new skills in software
              development, as well as discover other fields in computer science.
            </p>
          </div>
        </div>
        <div className={"lg:flex-auto overflow-y-scroll lg:px-4 w-full lg:w-2/3 " + (pathname == "/aboutme" ? " hidden lg:block" : "")}>
          {children}
        </div>
      </div>
    </div>
  )
}
