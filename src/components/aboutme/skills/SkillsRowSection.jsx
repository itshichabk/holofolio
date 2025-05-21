import TilesRow from "./TilesRow";
import SkillSectionTitle from "./SkillSectionTitle";

export default function SkillsRowSection({title, collectionName}) {

    return (
    <>
        <SkillSectionTitle>{title}</SkillSectionTitle>
        <TilesRow collectionName={collectionName}/>
    </>)
}
