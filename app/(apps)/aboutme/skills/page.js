//"use client";
import Databases from "@/src/components/aboutme/skills/sections/Databases";
import ProgrammingLanguages from "@/src/components/aboutme/skills/sections/ProgrammingLanguages";
import Servers from "@/src/components/aboutme/skills/sections/Servers";
import WebDevelopment from "@/src/components/aboutme/skills/sections/WebDevelopment";
import DevOps from "@/src/components/aboutme/skills/sections/DevOps";
import VirtualMachines from "@/src/components/aboutme/skills/sections/VirtualMachines";

import SkillsContainer from "@/src/components/aboutme/skills/SkillsContainer";
//import { useState } from "react";

export default function Skills() {

  //const [test, setTest] = useState();
  
    return (
      <div className="m-4">
        <h1 className="mt-8 mb-3 text-holo font-bold text-3xl">My skills</h1>
        <p>As a versatile person, I am constantly learning new skills and perfecting them. Below you will find a growing collection of the programming languages and technologies I am currently familiar with!</p>

        <SkillsContainer>
          <ProgrammingLanguages/>
          <Databases/>
          <WebDevelopment/>
          <Servers/>
          <DevOps/>
          <VirtualMachines/>
        </SkillsContainer>
      </div>
    )
  }
  