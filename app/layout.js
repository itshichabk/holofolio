import { Roboto } from "next/font/google";
import "./globals.css";
import Taskbar from "@/components/taskbar/Taskbar";
import StartMenu from "@/components/startmenu/StartMenu";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Holofolio",
  description: "My portfolio website!",
};

export default function RootLayout({ children }) {
  return (
    <html className={roboto.className}>
      <body className="flex h-screen flex-col text-white">
        <div className="relative grow">
          {children}
          <StartMenu/>
        </div>
        <Taskbar/>
      </body>
    </html>
  );
}
