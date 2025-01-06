import { skillsDB } from "@/src/utils/db";
import TilesRow from "./TilesRow";

export default async function SkillsRowSection({title, collectionName}) {
    const langs = await skillsDB(collectionName);
    return (
    <>
        <h2 className="mt-6 mb-2 text-holo font-bold text-2xl">{title}</h2>
        <TilesRow skills={langs}/>
    </>)
}
