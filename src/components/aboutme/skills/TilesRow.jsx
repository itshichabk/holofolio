import Tile from "./Tile";

export default function TilesRow({skills}) {
  return (
    <div className="flex flex-wrap">
        {skills.map((skill, index) => <Tile skill={skill} key={index}/>)}
    </div>
  )
}
