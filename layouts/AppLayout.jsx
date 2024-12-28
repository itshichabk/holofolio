import Image from "next/image";

export default function AppLayout({ icon, title, translucent, children }) {
  return (
    <div className={"h-full bg-black flex flex-col bg-opacity-70"}>
      <div className="border-b-2 border-t border-b-holo border-t-neutral-700 shadow-md h-[50px] flex items-center bg-black px-3 sticky top-0 z-10">
        <Image
          src={"/icons/" + (icon ?  icon : "droid.webp")}
          alt={title}
          width={36}
          height={36}
          className="mr-1"
        />
        <p>{ title }</p>
      </div>
      <div className="sm:mx-3 h-full flex flex-auto lg:mx-0 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}
