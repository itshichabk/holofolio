"use client";

import { useEffect, useState } from "react";

export default function Age() {
  const [age, setAge] = useState(21);

  useEffect(() => {
    const birthday = new Date("2003-11-13");
    const today = new Date();
    const years = today.getFullYear() - birthday.getFullYear();

    if(today.getMonth() < birthday.getMonth() || (today.getMonth() == birthday.getMonth() && today.getDate() < today.getDate()))
        setAge(years - 1);
    else
        setAge(years);

  }, []);
  
  return (
    <span>{age}</span>
  )
}
