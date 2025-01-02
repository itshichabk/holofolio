"use client";
import { usePathname } from "next/navigation"

export default function MainSection({children}) {
  const pathname = usePathname();

  return (
    <div className={"lg:flex-auto overflow-y-scroll lg:px-4 w-full lg:w-2/3 " + (pathname == "/aboutme" ? " hidden lg:block" : "")}>
        {children}
    </div>
  )
}
