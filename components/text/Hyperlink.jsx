export default function Hyperlink({href, children, onClick}) {
  return (
    <a className="text-holo underline" onClick={onClick} target="#" href={href}>{children}</a>
  )
}
