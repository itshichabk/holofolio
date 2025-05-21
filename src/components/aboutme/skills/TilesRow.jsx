import { skillsDB } from "@/src/utils/db";
import Tile from "./Tile";

export default async function TilesRow({collectionName}) {
  const skills = await skillsDB(collectionName);

  return (
    <div className="flex flex-wrap">
        {skills.map((skill, index) => <Tile skill={skill} key={index}/>)}
    </div>
  )
}
