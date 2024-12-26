"use client";
import { useEffect, useState } from "react"

export default function ClockWidget() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState();

    const today = new Date();
    
    const options =  { 
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric' 
    };
    
    function startTime() {    
        let h = checkTime(today.getHours());
        let m = checkTime(today.getMinutes());
        //let s = checkTime(today.getSeconds());

        setTime(h + ":" + m/* + ":" + s*/);
    }


    useEffect(() => {
        setDate(today.toLocaleDateString("en-US", options));
        startTime();
        const timeout = setInterval(startTime, 1000);
        return () => setInterval(timeout);
    }, [])

    function checkTime(i) {
        return i < 10 ? "0" + i : i;
    }

    return (
        <div className="select-none absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/4">
            <div className="clock-widget text-8xl lg:text-9xl">{time}</div>
            <p className="font-bold text-center opacity-80 -translate-y-5 lg:-translate-y-8 lg:text-lg">{date}</p>
        </div>
    )
}
