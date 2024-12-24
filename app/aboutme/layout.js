'use client'

import HelloWorldCode from "@/components/HelloWorldCode";
import SettingsRow from "@/components/aboutme/SettingsRow";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function AboutMeLayout({children}) {
  const pathname = usePathname();

  return (
    <div className="h-full bg-black bg-opacity-80 flex flex-col">
      <div className="border-b border-holo shadow-md h-12 flex items-center bg-neutral-900 px-3 sticky top-0 z-10">
          <Image src={"/icons/profile.jpg"} alt="About me" width={36} height={36} className="rounded-full mr-1"/> 
          <p>About me</p>
      </div>
      <div className="sm:mx-3 h-full flex flex-auto lg:mx-0 overflow-hidden relative">
        <div className={"lg:flex-auto overflow-y-scroll px-4 lg:min-w-[350px] lg:w-1/4 lg:bg-black" + (pathname != "/aboutme" ? " hidden lg:block" : "")}>
          <Image src="/img/hicham.jpeg" alt="Hicham" width={96} height={96} className="mt-12 mb-4 mx-auto rounded-full border-2 border-holo"/>
          <HelloWorldCode/>

          <SettingsRow link="/aboutme/timeline" title="Timeline" value="My progress over the years"/>
          <SettingsRow link="/aboutme/specs" title="System information" value="More details"/>

          {/* Brief introduction */}
          <p className="my-6 lg:mx-2 text-justify">
            Repudiandae expedita est quo dolor ex provident a. Non ad ut quisquam
            temporibus amet. Velit qui soluta ut mollitia quia at sint. Quaerat
            numquam quia ipsa assumenda unde dolor nulla. Nostrum inventore
            officiis similique quia consectetur repudiandae. Et ut et voluptas. Et
            sint aliquam vero et neque reiciendis. Nobis impedit quisquam quisquam
            asperiores nisi molestias. Enim autem illum aut ex. Dolorem sint
            blanditiis inventore. Voluptatibus enim dolorem facere pariatur
            voluptatibus laborum in et. Cumque voluptatem mollitia dolore. Quasi
            aspernatur debitis tempora. Eaque excepturi fugiat eaque libero quis
            ut sit. Modi culpa et maxime. Ipsum exercitationem quibusdam magni.
            Voluptas quia iusto sint quia omnis et. Culpa autem porro beatae
            dolores. Maxime animi ut itaque fuga. Magnam voluptates omnis odit
            dolorem expedita maxime doloremque aut. Nisi molestiae consequuntur
            fugiat. Sed in et est. Repudiandae expedita est quo dolor ex provident
            a. Non ad ut quisquam temporibus amet. Velit qui soluta ut mollitia
            quia at sint. Quaerat numquam
          </p>
        </div>
        <div className={"lg:flex-auto overflow-y-scroll lg:px-4 lg:w-2/3 " + (pathname == "/aboutme" ? " hidden lg:block" : "")}>
          {children}
        </div>
      </div>
    </div>
  )
}
