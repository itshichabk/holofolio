import Image from "next/image";

export default function AppLayout({ icon, title, translucent, children }) {
  return (
    <div className={"h-full bg-black flex flex-col" + (translucent ? " bg-opacity-70" : "")}>
      <div className="border-b border-t border-b-neutral-900 border-t-neutral-700 shadow-md h-14 flex items-center bg-neutral-800 px-3 sticky top-0 z-10">
        <Image
          src={"/icons/" + (icon ?  icon : "droid.webp")}
          alt={title}
          width={40}
          height={40}
          className="mr-2 text-lg"
        />
        <p>{ title }</p>
      </div>
      <div className="sm:mx-3 h-full flex flex-auto lg:mx-0 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}
