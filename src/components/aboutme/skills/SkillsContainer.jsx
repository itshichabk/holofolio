"use client";

import { useState, createContext } from "react";
import Checkbox from "./Checkbox";
export const FilterContext = createContext({})

export default function SkillsContainer({children}) {
  const [filter, setFilter] = useState(false);

  return (
    <>
      <FilterContext.Provider value={filter}>
        <Checkbox setFilter={setFilter}/>
        {children}
      </FilterContext.Provider>
    </>
  )
}
