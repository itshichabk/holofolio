"use client";
import Form from 'next/form'

export default function ContactForm() {
  return (
    <Form>
        <input name='email' className='bg-transparent h-8 border-b border-holo w-full max-w-[400px]'/>
    </Form>
  )
}
