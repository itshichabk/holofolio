"use client"

import { useEffect, useState } from "react"

export default function HelloWorldCode() {

  // PHP, Python, C, JavaScript, C++, Java
  const lines = [
    <>echo("<span className="font-bold text-holo text-xl">Hello world!</span>");</>,
    <>print("<span className="font-bold text-holo text-xl">Hello world!</span>")</>,
    <>printf("<span className="font-bold text-holo text-xl">Hello world!</span>");</>,
    <>console.log("<span className="font-bold text-holo text-xl">Hello world!</span>");</>,
    <>std::cout {"<<"} "<span className="font-bold text-holo text-xl">Hello world!</span>";</>,
    <>System.out.println("<span className="font-bold text-holo text-xl">Hello world!</span>");</>
  ];

  const [line, setLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(line == lines.length - 1)
            setLine(0);
        else
            setLine(line => line + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [line])

  return (
    <div className="mb-4 md:mb-0 h-12 flex items-center justify-center">
      <p className="w-full text-center font-mono">{lines[line]}</p>
    </div>
    
  )
}
