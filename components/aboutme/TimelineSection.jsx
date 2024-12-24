import Image from "next/image";

export default function TimelineSection({ img, title, children }) {
  return (
    <div className="p-4 mb-3 mt-3 lg:flex mx-2 lg:mx-0 lg:flex-row-reverse lg:items-center lg:gap-8 border-2 border-holo bg-neutral-900 bg-opacity-75">
        <img src={"/img/" + img} alt={title} className="mx-auto border-2 border-white w-[400px] h-[225px] object-cover lg:w-1/3"/>
        <div className="lg:w-2/3">
          <h1 className="text-holo font-bold text-2xl my-4 lg:mt-0 lg:grow">{title}</h1>
          <div className="text-justify">
              {children}
          </div>
        </div>
    </div>
  )
}
