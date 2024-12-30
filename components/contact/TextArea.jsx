export default function TextArea() {
  return (
    <div className="flex flex-col mb-4">
        <label htmlFor="message" className="text-neutral-200 text-sm">Your message</label>
        <textarea name="message" className='bg-transparent border border-neutral-700 border-b-holo w-full py-1 mt-1 focus:outline-none' rows={8} required/>
    </div>
  )
}
