import Clock from "../taskbar/Clock";
import StatusBarIcon from "./StatusBarIcon";

export default function StatusBar() {
  return (
    <div className="h-8 flex items-center justify-end px-2 bg-black flex-shrink-0 flex-grow-0">
        <StatusBarIcon icon="wifi"/>
        <StatusBarIcon icon="network" className="mr-1"/>
        <StatusBarIcon icon="battery"/>
        <Clock/>
    </div>
  )
}
