"use client"

import { useEffect, useState } from "react"

export default function HelloWorldCode() {
  const helloWorld = <span className="font-bold text-holo text-xl leading-6">Hello world!</span>;

  // PHP, Python, C, JavaScript, C++, Java
  const lines = [
    <>echo("{helloWorld}");</>,
    <>print("{helloWorld}")</>,
    <>printf("{helloWorld}");</>,
    <>console.log("{helloWorld}");</>,
    <>std::cout {"<<"} "{helloWorld}";</>,
    <>System.out.println("{helloWorld}");</>,
    <>Console.WriteLine("{helloWorld}");</>
  ];

  const [line, setLine] = useState(5);

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
    <div className="mb-4 h-12 flex items-center justify-center">
      <p className="w-full text-center font-mono leading-">{lines[line]}</p>
    </div>
    
  )
}
