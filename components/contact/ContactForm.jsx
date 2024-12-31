"use client";
import Form from 'next/form'
import FormInput from './FormInput';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

  async function handleSubmit(formData) {
    emailjs.send("service_l6cnw6o", "template_sy8tbrc", 
                {
                    "from_name": formData.get("name"),
                    "email": formData.get("email"),
                    "subject":   formData.get("subject"),
                    "message":  formData.get("message")
                }, 
                { publicKey: 'uCIP3Xe7ddrUnZErS' })
    .then(
      (response) => { console.log("YES"); },
      (error) => { console.log(error); },
    );
  }

  return (
    <Form className='my-6' action={handleSubmit}>
      <FormInput label="Your e-mail address" name="email" type="email"/>
      <FormInput label="Your name" name="name" type="text"/>
      <FormInput label="Subject" name="subject" type="text"/>
      <TextArea/>
      <SubmitButton/>
    </Form>
  )
}
