export default function TimelineYear({year, description, children}) {
  return (
    <div className="mt-9">
        <h1 className="text-center text-5xl text-holo font-bold font-mono">{year}</h1>
        <p className="text-center w-3/4 mx-auto font-bold text-neutral-300 italic mb-4 font-mono">{description}</p>
        {children}
    </div>
  )
}
