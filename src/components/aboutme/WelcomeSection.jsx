"use client";

import Image from "next/image";
import HelloWorldCode from "../HelloWorldCode";
import SettingsRow from "./SettingsRow";
import { usePathname } from "next/navigation";
import Age from "./Age";

export default function WelcomeSection() {
  const pathname = usePathname();

  return (
    <div className={"lg:flex-auto overflow-y-scroll px-4 lg:min-w-[350px] lg:w-1/4 lg:bg-black bg-opacity-75" + (pathname != "/aboutme" ? " hidden lg:block" : "")}>
        <Image src="/img/hicham.jpeg" alt="Hicham" width={96} height={96} className="mt-12 mb-4 mx-auto rounded-full border-2 border-holo"/>
        <HelloWorldCode/>

        <SettingsRow link="/aboutme/timeline" title="My tech journey" value="My progress over the years"/>
        <SettingsRow link="/aboutme/projects" title="My projects"/>
        <SettingsRow link="/aboutme/hobbies" title="My hobbies" value="Tech and non-tech related"/>

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
  )
}
