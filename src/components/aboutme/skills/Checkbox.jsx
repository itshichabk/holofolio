"use client";

import { useContext } from "react";
import { FilterContext } from "./SkillsContainer";

export default function Checkbox({setFilter}) {
  const filter = useContext(FilterContext);

  return (
    <div className="mt-4">
        <input type="checkbox" id="filter" name="filter" checked={filter} onChange={() => setFilter(!filter)} className="mr-2"/>
        <label htmlFor="filter">Highlight skills used to make this project possible!</label>
    </div>
  )
}
