"use client";

export default function FormInput({label, name, type}) {
  return (
    <div className="flex flex-col mb-6">
      <label htmlFor={name} className="text-neutral-200 text-sm">{label}</label>
      <input type={type} name={name} className='bg-transparent h-9 border-b border-holo w-full max-w-[400px] focus:outline-none' required/>
    </div>
  )
}
