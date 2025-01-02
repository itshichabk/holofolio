/* eslint react/no-unescaped-entities: 0 */
/* eslint react-hooks/exhaustive-deps: 0 */

"use client";

import SettingsRow from "@/src/components/aboutme/SettingsRow";
import { useEffect, useState } from "react";

export default function AboutMeSpecs() {
  const [uptime, setUptime] = useState("");

  const birthday = new Date("2003-11-13");

  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  function updateUptime() {
    const today = new Date();
    const uptime = Math.round((today - birthday) / 1000);

    const uptimeD = Math.floor(uptime / 86400);

    const uptimeH = checkTime(Math.floor((uptime % 86400) / 3600));
    const uptimeM = checkTime(Math.floor((uptime % 86400 % 3600) / 60));
    const uptimeS = checkTime((uptime % 86400 % 3600) % 60);

    setUptime(uptimeD + ":" + uptimeH + ":" + uptimeM + ":" + uptimeS);
  }

  useEffect(() => {
    updateUptime();
    const timeout = setInterval(updateUptime, 1000);
    return () => setInterval(timeout);
  }, []);

  return (
    <>
      <SettingsRow title="Name" value="Hicham Abekiri"/>
      <SettingsRow title="Birth date" value="2003/11/13"/>
      <SettingsRow title="Up time" value={uptime}/>
      <SettingsRow title="Birth place" value="Morocco"/>
      <SettingsRow title="Status" value="Student"/>
      <SettingsRow title="School" value="Cégep de Sherbrooke"/>
    </>
  );
}
