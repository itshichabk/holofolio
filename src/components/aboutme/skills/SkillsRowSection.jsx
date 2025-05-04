import { skillsDB } from "@/src/utils/db";
import TilesRow from "./TilesRow";
import SkillSectionTitle from "./SkillSectionTitle";

export default async function SkillsRowSection({title, collectionName}) {
    const langs = await skillsDB(collectionName);
    return (
    <>
        <SkillSectionTitle>{title}</SkillSectionTitle>
        <TilesRow skills={langs}/>
    </>)
}
