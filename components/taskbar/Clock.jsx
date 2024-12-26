"use client";
import { useEffect, useState } from "react"

export default function Clock() {
  const [time, setTime] = useState("");

  function startTime() {
    const today = new Date();
    let h = checkTime(today.getHours());
    let m = checkTime(today.getMinutes());
    //let s = checkTime(today.getSeconds());

    setTime(h + ":" + m/* + ":" + s*/);
  }

  useEffect(() => {
    startTime();
    const timeout = setInterval(startTime, 1000);
    return () => setInterval(timeout);
  }, [])

  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  return (
    <div className="text-holo hover:cursor-default select-none text-lg font-extralight ml-2 mt-[1px]">{time}</div>
  )
}
