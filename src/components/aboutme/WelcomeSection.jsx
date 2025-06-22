"use client";

import Image from "next/image";
import HelloWorldCode from "../HelloWorldCode";
import SettingsRow from "./SettingsRow";
import { usePathname } from "next/navigation";
import Age from "./Age";
import { useTranslations } from "next-intl";

export default function WelcomeSection() {
  const t = useTranslations('AboutMe');
  const pathname = usePathname();

  return (
    <div className={"lg:flex-auto overflow-y-scroll px-4 lg:min-w-[350px] lg:w-1/4 lg:bg-black bg-opacity-75" + (pathname != "/aboutme" ? " hidden lg:block" : "")}>
        <Image src="/img/hicham.jpeg" alt="Hicham" width={96} height={96} className="mt-12 mb-4 mx-auto rounded-full border-2 border-holo"/>
        <HelloWorldCode/>

        <SettingsRow link="/aboutme/timeline" title="My tech journey" value="My progress over the years"/>
        <SettingsRow link="/aboutme/skills" title="Skills"/>
        <SettingsRow link="/aboutme/hobbies" title="Hobbies" value="Tech and non-tech"/>
        <SettingsRow link="/aboutme/specs" title="System information" value="More details"/>

        <div className="my-6 lg:mx-2 text-justify">
            <p className="mb-2">
              {t("intro-1")} <Age /> {t("intro-2")}
            </p>
            <p className="mb-2">
              {t("intro-3")}
            </p>
            <p className="mb-2">
              {t("intro-4")}
            </p>
            <p className="mb-2">
              {t("intro-5")}
            </p>
        </div>
    </div>
  )
}
