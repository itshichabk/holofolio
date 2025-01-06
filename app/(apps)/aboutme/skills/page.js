import Databases from "@/src/components/aboutme/skills/sections/Databases";
import ProgrammingLanguages from "@/src/components/aboutme/skills/sections/ProgrammingLanguages";
import Servers from "@/src/components/aboutme/skills/sections/Servers";
import WebDevelopment from "@/src/components/aboutme/skills/sections/WebDevelopment";

export default function Skills() {
    return (
      <div className="m-4">
        <h1 className="mt-8 mb-3 text-holo font-bold text-3xl">My skills</h1>
        <p>As a versatile person, I am constantly learning new skills and perfecting them. Below you will find a growing collection of the programming languages and technologies I am currently familiar with!</p>
      
        <ProgrammingLanguages/>
        <Databases/>
        <WebDevelopment/>
        <Servers/>
      </div>
    )
  }
  